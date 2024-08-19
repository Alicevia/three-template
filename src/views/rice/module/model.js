import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const model = new THREE.Group()
const loader = new GLTFLoader()

loader.load('/rice/model.gltf', (gltf) => {
	model.add(gltf.scene)
	console.log(gltf)
})

export { model }
