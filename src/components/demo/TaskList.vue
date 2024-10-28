<script setup lang="ts">
import { ref, computed } from 'vue'
import TaskItem from './TaskItem.vue'
import SearchBar from './SearchBar.vue'

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const tasks = ref<Task[]>([
  { id: 1, title: 'Implémenter l\'authentification JWT', completed: true, priority: 'high' },
  { id: 2, title: 'Créer les APIs RESTful', completed: false, priority: 'high' },
  { id: 3, title: 'Configurer Elasticsearch', completed: false, priority: 'medium' },
  { id: 4, title: 'Mettre en place le pipeline Kafka', completed: false, priority: 'medium' },
  { id: 5, title: 'Documenter l\'API avec Swagger', completed: false, priority: 'low' },
])

const searchQuery = ref('')

const filteredTasks = computed(() => {
  return tasks.value.filter(task =>
    task.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const toggleTask = (id: number) => {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
  }
}

const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="task-list">
    <SearchBar v-model="searchQuery" />
    <div class="tasks">
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </div>
  </div>
</template>

<style scoped>
.task-list {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>