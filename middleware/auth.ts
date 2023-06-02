import { useAuthStore } from "~~/store/auth"


interface User {
    access?: string;
    is_verified?: boolean;
}

export default defineNuxtRouteMiddleware((to, from) => {
    const user: User = useAuthStore().$state.user
    if (!user.access) {
      return navigateTo('/login')
    }
    if (user.is_verified === false) {
      return navigateTo('/login')
    }
  })