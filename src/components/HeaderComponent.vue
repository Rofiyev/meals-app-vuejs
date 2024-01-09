<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <RouterLink class="inline-flex items-center h-full px-5" :to="{ name: 'home' }">
      Home</RouterLink
    >

    <div class="gap-1">
      <RouterLink
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-300"
        v-for="{ id, routeName, name } in links"
        :key="id"
        :to="{ name: routeName }"
        >{{ name }}</RouterLink
      >
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      links: [
        { id: 1, name: 'Search Meals', routeName: 'byName' },
        { id: 2, name: 'Meals By Letter', routeName: 'byLetter' },
        { id: 2, name: 'Meals By Ingredients', routeName: 'byIngredients' }
      ]
    }
  }
}
</script>
