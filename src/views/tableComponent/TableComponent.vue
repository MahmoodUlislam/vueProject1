<style scoped>
@import url('./TableStyles.scss');
</style>
<script setup>
import APIData from '@/components/apiData/APIData.vue'
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const searchParams = ref('')
const filteredData = ref([])
filteredData.value = props.data.items
const searchHandler = (e) => {
  searchParams.value = e.target.value
  filteredData.value = props.data.items.filter((item) => {
    return item.name.toLowerCase().includes(searchParams.value.toLowerCase())
  })
}
</script>

<template>
  <div class="greetings">
    <APIData msg="API Data Component: greeting message" />
    <h1 class="green">{{ msg }}</h1>
  </div>

  <input
    @input="searchHandler"
    placeholder="type name for search"
    type="text"
    v-model="searchParams"
  />

  <table>
    <thead>
      <tr>
        <th v-for="item in $props.data.headers" :key="item">
          {{ item.text }}
        </th>
      </tr>
    </thead>
    <tbody v-if="filteredData.length">
      <tr v-for="item in filteredData" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
      </tr>
    </tbody>
  </table>
  <div class="noData" v-if="!filteredData.length">No data found</div>
</template>
