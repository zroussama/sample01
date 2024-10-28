<script setup lang="ts">
import { useAnimation } from '../composables/useAnimation'

defineProps<{
  name: string;
  title: string;
  description: string;
}>()

const { target, isVisible } = useAnimation()
</script>

<template>
  <header ref="target" class="header" :class="{ 'animate-in': isVisible }">
    <div class="header-content">
      <div class="profile-image">
        <img src="https://picsum.photos/200" alt="Profile" />
      </div>
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
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.profile-image {
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.animate-in .profile-image {
  transform: scale(1);
  opacity: 1;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.animate-in h1 {
  opacity: 1;
  transform: translateY(0);
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
}

.animate-in .title {
  opacity: 0.9;
  transform: translateY(0);
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
}

.animate-in .description {
  opacity: 0.8;
  transform: translateY(0);
}
</style>