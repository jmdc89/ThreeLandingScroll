import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('./models/robot/phantoms-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylindre005.geometry} material={nodes.Cylindre005.material} position={[-0.02, 2.75, -0.07]} rotation={[-Math.PI, 0, 0]} scale={0.58} />
      <mesh geometry={nodes.Plan002.geometry} material={nodes.Plan002.material} position={[-0.39, 0.47, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <group position={[-0.21, 0.16, 0.37]} rotation={[0, -0.15, 0]} scale={0.15}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}


useGLTF.preload('./models/robot/phantoms-transformed.glb')
