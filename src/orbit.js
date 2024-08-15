import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const createOrb = (c, d) => {
	const orb = new OrbitControls(c, d)
	return orb
}
