import { RoundedBox, ScrollControls, Scroll } from "@react-three/drei";


function App() {

  return (
    <>
      <color attach="background" args={["#333333"]} />

      <ScrollControls pages={3} damping={0.1}>

        <ambientLight intensity={0.5}/>
        <RoundedBox
          args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.05} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
        >
          <meshPhongMaterial color="red"/>
        </RoundedBox>
        
        <Scroll>

        </Scroll>

        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <h1>html in here (optional)</h1>
          <h1 style={{position:'absolute', top: '100vh' }}>second page</h1>
          <h1 style={{ position:'absolute', top: '200vh' }}>third page</h1>
        </Scroll>
      </ScrollControls>

    </>
  );
}

export default App;
