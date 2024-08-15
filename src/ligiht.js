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

export const createLight = (scene) => {
	const pointLight = new DirectionalLight(0xffffff, 1.0)
	pointLight.position.set(400, 200, 300)
	scene.add(pointLight)
	const amb = new AmbientLight(0xfffff, 0.4)
	scene.add(amb)
}
