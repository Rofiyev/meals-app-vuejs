<template>
  <header
    class="bg-white p-2 md:py-0 shadow-md h-24 md:h-16 flex md:justify-between md:items-stretch flex-col md:flex-row items-center justify-center"
  >
    <RouterLink class="inline-flex items-center h-full px-5" :to="{ name: 'home' }">
      <img class="h-12 w-12 object-contain" src="@/assets/logo.png" alt="Logo" /><span
        class="font-semibold text-2xl ml-1"
        >Rof1yev</span
      >
    </RouterLink>

    <div class="gap-1">
      <RouterLink
        class="inline-flex text-sm md:text-base flex-wrap items-center px-1 md:px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
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
        { id: 2, name: 'Meals By Ingredients', routeName: 'ingredients' }
      ]
    }
  }
}
</script>
