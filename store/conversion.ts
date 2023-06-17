interface StoreType {
  exchange: Record<string, any>;
  originatingAccount: Record<string, any>;
  receivingAccount: Record<string, any>;
  escrowAccount: Record<string, any>;
  trade: Record<string, any>;
  wallet: Record<string, any>;
  tradeProgress: Array<"review"|"bank"|"confirm">;
  activeTradeProgress: "review"|"bank"|"confirm";
}

export const useConversionStore = defineStore('conversion', {
    state: (): StoreType => {
      return {
        exchange: {},
        originatingAccount: {},
        receivingAccount: {},
        escrowAccount: {},
        trade: {},
        wallet: {},
        tradeProgress: [],
        activeTradeProgress: "review"
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
      setWallet(wallet: any[]) {
        this.wallet = wallet
      },
      setTradeProgress(section: "review"|"bank"|"confirm") {
        if (!this.tradeProgress.includes(section)) {
          this.tradeProgress.push(section)
        }
      },
      setActiveTradeProgress(section: "review"|"bank"|"confirm") {
        this.activeTradeProgress = section
      },
    },
})