import { RoundedBox } from "@react-three/drei";

function App() {
  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={0.5} />
      <RoundedBox
        args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.05} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
      >
        <meshPhongMaterial color="red" />
      
      </RoundedBox>

    </>
  );
}

export default App;
