import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Earth = () => {
  const earth = useGLTF('./fractured_planet/scene.gltf')
  return (
    <mesh>
    <hemisphereLight intensity={0.15}/>
    <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={1} />
    <primitive
      object={earth.scene}
      scale={0.75}
      position={[0, -1.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 25,
      near: 2.5,
      far:50,
      position: [20, 5, 5]
    }}
    >
      <Suspense>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas