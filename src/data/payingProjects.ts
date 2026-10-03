export interface PayingProject {
  id: string;
  title: string;
  sponsor: string;
  rewardSats: number;
  rewardFiat: string;
  targetRepo: string;
  repoUrl: string;
  issueUrl?: string;
  category: "Go Protocol" | "Lightning" | "M-Pesa Rails" | "Offline & Satellite" | "Full-Stack";
  difficulty: "Beginner Good First Issue" | "Intermediate Feature" | "Advanced Protocol";
  estimatedHours: string;
  description: string;
  acceptanceCriteria: string[];
  prChecklist: string[];
  prTemplate: {
    branchName: string;
    title: string;
    body: string;
  };
}

export const payingProjects: PayingProject[] = [
  {
    id: "l402-gin-middleware",
    title: "Build Reusable L402 Paywall Middleware for Go (Gin/Fiber)",
    sponsor: "BitDevs Kisumu Guild & Alby Community",
    rewardSats: 150000,
    rewardFiat: "~$150 USD",
    targetRepo: "altradits/challenges",
    repoUrl: "https://github.com/altradits/challenges",
    category: "Lightning",
    difficulty: "Beginner Good First Issue",
    estimatedHours: "4-6 hours",
    description: "Create an open-source Go package that allows any Go web server (Gin, Chi, or Fiber) to gate endpoints behind HTTP 402 Lightning payments using Alby Hub or LND REST APIs.",
    acceptanceCriteria: [
      "Intersects requests lacking Authorization header and returns 402 with WWW-Authenticate containing BOLT-11 invoice",
      "Validates preimage returned upon payment against SHA-256 invoice payment hash",
      "Unit test coverage > 85% with mocked Lightning backend",
      "Working example directory in Go with `main.go` demonstrating a paid 21-sat API call"
    ],
    prChecklist: [
      "Code formatted with `gofmt -s -w .`",
      "Linted with `golangci-lint run`",
      "Zero unhandled errors in Go code",
      "Added clear README with curl test examples"
    ],
    prTemplate: {
      branchName: "feat/l402-gin-middleware",
      title: "feat(l402): implement plug-and-play HTTP 402 Lightning middleware",
      body: `## Summary
Implements a lightweight, zero-dependency Go middleware enabling HTTP 402 Payment Required status and BOLT-11 invoice generation.

## Test Plan
- [x] Tested with local mock LND server
- [x] Verified curl returns 402 with WWW-Authenticate header
- [x] Verified valid preimage grants 200 OK access
- [x] All unit tests pass with \`go test -v ./...\`
`
    }
  },
  {
    id: "bech32m-validator",
    title: "Pure Go BIP-350 / BIP-352 Silent Payments Address Decoder",
    sponsor: "Bitcoin Open Source Bounties",
    rewardSats: 200000,
    rewardFiat: "~$200 USD",
    targetRepo: "altradits/challenges",
    repoUrl: "https://github.com/altradits/challenges",
    category: "Go Protocol",
    difficulty: "Intermediate Feature",
    estimatedHours: "6-8 hours",
    description: "Implement a zero-allocation parser for BIP-352 Silent Payment addresses (`sp1...`) in Go without pulling in massive external Cgo dependencies.",
    acceptanceCriteria: [
      "Decode human-readable part (HRP) `sp` for mainnet and `tsp` for testnet",
      "Extract scan key (33 bytes) and spend key (33 bytes)",
      "Pass all BIP-352 standard test vectors published by Bitcoin Core",
      "Benchmark to ensure parsing takes under 5 microseconds per address"
    ],
    prChecklist: [
      "Passes `go test -bench=. -benchmem`",
      "No memory leaks or unbounded buffer allocations",
      "Documented Godoc comments on exported types"
    ],
    prTemplate: {
      branchName: "feat/bip352-silent-payments-decoder",
      title: "feat(crypto): implement BIP-352 silent payment address parser and validator",
      body: `## Summary
Adds native BIP-352 silent payment address parsing and test-vector verification in Go.

## Verification
- [x] Passed 100% of official BIP-352 test vectors
- [x] Zero allocations on valid address validation
- [x] Godoc comments added for exported types
`
    }
  },
  {
    id: "mpesa-lightning-swap",
    title: "Safaricom M-Pesa STK Push to Lightning Settlement Bridge",
    sponsor: "AfriSats & BitDevs Kisumu Guild",
    rewardSats: 350000,
    rewardFiat: "~$350 USD",
    targetRepo: "altradits/africa-route-lang-ai",
    repoUrl: "https://github.com/altradits/africa-route-lang-ai",
    category: "M-Pesa Rails",
    difficulty: "Intermediate Feature",
    estimatedHours: "8-12 hours",
    description: "Connect Safaricom Daraja STK Push callbacks to an automated Lightning payment service. When a user in Kisumu pays via M-Pesa, the bridge verifies the callback signature and settles an equivalent satoshi invoice immediately.",
    acceptanceCriteria: [
      "Secure webhook listener verifying Safaricom SSL and IP whitelisting",
      "Stateful idempotency check to avoid double-crediting if Safaricom retries callbacks",
      "Automatic conversion rate lookup (KES to SAT via CoinGecko/Kraken API)",
      "Integration tests with Safaricom Sandbox test credentials"
    ],
    prChecklist: [
      "Secrets managed via environment variables (never hardcoded)",
      "Passes `go test -race ./...`",
      "Graceful HTTP server shutdown handling"
    ],
    prTemplate: {
      branchName: "feat/mpesa-lightning-bridge",
      title: "feat(rails): implement secure Daraja STK callback to Lightning invoice settlement",
      body: `## Summary
Bridges Kenyan mobile money (M-Pesa) directly to Bitcoin Lightning rails.

## Changes
- Added Daraja STK Push webhook receiver with HMAC signature validation
- Implemented idempotency ledger preventing replay attacks
- Automated Lightning settlement upon ResultCode == 0 confirmation
`
    }
  },
  {
    id: "satellite-block-demux",
    title: "Blockstream Satellite DVB-S2 UDP Frame Demultiplexer in Go",
    sponsor: "Blockstream Community / Geyser Fund",
    rewardSats: 500000,
    rewardFiat: "~$500 USD",
    targetRepo: "altradits/challenges",
    repoUrl: "https://github.com/altradits/challenges",
    category: "Offline & Satellite",
    difficulty: "Advanced Protocol",
    estimatedHours: "12-16 hours",
    description: "Write a high-performance Go UDP listener that reads raw DVB-S2 broadcast packets coming from RTL-SDR demodulators, reassembles chunked Bitcoin block fragments, and pushes them to Bitcoin Core's RPC.",
    acceptanceCriteria: [
      "Listen on UDP port 4434 for incoming Satellite Baseband frames",
      "Reassemble fragmented IP packets with packet loss detection",
      "Stream valid Bitcoin blocks to `bitcoin-cli submitblock`",
      "Includes logging for Signal-to-Noise Ratio (SNR) in Kisumu dish setups"
    ],
    prChecklist: [
      "Tested on Linux / macOS ARM64 (Raspberry Pi 4 compatible)",
      "Zero CPU spin when listening on socket",
      "Includes mock packet generator for offline testing"
    ],
    prTemplate: {
      branchName: "feat/satellite-dvb-demux",
      title: "feat(satellite): high-throughput DVB-S2 UDP block demultiplexer in Go",
      body: `## Summary
Adds offline Bitcoin block reassembly from Blockstream Satellite broadcasts.

## Features
- UDP socket reader tuned for RTL-SDR and Ku-band LNB streams
- Automatic block fragment reassembly
- Direct RPC submitblock pipeline
`
    }
  }
];
