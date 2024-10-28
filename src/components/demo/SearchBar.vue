<script setup lang="ts">
defineProps<{
  modelValue: string;
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>()
</script>

<template>
  <div class="search-container">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      placeholder="Rechercher une tâche..."
      class="search-input"
    />
  </div>
</template>

<style scoped>
.search-container {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
}
</style>