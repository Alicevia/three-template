<template>
  <div ref="root" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, watchEffect, shallowRef, toRef, watch } from 'vue'
import { useStats, useOrbitControls, useGui, useRayChoose } from '../../composable'
import { usePhone } from './module'


const root = ref()
usePhone(root)






</script>
<style scoped>
.three-container {
  position: relative;
  height: 100%;
  width: 100%;

}
</style>