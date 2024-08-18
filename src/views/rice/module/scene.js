import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const model = new THREE.Group()

const loader = new GLTFLoader()

loader.load('/public/rice/model.gltf', (obj) => {
	console.log(obj)
})

export { model }
