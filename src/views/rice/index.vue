<template>
  <div ref="root" class="three-container">
    <div class="absolute ">
      <a-button>切换</a-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, shallowRef } from 'vue'
import { useStats, useOrbitControls, useGui, useRayChoose } from '../../composable'
import { useRiceThree, granary } from './module'
import { createCard } from './components/card'
import * as THREE from 'three'
const root = ref()
const { loop, scene, camera, renderer, } = useRiceThree(root)

// const { stats } = useStats(root)
const { controls } = useOrbitControls(renderer, scene, camera)
const { gui } = useGui(root, { camera, controls })

const cardShallowRef = shallowRef()
const current = useRayChoose(root, granary, camera)
watchEffect(() => {
  // 更新渲染
  if (current.value) {
    if (!cardShallowRef.value) {
      cardShallowRef.value = createCard()
      scene.add(cardShallowRef.value)
    }

    cardShallowRef.value.position.set(current.value.point.copy(new THREE.Vector3()))
    console.log(current.value.point)

  }
})



onMounted(loop)

</script>
<style scoped>
.three-container {
  position: relative;
  height: 100%;
  width: 100%;

}
</style>