import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { createTag } from './tag'
import { shallowRef } from 'vue'

const model = new THREE.Group()
const loader = new GLTFLoader()
const granary = []
loader.load('/rice/model.gltf', (gltf) => {
	gltf.scene.traverse((obj) => {
		if (obj.type == 'Mesh') {
			obj.material = new THREE.MeshLambertMaterial({
				map: obj.material.map,
				color: obj.material.color,
			})
		}
	})
	const group = gltf.scene.getObjectByName('粮仓')
	group.traverse((item) => {
		if (item.type == 'Mesh') {
			granary.push(item)
			const label = createTag(item.name)
			const pos = item.getWorldPosition(new THREE.Vector3())
			if (item.parent.name == '立筒仓') {
				pos.y += 36
			} else if (item.parent.name == '浅圆仓') {
				pos.y += 20
			} else if (item.parent.name == '平房仓') {
				pos.y += 17
			}
			label.position.copy(pos)
			model.add(label)
		}
	})
	// gltf.outputColorSpace = THREE.SRGBColorSpace
	model.add(gltf.scene)
})
export { model, granary }
