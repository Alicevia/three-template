import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Tag } from '@arco-design/web-vue'

import { createApp } from 'vue'
const model = new THREE.Group()
const loader = new GLTFLoader()

const app = createApp(Tag, {}, 'OK')
const div = document.createElement('div')
app.mount(div)
document.body.appendChild(div)
console.log(div)

loader.load('/rice/model.gltf', (gltf) => {
	gltf.scene.traverse((obj) => {
		if (obj.type == 'Mesh') {
			obj.material = new THREE.MeshLambertMaterial({
				map: obj.material.map,
				color: obj.material.color,
			})
		}
	})
	// gltf.outputColorSpace = THREE.SRGBColorSpace
	model.add(gltf.scene)
	console.log(gltf)
})

export { model }
