<style lang="scss" scoped>
@import url('./FormComponentStyles.scss');
</style>
<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
const privacyPolicy = ref(false)
const formHandler = () => {
  if (!privacyPolicy.value) {
    alert('Please accept the privacy policy')
    return
  }
  console.log(name.value, email.value, message.value)
  fetch('http://localhost:3000/', {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error('Error:', error))
}
</script>

<template>
  <form @submit.prevent="formHandler">
    <label for="name">Name:</label>
    <input type="text" v-model="name" required />
    <label for="email">Email:</label>
    <input type="email" v-model="email" required />
    <label for="message">Message:</label>
    <textarea v-model="message" required></textarea>
    <label for="file">File:</label>
    <input type="file" name="file" />
    <label for="privacyPolicy">Privacy Policy:</label>
    <input type="checkbox" v-model="privacyPolicy" />
    <input class="submit" type="submit" value="Submit" />
  </form>
</template>
