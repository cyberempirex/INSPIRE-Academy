'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface InspireBrandSculptureProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export default function InspireBrandSculpture({
  className = '',
  size = 'md',
  interactive = true,
}: InspireBrandSculptureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLFailed, setWebGLFailed] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let isDisposed = false;

    // Detect WebGL support
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      const timer = setTimeout(() => setWebGLFailed(true), 0);
      return () => clearTimeout(timer);
    }

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.2);

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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
    } catch {
      const timer = setTimeout(() => setWebGLFailed(true), 0);
      return () => clearTimeout(timer);
    }

    // -------------------------------------------------------------
    // 3D INSPIRE SCULPTURE GEOMETRY (Deep Blue + Academy Blue + Green/Red)
    // -------------------------------------------------------------
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    const radius = size === 'sm' ? 0.85 : size === 'lg' ? 1.25 : 1.05;

    // 1. Central Deep Institutional Blue (#123B63) Core Sphere
    const sphereGeo = new THREE.SphereGeometry(radius, 48, 48);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#123B63'),
      roughness: 0.35,
      metalness: 0.15,
      clearcoat: 0.25,
      clearcoatRoughness: 0.2,
      transparent: true,
      opacity: 0.9,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    sculptureGroup.add(coreSphere);

    // 2. Fine Academy Blue & Cool Grey Orbital Latitudes
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#1E5A8A'),
      transparent: true,
      opacity: 0.25,
      linewidth: 1,
    });

    const numLatitudes = 5;
    for (let i = 1; i < numLatitudes; i++) {
      const phi = (Math.PI / numLatitudes) * i;
      const r = radius * Math.sin(phi) * 1.01;
      const y = radius * Math.cos(phi) * 1.01;

      const circleGeo = new THREE.BufferGeometry();
      const points = [];
      const segments = 48;
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)));
      }
      circleGeo.setFromPoints(points);
      const latLine = new THREE.Line(circleGeo, lineMat);
      sculptureGroup.add(latLine);
    }

    // 3. Equatorial Academy Blue Ring
    const eqGeo = new THREE.BufferGeometry();
    const eqPoints = [];
    for (let j = 0; j <= 64; j++) {
      const theta = (j / 64) * Math.PI * 2;
      eqPoints.push(new THREE.Vector3(radius * 1.015 * Math.cos(theta), 0, radius * 1.015 * Math.sin(theta)));
    }
    eqGeo.setFromPoints(eqPoints);
    const eqLineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#1E5A8A'),
      transparent: true,
      opacity: 0.4,
    });
    const eqLine = new THREE.Line(eqGeo, eqLineMat);
    sculptureGroup.add(eqLine);

    // 4. Upward Aspiring Green Ribbon Arc (#178653 - Academy Green)
    const greenPoints: THREE.Vector3[] = [];
    const ribbonSegments = 36;
    for (let i = 0; i <= ribbonSegments; i++) {
      const t = i / ribbonSegments;
      const angle = -Math.PI * 0.4 + t * Math.PI * 1.25;
      const elevation = -0.55 + t * 1.25;
      const ribbonR = radius * (1.05 + 0.08 * Math.sin(t * Math.PI));
      const x = ribbonR * Math.cos(angle);
      const z = ribbonR * Math.sin(angle);
      const y = elevation * radius;
      greenPoints.push(new THREE.Vector3(x, y, z));
    }
    const greenCurve = new THREE.CatmullRomCurve3(greenPoints);
    const greenTubeGeo = new THREE.TubeGeometry(greenCurve, 48, 0.03, 10, false);
    const greenTubeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#178653'),
      roughness: 0.3,
      metalness: 0.2,
      emissive: new THREE.Color('#0D4B2D'),
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.9,
    });
    const greenRibbon = new THREE.Mesh(greenTubeGeo, greenTubeMat);
    sculptureGroup.add(greenRibbon);

    // 5. Signature Brand Red Dynamic Ribbon Arc (#C9252D - Brand Red Accent)
    const redPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= ribbonSegments; i++) {
      const t = i / ribbonSegments;
      const angle = Math.PI * 0.25 + t * Math.PI * 1.15;
      const elevation = -0.6 + t * 1.35;
      const ribbonR = radius * (1.08 + 0.09 * Math.sin(t * Math.PI));
      const x = ribbonR * Math.cos(angle);
      const z = ribbonR * Math.sin(angle);
      const y = elevation * radius;
      redPoints.push(new THREE.Vector3(x, y, z));
    }
    const redCurve = new THREE.CatmullRomCurve3(redPoints);
    const redTubeGeo = new THREE.TubeGeometry(redCurve, 48, 0.032, 10, false);
    const redTubeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#C9252D'),
      roughness: 0.3,
      metalness: 0.2,
      emissive: new THREE.Color('#7A0B10'),
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.9,
    });
    const redRibbon = new THREE.Mesh(redTubeGeo, redTubeMat);
    sculptureGroup.add(redRibbon);

    // 6. Subtle Foundation Horizon Arc (#E8EDF1 Cool Grey)
    const baseArcGeo = new THREE.TorusGeometry(radius * 1.15, 0.015, 8, 36, Math.PI * 0.9);
    const baseArcMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E8EDF1'),
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.5,
    });
    const baseArc = new THREE.Mesh(baseArcGeo, baseArcMat);
    baseArc.rotation.x = Math.PI * 0.55;
    baseArc.position.y = -radius * 0.35;
    sculptureGroup.add(baseArc);

    // -------------------------------------------------------------
    // STUDIO LIGHTING
    // -------------------------------------------------------------
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.8);
    fillLight.position.set(-4, -2, -2);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0x123B63, 0.7);
    scene.add(ambientLight);

    // -------------------------------------------------------------
    // SMOOTH ROTATION & MOUSE INTERACTION
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.6;
      targetY = y * 0.4;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Default tilt
    sculptureGroup.rotation.x = 0.22;
    sculptureGroup.rotation.z = -0.12;

    const clock = new THREE.Clock();

    // Render loop
    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation
      sculptureGroup.rotation.y = elapsedTime * 0.22;

      // Mouse response lerping
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      sculptureGroup.rotation.x = 0.22 + mouseY;
      sculptureGroup.rotation.z = -0.12 + mouseX * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0 && renderer && camera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      
      // Geometry and materials disposal
      sphereGeo.dispose();
      sphereMat.dispose();
      lineMat.dispose();
      eqGeo.dispose();
      eqLineMat.dispose();
      greenTubeGeo.dispose();
      greenTubeMat.dispose();
      redTubeGeo.dispose();
      redTubeMat.dispose();
      baseArcGeo.dispose();
      baseArcMat.dispose();
      renderer.dispose();
    };
  }, [size, interactive]);

  if (webGLFailed) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* SVG Fallback */}
        <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-br from-[#123B63] to-[#1E5A8A] flex items-center justify-center p-6 border border-[#E8EDF1]/20 shadow-lg">
          <div className="w-full h-full border border-white/20 rounded-full relative animate-pulse flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#178653]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}
