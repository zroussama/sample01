<script setup lang="ts">
const contacts = [
  {
    name: 'GitHub',
    url: 'https://github.com/zroussama',
    icon: '📚'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/zroussama',
    icon: '💼'
  },
  {
    name: 'Smile Montpellier',
    url: 'https://smile.eu/fr/agences/montpellier',
    icon: '🏢'
  }
]
</script>

<template>
  <footer class="contact">
    <h2>Contact</h2>
    <div class="contact-links">
      <a 
        v-for="contact in contacts" 
        :key="contact.name"
        :href="contact.url" 
        target="_blank" 
        rel="noopener"
        class="contact-link"
      >
        <span class="icon">{{ contact.icon }}</span>
        {{ contact.name }}
      </a>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 12px;
}

h2 {
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-link {
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.icon {
  font-size: 1.2rem;
}
</style>