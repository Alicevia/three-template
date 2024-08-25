import { toRef, onMounted, computed } from 'vue'
import { useElementSize, watchDebounced } from '@vueuse/core'
import { scene } from './scene'
import { camera } from './camera'
import { renderer, labelRenderer } from './renderer'
import { useRayChoose } from '../../../composable/threejs/useRayChoose'
export { granary, modelData } from './model'
export * from './flame'
export { getMeshTopVector3 } from './scene'
export const useRiceThree = (root) => {
	root = toRef(root)
	const { width, height } = useElementSize(root)

	const aspect = computed(() => width.value / height.value)
	const update = () => {
		camera.aspect = aspect.value
		camera.updateProjectionMatrix()
		renderer.setSize(width.value, height.value)
		labelRenderer.setSize(width.value, height.value)
	}
	watchDebounced(width, update, { debounce: 1 })
	const loop = () => {
		renderer.render(scene, camera)
		labelRenderer.render(scene, camera)
		requestAnimationFrame(loop)
	}

	onMounted(() => {
		root.value.appendChild(renderer.domElement)
		root.value.appendChild(labelRenderer.domElement)
	})
	return { loop, scene, camera, renderer, labelRenderer }
}
