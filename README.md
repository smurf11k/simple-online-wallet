# Simple Wallet Transaction Script

This is a small interactive web application demonstrating a **Transaction Script** pattern for an electronic wallet system. Users can **deposit**, **withdraw**, and **transfer money** between wallets, with transaction validation and logging.

## Features

- Create two wallets with initial balances
- Deposit money into a wallet
- Withdraw money from a wallet
- Transfer money between wallets
- Interactive UI with amount input
- Transaction logging with timestamp
- Validation for insufficient funds and incorrect input

## Architecture

- `Wallet` – data model for each wallet
- `WalletRepository` – in-memory storage
- `TransactionLog` – stores history and logs messages
- `WalletTransactionScript` – business logic (Transaction Script pattern)
- `WalletUIController` – handles UI interactions

## Notes

- The project is fully client-side, no backend required
- All business logic is implemented using the Transaction Script pattern
- Designed for educational purposes to demonstrate separation of concerns between UI, business logic, and data
