<script setup lang="ts">
import Header from './Header.vue'
import SkillsSection from './SkillsSection.vue'
import ProjectSection from './ProjectSection.vue'
import ContactSection from './ContactSection.vue'
import ProjectDemo from './demo/ProjectDemo.vue'

const skills = [
  {
    category: 'Langages & Frameworks',
    items: ['Java', 'Spring Boot', 'TypeScript', 'Vue.js', 'React']
  },
  {
    category: 'Infrastructure & DevOps',
    items: ['Docker', 'Jenkins', 'GitLab CI', 'Kafka', 'RabbitMQ']
  },
  {
    category: 'Base de données & Search',
    items: ['PostgreSQL', 'Elasticsearch']
  },
  {
    category: 'Solutions ECM',
    items: ['Alfresco', 'Nuxeo', 'Liferay']
  }
]

const project = {
  title: 'Portail de Gestion des Données Métier',
  description: 'Application web moderne pour la transition digitale, permettant la gestion et l\'analyse des données métier en temps réel. Développée dans le cadre de ma candidature pour le stage chez Smile - Centre de compétences Business Apps.',
  technologies: ['Spring Boot', 'Vue.js', 'PostgreSQL', 'Docker', 'Kafka'],
  features: [
    'Authentification et autorisation sécurisées',
    'Dashboard analytique en temps réel',
    'Gestion complète des données métier (CRUD)',
    'Pipeline de données avec Kafka',
    'Export de rapports personnalisés',
    'Interface responsive et moderne'
  ]
}
</script>

<template>
  <div class="portfolio">
    <Header 
      name="Oussama Zribi"
      title="Développeur Full Stack"
      description="Candidat pour le Stage de Développeur chez Smile - Centre de compétences Business Apps (2024-2025)"
    />
    <main class="content">
      <SkillsSection :skills="skills" />
      <ProjectSection :project="project" />
      <ProjectDemo />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
.portfolio {
  min-height: 100vh;
  background: white;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .content {
    padding: 0 1rem;
  }
}
</style>