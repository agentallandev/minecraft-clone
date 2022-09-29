import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV'
import { Cubes } from './components/Cubes';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[1024, 1024, 64]}/>
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'> + </div>
    </>
  );
}

export default App;
