"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkPoints() {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { positions, colors, indices } = useMemo(() => {
    const positions = [];
    const colors = [];
    const indices = [];
    const count = 50;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = 2 * Math.cos(theta) * Math.sin(phi);
      const y = 2 * Math.sin(theta) * Math.sin(phi);
      const z = 2 * Math.cos(phi);

      positions.push(x, y, z);

      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors.push(1, 0.72, 0); // Yellow
      } else if (colorChoice < 0.7) {
        colors.push(1, 1, 1); // White
      } else {
        colors.push(0.2, 0.4, 1); // Blue
      }
    }

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
            Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
            Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );

        if (distance < 2) {
          indices.push(i, j);
        }
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      indices: new Uint16Array(indices),
    };
  }, []);

  useFrame(() => {
    if (pointsRef.current && linesRef.current) {
      pointsRef.current.rotation.y += 0.001;
      linesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          {/* Set indices */}
          <primitive attach="index" object={new THREE.BufferAttribute(indices, 1)} />
        </bufferGeometry>
        <lineBasicMaterial color="#FFB800" opacity={0.2} transparent />
      </lineSegments>
    </group>
  );
}

export default function NetworkSphereScene() {
  return (
    <div className="h-[600px] w-[600px] flex">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <NetworkPoints />
      </Canvas>
    </div>
  );
}