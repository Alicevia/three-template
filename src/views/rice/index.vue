<template>
  <div ref="root" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, computed, reactive, watch, watchPostEffect, nextTick } from 'vue'
import { useElementSize, watchDebounced, useThrottleFn } from '@vueuse/core'
import * as THREE from 'three'
import { useStats, useOrbitControls, useGui } from '@/composable'
import { model } from './module'
console.log(model)
const root = ref()
const { width, height } = useElementSize(root)
const { stats } = useStats(root)
const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)



const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshLambertMaterial({
})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)

const ambient = new THREE.AmbientLight(0xffffff, 0.4)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(80, 100, 50)
directionalLight.target = mesh
scene.add(ambient)
scene.add(directionalLight)

const aspect = computed(() => width.value / height.value)
const camera = new THREE.PerspectiveCamera(30, 1, 1, 3000)
camera.position.set(200, 200, 200)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()
const { controls } = useOrbitControls(renderer, scene, camera)
const { gui } = useGui()
const update = () => {
  renderer.setSize(width.value, height.value)
  camera.aspect = aspect.value
  camera.updateProjectionMatrix()
}


watchDebounced(
  width,
  update,
  { debounce: 1, maxWait: 1000 },
)
const loop = () => {
  renderer.render(scene, camera)
  stats.update()
  requestAnimationFrame(loop)
}
loop()
onMounted(() => {
  root.value.appendChild(renderer.domElement)
  update()
})


</script>
<style scoped>
.three-container {
  height: 100%;
  width: 100%;
}
</style>