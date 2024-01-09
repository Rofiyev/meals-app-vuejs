import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MealListView from '@/views/MealListView.vue'
import MealsByNameView from '@/views/MealsByNameView.vue'
import MealsByLetterView from '@/views/MealsByLetterView.vue'
import MealsByIngredientsView from '@/views/MealsByIngredientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/letter/:letter',
      name: 'byLetter',
      component: MealListView
    },
    {
      path: '/by-name/:name?',
      name: 'byName',
      component: MealsByNameView
    },
    {
      path: '/by-letter/:letter?',
      name: 'byLetter',
      component: MealsByLetterView
    },
    {
      path: '/by-ingredient/:ingredient?',
      name: 'byIngredients',
      component: MealsByIngredientsView
    }
  ]
})

export default router
