import { OrbitControls } from '@react-three/drei';

export function GlobeControls() {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      autoRotate
      autoRotateSpeed={0.3}
      minPolarAngle={Math.PI * 0.3}
      maxPolarAngle={Math.PI * 0.7}
    />
  );
}
