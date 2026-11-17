"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CoreObject from "./CoreObject";

export default function Scene() {
  return (
    <div className="system-scene">
      <Canvas
        camera={{
          position: [0, 0, 6.2],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Suspense fallback={null}>

          {/* Environment lighting */}

          <ambientLight intensity={0.65} />

          <pointLight
            position={[4, 4, 4]}
            intensity={35}
            color="#b7ffdb"
          />

          <pointLight
            position={[-4, -2, 2]}
            intensity={20}
            color="#3b9d85"
          />

          <directionalLight
            position={[0, 5, 5]}
            intensity={2}
          />

          {/* Main 3D object */}

          <CoreObject />

        </Suspense>
      </Canvas>
    </div>
  );
}