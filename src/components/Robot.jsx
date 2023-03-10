import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('./models/robot/phantoms-transformed.glb')
  return (
    <group {...props} dispose={null}>
       <group position={[-0.21, 0.16, 0.37]} rotation={[0, -0.15, 0]} scale={0.15}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}


useGLTF.preload('./models/robot/phantoms-transformed.glb')
