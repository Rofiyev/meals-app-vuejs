import axiosClient from '@/service/axiosClient'

export function searchMeals({ commit }, serachValue) {
  axiosClient.get(`search.php?s=${serachValue}`).then(({ data }) => {
    commit('setSearchMeals', data.meals)
  })
}

//
export function serachMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit('setMealsByLetter', data.meals)
  })
}

//
export function serachMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`search.php?i=${ingredient}`).then(({ data }) => {
    commit('mealsByIngredient', data.meals)
  })
}

//
export function setLoading({ commit }) {
  commit('toggleLoading')
}
