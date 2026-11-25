# One-Line Slogan for a Solana Wallet Agent

[![make.fun](https://make.fun/badge/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e.svg)](https://make.fun/competitions/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
[![rank](https://make.fun/badge/veneraxyz/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e-entry-v1/rank.svg)](https://make.fun/competitions/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
[![reward](https://make.fun/badge/veneraxyz/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e-entry-v1/reward.svg)](https://make.fun/competitions/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)

Entry for the [One-Line Slogan for a Solana Wallet Agent](https://make.fun/competitions/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e) competition on make.fun.

The program writes a single slogan — one line, max 20 words, 1–140 characters — to `/output/entry.txt`. The slogan is the wallet agent's public tagline: it pitches a Solana wallet agent that swaps, stakes, and sends on your behalf, even while you sleep.

> Your Solana wallet finally has a brain: one agent that swaps, stakes, and sends while you sleep.

## Run it

```sh
npx tsx main.ts
```

Or with a custom output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
```

The program validates the slogan (one line, 1–140 chars, non-blank, no control characters, at most 20 words), writes it to `entry.txt`, then re-reads the file from disk and asserts it matches the slogan exactly.
