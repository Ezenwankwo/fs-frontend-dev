export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: {},
      profile: {},
      access: "",
      refresh: "",
      token: "",
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
    setRefresh(token: string) {
      this.refresh = "Bearer " + token
    },
    setUserID(public_id: string) {
      this.userID = public_id
    },
    setProfile(profile: string) {
      this.profile = profile
    },
    logout() {
      this.user = {}
      this.profile = {}
      this.access = ""
      this.refresh = ""
      this.token = ""
      this.userID = ""
    }
  },
})