"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function OrbitSystem() {
  const groupRef = useRef<THREE.Group>(null); // Ref for the group
  const orbitRefs = useRef<THREE.Object3D[]>([]); // Explicitly type the ref as an array of Object3D
  const planetRefs = useRef<THREE.Object3D[]>([]); // Explicitly type the ref as an array of Object3D

  // Create orbits and planets
  useEffect(() => {
    orbitRefs.current = Array(4).fill(null).map(() => new THREE.Object3D());
    planetRefs.current = Array(4).fill(null).map(() => new THREE.Object3D());
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      orbitRefs.current.forEach((orbit, i) => {
        const speed = 0.2 / (i + 1);
        const radius = (i + 2) * 0.8;
        const time = state.clock.getElapsedTime();

        if (planetRefs.current[i]) {
          planetRefs.current[i].position.x = Math.cos(time * speed) * radius;
          planetRefs.current[i].position.z = Math.sin(time * speed) * radius;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center point */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#FFB800" />
      </mesh>

      {/* Orbits and planets */}
      {[0, 1, 2, 3].map((i) => (
        <group key={i}>
          <line>
            <ringGeometry args={[(i + 2) * 0.8, (i + 2) * 0.8 + 0.01, 64]} />
            <lineBasicMaterial color="#FFB800" transparent opacity={0.3} />
          </line>
          <mesh ref={(el) => (planetRefs.current[i] = el as THREE.Object3D)}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#FFB800" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function OrbitAnimation() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 2, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitSystem />
      </Canvas>
    </div>
  );
}