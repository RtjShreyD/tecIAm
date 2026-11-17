
"use client";

import { useRef, useState } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

type OrbitalProps = {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  phase: number;
  electronSize?: number;
  opacity?: number;
};

function Orbital({
  radius,
  rotation,
  speed,
  phase,
  electronSize = 0.055,
  opacity = 0.65,
}: OrbitalProps) {
  const electronRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const angle = clock.elapsedTime * speed + phase;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    electronRef.current?.position.set(x, y, 0);
    glowRef.current?.position.set(x, y, 0);
  });

  return (
    <group rotation={rotation}>
      {/* Orbital trajectory */}
      <mesh>
        <torusGeometry args={[radius, 0.007, 8, 200]} />
        <meshBasicMaterial
          color="#b9e5d2"
          transparent
          opacity={opacity}
        />
      </mesh>

      {/* Electron */}
      <mesh ref={electronRef}>
        <sphereGeometry args={[electronSize, 32, 32]} />
        <meshPhysicalMaterial
          color="#eafff5"
          emissive="#8bffd2"
          emissiveIntensity={3.5}
          roughness={0.08}
          metalness={0.05}
          clearcoat={1}
        />
      </mesh>

      {/* Electron luminosity */}
      <pointLight
        ref={glowRef}
        color="#75ffd0"
        intensity={2}
        distance={0.85}
        decay={2}
      />
    </group>
  );
}

function PulsarCore() {
  const rotatingCoreRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.PointLight>(null);
  const auraRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    // Central pulsar spins rapidly.
    if (rotatingCoreRef.current) {
      rotatingCoreRef.current.rotation.y += 38 * delta;
    }

    const pulse = 1 + Math.sin(clock.elapsedTime * 8) * 0.25;

    if (glowRef.current) {
      glowRef.current.intensity = 4.5 * pulse;
    }

    if (auraRef.current) {
      auraRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      {/* One vertical magnetic axis */}
      <mesh>
        <cylinderGeometry args={[0.005, 0.005, 3.5, 16]} />
        <meshBasicMaterial
          color="#e3fff4"
          transparent
          opacity={0.82}
        />
      </mesh>

      {/* Pulsar central rotation */}
      <group ref={rotatingCoreRef}>
        {/* Medium-sized luminous core */}
        <mesh>
          <sphereGeometry args={[0.16, 48, 48]} />
          <meshPhysicalMaterial
            color="#f2fff9"
            emissive="#9affd7"
            emissiveIntensity={5}
            roughness={0.04}
            metalness={0.04}
            clearcoat={1}
          />
        </mesh>

        {/* Inner luminous ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.34, 0.018, 16, 120]} />
          <meshBasicMaterial
            color="#c7ffe9"
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Asymmetric rotating energy arc */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.34, 0.035, 16, 120, 1.7]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* Rotating hotspot */}
        <mesh position={[0.34, 0, 0]}>
          <sphereGeometry args={[0.055, 24, 24]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        <pointLight
          position={[0.2, 0, 0]}
          color="#a3ffdc"
          intensity={2.5}
          distance={1.6}
        />
      </group>

      {/* Soft aura */}
      <mesh ref={auraRef}>
        <sphereGeometry args={[0.58, 48, 48]} />
        <meshBasicMaterial
          color="#80ffca"
          transparent
          opacity={0.075}
          depthWrite={false}
        />
      </mesh>

      <pointLight
        ref={glowRef}
        color="#9dffda"
        intensity={4.5}
        distance={3}
        decay={2}
      />
    </group>
  );
}

