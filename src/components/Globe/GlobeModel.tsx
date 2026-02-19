import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function GlobeModel() {
  const groupRef = useRef<THREE.Group>(null);

  const gridGeo = useMemo(
    () => new THREE.EdgesGeometry(new THREE.SphereGeometry(1.0, 40, 20)),
    [],
  );

  const fineGridGeo = useMemo(
    () => new THREE.EdgesGeometry(new THREE.SphereGeometry(1.001, 80, 40)),
    [],
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base sphere — slightly lighter than background */}
      <mesh>
        <sphereGeometry args={[0.99, 64, 64]} />
        <meshStandardMaterial
          color="#ff0000"
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>

      {/* Primary grid — visible blue wireframe */}
      <lineSegments geometry={gridGeo}>
        <lineBasicMaterial color="#60a5fa" opacity={0.15} transparent />
      </lineSegments>

      {/* Fine grid — subtle detail layer */}
      <lineSegments geometry={fineGridGeo}>
        <lineBasicMaterial color="#60a5fa" opacity={0.05} transparent />
      </lineSegments>
    </group>
  );
}
