import * as THREE from 'three'
import { ambient, directionalLight } from './light'
import { model, getMeshTopVector3 } from './model'
const axesHelper = new THREE.AxesHelper(100)

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0x005577, -100, 1000)
directionalLight.target = model

scene.add(ambient)
scene.add(directionalLight)
scene.add(model)

scene.add(axesHelper)

export { scene, ambient, directionalLight, model, getMeshTopVector3 }
