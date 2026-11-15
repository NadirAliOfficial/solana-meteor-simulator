# Solana Meteor Simulator

A Solana blockchain simulator for Meteor pool activation and transaction testing, built with Anchor & Rust.

## Description

This repository provides a minimal Anchor program written in Rust that simulates the activation logic of a Meteor pool on Solana. It includes on‑chain logic for initializing a pool with a configurable `activation_point` timestamp and an `activate` instruction that only succeeds when the current slot time is past that point. The accompanying integration tests demonstrate both successful activation and the expected failure when the activation point is in the future.

## Features

- Simulate Meteor pool activation via timestamp overrides
- Customize `activation_point` for future or past timestamps
- Track Compute Unit usage for simulated transactions
- Integration tests illustrating activation scenarios

## Prerequisites

- Rust and Cargo
- Solana CLI (v1.14+)
- Anchor CLI (v0.24+)
- Node.js and npm

## Requirements

The project depends on the following runtime libraries:

- `@coral-xyz/anchor` ^0.31.0
- `@project-serum/anchor` ^0.26.0
- `@solana/web3.js` ^1.98.0
- `bn.js` ^5.2.1

Development dependencies are listed in `package.json` and include TypeScript, Mocha, Chai, and Prettier.

## Installation

1. Install Solana and Anchor:
   ```bash
   sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
   npm install -g @project-serum/anchor-cli
   ```
2. Clone the repository:
   ```bash
   git clone https://github.com/NadirAliOfficial/solana-meteor-simulator.git
   cd solana-meteor-simulator
   ```
3. Install JavaScript dependencies:
   ```bash
   npm install
   ```

## Configuration

The project does not require any environment variables; all configuration is handled via Anchor's `Anchor.toml` and the Solana CLI.

## Usage

1. Start a local validator:
   ```bash
   anchor localnet
   ```
2. Build and deploy the program:
   ```bash
   anchor build
   anchor deploy
   ```
3. Run the integration tests:
   ```bash
   anchor test
   ```

The test suite (`tests/solana-meteor.ts`) exercises the program's activation logic.

## Project Structure

```
.gitignore
LICENSE
README.md
Anchor.toml
Cargo.toml
package.json
tsconfig.json
programs/
  solana-meteor/
    Cargo.toml
    Xargo.toml
    src/
      lib.rs
migrations/
  deploy.ts
tests/
  solana-meteor.ts
```

## License

This project is licensed under the MIT License – see the `LICENSE` file for details.

## Installation (continued)

1. Start a local validator:
   ```bash
   anchor localnet
   ```
2. Build & deploy:
   ```bash
   anchor build
   anchor deploy
   ```
3. Run tests:
   ```bash
   anchor test
   ```
<!-- updated: 2025-12-23 -->
