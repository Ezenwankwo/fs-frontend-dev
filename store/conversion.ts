export const useConversionStore = defineStore('conversion', {
    state: () => {
      return {
        exchange: {},
      }
    },
    persist: true,
    actions: {
      setExchange(exchange: any[]) {
        this.exchange = exchange
      },
    },
})