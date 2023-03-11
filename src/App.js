import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import { Robot } from "./components/Robot";
import { Room } from "./components/Room";

function App() {

  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />
      <ScrollControls pages={6} damping={0.1}>

        {/* <Robot scale={0.8}/> */}
        <Room scale={0.007}/>

        <Scroll>
        </Scroll>

        <Scroll html style={{ width: '100%' }}>

          <h1 className='title' style={{ color: '#cdcbca', position: 'absolute', top: `65vh`, left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>ROOM</h1>

          <div className='row' style={{ position: 'absolute', top: `132vh` }}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: '400px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh` }}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
              <button>Read more</button>
            </div>
          </div>

          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of Grooming</h2>

          <button style={{ position: 'absolute', top: `590vh`, left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>

        </Scroll>

      </ScrollControls>

    </>
  );
}

export default App;
