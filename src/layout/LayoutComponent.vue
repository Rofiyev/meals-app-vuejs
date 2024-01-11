<template>
  <section class="bg-gray-100 h-100">
    <HeaderComponent />
    <main>
      <RouterView />
    </main>
  </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
  name: 'LayoutComponent',
  components: { HeaderComponent }
}
</script>
