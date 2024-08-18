import { OrbitControls } from 'three/examples/jsm/Addons.js'

export const useOrbitControls = (renderer, scene, camera) => {
	const controls = new OrbitControls(camera, renderer.domElement)
	controls.addEventListener('change', () => {
		renderer.render(scene, camera)
	})
	return { controls }
}
