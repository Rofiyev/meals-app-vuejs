<template>
  <div>
    <div class="w-[800px] mx-auto p-8" v-if="meal">
      <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-lg py-2">
        <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
        <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
        <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
      </div>

      <div class="my-3">
        <p>{{ meal.strInstructions }}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="text-2xl mb-2">
          <h2 class="font-semibold">Ingredients</h2>
          <ul>
            <template v-for="(el, i) in new Array(20)">
              <li v-if="meal[`strIngredient${i + 1}`]" :key="el">
                {{ i + 1 }}. {{ meal[`strIngredient${i + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div class="text-2xl mb-2">
          <h2 class="font-semibold">Measures</h2>
          <ul>
            <template v-for="(el, i) in new Array(20)">
              <li v-if="meal[`strMeasure${i + 1}`]" :key="el">
                {{ i + 1 }}. {{ meal[`strMeasure${i + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div class="mt-4">
        <YoutubeButtonComponent :href="meal.strYoutube">Youtube</YoutubeButtonComponent>
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View Original Source
        </a>
      </div>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import YoutubeButtonComponent from '@/components/YoutubeButtonComponent.vue'
import axiosClient from '../service/axiosClient'

export default {
  name: 'MealDetailView',
  data() {
    return {
      meal: null
    }
  },

  mounted() {
    ;(async () => {
      const { data } = await axiosClient.get(`lookup.php?i=${this.$route.params.id}`)
      this.meal = (await data.meals[0]) || null
    })()
  },
  components: { YoutubeButtonComponent }
}
</script>
