import React, { useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'

export function Robot(props) {
  const { nodes, materials } = useGLTF('./models/robot/phantoms-transformed.glb');

  const robot = useRef();

  const scroll = useScroll();

  const tl = useRef();



  return (
    <group {...props} dispose={null} ref={robot}>
       <group position={[-0.21, 0.16, 0.37]} rotation={[0, -0.15, 0]} scale={0.15}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.Metal}>
        <meshPhysicalMaterial 
            color="#aaa"  
            roughness={0.2}
            metalness={1}
            reflectivity={0.5}
            iridescence={0.3}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}           
          />
        </mesh>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.Metal}>
        <meshPhysicalMaterial 
            color="#000000"  
            roughness={1}
            emissive={'#000'}
            clearcoat={1}
            reflectivity={0.2}
            metalness={0}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}         
          />
        </mesh>
      </group>
    </group>
  )
}


useGLTF.preload('./models/robot/phantoms-transformed.glb')
