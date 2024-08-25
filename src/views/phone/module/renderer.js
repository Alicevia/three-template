import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/Addons.js'

export const setupRenderer = () => {
	const renderer = new THREE.WebGLRenderer({
		antialias: true,
	})
	renderer.setPixelRatio(window.devicePixelRatio) //防止输出模糊
	renderer.outputColorSpace = THREE.SRGBColorSpace
	renderer.setClearColor(0x005577, 1)

	const css2DRenderer = new CSS2DRenderer()
	css2DRenderer.domElement.style.position = 'absolute'
	css2DRenderer.domElement.style.top = '0px'
	css2DRenderer.domElement.style.left = '0px'
	css2DRenderer.domElement.style.pointerEvents = 'none'

	return { renderer, css2DRenderer }
}
