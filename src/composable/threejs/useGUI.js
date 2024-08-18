import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js'

export const useGui = () => {
	const gui = new GUI()
	return { gui }
}
