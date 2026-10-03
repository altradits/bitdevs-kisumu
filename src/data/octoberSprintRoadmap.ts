export interface DailyTask {
  day: string;
  date: string;
  topic: string;
  reading: string;
  practiceAssignment: string;
  toolDeliverable: string;
  estimatedHours: number;
}

export interface WeeklySprint {
  week: number;
  dates: string;
  title: string;
  coreGoal: string;
  toolToBuild: {
    name: string;
    description: string;
    repoName: string;
    techStack: string[];
  };
  dailyPlan: DailyTask[];
}

export const octoberSprintRoadmap: WeeklySprint[] = [
  {
    week: 1,
    dates: "Oct 5 – Oct 11, 2026",
    title: "Week 1: Cryptographic Primitives & Address Engine",
    coreGoal: "Master ECDSA, Schnorr, SHA-256, RIPEMD-160, Base58Check & Bech32m from mathematical foundations in pure Go.",
    toolToBuild: {
      name: "bitkeys",
      description: "Zero-dependency pure Go CLI tool for deterministic key generation, WIF export, and SegWit (Bech32) / Taproot (Bech32m) address derivation.",
      repoName: "altradits/bitkeys",
      techStack: ["Go", "crypto/sha256", "golang.org/x/crypto/ripemd160", "btcd/btcec"]
    },
    dailyPlan: [
      {
        day: "Monday",
        date: "Oct 5",
        topic: "Finite Fields, Elliptic Curves & secp256k1",
        reading: "Mastering Bitcoin Ch. 4 (Keys & Addresses) + Jimmy Song Programming Bitcoin Ch. 1-3",
        practiceAssignment: "Implement Point addition and scalar multiplication on secp256k1 in Go from scratch.",
        toolDeliverable: "bitkeys/pkg/secp256k1: Keypair generation from 32-byte entropy",
        estimatedHours: 4
      },
      {
        day: "Tuesday",
        date: "Oct 6",
        topic: "Hashing Pipelines: Hash256 & Hash160",
        reading: "Bitcoin Core src/hash.h + challenges/06-27 review",
        practiceAssignment: "Write zero-allocation double-SHA256 and RIPEMD160 functions with memory benchmarks.",
        toolDeliverable: "bitkeys/pkg/hash: In-place byte hashing suite with 100% test coverage",
        estimatedHours: 3
      },
      {
        day: "Wednesday",
        date: "Oct 7",
        topic: "Legacy P2PKH & Base58Check Encoding",
        reading: "BIP-13 & BIP-16 specifications + Base58 checksum mechanics",
        practiceAssignment: "Encode raw pubkey hash with version byte + 4-byte checksum into mainnet & testnet addresses.",
        toolDeliverable: "bitkeys/pkg/base58: Base58 encoder and validator without external packages",
        estimatedHours: 4
      },
      {
        day: "Thursday",
        date: "Oct 8",
        topic: "SegWit v0 & Bech32 (BIP-173)",
        reading: "BIP-173 (Base32 conversion, 5-bit array packing, polynomial checksum generator)",
        practiceAssignment: "Implement 8-to-5 bit regrouping and polymod calculation in pure Go.",
        toolDeliverable: "bitkeys/pkg/bech32: Native SegWit (P2WPKH `bc1q...`) address generator",
        estimatedHours: 4
      },
      {
        day: "Friday",
        date: "Oct 9",
        topic: "Taproot v1 & Bech32m (BIP-350 / BIP-340)",
        reading: "BIP-340 (Schnorr Signatures) & BIP-350 (Bech32m checksum constant 0x2bc830a3)",
        practiceAssignment: "Update polymod constant to support Taproot `bc1p...` addresses and verify against official test vectors.",
        toolDeliverable: "bitkeys/pkg/taproot: Taproot key tweaking and address derivation",
        estimatedHours: 4
      },
      {
        day: "Saturday",
        date: "Oct 10",
        topic: "CLI Assembly, Flags & Test Suite",
        reading: "Go flag / cobra package documentation + benchmark testing",
        practiceAssignment: "Wire subcommands: `bitkeys new`, `bitkeys from-wif`, `bitkeys verify <addr>`.",
        toolDeliverable: "bitkeys: Fully compiled standalone binary tested on macOS and Linux",
        estimatedHours: 5
      },
      {
        day: "Sunday",
        date: "Oct 11",
        topic: "Open Source Packaging & Documentation",
        reading: "Bitcoin developer documentation standards + Go Godoc",
        practiceAssignment: "Write README with test vectors, publish repo `altradits/bitkeys`, and tag v0.1.0.",
        toolDeliverable: "Public GitHub release ready to include in grant applications",
        estimatedHours: 3
      }
    ]
  },
  {
    week: 2,
    dates: "Oct 12 – Oct 18, 2026",
    title: "Week 2: UTXO Engine, Raw Transactions & Scripting",
    coreGoal: "Parse, serialize, construct, and sign raw Bitcoin transactions from raw hex bytes.",
    toolToBuild: {
      name: "rawtx",
      description: "Interactive CLI & library that inspects raw hex transactions, parses inputs/outputs/witness data, and builds signed 1-in-2-out transactions.",
      repoName: "altradits/rawtx",
      techStack: ["Go", "encoding/hex", "encoding/binary", "io"]
    },
    dailyPlan: [
      {
        day: "Monday",
        date: "Oct 12",
        topic: "Transaction Structure & CompactSize VarInts",
        reading: "Mastering Bitcoin Ch. 6 (Transactions) + Bitcoin Optech transaction walkthrough",
        practiceAssignment: "Parse raw tx byte stream: Version, input count, outpoints, scriptSig, sequence.",
        toolDeliverable: "rawtx/pkg/wire: TxIn and OutPoint deserializer",
        estimatedHours: 4
      },
      {
        day: "Tuesday",
        date: "Oct 13",
        topic: "Outputs, Locktime & BIP-141 SegWit Markers",
        reading: "BIP-141 (Segregated Witness consensus specs)",
        practiceAssignment: "Detect marker (0x00) and flag (0x01), parse witness stack items per input.",
        toolDeliverable: "rawtx/pkg/wire: Full Tx wire serialization and deserialization",
        estimatedHours: 4
      },
      {
        day: "Wednesday",
        date: "Oct 14",
        topic: "Bitcoin Script Machine (Forth-like Stack Execution)",
        reading: "Bitcoin Wiki Script opcodes + BIP-16 P2SH evaluation",
        practiceAssignment: "Build an opcode stack evaluator supporting OP_DUP, OP_HASH160, OP_EQUALVERIFY, OP_CHECKSIG.",
        toolDeliverable: "rawtx/pkg/script: Script VM that evaluates standard locking/unlocking scripts",
        estimatedHours: 5
      },
      {
        day: "Thursday",
        date: "Oct 15",
        topic: "BIP-143 SegWit Sighash Algorithm",
        reading: "BIP-143 (Transaction Signature Verification for Version 0 Witness Program)",
        practiceAssignment: "Compute double-SHA256 of hashPrevouts, hashSequence, and hashOutputs to produce sighash preimage.",
        toolDeliverable: "rawtx/pkg/sighash: BIP-143 sighash calculator for SegWit v0 inputs",
        estimatedHours: 5
      },
      {
        day: "Friday",
        date: "Oct 16",
        topic: "Offline Transaction Signing Engine",
        reading: "RFC 6979 (Deterministic ECDSA signature generation to avoid k-reuse)",
        practiceAssignment: "Sign a sighash using private key with deterministic k nonce, attach witness DER signature.",
        toolDeliverable: "rawtx/pkg/signer: Offline transaction signer producing valid broadcastable hex",
        estimatedHours: 5
      },
      {
        day: "Saturday",
        date: "Oct 17",
        topic: "Testnet / Signet Live Broadcast Testing",
        reading: "Mempool.space API & Bitcoin Core testnet RPC",
        practiceAssignment: "Fund a testnet address via faucet, craft raw transaction, sign, and broadcast via testnet mempool API.",
        toolDeliverable: "Confirmed transaction broadcasted on Bitcoin Testnet4/Signet",
        estimatedHours: 4
      },
      {
        day: "Sunday",
        date: "Oct 18",
        topic: "Code Review & First External Good-First-Issue Hunt",
        reading: "Browse Bitcoin Core, BDK, LDK good-first-issues on GitHub",
        practiceAssignment: "Pick 1 open documentation or test issue in btcsuite/btcd or rust-bitcoin to prepare PR.",
        toolDeliverable: "Fork target repo and reproduce test issue locally",
        estimatedHours: 4
      }
    ]
  },
  {
    week: 3,
    dates: "Oct 19 – Oct 25, 2026",
    title: "Week 3: Lightning Network Architecture & L402 Paywalls",
    coreGoal: "Build Lightning infrastructure in Go, handle BOLT-11 invoices, and monetize web services via HTTP 402.",
    toolToBuild: {
      name: "l402-proxy",
      description: "High-performance reverse proxy in Go that gates HTTP endpoints behind micro-satoshi Lightning payments with Macaroon authentication.",
      repoName: "altradits/l402-proxy",
      techStack: ["Go", "Lightning Network", "Alby Hub API", "Macaroons", "net/http"]
    },
    dailyPlan: [
      {
        day: "Monday",
        date: "Oct 19",
        topic: "Payment Channels, HTLCs & BOLT Specifications",
        reading: "Mastering the Lightning Network Ch. 7-8 + BOLT #2 & #3 specs",
        practiceAssignment: "Map out the state machine of an HTLC commitment transaction and revocable key derivation.",
        toolDeliverable: "Detailed technical notes on HTLC timeout & resolution mechanics",
        estimatedHours: 4
      },
      {
        day: "Tuesday",
        date: "Oct 20",
        topic: "BOLT-11 Invoice Decoding & Encoding",
        reading: "BOLT-11 (Invoice Protocol for Lightning Payments)",
        practiceAssignment: "Parse raw `lnbc...` invoice: amount, multiplier, payment hash, timestamp, and fallback address.",
        toolDeliverable: "l402-proxy/pkg/bolt11: Invoice decoder extracting payment hash and satoshi value",
        estimatedHours: 4
      },
      {
        day: "Wednesday",
        date: "Oct 21",
        topic: "Macaroons: Cookies with Cryptographic Caveats",
        reading: "Google Research paper: 'Macaroons: Cookies with Contextual Caveats for Decentralized Authorization'",
        practiceAssignment: "Generate and verify HMAC-SHA256 chained caveat signatures in Go.",
        toolDeliverable: "l402-proxy/pkg/macaroon: Caveat minter and verifier",
        estimatedHours: 4
      },
      {
        day: "Thursday",
        date: "Oct 22",
        topic: "Building the L402 Reverse Proxy Engine",
        reading: "L402 Protocol Specification (Lightning Labs)",
        practiceAssignment: "Build reverse proxy that intercepts unauthenticated calls, generates an invoice via Alby/LND API, and returns 402.",
        toolDeliverable: "l402-proxy/cmd: Functional HTTP reverse proxy gating backend services",
        estimatedHours: 5
      },
      {
        day: "Friday",
        date: "Oct 23",
        topic: "Preimage Verification & Settle Handler",
        reading: "SHA-256 invoice preimage validation against payment hash",
        practiceAssignment: "Validate `Authorization: L402 <macaroon>:<preimage>` and proxy request to target API.",
        toolDeliverable: "Live end-to-end demo querying a paid weather or AI API with satoshis",
        estimatedHours: 4
      },
      {
        day: "Saturday",
        date: "Oct 24",
        topic: "Benchmarking & Dockerization",
        reading: "Go net/http performance profiling (pprof) + Docker multi-stage builds",
        practiceAssignment: "Benchmark proxy latency under 5,000 req/sec and containerize into lightweight Alpine image.",
        toolDeliverable: "Dockerized repo `altradits/l402-proxy` with one-command launch",
        estimatedHours: 4
      },
      {
        day: "Sunday",
        date: "Oct 25",
        topic: "Bounty Submission & First Sats Claim",
        reading: "Bountycaster / Polar.sh Lightning bounty guidelines",
        practiceAssignment: "Submit tool to Geyser Fund and apply for open L402 ecosystem micro-grants.",
        toolDeliverable: "Published grant/bounty proposal with live demo link",
        estimatedHours: 3
      }
    ]
  },
  {
    week: 4,
    dates: "Oct 26 – Nov 1, 2026",
    title: "Week 4: Real Paying Bounties & Grant Applications",
    coreGoal: "Submit real PRs to open-source Bitcoin repositories, bid on live Bountycaster tasks, and submit applications to Brink & Spiral.",
    toolToBuild: {
      name: "kes-sats",
      description: "Kenyan sovereign payment engine bridging Safaricom M-Pesa Daraja STK Push to instant Lightning settlement.",
      repoName: "altradits/kes-sats",
      techStack: ["Go", "M-Pesa Daraja API", "LNURL-Pay", "Webhooks", "PostgreSQL"]
    },
    dailyPlan: [
      {
        day: "Monday",
        date: "Oct 26",
        topic: "M-Pesa Daraja STK Push & Webhook Verification",
        reading: "Safaricom Daraja API Documentation + Webhook security best practices",
        practiceAssignment: "Build concurrent webhook listener in Go verifying Safaricom callback signatures and idempotency.",
        toolDeliverable: "kes-sats/pkg/daraja: Validated STK Push initiator and listener",
        estimatedHours: 4
      },
      {
        day: "Tuesday",
        date: "Oct 27",
        topic: "Automated Lightning Invoice Settlement",
        reading: "LNURL-Pay & LND REST payments API",
        practiceAssignment: "Trigger instant satoshi settlement upon receiving KES confirmation callback.",
        toolDeliverable: "kes-sats/pkg/lightning: Automated payment settlement engine",
        estimatedHours: 4
      },
      {
        day: "Wednesday",
        date: "Oct 28",
        topic: "Targeting Bountycaster & Polar.sh Sats Issues",
        reading: "Explore top paid Bitcoin issues on Bountycaster.io & Polar.sh",
        practiceAssignment: "Pick 2 active issues tagged with sats bounties, fork repos, and write test reproduction.",
        toolDeliverable: "2 active PRs submitted with linked issue references",
        estimatedHours: 5
      },
      {
        day: "Thursday",
        date: "Oct 29",
        topic: "Brink & Spiral Developer Fellowship Application",
        reading: "Brink.dev Fellowship FAQ + Spiral Grant Guidelines",
        practiceAssignment: "Draft developer fellowship proposal detailing Stanley's Go curriculum and open-source contributions.",
        toolDeliverable: "Complete Brink Developer Fellowship application submission",
        estimatedHours: 4
      },
      {
        day: "Friday",
        date: "Oct 30",
        topic: "Geyser Fund Crowdfunding Launch",
        reading: "Top performing Bitcoin educational campaigns on Geyser.fund",
        practiceAssignment: "Launch BitDevs Kisumu & Altradits Go-to-Bitcoin engineering campaign on Geyser.",
        toolDeliverable: "Live Geyser campaign raising sats for local hardware and student node runners",
        estimatedHours: 4
      },
      {
        day: "Saturday",
        date: "Oct 31",
        topic: "Portfolio Integration & Code Review",
        reading: "Open source portfolio presentation standards",
        practiceAssignment: "Update `altradits` GitHub profile with pins to `bitkeys`, `rawtx`, `l402-proxy`, and `kes-sats`.",
        toolDeliverable: "World-class Bitcoin developer profile ready for international contracting",
        estimatedHours: 4
      },
      {
        day: "Sunday",
        date: "Nov 1",
        topic: "November Retrospective & BitDevs Kisumu Meetup Prep",
        reading: "Review BIP-352 & Blockstream Satellite workshop agenda",
        practiceAssignment: "Prepare live coding demo of `bitkeys` and `l402-proxy` for the Nov 7 Socratic Seminar.",
        toolDeliverable: "Slide deck and live demo script for BitDevs Kisumu Seminar #1",
        estimatedHours: 3
      }
    ]
  }
];
