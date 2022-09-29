import { TextureLoader } from 'three'
import { NearestFilter, RepeatWrapping } from "three"

import {
    dirtImg,
    logImg,
    grassImg,
    glassImg,
    woodImg
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.repeat.set(1024,1024)

export{
    dirtTexture,
    logTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    groundTexture
}