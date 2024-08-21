import { CSS2DObject } from 'three/examples/jsm/Addons.js'

export const createCSS2DObject = () => {
	const container = document.createElement('div')
	container.style.pointerEvents = 'none'

	const css2Obj = new CSS2DObject(container)

	return { container, css2Obj }
}
