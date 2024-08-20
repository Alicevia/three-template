<template>
  <div ref="root" class="three-container"></div>
</template>

<script setup>
import { ref, } from 'vue'
import { useStats, useOrbitControls, useGui, useThree } from '../../composable'
import { scene, renderer, camera, css2DRenderer } from './module'
const root = ref()
const { stats } = useStats(root)
const { controls } = useOrbitControls(renderer, scene, camera)
const { gui } = useGui({ camera, controls })

useThree(root, {
  scene,
  renderer,
  css2DRenderer,
  camera,
  onLoop () {
    stats.update()
  }
})





</script>
<style scoped>
.three-container {
  height: 100%;
  width: 100%;
}
</style>