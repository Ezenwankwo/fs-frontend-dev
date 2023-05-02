export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {},
      profile: {},
    }
  },
  persist: true,
  actions: {
    setUser(user: string) {
      this.user = user
    },
    setProfile(profile: string) {
      this.profile = profile
    },
  },
})