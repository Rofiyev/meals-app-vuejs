import axiosClient from '@/service/axiosClient'

export function searchMeals({ commit }, serachValue) {
  axiosClient.get(`search.php?s=${serachValue}`).then(({ data }) => {
    commit('setSearchMeals', data.meals)
  })
}

//
export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit('setMealsByLetter', data.meals)
  })
}

//
export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit('setMealsByIngredient', data.meals)
  })
}

//
export function setLoading({ commit }) {
  commit('toggleLoading')
}
