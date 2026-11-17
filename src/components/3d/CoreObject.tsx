
"use client";

import { useRef, useState } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* -------------------------------------------------------
   PULSAR ORBITAL — PRESERVED
------------------------------------------------------- */

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
      <mesh>
        <torusGeometry args={[radius, 0.007, 8, 200]} />
        <meshBasicMaterial
          color="#b9e5d2"
          transparent
          opacity={opacity}
        />
      </mesh>

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

/* -------------------------------------------------------
   GRAVITATIONAL STAR — DEFAULT MODE
------------------------------------------------------- */

/**
 * A small moon travelling along a gravitational ring.
 * Its path is defined by the ring radius, not by a
 * separate visible orbital line.
 */
function RingMoon({
  ringRadius,
  speed,
  phase,
  size,
  color,
}: {
  ringRadius: number;
  speed: number;
  phase: number;
  size: number;
  color: string;
}) {
  const moonRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const angle = clock.elapsedTime * speed + phase;

    moonRef.current?.position.set(
      Math.cos(angle) * ringRadius,
      Math.sin(angle) * ringRadius,
      0
    );
  });

  return (
    <group ref={moonRef}>
      {/* Moon body */}
      <mesh>
        <sphereGeometry args={[size, 24, 24]} />
        <meshPhysicalMaterial
          color={color}
          emissive="#8bffd2"
          emissiveIntensity={1.8}
          roughness={0.3}
          metalness={0.12}
          clearcoat={1}
        />
      </mesh>

      {/* Very subtle moon glow */}
      <pointLight
        color="#8bffd2"
        intensity={0.55}
        distance={0.65}
        decay={2}
      />
    </group>
  );
}

/**
 * A gravitational ring is a luminous distortion band
 * around the star. Moons travel directly along its plane.
 */
function GravitationalRing({
  radius,
  rotation,
  thickness,
  opacity,
  speed,
  moons,
  color = "#8dffd0",
}: {
  radius: number;
  rotation: [number, number, number];
  thickness: number;
  opacity: number;
  speed: number;
  moons: {
    phase: number;
    speed: number;
    size: number;
    color: string;
  }[];
  color?: string;
}) {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += speed * delta;
    }
  });

  return (
    <group rotation={rotation}>
      <group ref={ringRef}>
        {/* Main gravitational band */}
        <mesh>
          <torusGeometry args={[radius, thickness, 10, 240]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={opacity}
            depthWrite={false}
          />
        </mesh>

        {/* Moons travelling on the gravitational band */}
        {moons.map((moon, index) => (
          <RingMoon
            key={index}
            ringRadius={radius}
            phase={moon.phase}
            speed={moon.speed}
            size={moon.size}
            color={moon.color}
          />
        ))}
      </group>
    </group>
  );
}

/* -------------------------------------------------------
   THE STAR
------------------------------------------------------- */

