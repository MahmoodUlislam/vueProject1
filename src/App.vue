<style scoped>
@import url('./AppStyles.scss');
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <RouterLink class="router-link" to="/">Home</RouterLink>
        <RouterLink class="router-link" to="/table">table</RouterLink>
        <RouterLink class="router-link" to="/form">form</RouterLink>
      </nav>
    </header>

    <RouterView class="renderBody" />
  </div>
</template>
