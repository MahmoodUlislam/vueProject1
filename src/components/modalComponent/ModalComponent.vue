<style lang="scss" scoped>
@import url('./ModalComponentStyles.scss');
</style>
<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div v-if="show" class="modalContainer">
    <button @click="$emit('update:show', false)">X</button>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
