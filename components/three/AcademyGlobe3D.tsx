'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface AcademyGlobe3DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'background';
}

export default function AcademyGlobe3D({ className = '', size = 'hero' }: AcademyGlobe3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let isDisposed = false;

    // Dimensions
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    
    // Camera settings
    const fov = size === 'sm' ? 42 : 36;
    const cameraZ = size === 'sm' ? 4.8 : 4.2;

    const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 50);
    camera.position.set(0, 0, cameraZ);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    } catch {
      return;
    }

    // Soft Physical Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf8fafc, 0.9);
    keyLight.position.set(4, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.4);
    fillLight.position.set(-4, -3, -3);
    scene.add(fillLight);

    // Emblem Group
    const group = new THREE.Group();
    scene.add(group);

    // Academy Materials: Deep Navy, Controlled Forest Green, Logo Terracotta Red, Antique Brass
    const navyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0A192F'),
      roughness: 0.35,
      metalness: 0.25,
      transparent: true,
      opacity: 0.65,
    });

    const greenMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#15803D'),
      roughness: 0.35,
      metalness: 0.25,
      transparent: true,
      opacity: 0.6,
    });

    const redMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#C81D25'),
      roughness: 0.35,
      metalness: 0.2,
      transparent: true,
      opacity: 0.55,
    });

    const brassMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#B39255'),
      roughness: 0.28,
      metalness: 0.6,
      transparent: true,
      opacity: 0.7,
    });

    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F4EFEA'),
      roughness: 0.6,
      metalness: 0.1,
      transparent: true,
      opacity: 0.3,
    });

    // Central Sphere
    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Armillary Brass Ring (Equatorial)
    const eqRingGeo = new THREE.TorusGeometry(1.18, 0.016, 16, 64);
    const eqRing = new THREE.Mesh(eqRingGeo, brassMat);
    eqRing.rotation.x = Math.PI / 2;
    group.add(eqRing);

    // Navy Meridian Ring
    const navyRingGeo = new THREE.TorusGeometry(1.32, 0.018, 16, 64);
    const navyRing = new THREE.Mesh(navyRingGeo, navyMat);
    const navyGroup = new THREE.Group();
    navyGroup.add(navyRing);
    group.add(navyGroup);

    // Green Incline Ring
    const greenRingGeo = new THREE.TorusGeometry(1.45, 0.018, 16, 64);
    const greenRing = new THREE.Mesh(greenRingGeo, greenMat);
    const greenGroup = new THREE.Group();
    greenGroup.rotation.set(Math.PI / 4, Math.PI / 6, 0);
    greenGroup.add(greenRing);
    group.add(greenGroup);

    // Red Accent Arc
    const redArcGeo = new THREE.TorusGeometry(1.58, 0.018, 16, 48, Math.PI * 1.3);
    const redArc = new THREE.Mesh(redArcGeo, redMat);
    const redGroup = new THREE.Group();
    redGroup.rotation.set(-Math.PI / 3, Math.PI / 4, 0);
    redGroup.add(redArc);
    group.add(redGroup);

    // Small brass nodes representing scholarship coordinates
    const nodeGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const node1 = new THREE.Mesh(nodeGeo, brassMat);
    node1.position.set(1.18, 0, 0);
    group.add(node1);

    const node2 = new THREE.Mesh(nodeGeo, greenMat);
    node2.position.set(-1.02, 1.02, 0);
    group.add(node2);

    // Subtle pointer interaction
    let targetRotX = 0.1;
    let targetRotY = 0;
    let currRotX = 0.1;
    let currRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetRotX = 0.1 + (e.clientY / innerHeight - 0.5) * 0.25;
      targetRotY = (e.clientX / innerWidth - 0.5) * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    let lastTime = performance.now();
    const animate = (time: number) => {
      if (isDisposed) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      currRotX = THREE.MathUtils.lerp(currRotX, targetRotX, 0.04);
      currRotY = THREE.MathUtils.lerp(currRotY, targetRotY, 0.04);

      group.rotation.x = currRotX;
      group.rotation.y += delta * 0.18; // Very slow, majestic rotation

      navyGroup.rotation.y += delta * 0.08;
      greenGroup.rotation.x += delta * 0.1;
      redGroup.rotation.z += delta * 0.06;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      [coreGeo, eqRingGeo, navyRingGeo, greenRingGeo, redArcGeo, nodeGeo].forEach(g => g.dispose());
      [navyMat, greenMat, redMat, brassMat, coreMat].forEach(m => m.dispose());

      renderer.dispose();
    };
  }, [size]);

  return (
    <div ref={containerRef} className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  );
}
