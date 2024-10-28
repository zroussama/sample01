<script setup lang="ts">
import { useAnimation } from '../composables/useAnimation'

defineProps<{
  project: {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
  };
}>()

const { target, isVisible } = useAnimation()
</script>

<template>
  <section ref="target" class="project" :class="{ 'animate-in': isVisible }">
    <h2>Projet Principal</h2>
    <div class="project-card">
      <div class="project-image">
        <img src="https://picsum.photos/800/400" alt="Project Screenshot" />
      </div>
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
        
        <div class="tech-stack">
          <h4>Technologies</h4>
          <div class="tech-tags">
            <span v-for="(tech, index) in project.technologies" 
                  :key="tech" 
                  class="tech-tag"
                  :style="{ transitionDelay: `${index * 0.1}s` }">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="features">
          <h4>Fonctionnalités</h4>
          <ul>
            <li v-for="(feature, index) in project.features" 
                :key="feature"
                :style="{ transitionDelay: `${index * 0.1}s` }">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.project.animate-in {
  opacity: 1;
  transform: translateY(0);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-in .project-image {
  opacity: 1;
  transform: scale(1);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image img:hover {
  transform: scale(1.05);
}

.project-content {
  padding: 2rem;
}

.description {
  color: #666;
  line-height: 1.6;
  margin: 1rem 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-in .description {
  opacity: 1;
  transform: translateY(0);
}

.tech-stack, .features {
  margin-top: 2rem;
}

h4 {
  color: #42b883;
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-tag {
  background: #f8f9fa;
  color: #2c3e50;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
}

.animate-in .tech-tag {
  opacity: 1;
  transform: translateY(0);
}

.tech-tag:hover {
  background: #42b883;
  color: white;
  transform: translateY(-2px);
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-in .features li {
  opacity: 1;
  transform: translateX(0);
}

.features li::before {
  content: "→";
  color: #42b883;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .project-image {
    height: 300px;
  }
}
</style>