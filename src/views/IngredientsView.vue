<template>
  <div class="min-h-screen">
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    </div>
    <div class="px-8">
      <input
        type="text"
        v-model="search"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
        placeholder="Search for Ingredients"
      />

      <div>
        <LoaderComponent v-if="!ingredients.length" />
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a
            href="#"
            v-for="ingredient in computedIngredients"
            @click.prevent="openIngredient(ingredient)"
            :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow"
          >
            <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import axiosClient from '../service/axiosClient'
import LoaderComponent from '@/components/LoaderComponent.vue'

export default {
  name: 'IngredientsView ',
  data() {
    return {
      search: '',
      ingredients: []
    }
  },
  methods: {
    openIngredient(ingredient) {
      store.commit('setIngredient', ingredient)
      this.$router.push({
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient }
      })
    }
  },
  computed: {
    computedIngredients() {
      if (this.search) {
        return this.ingredients.filter((i) =>
          i.strIngredient.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return this.ingredients
    }
  },
  mounted() {
    ;(async () => {
      axiosClient.get('list.php?i=list').then(({ data }) => {
        this.ingredients = data.meals
      })
    })()
  },
  components: { LoaderComponent }
}
</script>
