class WalletTransactionScript {
  static validateAmount(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Некоректна сума");
    }
  }

  static deposit(walletId, amount) {
    this.validateAmount(amount);
    const wallet = WalletRepository.get(walletId);
    if (!wallet) throw new Error("Wallet не знайдено");

    wallet.balance += amount;
    TransactionLog.log(`+${amount} → Wallet ${walletId}`);
  }

  static withdraw(walletId, amount) {
    this.validateAmount(amount);
    const wallet = WalletRepository.get(walletId);
    if (wallet.balance < amount) {
      throw new Error("Недостатньо коштів");
    }

    wallet.balance -= amount;
    TransactionLog.log(`-${amount} ← Wallet ${walletId}`);
  }

  static sendMoney(fromId, toId, amount) {
    this.validateAmount(amount);

    const from = WalletRepository.get(fromId);
    const to = WalletRepository.get(toId);

    if (from.balance < amount) {
      throw new Error("Недостатньо коштів");
    }

    from.balance -= amount;
    to.balance += amount;

    TransactionLog.log(`${amount} : Wallet ${fromId} → Wallet ${toId}`);
  }
}
