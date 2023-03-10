import { ScrollControls, Scroll } from "@react-three/drei";


function App() {

  return (
    <>
      <color attach="background" args={["#333333"]} />

      <ScrollControls pages={3} damping={0.1}>
        <Scroll>
        </Scroll>
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <h1>html in here (optional)</h1>
          <h1 style={{ top: '100vh' }}>second page</h1>
          <h1 style={{ top: '200vh' }}>third page</h1>
        </Scroll>
      </ScrollControls>

    </>
  );
}

export default App;
