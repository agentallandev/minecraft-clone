import { usePlane } from "@react-three/cannon"
import { NearestFilter, RepeatWrapping } from "three"
import  { groundTexture } from '../images/textures'

const WORLD_SIZE = 1024

export const Ground = () => {
    const [ref] = usePlane (() => ({
        rotation: [-Math.PI/2, 0, 0], position: [0, 0.5, 0]

    }))   

    
        groundTexture.repeat.set(WORLD_SIZE,WORLD_SIZE)
        return (
            <mesh ref={ref}>
        <planeBufferGeometry attach='geometry' args={[WORLD_SIZE, WORLD_SIZE]} />
                <meshStandardMaterial attach='material' map={groundTexture} />
            </mesh>
        )
}
