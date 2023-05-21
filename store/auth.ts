export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {},
      profile: {},
      access: "",
      userID: ""
    }
  },
  persist: true,
  actions: {
    setUser(user: string) {
      this.user = user
    },
    setToken(access: string) {
      this.access = "Bearer " + access
    },
    setUserID(public_id: string) {
      this.userID = public_id
    },
    setProfile(profile: string) {
      this.profile = profile
    },
  },
})