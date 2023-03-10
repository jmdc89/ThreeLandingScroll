import { ScrollControls, Scroll } from "@react-three/drei";


function App() {

  return (
    <>
      <color attach="background" args={["#333333"]} />

      <ScrollControls pages={6} damping={0.1}>

        <Scroll>

        </Scroll>

        <Scroll html style={{ width: '100%' }}>

          <h1
            className='title text-gray-400 text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl flex justify-center h-screen mt-5'>
            PHANTOM
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto text-center py-16 lg:py-24 xl:py-32" style={{ position: "absolute", top: "132vh" }}>
            <div className="mx-auto">
              <h2 className="text-lg lg:text-2xl mb-2">Be a Man of the Future.</h2>
              <p className="max-w-2xl mb-4 px-10">Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Read more</button>
            </div>
          </div>


          <section className="flex flex-col md:flex-row-reverse justify-between items-center py-16 lg:py-24 xl:py-16 max-w-screen-xl mx-auto" style={{ position: "absolute", top: "230vh" }}>
            <div className="flex flex-col justify-center px-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Tech-Savvy Side</h2>
              <p className="mb-6">Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Read more</button>
            </div>
            <div className="bg-cover bg-center rounded-lg md:w-1/2 lg:w-5/12" style={{ backgroundImage: "url('/image.png')" }}></div>
          </section>

          <h2 className="text-center text-3xl font-bold py-16 lg:py-24 xl:py-32" style={{ position: "absolute", top: "350vh", left: "35%" }}>Cutting-Edge of Grooming</h2>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" style={{ position: "absolute", top: "590vh", left: "45%" }}>Buy now</button>



        </Scroll>

      </ScrollControls>

    </>
  );
}

export default App;
