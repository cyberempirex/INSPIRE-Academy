'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Sun, RotateCw, MapPin, Eye, Sparkles } from 'lucide-react';

interface RealisticAcademicGlobeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  initialLightIntensity?: number;
  showControls?: boolean;
}

export default function RealisticAcademicGlobe({
  className = '',
  size = 'md',
  initialLightIntensity = 2.2,
  showControls = true,
}: RealisticAcademicGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // User interactive state for light intensity and globe options
  const [lightIntensity, setLightIntensity] = useState<number>(initialLightIntensity);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<'noon' | 'day' | 'golden' | 'night'>('day');
  const [showAtmosphere, setShowAtmosphere] = useState<boolean>(true);

  // References for mutable animation variables
  const lightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);
  const atmosphereMeshRef = useRef<THREE.Mesh | null>(null);
  const isInteractingRef = useRef<boolean>(false);
  const isRotatingRef = useRef<boolean>(true);

  // Sync rotating state to ref
  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Update light intensity on change
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.intensity = lightIntensity;
    }
    if (ambientLightRef.current) {
      // Scale ambient with intensity for realistic daylight balance
      ambientLightRef.current.intensity = Math.max(0.2, lightIntensity * 0.35);
    }
  }, [lightIntensity]);

  useEffect(() => {
    if (atmosphereMeshRef.current) {
      atmosphereMeshRef.current.visible = showAtmosphere;
    }
  }, [showAtmosphere]);

  // Main Three.js Realistic Globe Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let animationFrameId: number;
    let isDisposed = false;

    // Dimensions
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.4);

    // High performance WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
    } catch {
      return;
    }

    // -------------------------------------------------------------
    // PROCEDURAL REALISTIC EARTH TEXTURES VIA CANVAS
    // High-resolution equirectangular texture with continents,
    // oceans, mountain shades, vegetation, rivers & graticules
    // -------------------------------------------------------------
    const createEarthTexture = (): {
      diffuseTexture: THREE.CanvasTexture;
      specularTexture: THREE.CanvasTexture;
      bumpTexture: THREE.CanvasTexture;
      cloudsTexture: THREE.CanvasTexture;
    } => {
      const texWidth = 2048;
      const texHeight = 1024;

      // 1. Diffuse Earth Texture Canvas
      const diffuseCanvas = document.createElement('canvas');
      diffuseCanvas.width = texWidth;
      diffuseCanvas.height = texHeight;
      const ctx = diffuseCanvas.getContext('2d')!;

      // Deep Realistic Ocean Gradient (Dark blue to turquoise shoals)
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, texHeight);
      oceanGrad.addColorStop(0.0, '#0c2340'); // Polar ocean
      oceanGrad.addColorStop(0.2, '#0f3156'); // Northern deep ocean
      oceanGrad.addColorStop(0.5, '#134074'); // Equatorial vibrant ocean
      oceanGrad.addColorStop(0.8, '#0f3156'); // Southern deep ocean
      oceanGrad.addColorStop(1.0, '#0c2340'); // Antarctic ocean
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, texWidth, texHeight);

      // 2. Specular Map Canvas (White = Shiny Oceans, Black = Land)
      const specCanvas = document.createElement('canvas');
      specCanvas.width = texWidth;
      specCanvas.height = texHeight;
      const specCtx = specCanvas.getContext('2d')!;
      specCtx.fillStyle = '#ffffff'; // Ocean is specular reflective
      specCtx.fillRect(0, 0, texWidth, texHeight);

      // Helper to project lat/long degrees to canvas pixels
      const toXY = (lat: number, lon: number): [number, number] => {
        const x = ((lon + 180) / 360) * texWidth;
        const y = ((90 - lat) / 180) * texHeight;
        return [x, y];
      };

      // Draw Landmasses (Detailed polygons representing Earth's continents)
      const drawContinent = (
        points: Array<[number, number]>,
        fillColor: string,
        strokeColor = '#1e3a29'
      ) => {
        ctx.beginPath();
        specCtx.beginPath();
        points.forEach(([lat, lon], idx) => {
          const [x, y] = toXY(lat, lon);
          if (idx === 0) {
            ctx.moveTo(x, y);
            specCtx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
            specCtx.lineTo(x, y);
          }
        });
        ctx.closePath();
        specCtx.closePath();

        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Land is non-specular in specular map (black/dark grey)
        specCtx.fillStyle = '#111111';
        specCtx.fill();
        specCtx.strokeStyle = '#222222';
        specCtx.lineWidth = 2;
        specCtx.stroke();
      };

      // --- ASIA & INDIAN SUBCONTINENT (Carefully detailed) ---
      drawContinent(
        [
          [75, 60], [70, 90], [72, 130], [60, 165], [45, 145], [35, 128], [22, 120],
          [10, 105], [1, 104], [8, 98], [15, 95], [22, 92], [26, 91], // Assam/Brahmaputra region
          [21, 87], [13, 80], [8, 77], [18, 73], [24, 68], [25, 60], [30, 48],
          [40, 40], [50, 45], [60, 50], [70, 55],
        ],
        '#2d5a3d' // Forest green
      );

      // Indian Subcontinent internal detail & Himalayan ridge
      drawContinent(
        [
          [35, 74], [30, 80], [28, 88], [26.8, 91.5], [24, 94], [22, 89], [18, 84],
          [13, 80], [8.5, 77.5], [12, 75], [19, 73], [25, 70], [30, 70], [35, 74],
        ],
        '#3a6b48',
        '#1d4629'
      );

      // Himalayan Elevation Highlight (Warm ochre / snow peaks)
      ctx.beginPath();
      const [hX1, hY1] = toXY(33, 75);
      const [hX2, hY2] = toXY(27.5, 92);
      ctx.moveTo(hX1, hY1);
      ctx.lineTo(hX2, hY2);
      ctx.strokeStyle = '#e2dfd2'; // Mountain ridge
      ctx.lineWidth = 5;
      ctx.stroke();

      // --- EUROPE ---
      drawContinent(
        [
          [70, 25], [60, 30], [55, 40], [45, 35], [36, 28], [36, -5], [44, -9],
          [48, -4], [58, 5], [65, 15],
        ],
        '#3b6b47'
      );

      // --- AFRICA ---
      drawContinent(
        [
          [35, -5], [37, 10], [32, 32], [12, 44], [12, 51], [5, 48], [-12, 40],
          [-26, 33], [-34, 18], [-22, 14], [-5, 9], [4, 9], [5, -4], [15, -17],
          [28, -13], [35, -5],
        ],
        '#8c734b', // Sahara ochre / Savanna
        '#524125'
      );

      // --- NORTH AMERICA ---
      drawContinent(
        [
          [70, -160], [72, -130], [60, -90], [55, -60], [45, -65], [30, -80],
          [25, -80], [20, -97], [15, -92], [9, -79], [18, -104], [32, -117],
          [48, -125], [60, -145],
        ],
        '#365e3e'
      );

      // --- SOUTH AMERICA ---
      drawContinent(
        [
          [12, -75], [8, -60], [-5, -35], [-23, -42], [-35, -55], [-55, -68],
          [-50, -75], [-20, -70], [-5, -80], [5, -78],
        ],
        '#2b5c39'
      );

      // --- AUSTRALIA ---
      drawContinent(
        [
          [-12, 130], [-15, 145], [-25, 152], [-38, 145], [-35, 115], [-22, 114],
          [-15, 125],
        ],
        '#9e7b4a'
      );

      // --- ANTARCTICA (Snow/Ice white caps) ---
      drawContinent(
        [
          [-65, -180], [-68, -120], [-65, -60], [-68, 0], [-65, 60], [-70, 120],
          [-65, 180], [-90, 180], [-90, -180],
        ],
        '#f8fafc',
        '#cbd5e1'
      );
      // North Polar Ice
      drawContinent(
        [
          [80, -180], [82, -90], [80, 0], [82, 90], [80, 180], [90, 180], [90, -180],
        ],
        '#f8fafc',
        '#cbd5e1'
      );

      // Coordinate Graticules (Equator, Tropics, Latitude & Longitude)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      // Latitudes
      [-60, -30, 0, 23.5, 30, 60].forEach((lat) => {
        const y = ((90 - lat) / 180) * texHeight;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(texWidth, y);
        ctx.stroke();
      });
      // Longitudes
      for (let lon = -180; lon < 180; lon += 30) {
        const x = ((lon + 180) / 360) * texWidth;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, texHeight);
        ctx.stroke();
      }

      // Highlight Tropic of Cancer (23.5 N) & Assam Meridian (91.3 E)
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)'; // Amber golden coordinate
      ctx.lineWidth = 1.5;
      const [tropicY] = toXY(23.5, 0);
      ctx.beginPath();
      ctx.moveTo(0, tropicY);
      ctx.lineTo(texWidth, tropicY);
      ctx.stroke();

      // Highlighted glowing focal point for Inspire Academy, Simla, Baksa, Assam (26.8° N, 91.3° E)
      const [assamX, assamY] = toXY(26.8, 91.3);
      ctx.fillStyle = '#C81D25'; // Terracotta Red Academy pin
      ctx.beginPath();
      ctx.arc(assamX, assamY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Glowing outer ring for Assam pin
      ctx.strokeStyle = '#86EFAC';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(assamX, assamY, 14, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Clouds Texture Canvas
      const cloudCanvas = document.createElement('canvas');
      cloudCanvas.width = 1024;
      cloudCanvas.height = 512;
      const cloudCtx = cloudCanvas.getContext('2d')!;
      cloudCtx.clearRect(0, 0, 1024, 512);

      // Draw subtle organic cloud swirls
      cloudCtx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      for (let i = 0; i < 90; i++) {
        const cx = Math.random() * 1024;
        const cy = 60 + Math.random() * 380;
        const r = 25 + Math.random() * 65;
        const grad = cloudCtx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        grad.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        cloudCtx.fillStyle = grad;
        cloudCtx.beginPath();
        cloudCtx.ellipse(cx, cy, r * 1.8, r * 0.7, Math.PI / 12, 0, Math.PI * 2);
        cloudCtx.fill();
      }

      // Convert to Three.js Textures
      const diffuseTexture = new THREE.CanvasTexture(diffuseCanvas);
      diffuseTexture.wrapS = THREE.RepeatWrapping;
      diffuseTexture.wrapT = THREE.ClampToEdgeWrapping;

      const specularTexture = new THREE.CanvasTexture(specCanvas);
      specularTexture.wrapS = THREE.RepeatWrapping;
      specularTexture.wrapT = THREE.ClampToEdgeWrapping;

      const bumpTexture = new THREE.CanvasTexture(diffuseCanvas);
      bumpTexture.wrapS = THREE.RepeatWrapping;
      bumpTexture.wrapT = THREE.ClampToEdgeWrapping;

      const cloudsTexture = new THREE.CanvasTexture(cloudCanvas);
      cloudsTexture.wrapS = THREE.RepeatWrapping;
      cloudsTexture.wrapT = THREE.ClampToEdgeWrapping;

      return { diffuseTexture, specularTexture, bumpTexture, cloudsTexture };
    };

    const { diffuseTexture, specularTexture, bumpTexture, cloudsTexture } = createEarthTexture();

    // -------------------------------------------------------------
    // GLOBE GROUP WITH REALISTIC AXIAL TILT (23.44°)
    // -------------------------------------------------------------
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Axial tilt container
    const tiltedGroup = new THREE.Group();
    tiltedGroup.rotation.z = (23.44 * Math.PI) / 180; // True Earth tilt
    masterGroup.add(tiltedGroup);
    globeGroupRef.current = tiltedGroup;

    // 1. Earth Sphere Mesh
    const globeRadius = size === 'sm' ? 1.0 : size === 'lg' ? 1.4 : 1.25;
    const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      roughnessMap: specularTexture,
      roughness: 0.45,
      metalness: 0.15,
      bumpMap: bumpTexture,
      bumpScale: 0.015,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    // Initial rotation to showcase India & Asia towards the camera
    earthMesh.rotation.y = -Math.PI * 0.52;
    tiltedGroup.add(earthMesh);

    // 2. Translucent Cloud Layer
    const cloudsGeo = new THREE.SphereGeometry(globeRadius * 1.018, 48, 48);
    const cloudsMat = new THREE.MeshStandardMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.4,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    tiltedGroup.add(cloudsMesh);
    cloudsMeshRef.current = cloudsMesh;

    // 3. Atmospheric Rayleigh Glow Shell
    const atmoGeo = new THREE.SphereGeometry(globeRadius * 1.045, 48, 48);
    const atmoMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#38bdf8'),
      transparent: true,
      opacity: 0.18,
      roughness: 0.9,
      metalness: 0.1,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    tiltedGroup.add(atmoMesh);
    atmosphereMeshRef.current = atmoMesh;

    // 4. Physical Brass Celestial Equatorial & Meridian Armillary Ring
    const brassMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#B39255'), // Antique scholarly brass
      roughness: 0.3,
      metalness: 0.75,
      transparent: true,
      opacity: 0.65,
    });

    // Equatorial Ring
    const eqRingGeo = new THREE.TorusGeometry(globeRadius * 1.14, 0.012, 16, 80);
    const eqRing = new THREE.Mesh(eqRingGeo, brassMat);
    eqRing.rotation.x = Math.PI / 2;
    tiltedGroup.add(eqRing);

    // Meridian Ring
    const merRingGeo = new THREE.TorusGeometry(globeRadius * 1.15, 0.012, 16, 80);
    const merRing = new THREE.Mesh(merRingGeo, brassMat);
    tiltedGroup.add(merRing);

    // 5. Assam Marker Pin Beacon (Simla, Baksa: 26.8° N, 91.3° E)
    const pinGroup = new THREE.Group();
    const phi = (90 - 26.8) * (Math.PI / 180);
    const theta = (91.3 + 180) * (Math.PI / 180);
    const pinX = -globeRadius * Math.sin(phi) * Math.cos(theta);
    const pinZ = globeRadius * Math.sin(phi) * Math.sin(theta);
    const pinY = globeRadius * Math.cos(phi);

    const pinPoleGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.22, 12);
    const pinPoleMat = new THREE.MeshStandardMaterial({ color: 0xc81d25, roughness: 0.3 });
    const pinPole = new THREE.Mesh(pinPoleGeo, pinPoleMat);
    pinPole.position.set(pinX * 1.08, pinY * 1.08, pinZ * 1.08);
    pinPole.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(pinX, pinY, pinZ).normalize());
    pinGroup.add(pinPole);

    const beaconGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const beaconMat = new THREE.MeshStandardMaterial({
      color: 0x86efac,
      emissive: 0x15803d,
      emissiveIntensity: 0.9,
    });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.position.set(pinX * 1.18, pinY * 1.18, pinZ * 1.18);
    pinGroup.add(beaconMesh);

    earthMesh.add(pinGroup);

    // -------------------------------------------------------------
    // REALISTIC LIGHTING SETUP WITH CONTROLLABLE LIGHT INTENSITY
    // -------------------------------------------------------------
    // Warm Sun Directional Light (Key Light)
    const sunLight = new THREE.DirectionalLight(0xfff6e6, initialLightIntensity);
    sunLight.position.set(5, 3.5, 4.5);
    scene.add(sunLight);
    lightRef.current = sunLight;

    // Ambient Fill Light (Soft sky bounce)
    const ambientLight = new THREE.AmbientLight(0x1e293b, initialLightIntensity * 0.35);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    // Atmospheric Backlight / Rim Glint (Space scattering)
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    // -------------------------------------------------------------
    // SMOOTH MOUSE / TOUCH ORBITAL INTERACTION
    // -------------------------------------------------------------
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      isInteractingRef.current = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
      dragVelocity = { x: 0, y: 0 };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      dragVelocity = { x: deltaX * 0.005, y: deltaY * 0.005 };

      earthMesh.rotation.y += deltaX * 0.006;
      masterGroup.rotation.x = Math.max(-0.6, Math.min(0.6, masterGroup.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 1000);
    };

    const domCanvas = canvas;
    domCanvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    domCanvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };
    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // CONTINUOUS ANIMATION LOOP
    // -------------------------------------------------------------
    let lastTime = performance.now();
    const animate = (time: number) => {
      if (isDisposed) return;
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Inertial damping after drag release
      if (!isDragging) {
        earthMesh.rotation.y += dragVelocity.x;
        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;
      }

      // Constant realistic rotation if enabled and not dragging
      if (isRotatingRef.current && !isDragging) {
        earthMesh.rotation.y += delta * 0.12; // Slow majestic rotation
        if (cloudsMeshRef.current) {
          cloudsMeshRef.current.rotation.y += delta * 0.15; // Clouds drift slightly faster
        }
      }

      // Subtle celestial ring counter-turn
      merRing.rotation.y -= delta * 0.03;

      // Pulse the Simla beacon
      const pulseScale = 1 + Math.sin(time * 0.004) * 0.2;
      beaconMesh.scale.set(pulseScale, pulseScale, pulseScale);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      domCanvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domCanvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);

      [earthGeo, cloudsGeo, atmoGeo, eqRingGeo, merRingGeo, pinPoleGeo, beaconGeo].forEach((g) =>
        g.dispose()
      );
      [
        earthMat,
        cloudsMat,
        atmoMat,
        brassMat,
        pinPoleMat,
        beaconMat,
        diffuseTexture,
        specularTexture,
        bumpTexture,
        cloudsTexture,
      ].forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, [size, initialLightIntensity]);

  // Handle Preset Changes
  const applyPreset = (preset: 'noon' | 'day' | 'golden' | 'night') => {
    setActivePreset(preset);
    if (preset === 'noon') {
      setLightIntensity(3.2);
    } else if (preset === 'day') {
      setLightIntensity(2.2);
    } else if (preset === 'golden') {
      setLightIntensity(1.3);
    } else if (preset === 'night') {
      setLightIntensity(0.5);
    }
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative w-full aspect-square max-w-[420px] sm:max-w-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing rounded-full overflow-hidden"
      >
        {/* Subtle radial ambient atmosphere behind globe */}
        <div className="absolute inset-0 rounded-full bg-radial from-[#132E54]/20 via-transparent to-transparent pointer-events-none" />

        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Floating Academic Location Chip */}
        <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 pointer-events-none">
          <div className="bg-[#0A192F]/90 backdrop-blur-md border border-[#1E293B] px-3.5 py-2 rounded-xs flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#86EFAC] animate-pulse inline-block" />
              <div className="leading-tight">
                <span className="font-mono-meta text-[11px] font-bold text-white block">
                  Simla, Baksa • Assam
                </span>
                <span className="font-mono-meta text-[9px] text-[#94A3B8]">
                  26.81° N, 91.35° E • Estd. 2019
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono-meta text-[#86EFAC]">
              <MapPin className="w-3 h-3 text-[#C81D25]" />
              <span>Campus Coordinate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Light Intensity & Control Bar */}
      {showControls && (
        <div className="w-full max-w-[440px] mt-4 bg-[#FFFFFF] border border-[#E2DBD0] p-3.5 shadow-xs space-y-3">
          {/* Light Intensity Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono-meta">
              <span className="flex items-center gap-1.5 text-[#0A192F] font-semibold">
                <Sun className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Sun Light Intensity</span>
              </span>
              <span className="text-[#15803D] font-bold">{lightIntensity.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.3"
              max="3.5"
              step="0.1"
              value={lightIntensity}
              onChange={(e) => {
                setLightIntensity(parseFloat(e.target.value));
                setActivePreset('day');
              }}
              className="w-full h-1.5 bg-[#EAE4DA] rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
              aria-label="Adjust Sunlight Intensity"
            />
          </div>

          {/* Quick Intensity Lighting Presets */}
          <div className="flex items-center justify-between gap-1 pt-1 border-t border-[#EAE4DA]">
            <button
              onClick={() => applyPreset('noon')}
              className={`px-2.5 py-1 text-[11px] font-mono-meta uppercase tracking-wider transition-colors cursor-pointer ${
                activePreset === 'noon'
                  ? 'bg-[#0A192F] text-white font-bold'
                  : 'bg-[#F3EFEA] text-[#475569] hover:bg-[#EAE4DA]'
              }`}
            >
              Noon 3.2x
            </button>
            <button
              onClick={() => applyPreset('day')}
              className={`px-2.5 py-1 text-[11px] font-mono-meta uppercase tracking-wider transition-colors cursor-pointer ${
                activePreset === 'day'
                  ? 'bg-[#0A192F] text-white font-bold'
                  : 'bg-[#F3EFEA] text-[#475569] hover:bg-[#EAE4DA]'
              }`}
            >
              Day 2.2x
            </button>
            <button
              onClick={() => applyPreset('golden')}
              className={`px-2.5 py-1 text-[11px] font-mono-meta uppercase tracking-wider transition-colors cursor-pointer ${
                activePreset === 'golden'
                  ? 'bg-[#0A192F] text-white font-bold'
                  : 'bg-[#F3EFEA] text-[#475569] hover:bg-[#EAE4DA]'
              }`}
            >
              Dusk 1.3x
            </button>
            <button
              onClick={() => applyPreset('night')}
              className={`px-2.5 py-1 text-[11px] font-mono-meta uppercase tracking-wider transition-colors cursor-pointer ${
                activePreset === 'night'
                  ? 'bg-[#0A192F] text-white font-bold'
                  : 'bg-[#F3EFEA] text-[#475569] hover:bg-[#EAE4DA]'
              }`}
            >
              Night 0.5x
            </button>

            {/* Rotation Toggle */}
            <button
              onClick={() => setIsRotating(!isRotating)}
              title={isRotating ? 'Pause Rotation' : 'Resume Rotation'}
              className={`p-1.5 text-xs transition-colors cursor-pointer border ${
                isRotating
                  ? 'bg-[#15803D] text-white border-[#15803D]'
                  : 'bg-[#F3EFEA] text-[#475569] border-[#E2DBD0]'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
