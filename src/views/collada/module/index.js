import * as THREE from 'three'
import { ref, onMounted, watchEffect, computed, toRef, watch } from 'vue'
import { useElementSize, watchDebounced } from '@vueuse/core'
import { setupLight } from './light'
import { setupModel } from './model'
import { setupCamera } from './camera'
import { setupRenderer } from './renderer'
import { useGui, useOrbitControls } from '../../../composable'

const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(115)
scene.add(axesHelper)
const { dl, dl2, ambient } = setupLight()
scene.add(dl, dl2, ambient)
let s
setupModel().then((m) => {
	m.scene.scale.set(14, 14, 14)
	s = m.scene
	// s.add(axesHelper)
	scene.add(m.scene)
})
const { camera } = setupCamera()
const { renderer, css2DRenderer } = setupRenderer()

export const useCollada = (root) => {
	root = toRef(root)
	const { controls } = useOrbitControls(renderer, scene, camera)

	useGui(root, { camera, controls })
	const { width, height } = useElementSize(root)

	const aspect = computed(() => width.value / height.value)
	const update = () => {
		camera.aspect = aspect.value
		camera.updateProjectionMatrix()
		renderer.setSize(width.value, height.value)
		css2DRenderer.setSize(width.value, height.value)
	}
	watchDebounced(width, update, { debounce: 1 })

	const loop = () => {
		// s?.rotateZ(0.01)
		renderer.render(scene, camera)
		css2DRenderer.render(scene, camera)
		requestAnimationFrame(loop)
	}

	onMounted(() => {
		root.value.appendChild(renderer.domElement)
		root.value.appendChild(css2DRenderer.domElement)
	})
	loop()
	return { loop, scene, camera, renderer, css2DRenderer }
}
