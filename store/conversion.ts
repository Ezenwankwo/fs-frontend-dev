export const useConversionStore = defineStore('conversion', {
    state: () => {
      return {
        exchange: {},
        originatingAccount: {},
        receivingAccount: {},
        escrowAccount: {},
        trade: {},
      }
    },
    persist: true,
    actions: {
      setExchange(exchange: any[]) {
        this.exchange = exchange
      },
      setOriginatingAccount(originatingAccount: any[]) {
        this.originatingAccount = originatingAccount
      },
      setReceivingAccount(receivingAccount: any[]) {
        this.receivingAccount = receivingAccount
      },
      setEscrowAccount(escrowAccount: any[]) {
        this.escrowAccount = escrowAccount
      },
      setTrade(trade: any[]) {
        this.trade = trade
      },
    },
})