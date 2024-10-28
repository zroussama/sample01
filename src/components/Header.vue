<script setup lang="ts">
defineProps<{
  name: string;
  title: string;
  description: string;
}>()
</script>

<template>
  <header class="header">
    <div class="header-content">
      <h1>{{ name }}</h1>
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #42b883 0%, #347474 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 4rem;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
}
</style>