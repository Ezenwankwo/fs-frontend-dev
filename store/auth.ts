export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: ''
  }),
  actions: {
    updateToken(token: string) {
      this.token = token
    }
  },
})
