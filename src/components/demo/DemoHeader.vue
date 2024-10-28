<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>()
</script>

<template>
  <header class="demo-header">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </header>
</template>

<style scoped>
.demo-header {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  color: #42b883;
  margin-bottom: 1rem;
  font-size: 2rem;
}

p {
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
</style>