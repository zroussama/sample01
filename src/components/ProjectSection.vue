<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
  };
}>()
</script>

<template>
  <section class="project">
    <h2>Projet Principal</h2>
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p class="description">{{ project.description }}</p>
      
      <div class="tech-stack">
        <h4>Technologies</h4>
        <div class="tech-tags">
          <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="features">
        <h4>Fonctionnalités</h4>
        <ul>
          <li v-for="feature in project.features" :key="feature">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  margin-bottom: 4rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.project-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.description {
  color: #666;
  line-height: 1.6;
  margin: 1rem 0;
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
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.features li::before {
  content: "→";
  color: #42b883;
  position: absolute;
  left: 0;
}
</style>