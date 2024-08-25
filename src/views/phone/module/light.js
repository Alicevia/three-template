import * as THREE from 'three'

export const setupLight = () => {
	const dl = new THREE.DirectionalLight(0xffffff, 0.8)
	dl.position.set(400, 200, 300)

	const dl2 = new THREE.DirectionalLight(0xffffff, 0.8)
	dl2.position.set(-400, -200, -300)

	const ambient = new THREE.AmbientLight(0xffffff, 1.9)

	return { dl, dl2, ambient }
}
