class WalletRepository {
  static wallets = new Map();

  static add(wallet) {
    this.wallets.set(wallet.id, wallet);
  }

  static get(id) {
    return this.wallets.get(id);
  }
}
