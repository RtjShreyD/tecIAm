
"use client";

import { Canvas } from "@react-three/fiber";
import CoreObject from "./CoreObject";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 5.37, 3.1],
        fov: 42,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{
        background: "transparent",
      }}
    >
      <ambientLight intensity={0.48} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={1.45}
        color="#d7fff0"
      />

      <pointLight
        position={[-4, 2, -3]}
        intensity={1.3}
        color="#58dba7"
      />

      <pointLight
        position={[3, -2, 4]}
        intensity={0.8}
        color="#b2f8df"
      />

      <CoreObject />
    </Canvas>
  );
}
