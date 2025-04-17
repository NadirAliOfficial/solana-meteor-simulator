# Solana Meteor Simulator

A Solana blockchain simulator for Meteor pool activation and transaction testing, built with Anchor & Rust.

## Features

- Simulate Meteor pool activation via timestamp overrides
- Customize activation_point for future or past timestamps
- Track Compute Unit usage for simulated transactions
- Integration tests illustrating activation scenarios

## Prerequisites

- Rust and Cargo
- Solana CLI (v1.14+)
- Anchor CLI (v0.24+)
- Node.js and npm

## Installation

1. Install Solana and Anchor:
   ```bash
   sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
   npm install -g @project-serum/anchor-cli
   ```
2. Clone the repository:
   ```bash
   git clone https://github.com/your-org/solana-meteor-simulator.git
   cd solana-meteor-simulator
   ```
3. Install JS dependencies:
   ```bash
   npm install
   ```

## Usage

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
