<script setup lang="ts">
import DemoHeader from './DemoHeader.vue'
import TaskList from './TaskList.vue'
</script>

<template>
  <section class="project-demo">
    <DemoHeader
      title="Démo du Projet"
      description="Cette application de gestion de tâches a été développée comme exemple de mes compétences techniques, démontrant ma maîtrise des technologies modernes du web et des bonnes pratiques de développement. Elle utilise Vue 3, TypeScript, et intègre des fonctionnalités complètes de gestion d'état et de filtrage."
    />
    <TaskList />
  </section>
</template>

<style scoped>
.project-demo {
  margin: 4rem 0;
}
</style>