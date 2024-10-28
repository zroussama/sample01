<script setup lang="ts">
interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

defineProps<{
  task: Task;
}>()

const emit = defineEmits<{
  (e: 'toggle', id: number): void;
  (e: 'delete', id: number): void;
}>()
</script>

<template>
  <div class="task-item" :class="{ completed: task.completed }">
    <div class="task-content">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="emit('toggle', task.id)"
        class="task-checkbox"
      />
      <span class="task-title">{{ task.title }}</span>
      <span class="priority-badge" :class="task.priority">
        {{ task.priority }}
      </span>
    </div>
    <button @click="emit('delete', task.id)" class="delete-btn">
      Supprimer
    </button>
  </div>
</template>

<style scoped>
.task-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.task-checkbox {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
}

.task-title {
  font-size: 1rem;
  color: #2c3e50;
}

.completed .task-title {
  text-decoration: line-through;
  color: #9ca3af;
}

.priority-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.priority-badge.high {
  background: #fee2e2;
  color: #ef4444;
}

.priority-badge.medium {
  background: #fef3c7;
  color: #f59e0b;
}

.priority-badge.low {
  background: #dcfce7;
  color: #22c55e;
}

.delete-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.delete-btn:hover {
  background: #dc2626;
}
</style>