export default function CoreObject() {
  const [isPulsar, setIsPulsar] = useState(false);

  // User-controlled viewing orientation.
  const dragRef = useRef<THREE.Group>(null);

  // Complete visual assembly.
  const assemblyRef = useRef<THREE.Group>(null);

  // Pulsar orbital system, independently counter-rotating.
  const pulsarOrbitRef = useRef<THREE.Group>(null);

  const isDragging = useRef(false);
  const pointerMoved = useRef(false);

  const pointerStart = useRef({ x: 0, y: 0 });
  const previousPointer = useRef({ x: 0, y: 0 });
  const previousMoveTime = useRef(0);

  const velocity = useRef({ x: 0, y: 0 });

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();

    isDragging.current = true;
    pointerMoved.current = false;

    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
    };

    previousPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    previousMoveTime.current = event.nativeEvent.timeStamp;
    velocity.current = { x: 0, y: 0 };

    event.target.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isDragging.current || !dragRef.current) return;

    const totalX = event.clientX - pointerStart.current.x;
    const totalY = event.clientY - pointerStart.current.y;

    if (Math.hypot(totalX, totalY) > 6) {
      pointerMoved.current = true;
    }

    if (!pointerMoved.current) return;

    event.stopPropagation();

    const dx = event.clientX - previousPointer.current.x;
    const dy = event.clientY - previousPointer.current.y;

    previousPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    const sensitivity = 0.006;

    const rotationY = dx * sensitivity;
    const rotationX = dy * sensitivity;

    dragRef.current.rotation.y += rotationY;
    dragRef.current.rotation.x += rotationX;

    const now = event.nativeEvent.timeStamp;
    const elapsed = Math.max(
      (now - previousMoveTime.current) / 1000,
      0.008
    );

    velocity.current.y = THREE.MathUtils.clamp(
      rotationY / elapsed,
      -10,
      10
    );

    velocity.current.x = THREE.MathUtils.clamp(
      rotationX / elapsed,
      -10,
      10
    );

    previousMoveTime.current = now;
  };

  const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    try {
      event.target.releasePointerCapture(event.pointerId);
    } catch {
      // Capture may already be released.
    }

    if (!pointerMoved.current) {
      velocity.current = { x: 0, y: 0 };
      setIsPulsar((current) => !current);
    }
  };

  const handlePointerCancel = (event: ThreeEvent<PointerEvent>) => {
    isDragging.current = false;
    pointerMoved.current = false;
    velocity.current = { x: 0, y: 0 };

    try {
      event.target.releasePointerCapture(event.pointerId);
    } catch {
      // Capture may already be released.
    }
  };

  useFrame((_, delta) => {
    const drag = dragRef.current;
    const assembly = assemblyRef.current;
    const pulsarOrbits = pulsarOrbitRef.current;

    if (!drag || !assembly) return;

    // Atom = normal size.
    // Pulsar = medium-sized complete orbital structure.
    const targetScale = isPulsar ? 0.72 : 1;

    const nextScale = THREE.MathUtils.damp(
      assembly.scale.x,
      targetScale,
      4,
      delta
    );

    assembly.scale.setScalar(nextScale);

    // Pulsar orbitals counter-rotate internally.
    // The complete assembly does NOT rotate automatically.
    if (isPulsar && pulsarOrbits) {
      pulsarOrbits.rotation.y -= 64 * delta;
    }

    // Apply drag momentum in BOTH modes.
    if (!isDragging.current) {
      drag.rotation.y += velocity.current.y * delta;
      drag.rotation.x += velocity.current.x * delta;

      const damping = Math.pow(0.90, delta * 60);

      velocity.current.x *= damping;
      velocity.current.y *= damping;

      if (Math.abs(velocity.current.x) < 0.001) {
        velocity.current.x = 0;
      }

      if (Math.abs(velocity.current.y) < 0.001) {
        velocity.current.y = 0;
      }
    }
  });

  return (
    <group>
      {/* Interaction surface */}
      <mesh
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          colorWrite={false}
          depthWrite={false}
        />
      </mesh>

      {/* Drag rotation */}
      <group ref={dragRef}>
        {/* Whole atom/pulsar scales together */}
        <group ref={assemblyRef}>
          {!isPulsar ? (
            <>
              {/* CRYSTALLINE ATOM */}

              <group>
                {/* Highly transparent nucleus */}
                <mesh>
                  <sphereGeometry args={[1.02, 64, 64]} />
                  <meshPhysicalMaterial
                    color="#c7f5df"
                    transparent
                    opacity={0.22}
                    transmission={0.78}
                    thickness={1.5}
                    ior={1.28}
                    roughness={0.055}
                    metalness={0.03}
                    clearcoat={1}
                    clearcoatRoughness={0.035}
                    emissive="#174b3c"
                    emissiveIntensity={0.28}
                  />
                </mesh>

                {/* Delicate crystalline wireframe */}
                <mesh>
                  <icosahedronGeometry args={[1.045, 3]} />
                  <meshBasicMaterial
                    color="#c4f2df"
                    wireframe
                    transparent
                    opacity={0.22}
                  />
                </mesh>

                {/* Inner glass energy layer */}
                <mesh>
                  <sphereGeometry args={[0.68, 48, 48]} />
                  <meshBasicMaterial
                    color="#75d8ad"
                    transparent
                    opacity={0.09}
                  />
                </mesh>

                <pointLight
                  color="#9bffd5"
                  intensity={1.7}
                  distance={3}
                />
              </group>

              {/* Three intersecting orbital planes */}

              <Orbital
                radius={1.5}
                rotation={[Math.PI / 2, 0, 0]}
                speed={0.8}
                phase={0}
                opacity={0.72}
              />

              <Orbital
                radius={1.55}
                rotation={[0.82, 0.72, 0.18]}
                speed={-0.68}
                phase={2.1}
                opacity={0.68}
              />

              <Orbital
                radius={1.6}
                rotation={[-0.82, -0.72, -0.18]}
                speed={0.56}
                phase={4.2}
                opacity={0.68}
              />
            </>
          ) : (
            <>
              {/* PULSAR CENTRAL CORE */}
              <PulsarCore />

              {/* Pulsar orbital system */}
              <group ref={pulsarOrbitRef}>
                <Orbital
                  radius={1.85}
                  rotation={[Math.PI / 2, 0, 0]}
                  speed={0.7}
                  phase={0}
                  electronSize={0.065}
                  opacity={0.82}
                />

                <Orbital
                  radius={2.0}
                  rotation={[0.82, 0.72, 0.18]}
                  speed={-0.55}
                  phase={2.1}
                  electronSize={0.065}
                  opacity={0.78}
                />

                <Orbital
                  radius={2.1}
                  rotation={[-0.82, -0.72, -0.18]}
                  speed={0.48}
                  phase={4.2}
                  electronSize={0.065}
                  opacity={0.78}
                />
              </group>
            </>
          )}
        </group>
      </group>

      {/* Background stars, independent of atom rotation */}
      <Sparkles
        count={110}
        scale={[8, 7, 8]}
        size={1.35}
        speed={0.08}
        opacity={0.42}
        color="#c4f3df"
      />

      <Sparkles
        count={35}
        scale={[7, 6, 7]}
        size={2.1}
        speed={0.045}
        opacity={0.24}
        color="#e2fff3"
      />
    </group>
  );
}
