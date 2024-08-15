import { AxesHelper } from 'three'

export const createAxes = (v) => {
	const axesHelper = new AxesHelper(v)
	return { axesHelper }
}
