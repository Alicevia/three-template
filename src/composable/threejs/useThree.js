import { useElementSize } from '@vueuse/core/index.cjs'
import { toRef, watch, watchEffect } from 'vue'

export const useThree = (root, { renderer, camera, scene, onLoop }) => {
	root = toRef(root)
	const { width, height } = useElementSize(root)
	watchEffect(() => {
		if (root.value) {
			root.value.appendChild(renderer.domElement)
		}
	})

	const update = () => {
		renderer.setSize(width.value, height.value)
		camera.aspect = aspect.value
		camera.updateProjectionMatrix()
	}
	watchDebounced(width, update, { debounce: 1 })
	const loop = () => {
		onLoop?.()
		renderer.render(scene, camera)
		stats.update()
		requestAnimationFrame(loop)
	}
	loop()
}
