import { useElementSize, watchDebounced } from '@vueuse/core/index.cjs'
import { computed, toRef, watchEffect } from 'vue'

export const useThree = (
	root,
	{ renderer, css2DRenderer, camera, scene, onLoop }
) => {
	root = toRef(root)
	const { width, height } = useElementSize(root)
	watchEffect(() => {
		if (root.value) {
			root.value.appendChild(renderer.domElement)
			root.value.appendChild(css2DRenderer.domElement)
		}
	})
	const aspect = computed(() => width.value / height.value)
	const update = () => {
		camera.aspect = aspect.value
		camera.updateProjectionMatrix()
		renderer.setSize(width.value, height.value)
		css2DRenderer.setSize(width.value, height.value)
	}
	watchDebounced(width, update, { debounce: 1 })
	const loop = () => {
		onLoop?.()
		renderer.render(scene, camera)
		css2DRenderer.render(scene, camera)
		requestAnimationFrame(loop)
	}
	loop()
}
