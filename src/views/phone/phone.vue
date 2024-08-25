<template>
  <div ref="root" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, watchEffect, shallowRef, computed, watch } from 'vue'
import { useStats, useOrbitControls, useGui, useRayChoose } from '../../composable'



const root = ref()



const useFire = () => {

  const fireArr = ref([])
  const fireMap = {}
  const getFireArr = () => {
    fireArr.value = ['P_05']
    setTimeout(() => {
      remove('P_05')
    }, 3000);
  }
  const remove = (name) => {
    fireArr.value = fireArr.value.filter(item => item != name)
    const flame = fireMap[name]
    flame.stop()
    scene.remove(flame)
    console.log(flame)

    delete fireMap[name]
  }
  watch(fireArr, v => {
    if (v.length) {
      v.forEach(name => {
        if (fireMap[name]) return
        const flame = createFlame(name)
        fireMap[name] = flame
        const mesh = scene.getObjectByName(name)
        const pos = getMeshTopVector3(mesh)
        flame.position.copy(pos)
        scene.add(flame)
      })
    }
  })
  setTimeout(() => {
    getFireArr()
  }, 1000);
  return { getFireArr }
}


</script>
<style scoped>
.three-container {
  position: relative;
  height: 100%;
  width: 100%;

}
</style>