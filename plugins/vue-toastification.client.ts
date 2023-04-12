import type { PluginOptions } from "vue-toastification"
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"


const toastOptions: PluginOptions = {
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.35,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  // @ts-ignores
  position: "top-center",
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, toastOptions)
})
