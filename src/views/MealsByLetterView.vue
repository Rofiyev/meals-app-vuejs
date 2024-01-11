<template>
  <div>
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
</template>

<script>
export default {
  name: 'MealsByLetterView',
  data() {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }
  }
}
</script>
