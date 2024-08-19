<template>
  <div ref="root" class="three-container"></div>
</template>

<script setup>
import { ref, } from 'vue'
import { useStats, useOrbitControls, useGui, useThree } from '../../composable'
import { scene, renderer, camera } from './module'
const root = ref()
const { stats } = useStats(root)
const { controls } = useOrbitControls(renderer, scene, camera)
const { gui } = useGui()

useThree(root, {
  scene,
  renderer,
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