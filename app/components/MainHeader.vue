<template>
  <header
    class="flex items-center bg-beige fixed top-0 left-0 right-0 z-50 border-b border-main-border p-4"
  >
    <NuxtLink to="/" class="flex items-center">
      <Logo :fontControlled="false" class="h-7 w-auto" />
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/vectors/logo.svg';
</script>
