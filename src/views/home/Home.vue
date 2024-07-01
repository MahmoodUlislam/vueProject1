<style lang="scss" scoped>
@import url('./HomeStyles.scss');
</style>
<script setup>
import { ref } from 'vue'
const msg = ref('Hello, VHH!')
</script>

<template>
  <div class="container">
    <div class="greetings">
      {{ msg }}
    </div>
  </div>
</template>
