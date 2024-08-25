import * as THREE from 'three'

export const setupCamera = () => {
	const camera = new THREE.PerspectiveCamera(30, 1, 1, 3000)
	camera.position.set(289, 175, 180)
	camera.lookAt(0, 0, 0)
	return { camera }
}
