import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js'

export const useGui = ({ camera, controls } = {}) => {
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
	return { gui }
}
