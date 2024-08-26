<template>
  <div ref="root" class="three-container">
    <div class="absolute ">
      <a-button>切换</a-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, shallowRef, computed, watch } from 'vue'
import { useStats, useOrbitControls, useGui, useRayChoose } from '../../composable'
import { useRiceThree, granary, modelData, createFlame, getMeshTopVector3 } from './module'
import { createCard } from './components/card.jsx'


const root = ref()
const { loop, scene, camera, renderer, } = useRiceThree(root)

// const { stats } = useStats(root)
const { controls } = useOrbitControls(renderer, scene, camera)
const { gui } = useGui(root, { camera, controls })

const cardShallowRef = shallowRef()
const current = useRayChoose(root, granary, camera)
const currentData = computed(() => {
  if (!current.value) return null
  return modelData[current.value.object.name]
})

watchEffect(() => {
  // 更新渲染
  if (current.value) {
    if (!cardShallowRef.value) {
      cardShallowRef.value = createCard(currentData)
      scene.add(cardShallowRef.value)
    }
    cardShallowRef.value.visible = true
    cardShallowRef.value.position.copy(current.value.point)
  } else {
    if (cardShallowRef.value) {
      cardShallowRef.value.visible = false
    }

  }
})


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
useFire()
onMounted(loop)

</script>
<style scoped>
.three-container {
  position: relative;
  height: 100%;
  width: 100%;

}
</style>../../composable/index.js./module/index.js