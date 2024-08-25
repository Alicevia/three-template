import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const loader = new GLTFLoader()
const textureCube = new THREE.CubeTextureLoader()
	.setPath() //环境贴图基础地址
	.load() //六张贴图 名称 x正负 y正负 z正负

export const setupModel = async () => {
	return new Promise((resolve) => {
		loader.load('/public/rice/model.gltf', (gltf) => {
			const mesh = gltf.scene.getObjectByName('手机')
			const textLoader = new THREE.TextureLoader()
			mesh.material = new THREE.MeshStandardMaterial({
				metalness: 1,
				roughness: 1,
				// map:textLoader('')//颜色贴图
				// roughnessMap:textLoader('')//粗糙度贴图
				// metalnessMap 金属贴图
				// alphaMap  阿尔法通道 半透明
				// normalMap 发现贴图
				// envMap:textureCube//环境贴图
				envMapIntensity: 0.9, //环境贴图影响程度
			})
			mesh.material.map.filpY = false
			mesh.material.roughnessMap.filpY = false
			mesh.material.metalnessMap.filpY = false
			mesh.material.normalMap.filpY = false
			mesh.material.alphaMap.filpY = false
			resolve(gltf)
		})
	})
}
