import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MealListView from '@/views/MealListView.vue'
import MealsByNameView from '@/views/MealsByNameView.vue'
import MealsByLetterView from '@/views/MealsByLetterView.vue'
import MealsByIngredientsView from '@/views/MealsByIngredientsView.vue'
import MealDetailView from '@/views/MealDetailView.vue'
import LayoutComponent from '@/layout/LayoutComponent.vue'
import GuestLayoutComponent from '@/layout/GuestLayoutComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutComponent,
      children: [
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
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealDetailView
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayoutComponent
    }
  ]
})

export default router
