<template>
  <button
    class="py-2 px-3 rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-focus"
    :class="{
      'bg-transparent border border-gray text-gray cursor-not-allowed': isDisabled,
      'bg-black': color === 'black',
      'bg-white': color === 'white',
      'text-black': !isDisabled && color === 'white',
      'text-white': !isDisabled && color === 'black',
    }"
    :disabled="isDisabled"
    :type="type"
    aria-label="Button"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'black' | 'white';
    type?: 'button' | 'submit';
    isDisabled?: boolean;
  }>(),
  {
    color: 'white',
    type: 'button',
    isDisabled: false,
  },
);
</script>
