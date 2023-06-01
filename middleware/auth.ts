import { useAuthStore } from "~~/store/auth"


interface User {
    access?: string;
}

export default defineNuxtRouteMiddleware((to, from) => {
    const user: User = useAuthStore().$state.user
    if (!user.access) {
      return navigateTo('/login')
    }
  })