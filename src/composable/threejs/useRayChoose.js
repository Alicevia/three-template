import * as THREE from 'three'
import { useMouseInElement, useEventListener } from '@vueuse/core'
import { toRef, ref } from 'vue'
export const useRayChoose = (root, data, camera) => {
	data = toRef(data)
	root = toRef(root)
	const { elementWidth, elementHeight, elementX, elementY } =
		useMouseInElement(root)
	const ray = new THREE.Raycaster()
	const pointer = new THREE.Vector2()
	const current = ref()

	useEventListener(root, 'click', (e) => {
		pointer.x = (elementX.value / elementWidth.value) * 2 - 1
		pointer.y = -(elementY.value / elementHeight.value) * 2 + 1
		ray.setFromCamera(pointer, camera)
		const intersects = ray.intersectObjects(data.value)
		console.log(intersects)
		if (intersects.length > 0) {
			current.value = intersects.at(0)
		} else {
			current.value = undefined
		}
	})

	return { pointer, current }
}
