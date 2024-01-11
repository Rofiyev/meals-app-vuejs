<template>
  <section class="min-h-screen p-8">
    <div class="pb-0 text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <div class="mt-4">
      <MealsComponent :meals="meals" />
    </div>
  </section>
</template>

<script>
import MealsComponent from '@/components/MealsComponent.vue'
import axiosClient from '@/service/axiosClient'

export default {
  name: 'HomeView',
  components: { MealsComponent },
  data() {
    return {
      meals: []
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axiosClient.get('random.php').then(({ data }) => this.meals.push(data.meals[0]))
    }
  }
}
</script>
