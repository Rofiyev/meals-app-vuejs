<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pb-8">
      <MealItemComponent v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">There are no meals</div>
  </div>
</template>

<script>
import MealItemComponent from './MealItemComponent.vue'

export default {
  props: ['meals'],
  components: { MealItemComponent }
}
</script>
