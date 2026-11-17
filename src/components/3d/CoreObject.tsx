"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

interface OrbitalNodeProps {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  size: number;
}

function OrbitalNode({
  radius,
  speed,
  offset,
  color,
  size,
}: OrbitalNodeProps) {
  const nodeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!nodeRef.current) return;

    const time = clock.elapsedTime * speed + offset;

    nodeRef.current.position.set(
      Math.cos(time) * radius,
      Math.sin(time * 0.7) * 0.4,
      Math.sin(time) * radius
    );
  });

  return (
    <mesh ref={nodeRef}>
      <sphereGeometry args={[size, 24, 24]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        roughness={0.2}
        metalness={0.5}
      />
    </mesh>
  );
}

export default function CoreObject() {
  const systemRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }, delta) => {
    if (!systemRef.current || !coreRef.current) return;

    const time = clock.elapsedTime;

    // Mouse-responsive system rotation
    systemRef.current.rotation.x = THREE.MathUtils.damp(
      systemRef.current.rotation.x,
      -pointer.y * 0.25,
      3,
      delta
    );

    systemRef.current.rotation.y = THREE.MathUtils.damp(
      systemRef.current.rotation.y,
      pointer.x * 0.35,
      3,
      delta
    );

    // Slow autonomous rotation
    systemRef.current.rotation.y += delta * 0.06;

    // Core rotation
    coreRef.current.rotation.y = time * 0.12;
    coreRef.current.rotation.x = Math.sin(time * 0.2) * 0.08;
  });

  return (
    <group ref={systemRef}>

      {/* Main metallic sphere */}

      <group ref={coreRef}>
        <mesh>
          <sphereGeometry args={[1, 96, 96]} />

          <meshPhysicalMaterial
            color="#a4c9bb"
            metalness={0.9}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Outer wireframe shell */}

        <mesh scale={1.045}>
          <icosahedronGeometry args={[1, 4]} />

          <meshBasicMaterial
            color="#a6ffcb"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Inner energy sphere */}

        <mesh scale={0.88}>
          <sphereGeometry args={[1, 48, 48]} />

          <meshPhysicalMaterial
            color="#172c27"
            metalness={0.8}
            roughness={0.3}
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>

      {/* Orbital rings */}

      <group rotation={[0.9, 0.2, 0.4]}>
        <mesh>
          <torusGeometry args={[1.55, 0.009, 12, 180]} />
          <meshBasicMaterial
            color="#a6ffcb"
            transparent
            opacity={0.75}
          />
        </mesh>
      </group>

      <group rotation={[1.8, 0.7, -0.4]}>
        <mesh>
          <torusGeometry args={[1.85, 0.006, 12, 180]} />
          <meshBasicMaterial
            color="#8aa9a0"
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>

      <group rotation={[0.3, 1.1, 1.3]}>
        <mesh>
          <torusGeometry args={[2.15, 0.004, 12, 180]} />
          <meshBasicMaterial
            color="#a6ffcb"
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* Orbiting nodes */}

      <OrbitalNode
        radius={1.55}
        speed={0.55}
        offset={0}
        color="#a6ffcb"
        size={0.065}
      />

      <OrbitalNode
        radius={1.85}
        speed={-0.35}
        offset={2}
        color="#ffffff"
        size={0.045}
      />

      <OrbitalNode
        radius={2.15}
        speed={0.25}
        offset={4}
        color="#70d6bd"
        size={0.05}
      />

      {/* Ambient particles */}

      <Sparkles
        count={100}
        scale={6}
        size={2}
        speed={0.25}
        opacity={0.5}
        color="#a6ffcb"
      />

    </group>
  );
}