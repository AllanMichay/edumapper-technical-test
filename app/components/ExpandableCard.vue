<template>
  <div class="bg-white p-4 rounded-2xl relative">
    <button
      class="absolute top-4 right-4 text-black bg-white rounded-full size-5 flex justify-center items-center hover:bg-gray-200 transition-colors duration-200"
      @click="$emit('toggleExpand')"
      aria-label="Toggle expand"
    >
      <Close v-if="isExpanded" class="text-base" />
      <Edit v-else class="text-base text-transparent" />
    </button>
    <p
      :class="{
        'font-bold': !isCompleted,
        'text-sm text-gray': isCompleted,
      }"
    >
      {{ title }}
    </p>
    <p
      v-if="!isExpanded"
      :class="{
        'font-bold': isCompleted,
        'text-sm text-gray': !isCompleted,
      }"
    >
      {{ subtitle }}
    </p>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Close from '~/assets/icons/close.svg';
import Edit from '~/assets/icons/edit.svg';

withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
    isCompleted: boolean;
    isExpanded?: boolean;
  }>(),
  {
    isExpanded: false,
  },
);
defineEmits<{
  (e: 'toggleExpand'): void;
}>();
</script>