function GravitationalStar() {
  const starRef = useRef<THREE.Group>(null);
  const innerGlowRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }, delta) => {
    const time = clock.elapsedTime;

    if (starRef.current) {
      starRef.current.rotation.y += 0.12 * delta;
      starRef.current.rotation.x =
        Math.sin(time * 0.35) * 0.035;
    }

    const pulse = 1 + Math.sin(time * 2.0) * 0.045;

    if (innerGlowRef.current) {
      innerGlowRef.current.scale.setScalar(pulse);
    }

    if (outerGlowRef.current) {
      outerGlowRef.current.scale.setScalar(
        1 + Math.sin(time * 1.5) * 0.025
      );
    }

    if (lightRef.current) {
      lightRef.current.intensity =
        5.2 + Math.sin(time * 2.2) * 0.65;
    }
  });

  return (
    <group>
      {/* Central star */}
      <group ref={starRef}>
        {/* Main luminous stellar surface */}
        <mesh>
          <sphereGeometry args={[0.46, 96, 96]} />
          <meshPhysicalMaterial
            color="#baffdf"
            emissive="#21e99a"
            emissiveIntensity={4.5}
            roughness={0.16}
            metalness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.04}
          />
        </mesh>

        {/* Bright inner stellar core */}
        <mesh>
          <sphereGeometry args={[0.29, 64, 64]} />
          <meshBasicMaterial
            color="#dffff0"
            transparent
            opacity={0.34}
          />
        </mesh>

        {/* White-hot centre */}
        <mesh>
          <sphereGeometry args={[0.13, 48, 48]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Inner luminous atmosphere */}
      <mesh ref={innerGlowRef}>
        <sphereGeometry args={[0.72, 64, 64]} />
        <meshBasicMaterial
          color="#43ffad"
          transparent
          opacity={0.105}
          depthWrite={false}
        />
      </mesh>

      {/* Broad outer stellar halo */}
      <mesh ref={outerGlowRef}>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshBasicMaterial
          color="#32e99b"
          transparent
          opacity={0.035}
          depthWrite={false}
        />
      </mesh>

      {/* Strong stellar illumination */}
      <pointLight
        ref={lightRef}
        color="#61ffbd"
        intensity={5.2}
        distance={6}
        decay={1.6}
      />

      {/* Secondary atmospheric light */}
      <pointLight
        position={[0.2, 0.3, 0.5]}
        color="#c4ffe8"
        intensity={1.4}
        distance={2.5}
        decay={2}
      />

      {/* -------------------------------------------------
         GRAVITATIONAL RINGS

         Three inclined gravitational bands.
         Each carries its own small moons.
      ------------------------------------------------- */}

      {/* Primary ring — closest to the star */}
      <GravitationalRing
        radius={0.96}
        rotation={[Math.PI / 2.3, 0.2, 0.1]}
        thickness={0.018}
        opacity={0.58}
        speed={0.035}
        moons={[
          {
            phase: 0.2,
            speed: 0.72,
            size: 0.045,
            color: "#eafff5",
          },
          {
            phase: Math.PI,
            speed: 0.72,
            size: 0.035,
            color: "#aaffdc",
          },
        ]}
        color="#aaffdc"
      />

      {/* Secondary ring — inclined gravitational plane */}
      <GravitationalRing
        radius={1.27}
        rotation={[0.85, 0.7, 0.35]}
        thickness={0.012}
        opacity={0.40}
        speed={-0.022}
        moons={[
          {
            phase: 1.1,
            speed: -0.52,
            size: 0.05,
            color: "#dffff0",
          },
          {
            phase: 4.1,
            speed: -0.52,
            size: 0.033,
            color: "#8bffd2",
          },
        ]}
        color="#63eeb5"
      />

      {/* Outer ring — faint and expansive */}
      <GravitationalRing
        radius={1.57}
        rotation={[-0.7, -0.4, 0.6]}
        thickness={0.009}
        opacity={0.25}
        speed={0.014}
        moons={[
          {
            phase: 2.4,
            speed: 0.38,
            size: 0.042,
            color: "#dffff0",
          },
          {
            phase: 5.1,
            speed: 0.38,
            size: 0.03,
            color: "#aaffdc",
          },
        ]}
        color="#c4ffe8"
      />
    </group>
  );
}

/* -------------------------------------------------------
   PULSAR MODE — PRESERVED EXACTLY
------------------------------------------------------- */

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

/* -------------------------------------------------------
   MAIN INTERACTIVE OBJECT
------------------------------------------------------- */

export default function CoreObject() {
  const [isPulsar, setIsPulsar] = useState(false);

  const dragRef = useRef<THREE.Group>(null);
  const assemblyRef = useRef<THREE.Group>(null);
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

    // Existing mode sizes.
    const targetScale = isPulsar ? 0.72 : 0.92;

    const nextScale = THREE.MathUtils.damp(
      assembly.scale.x,
      targetScale,
      4,
      delta
    );

    assembly.scale.setScalar(nextScale);

    // Existing Pulsar counter-rotation.
    if (isPulsar && pulsarOrbits) {
      pulsarOrbits.rotation.y -= 64 * delta;
    }

    // Drag momentum in both modes.
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

      {/* User-controlled viewing angle */}
      <group ref={dragRef}>
        <group ref={assemblyRef}>
          {!isPulsar ? (
            <>
              {/* GRAVITATIONAL STAR */}
              <GravitationalStar />

              {/* Sparse surrounding star field */}
              <Sparkles
                count={24}
                scale={[4.5, 4.5, 4.5]}
                size={1.25}
                speed={0.07}
                opacity={0.24}
                color="#8dffd0"
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

      {/* Background stars */}
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
