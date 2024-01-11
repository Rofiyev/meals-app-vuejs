<template>
  <div class="p-8 pb-0 min-h-screen">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      v-model.trim="search"
      @input="searchMeals"
    />

    <div>
      <LoaderComponent v-if="loading" />

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 py-8">
        <MealItemComponent v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
      </div>
    </div>
  </div>
</template>

<script>
import MealItemComponent from '@/components/MealItemComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import store from '@/store'
import { mapState } from 'vuex'

export default {
  name: 'MealsByNameView',
  components: { MealItemComponent, LoaderComponent },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    async searchMeals() {
      store.dispatch('searchMeals', this.search)
      store.dispatch('setLoading')
    }
  },
  computed: {
    ...mapState({
      meals: (state) => state.searchedMeals.data,
      loading: (state) => state.searchedMeals.loading
    })
  },
  mounted() {
    this.search = this.$route.params.name
    this.search && this.searchMeals()
  }
}
</script>
