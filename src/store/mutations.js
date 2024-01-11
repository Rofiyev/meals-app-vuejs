export function setSearchMeals(state, meals) {
  state.searchedMeals.data = meals
  state.searchedMeals.loading = false
}
export function toggleLoading(state) {
  state.searchedMeals.loading = true
}
