export interface PracticeTool {
  id: string;
  name: string;
  tagline: string;
  weekAssigned: number;
  dates: string;
  repo: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  learningOutcome: string;
  howItEarnsSats: string;
  cliPreview: string;
  keyFeatures: string[];
  techStack: string[];
}

export const toolsToBuild: PracticeTool[] = [
  {
    id: "tool-bitkeys",
    name: "bitkeys",
    tagline: "Pure Go Bitcoin Key & Multi-Format Address Engine",
    weekAssigned: 1,
    dates: "Oct 5 – Oct 11, 2026",
    repo: "altradits/bitkeys",
    difficulty: "Beginner",
    learningOutcome: "Deep mastery of Elliptic Curve cryptography (secp256k1), double SHA-256, RIPEMD-160, Base58Check, Bech32 (BIP-173), and Taproot Bech32m (BIP-350) in Go.",
    howItEarnsSats: "Acts as foundational proof-of-work in Go cryptography. Used as a reference library for BIP-352 silent payment bounties on Bountycaster (worth 200k Sats).",
    cliPreview: `$ bitkeys new --type=taproot
PrivateKey (WIF):  L4...
PublicKey (Hex):   02e4...
Taproot (P2TR):    bc1p...
SegWit (P2WPKH):   bc1q...
Legacy (P2PKH):    1A1z...`,
    keyFeatures: [
      "Zero Cgo dependencies (pure Go execution)",
      "Generates Legacy (1...), SegWit (bc1q...), and Taproot (bc1p...) addresses",
      "Passes official Bitcoin Core test vectors for Bech32 & Bech32m",
      "Includes memory allocation benchmarks (< 5µs per address)"
    ],
    techStack: ["Go 1.24", "crypto/sha256", "golang.org/x/crypto/ripemd160", "btcd/btcec/v2"]
  },
  {
    id: "tool-rawtx",
    name: "rawtx",
    tagline: "Hex Transaction Parser, Script VM & Offline Signer",
    weekAssigned: 2,
    dates: "Oct 12 – Oct 18, 2026",
    repo: "altradits/rawtx",
    difficulty: "Intermediate",
    learningOutcome: "Complete understanding of the Bitcoin transaction wire format, UTXO serialization, CompactSize VarInts, Script execution stack, and BIP-143 SegWit sighash computation.",
    howItEarnsSats: "Prepares you directly for open-source Bitcoin Core / btcsuite PRs. Qualifies for Brink Fellowship and Spiral Developer Grants ($25k–$100k/yr).",
    cliPreview: `$ rawtx decode 02000000000101...
TxID:      a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d
Version:   2 (SegWit)
Inputs:    1 (OutPoint: 0437cd7f85...:0)
Outputs:   2 (Total Satoshis: 1,500,000)
Locktime:  0`,
    keyFeatures: [
      "Decodes raw hex transactions into structured JSON or terminal tables",
      "Evaluates Bitcoin Script opcodes (OP_DUP, OP_HASH160, OP_CHECKSIG)",
      "Computes BIP-143 SegWit sighash preimages for deterministic signing",
      "Broadcasts signed transactions to Bitcoin Testnet4 / Signet via REST API"
    ],
    techStack: ["Go 1.24", "encoding/hex", "encoding/binary", "io"]
  },
  {
    id: "tool-l402-proxy",
    name: "l402-proxy",
    tagline: "Plug-and-Play Lightning HTTP 402 Paywall Reverse Proxy",
    weekAssigned: 3,
    dates: "Oct 19 – Oct 25, 2026",
    repo: "altradits/l402-proxy",
    difficulty: "Intermediate",
    learningOutcome: "Mastering the Lightning Network HTTP 402 Payment Required standard, Macaroon caveats, BOLT-11 invoice lifecycle, and machine-to-machine micropayments.",
    howItEarnsSats: "Directly solves open bounties on Bountycaster & Geyser (150,000–500,000 Sats). Enables selling paid AI/data APIs to global clients with zero credit card accounts.",
    cliPreview: `$ l402-proxy --upstream="http://localhost:8080" --price-sats=21
[L402] Reverse proxy listening on :4020
[L402] Incoming GET /v1/data -> 402 Payment Required
[L402] Invoice generated: lnbc210n1...
[L402] Payment settled! Preimage validated. Forwarding to upstream 200 OK`,
    keyFeatures: [
      "Zero-config reverse proxy for any backend (Go, Python, Node)",
      "Connects to Alby Hub, LND, or Blink Lightning backends",
      "Mints and verifies HMAC-SHA256 Macaroons with expiration caveats",
      "High-throughput concurrent connection pool capable of 10k req/sec"
    ],
    techStack: ["Go 1.24", "net/http", "Alby REST API", "Macaroons", "Docker"]
  },
  {
    id: "tool-kes-sats",
    name: "kes-sats",
    tagline: "Safaricom M-Pesa to Lightning Atomic Settlement Bridge",
    weekAssigned: 4,
    dates: "Oct 26 – Nov 1, 2026",
    repo: "altradits/kes-sats",
    difficulty: "Advanced",
    learningOutcome: "Bridging emerging-market fiat mobile money rails (M-Pesa Daraja STK Push) directly to sovereign Bitcoin Lightning liquidity pools.",
    howItEarnsSats: "Positions Stanley as the leading authority on African payment rails for grants from HRF ($10k–$50k) and local Kenyan merchant transaction fees.",
    cliPreview: `$ kes-sats server --port=8080
[Bridge] Listening for Safaricom Daraja STK Push callbacks...
[Bridge] M-Pesa Callback verified: KES 500 received from 2547...
[Bridge] Live FX rate: 1 KES = 7.4 Sats (3,700 Sats total)
[Bridge] Settle Lightning Invoice: lnbc37u1... SUCCESS in 420ms!`,
    keyFeatures: [
      "Safaricom Daraja API integration with SSL validation & IP whitelisting",
      "Idempotent transaction state machine to prevent double-spending",
      "Real-time KES/SAT exchange rate feed with slippage protection",
      "Instant Lightning payment dispatch via LNURL-Pay"
    ],
    techStack: ["Go 1.24", "Safaricom Daraja API", "LNURL", "PostgreSQL", "Tailwind"]
  },
  {
    id: "tool-satcast",
    name: "satcast",
    tagline: "Blockstream Satellite UDP Listener & Block Demux in Go",
    weekAssigned: 5,
    dates: "November 2026 Extension",
    repo: "altradits/satcast",
    difficulty: "Advanced",
    learningOutcome: "Software-Defined Radio (SDR) frame handling, DVB-S2 packet demodulation, offline Bitcoin node synchronization, and zero-internet network resilience.",
    howItEarnsSats: "Eligible for Blockstream community awards and HRF Bitcoin Development Fund grants ($25,000+).",
    cliPreview: `$ satcast listen --udp-port=4434 --rpc="http://127.0.0.1:8332"
[SatCast] Tuned to Kisumu dish frequency (Telstar 11N / ABS-2A)
[SatCast] Packet received: Fragment 14/82 of Block #882194
[SatCast] Block reassembled (1.42 MB). Submitting to bitcoind...
[SatCast] Bitcoin Core: submitblock -> ACCEPTED!`,
    keyFeatures: [
      "Listens to raw UDP broadcast packets from RTL-SDR demodulators",
      "Reassembles chunked Bitcoin block fragments with CRC32 checks",
      "Direct pipe to Bitcoin Core via JSON-RPC `submitblock`",
      "Displays real-time SNR and signal quality for dish alignment in Kisumu"
    ],
    techStack: ["Go 1.24", "UDP Sockets", "Bitcoin Core RPC", "RTL-SDR"]
  }
];
