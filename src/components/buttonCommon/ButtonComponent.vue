<style lang="scss" scoped>
@import url('./ButtonComponentStyles.scss');
</style>
<script setup>
import { computed } from 'vue'

const buttonClick = computed(() => {
  return console.log(1 + 1)
})
</script>

<template>
  <button @click="buttonClick" class="button">Console Output</button>
</template>
