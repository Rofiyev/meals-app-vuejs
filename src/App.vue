<template>
  <div class="bg-gray-100 h-100">
    <HeaderComponent />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
