"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <Icosahedron args={[1.15, 0]}>
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#a21caf"
            emissiveIntensity={0.25}
            roughness={0.3}
            metalness={0.4}
            distort={0.35}
            speed={1.6}
          />
        </Icosahedron>
      </Float>
    </Canvas>
  );
}
