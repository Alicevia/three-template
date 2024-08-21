import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { onMounted } from 'vue'

export const useGui = (root, { camera, controls } = {}) => {
	const gui = new GUI()

	if (camera) {
		const position = {
			x: undefined,
			y: undefined,
			z: undefined,
		}
		Object.keys(position).forEach((k) => {
			position[k] = gui.add(camera.position, k)
		})
		if (!controls) return
		controls.addEventListener('change', () => {
			Object.keys(position).forEach((k) => {
				position[k].setValue(camera.position[k])
			})
		})
	}
	onMounted(() => {
		gui.domElement.style.position = 'absolute'
		gui.domElement.style.right = 0
		root.value.appendChild(gui.domElement)
	})
	return { gui }
}
