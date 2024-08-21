import * as THREE from 'three'
import { CSS2DRenderer } from 'three/examples/jsm/Addons.js'

const renderer = new THREE.WebGLRenderer({
	antialias: true,
})
renderer.setPixelRatio(window.devicePixelRatio) //防止输出模糊
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.setClearColor(0x005577, 1)

const labelRenderer = new CSS2DRenderer()
labelRenderer.domElement.style.position = 'absolute'
labelRenderer.domElement.style.top = '0px'
labelRenderer.domElement.style.left = '0px'
labelRenderer.domElement.style.pointerEvents = 'none'

export { renderer, labelRenderer }
