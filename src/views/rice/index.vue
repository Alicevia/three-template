<template>
  <div ref="root" class="three-container">
    <div class="absolute ">
      <a-button>切换</a-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStats, useOrbitControls, useGui, } from '../../composable'
import { useRiceThree } from './module'
import { createCard } from './module/card'
const root = ref()
const { loop, scene, camera, renderer, } = useRiceThree(root)
// const { stats } = useStats(root)
const { controls } = useOrbitControls(renderer, scene, camera)
const { gui } = useGui(root, { camera, controls })


onMounted(loop)

</script>
<style scoped>
.three-container {
  position: relative;
  height: 100%;
  width: 100%;

}
</style>