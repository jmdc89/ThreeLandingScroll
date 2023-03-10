import { RoundedBox, ScrollControls, Scroll } from "@react-three/drei";


function App() {

  return (
    <>
      <color attach="background" args={["#333333"]} />

      <ScrollControls pages={3} damping={0.1}>

        <Scroll>

        </Scroll>

        <Scroll html>

        </Scroll>

      </ScrollControls>

    </>
  );
}

export default App;
