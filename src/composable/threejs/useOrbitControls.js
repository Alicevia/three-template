import { OrbitControls } from 'three/examples/jsm/Addons.js'

export const useOrbitControls = (renderer, scene, camera) => {
	const controls = new OrbitControls(camera, renderer.domElement)
	controls.addEventListener('change', () => {
		renderer.render(scene, camera)
	})
	// controls.minDistance
	// controls.maxDistance
	// controls.minPolarAngle
	// controls.maxPolarAngle
	// controls.minAzimuthAngle
	// controls.maxAzimuthAngle
	return { controls }
}
