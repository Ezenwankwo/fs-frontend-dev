interface StoreType {
  exchange: Record<string, any>;
  originatingAccount: Record<string, any>;
  receivingAccount: Record<string, any>;
  escrowAccount: Record<string, any>;
  trade: Record<string, any>;
  wallet: Record<string, any>;
  tradeProgress: Array<"review"|"bank"|"confirm"|"completed">;
  activeTradeProgress: "review"|"bank"|"confirm"|"completed";
}

export const useConversionStore = defineStore('conversion', {
    state: (): StoreType => {
      return {
        exchange: {},
        originatingAccount: {
          other_bank: "",
          account_type: "fiat",
          number_or_address: "",
          holder_name: "",
          bank_or_network: "",
          public_id: "",
        },
        receivingAccount: {
          other_bank: "",
          account_type: "fiat",
          number_or_address: "",
          holder_name: "",
          bank_or_network: "",
          public_id: "",
        },
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
      resetAccount() {
        this.receivingAccount = {
          other_bank: "",
          account_type: "fiat",
          number_or_address: "",
          holder_name: "",
          bank_or_network: "",
        }
        this.originatingAccount = {
          other_bank: "",
          account_type: "fiat",
          number_or_address: "",
          holder_name: "",
          bank_or_network: "",
        }
        this.tradeProgress= []
        this.activeTradeProgress= "review"
        this.exchange = {}
        this.escrowAccount = {}
        this.trade = {}
        this.wallet = {}
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