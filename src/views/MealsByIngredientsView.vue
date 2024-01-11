<template>
  <div class="min-h-screen p-8">
    <div class="b-0">
      <h1 class="text-4xl font-bold mb-4">
        Meals for
        <span class="text-orange-500">{{ $route.params.ingredient }}</span>
      </h1>
    </div>

    <div class="mt-4">
      <LoaderComponent v-if="!meals.length" />
      <MealsComponent v-else :meals="meals" />
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
import MealsComponent from '@/components/MealsComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'

export default {
  name: 'MealsByIngredientsView',
  components: { MealsComponent, LoaderComponent },
  computed: {
    ...mapState({
      meals: (state) => state.mealsByIngredient.data,
      ingredient: (state) => state.ingredient
    })
  },
  mounted() {
    store.dispatch('searchMealsByIngredient', this.$route.params.ingredient)
  }
}
</script>
