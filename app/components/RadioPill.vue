<template>
  <div>
    <input
      type="radio"
      :name="name"
      :value="value"
      :id="`${name}-${value}`"
      :checked="isChecked ?? false"
      class="hidden peer"
      @change="$emit('updatePill', value)"
    />
    <label
      :for="`${name}-${value}`"
      class="flex items-center justify-between bg-beige border border-beige rounded-full px-4 py-2 cursor-pointer ease-in-out duration-200 peer-checked:border-black"
    >
      <p>{{ label }}</p>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  value: string;
  label: string;
  isChecked?: boolean;
}>();
</script>
