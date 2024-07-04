<style lang="scss" scoped>
@import url('./HomeStyles.scss');
</style>
<script setup>
import ButtonComponent from '@/components/buttonCommon/ButtonComponent.vue'
import ModalComponent from '@/components/modalComponent/ModalComponent.vue'
import { ref } from 'vue'
const msg = ref('Hello, VHH!')

const show = ref(false)

const showModal = () => {
  show.value = true
}
</script>

<template>
  <div class="container">
    <div class="greetings">
      {{ msg }}
    </div>
    <ButtonComponent />

    <button @click="showModal">Show Modal</button>
    <ModalComponent :show="show" @update:show="show = $event">
      <h1>Information for modal</h1>
    </ModalComponent>
  </div>
</template>
