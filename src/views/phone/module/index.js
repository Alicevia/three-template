import * as THREE from 'three'
import { setupLight } from './light'
import { setupModel } from './model'
import { setupCamera } from './camera'
import { setupRenderer } from './renderer'

const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(250)
scene.add(axesHelper)
const { dl, dl2, ambient } = setupLight()
scene.add(dl, dl2, ambient)

setupModel().then((gltf) => {
	scene.add(gltf.scene)
})
const { camera } = setupCamera()
const { renderer, css2DRenderer } = setupRenderer()

export const usePhone = (root) => {
	root = toRef(root)
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
		renderer.render(scene, camera)
		css2DRenderer.render(scene, camera)
		requestAnimationFrame(loop)
	}

	onMounted(() => {
		root.value.appendChild(renderer.domElement)
		root.value.appendChild(css2DRenderer.domElement)
	})
	return { loop, scene, camera, renderer, css2DRenderer }
}
