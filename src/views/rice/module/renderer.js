import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer({
	antialias: true,
})
renderer.setPixelRatio(window.devicePixelRatio) //防止输出模糊
renderer.outputColorSpace = THREE.SRGBColorSpace
export { renderer }
