<template>
  <div class="p-8 pb-0 min-h-screen">
    <div class="pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
    </div>

    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      v-model.trim="search"
      @input="searchMeals"
    />

    <div class="mt-8">
      <MealsComponent :meals="meals" />
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'
import MealsComponent from '@/components/MealsComponent.vue'

export default {
  name: 'MealsByNameView',
  components: { MealsComponent },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    async searchMeals() {
      if (this.search) {
        store.dispatch('searchMeals', this.search)
        store.dispatch('setLoading')
      }
      store.commit('')
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
