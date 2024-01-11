export function setSearchMeals(state, meals) {
  state.searchedMeals.data = meals
  state.searchedMeals.loading = false
}

//
export function setMealsByLetter(state, meals) {
  state.mealsByLetter.data = meals
  state.mealsByLetter.loading = false
}
//
export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient.data = meals
  state.mealsByIngredient.loading = false
}

//
export function toggleLoading(state) {
  state.searchedMeals.loading = true
  state.mealsByLetter.loading = true
  state.mealsByIngredient.loading = true
}
