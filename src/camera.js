import {
	BoxGeometry,
	Mesh,
	MeshBasicMaterial,
	MeshLambertMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
	AmbientLight,
	PointLight,
	DirectionalLight,
} from 'three'

export const createPreview = () => {
	const camera = new PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	)
	camera.position.set(100, 100, 100)
	camera.lookAt(0, 0, 0)

	const renderer = new WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
	return { camera, renderer }
}
