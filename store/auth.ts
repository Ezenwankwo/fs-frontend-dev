export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {}
  }),
  actions: {
    setUser(user: string) {
      this.user = user
    },
  },
})
