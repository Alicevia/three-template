<template>
  <div ref="root" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useElementSize, useEventListener } from '@vueuse/core'
import * as THREE from 'three'

const root = ref()
const { width, height } = useElementSize(root)

const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)
const geometry = new THREE.BoxGeometry(100, 100, 100)

const material = new THREE.MeshBasicMaterial({
  color: 'pink',
})

const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)

const aspect = computed(() => width.value / height.value)
const camera = new THREE.PerspectiveCamera(30, 1, 1, 3000)
camera.position.set(200, 200, 200)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()


const update = () => {
  renderer.setSize(width.value, height.value)
  camera.aspect = aspect.value
  camera.updateProjectionMatrix()
}

const loop = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
loop()
onMounted(() => {
  root.value.appendChild(renderer.domElement)
  update()
})

window.onresize = update

</script>
<style scoped>
.three-container {
  height: 100%;
  width: 100%;
}
</style>