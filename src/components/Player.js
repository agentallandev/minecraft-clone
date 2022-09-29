import { useFrame, useThree} from "@react-three/fiber"
import { useEffect, useRef} from "react"
import { Vector3 } from "three"
import { useBox, useSphere } from "@react-three/cannon"
import { useKeyboard } from './hooks/useKeyboard'
import { Sphere } from "@react-three/drei"

const JUMP_FORCE = 3.5
const SPEED = 4
var SPEED_MULT = 1
var HEIGHT_MULT = 1

export const Player = () =>{

    const {moveForward, moveBackward, moveLeft, moveRight, jump, sprint, crouch} = useKeyboard()

    const {camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1.5, 0]
    }))

    const vel = useRef([0, 0, 0])
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])

    const pos = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    useFrame(() => {


        if(sprint){
            SPEED_MULT=1.5
            HEIGHT_MULT = 1
        }
        else if(crouch){
            SPEED_MULT = 0.75
            HEIGHT_MULT = 0.85
        }
        else{
            SPEED_MULT = 1
            HEIGHT_MULT = 1
        }

        camera.position.copy(new Vector3(pos.current[0], pos.current[1] * HEIGHT_MULT + .1, pos.current[2]))
    

        const direction = new Vector3()
        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0,    
        )

        direction.subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED*SPEED_MULT)
        .applyEuler(camera.rotation)

        api.velocity.set(direction.x, vel.current[1], direction.z)
        if(jump && Math.abs(vel.current[1]) < 0.006) {
            api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2])
        }
    })

    return(
        <mesh scale={[0.25, 1, 0.25]} ref={ref}>
        <boxBufferGeometry attach="geometry" />
        </mesh>
    )

    
}