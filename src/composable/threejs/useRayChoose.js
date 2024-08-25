import * as THREE from 'three'
import { useMouseInElement, useEventListener } from '@vueuse/core'
import { toRef, ref, shallowRef } from 'vue'
export const useRayChoose = (root, data, camera) => {
	data = toRef(data)
	root = toRef(root)
	const { elementWidth, elementHeight, elementX, elementY } =
		useMouseInElement(root)
	const ray = new THREE.Raycaster()
	const pointer = new THREE.Vector2()
	const current = shallowRef()

	useEventListener(root, 'click', (e) => {
		pointer.x = (elementX.value / elementWidth.value) * 2 - 1
		pointer.y = -(elementY.value / elementHeight.value) * 2 + 1
		ray.setFromCamera(pointer, camera)
		const intersects = ray.intersectObjects(data.value)
		if (intersects.length > 0) {
			current.value = intersects.at(0)
			console.log(intersects)
		} else {
			current.value = undefined
		}
	})

	return current
}
