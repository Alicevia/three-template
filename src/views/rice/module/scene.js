import * as THREE from 'three'
import { ambient, directionalLight } from './light'
import { model } from './model'
const axesHelper = new THREE.AxesHelper(100)

const scene = new THREE.Scene()

directionalLight.target = model

scene.add(ambient)
scene.add(directionalLight)
scene.add(model)

scene.add(axesHelper)

export { scene, ambient, directionalLight, model }
