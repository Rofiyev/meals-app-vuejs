<template>
  <div class="min-h-screen p-8">
    <div class="pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>

    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
      <RouterLink
        :to="{ name: 'byLetter', params: { letter: letter } }"
        v-for="letter in letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
      >
        {{ letter }}
      </RouterLink>
    </div>

    <div class="mt-8">
      <MealsComponent :meals="meals" />
    </div>
  </div>
</template>

<script>
import MealsComponent from '@/components/MealsComponent.vue'
import store from '@/store'
import { mapState } from 'vuex'

export default {
  name: 'MealsByLetterView',
  data() {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }
  },
  computed: {
    ...mapState({
      meals: (state) => state.mealsByLetter.data,
      loading: (state) => state.mealsByLetter.loading
    })
  },
  watch: {
    $route() {
      store.dispatch('searchMealsByLetter', this.$route.params.letter)
      store.dispatch('setLoading')
    }
  },
  mounted() {
    ;(async () => {
      store.dispatch('searchMealsByLetter', this.$route.params.letter)
      store.dispatch('setLoading')
    })()
  },
  components: { MealsComponent }
}
</script>
