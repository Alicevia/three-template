import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { createTag } from './tag.jsx'
import modelData from '/public/rice/messageData.js'
const model = new THREE.Group()
const loader = new GLTFLoader()
const granary = []

// const loadModel = async () => {
// 	return await new Promise((resolve) => {
// 		loader.load('/rice/model.gltf', (gltf) => {
// 			resolve(gltf)
// 		})
// 	})
// }

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

export const getMeshTopVector3 = (item) => {
	const pos = item.getWorldPosition(new THREE.Vector3())
	if (item.parent.name == '立筒仓') {
		pos.y += 36
	} else if (item.parent.name == '浅圆仓') {
		pos.y += 20
	} else if (item.parent.name == '平房仓') {
		console.log(item)

		pos.y += 17
	}
	return pos
}

export { model, granary, modelData }
