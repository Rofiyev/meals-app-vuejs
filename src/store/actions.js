import axiosClient from '@/service/axiosClient'

export function searchMeals({ commit }, serachValue) {
  axiosClient.get(`search.php?s=${serachValue}`).then(({ data }) => {
    commit('setSearchMeals', data.meals)
  })
}
export function setLoading({ commit }) {
  commit('toggleLoading')
}
