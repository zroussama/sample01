<script setup lang="ts">
defineProps<{
  skills: {
    category: string;
    items: string[];
  }[];
}>()
</script>

<template>
  <section class="skills">
    <h2>Compétences Techniques</h2>
    <div class="skills-container">
      <div v-for="(category, index) in skills" :key="index" class="skill-category">
        <h3>{{ category.category }}</h3>
        <div class="skills-grid">
          <span v-for="skill in category.items" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 4rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.skills-container {
  display: grid;
  gap: 2rem;
}

.skill-category h3 {
  color: #42b883;
  margin-bottom: 1rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-tag {
  background: white;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 2px solid #42b883;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #42b883;
  color: white;
  transform: translateY(-2px);
}
</style>