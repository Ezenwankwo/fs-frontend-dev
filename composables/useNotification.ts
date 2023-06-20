import * as pkg from "vue-toastification"
const { useToast } = pkg

export default function useNotification () {
  console.log('🟢 useNotification')

  return {
    toast: useToast()
  }
}