<template>
  <div class="bg-white shadow rounded-2xl">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.setMeal"
        class="rounded-t-2xl w-full h-48 object-cover"
      />
    </RouterLink>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore ex nulla illum
        asperiores dolores? Voluptatem fuga illo amet voluptas possimus quia
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButtonComponent :href="meal.strYoutube"> Youtube </YoutubeButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import YoutubeButtonComponent from './YoutubeButtonComponent.vue'

export default {
  name: 'MealItemComponent',
  props: ['meal'],
  components: { YoutubeButtonComponent }
}
</script>
