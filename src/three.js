import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

const Cube = ({ image }) => {
  const ref = useRef();
  const texture = useTexture(image);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ThreeJSDisplay = ({ image }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} />
      {image && <Cube image={image} />}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeJSDisplay;