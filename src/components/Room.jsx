import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber';

export function Room(props) {
  const { nodes, materials } = useGLTF('./models/isoroom/isoroom-transformed.glb')
  const room = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    tl.current
    // .to(room.current.rotation, {y: 0}, 2)
    // .to(room.current.position, {x: 1}, 2)

    // .to(room.current.rotation, {y: 1}, 6)   
    .to(room.current.position, {y: -2}, 6)

    // .to(room.current.rotation, {y: 0}, 11)
    // .to(room.current.rotation, {x: 1}, 11)
    // .to(room.current.position, {x: 0}, 11)

    // .to(room.current.rotation, {y: 0}, 13)
    .to(room.current.rotation, {y: -1}, 13)    
    // .to(room.current.position, {x: 0}, 13)

    // .to(room.current.rotation, {y: 0}, 16)   
    // .to(room.current.rotation, {x: 0}, 16) 
    // .to(room.current.position, {x: 0}, 16)  

    .to(room.current.rotation, {y: 0}, 20)   
    .to(room.current.rotation, {x: 0}, 20) 
    .to(room.current.position, {x: 0}, 20) 
    
  },[])

  return (
    <group {...props} dispose={null} ref={room}>
      <mesh geometry={nodes.bed_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-199, 100, 90]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.mattress_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-199, 100, 90]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.desk_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[200, -20, -250]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.pouf_legs_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-40, 100, -180]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.pouf_seat_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-40, 125, -180]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.cupboards_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[100, 520, -300]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.book_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-270, 474, -260]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.shoe_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-60, 0, -50]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.wardrobe_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[299, 100, -199]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.room_lowpoly_room_material_0.geometry} material={materials.room_material} position={[0, 300, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.blanket_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[0, 0.96, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.pillow_big_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.pillow_03_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.pillow_02_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.pillow_01_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.plant_big_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[32, 180, -233]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.laptop_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-240, 180, -260]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.sock_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[158.6, 78.06, -165.9]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.box_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-240, 0, -240]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.toy_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-245.71, 100.17, -196.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.plant_small_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-315, 200, -39]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.fan_02_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-153, 200, -320]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.timer_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-319, 215, 29]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.photos_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-99.54, 488.52, -295.39]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.shutter_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[0, 287, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.window_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[0, 300, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.fan_01_lowpoly_equipment_material_0.geometry} material={materials.equipment_material} position={[-153, 200, -320]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.ray_lowpoly_ray_material_0.geometry} material={materials.ray_material} position={[0, 300, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('./models/isoroom/isoroom-transformed.glb')
