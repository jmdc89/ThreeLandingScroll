
function App() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default App;
