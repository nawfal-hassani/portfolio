import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { latLngToVector3 } from './utils';
import type { Project } from '../../data/projects';

interface Props {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export function GlobePoints({ projects, onSelectProject }: Props) {
  return (
    <group>
      {projects.map((project) => (
        <ProjectPoint
          key={project.id}
          project={project}
          onClick={() => onSelectProject(project)}
        />
      ))}
    </group>
  );
}

function ProjectPoint({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const glowRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const position = useMemo(
    () => latLngToVector3(project.lat, project.lng, 1.03),
    [project.lat, project.lng],
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 2 + project.id * 1.5;
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t) * 0.3);
    }
    if (outerRef.current) {
      outerRef.current.scale.setScalar(1 + Math.sin(t) * 0.5);
      (outerRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.1 + Math.sin(t) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Core dot — bright and solid */}
      <mesh
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color="#93c5fd" />
      </mesh>

      {/* Inner glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.3} />
      </mesh>

      {/* Outer pulse ring */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}
