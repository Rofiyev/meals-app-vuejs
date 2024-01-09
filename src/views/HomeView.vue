<template>
  <section>
    <div class="flex flex-col p-8">
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals"
      />

      <div class="flex justify-center gap-2 mt-2">
        <RouterLink
          :to="{ name: 'byLetter', params: { letter: letter } }"
          v-for="letter in letters"
          :key="letter"
        >
          {{ letter }}
        </RouterLink>
      </div>
    </div>
    <div>
      <p>{{ ingredients }}</p>
    </div>
  </section>
</template>

<script>
import store from '@/store'
import axiosClient from '@/service/axiosClient'

export default {
  name: 'HomeView',
  data() {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      ingredients: []
    }
  },
  computed: {
    meals: () => store.state.meals
  },
  mounted() {
    ;(async () => {
      const { data } = await axiosClient.get('/list.php?i=list')
      this.ingredients = data
    })()
  }
}
</script>
