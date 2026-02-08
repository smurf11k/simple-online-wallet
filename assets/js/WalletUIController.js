class WalletUIController {
  getAmount(inputId) {
    return Number(document.getElementById(inputId).value);
  }

  deposit() {
    try {
      WalletTransactionScript.deposit(1, this.getAmount("depositAmount"));
    } catch (e) {
      TransactionLog.log("ПОМИЛКА: " + e.message);
    }
  }

  send() {
    try {
      WalletTransactionScript.sendMoney(1, 2, this.getAmount("sendAmount"));
    } catch (e) {
      TransactionLog.log("ПОМИЛКА: " + e.message);
    }
  }

  withdraw() {
    try {
      const walletId = Number(document.getElementById("withdrawWallet").value);
      WalletTransactionScript.withdraw(
        walletId,
        this.getAmount("withdrawAmount"),
      );
    } catch (e) {
      TransactionLog.log("ПОМИЛКА: " + e.message);
    }
  }

  showBalances() {
    const w1 = WalletRepository.get(1);
    const w2 = WalletRepository.get(2);
    TransactionLog.log(
      `Баланс → Wallet 1: ${w1.balance}, Wallet 2: ${w2.balance}`,
    );
  }
}
