<script setup lang="ts">
import { useAnimation } from '../composables/useAnimation'

defineProps<{
  skills: {
    category: string;
    items: string[];
  }[];
}>()

const { target, isVisible } = useAnimation()

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Langages & Frameworks': '💻',
    'Infrastructure & DevOps': '🚀',
    'Base de données & Search': '🗄️',
    'Solutions ECM': '📚'
  }
  return icons[category] || '🔧'
}
</script>

<template>
  <section ref="target" class="skills" :class="{ 'animate-in': isVisible }">
    <h2>Compétences Techniques</h2>
    <div class="skills-container">
      <div v-for="(category, index) in skills" :key="index" class="skill-category">
        <div class="category-header">
          <div class="category-icon">{{ getCategoryIcon(category.category) }}</div>
          <h3>{{ category.category }}</h3>
        </div>
        <div class="skills-grid">
          <span v-for="(skill, skillIndex) in category.items" 
                :key="skill" 
                class="skill-tag"
                :style="{ transitionDelay: `${skillIndex * 0.1}s` }">
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.skills.animate-in {
  opacity: 1;
  transform: translateY(0);
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

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.category-icon {
  font-size: 1.5rem;
  background: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-in .category-icon {
  transform: scale(1);
  opacity: 1;
}

.skill-category h3 {
  color: #42b883;
  margin: 0;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-in .skill-category h3 {
  opacity: 1;
  transform: translateX(0);
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
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(20px);
}

.animate-in .skill-tag {
  opacity: 1;
  transform: translateY(0);
}

.skill-tag:hover {
  background: #42b883;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .skills {
    padding: 1rem;
  }
  
  .skills-grid {
    gap: 0.5rem;
  }
  
  .skill-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>