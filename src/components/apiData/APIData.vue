<style lang="scss" scoped>
@import url('./APIDataStyles.scss');
</style>
<script setup>
import { ref } from 'vue'

const data = ref(null)
const error = ref(null)
const loading = ref(false)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data.value = await response.json()
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <h1 class="green">{{ msg }}</h1>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else-if="data">
      <pre>{{ data }}</pre>
    </div>
    <div v-else>No data</div>
  </div>
</template>
