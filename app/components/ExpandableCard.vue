<template>
  <div class="bg-white p-4 rounded-2xl">
    <p class="font-bold">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
const isExpanded = ref(false);
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
