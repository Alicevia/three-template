import { useElementSize, watchDebounced } from '@vueuse/core/index.cjs'
import { computed, toRef, watchEffect } from 'vue'

export const useThree = (root, { renderer, camera, scene, onLoop }) => {
	root = toRef(root)
	const { width, height } = useElementSize(root)
	watchEffect(() => {
		if (root.value) {
			root.value.appendChild(renderer.domElement)
		}
	})
	const aspect = computed(() => width.value / height.value)
	const update = () => {
		renderer.setSize(width.value, height.value)

		camera.aspect = aspect.value
		camera.updateProjectionMatrix()
	}
	watchDebounced(width, update, { debounce: 1 })
	const loop = () => {
		onLoop?.()
		renderer.render(scene, camera)
		requestAnimationFrame(loop)
	}
	loop()
}
