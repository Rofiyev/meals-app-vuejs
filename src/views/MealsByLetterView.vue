<template>
  <div class="min-h-screen">
    <div class="flex justify-center gap-2 mt-2">
      <RouterLink
        :to="{ name: 'byLetter', params: { letter: letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}
      </RouterLink>
    </div>

    <div>
      <LoaderComponent v-if="loading" />

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 py-8">
        <MealItemComponent v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
      </div>
    </div>
  </div>
</template>

<script>
import LoaderComponent from '@/components/LoaderComponent.vue'
import MealItemComponent from '@/components/MealItemComponent.vue'
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
      store.dispatch('serachMealsByLetter', this.$route.params.letter)
      store.dispatch('setLoading')
    }
  },
  mounted() {
    ;(async () => {
      store.dispatch('serachMealsByLetter', this.$route.params.letter)
      store.dispatch('setLoading')
    })()
  },
  components: { MealItemComponent, LoaderComponent }
}
</script>
