export interface Challenge {
  id: string;
  number: number;
  title: string;
  tier: "5%" | "10%" | "25%" | "50%" | "75%" | "100%";
  category: string;
  skills: string[];
  objective: string;
  whyBitcoin: string;
  githubPath: string;
  starterCode: string;
  solutionCode: string;
  testCommand: string;
  rewardSats: number;
}

export interface Quest {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  targetMilestone: string;
  challenges: Challenge[];
}

export const quests: Quest[] = [
  {
    id: "quest-1-go-primitives",
    level: 1,
    title: "Level 1: Go Memory, Pointers & Protocol Skeletons",
    subtitle: "From package main to robust data structures",
    description: "Master Go's type system, pointers, byte slices, and memory layout. These are the fundamental building blocks of Bitcoin transaction parsers.",
    icon: "🧱",
    targetMilestone: "Build zero-allocation byte slice manipulation in Go",
    challenges: [
      {
        id: "c-01-byteslice",
        number: 1,
        title: "Byte Slice Reversal & Endianness",
        tier: "5%",
        category: "Memory & Data",
        skills: ["slices", "bytes", "endianness"],
        objective: "Write a function `ReverseBytes(b []byte) []byte` that reverses a byte slice in-place without memory allocations. Bitcoin tx hashes and block hashes are displayed in internal little-endian byte order!",
        whyBitcoin: "Bitcoin block hashes (like block 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f) are stored in little-endian on disk and reversed for RPC display.",
        githubPath: "altradits/challenges",
        starterCode: `package main

// ReverseBytes reverses a byte slice in-place
func ReverseBytes(b []byte) []byte {
    // TODO: implement in-place reversal
    return b
}`,
        solutionCode: `package main

func ReverseBytes(b []byte) []byte {
    for i, j := 0, len(b)-1; i < j; i, j = i+1, j-1 {
        b[i], b[j] = b[j], b[i]
    }
    return b
}`,
        testCommand: "go test -v -run TestReverseBytes",
        rewardSats: 2500
      },
      {
        id: "c-02-varint",
        number: 2,
        title: "Bitcoin CompactSize (VarInt) Decoder",
        tier: "10%",
        category: "Serialization",
        skills: ["binary.Read", "io.Reader", "byte handling"],
        objective: "Implement `ReadCompactSize(r io.Reader) (uint64, error)` decoding variable-length integers (1, 3, 5, or 9 bytes) as defined in the Bitcoin P2P protocol.",
        whyBitcoin: "Every Bitcoin transaction uses CompactSize to encode the number of inputs, outputs, and script lengths.",
        githubPath: "altradits/challenges",
        starterCode: `package main

import "io"

func ReadCompactSize(r io.Reader) (uint64, error) {
    // TODO: read first byte, inspect prefix:
    // < 0xfd -> 1 byte
    // 0xfd   -> next 2 bytes uint16
    // 0xfe   -> next 4 bytes uint32
    // 0xff   -> next 8 bytes uint64
    return 0, nil
}`,
        solutionCode: `package main

import (
    "encoding/binary"
    "io"
)

func ReadCompactSize(r io.Reader) (uint64, error) {
    var prefix [1]byte
    if _, err := io.ReadFull(r, prefix[:]); err != nil {
        return 0, err
    }
    switch prefix[0] {
    case 0xfd:
        var val uint16
        err := binary.Read(r, binary.LittleEndian, &val)
        return uint64(val), err
    case 0xfe:
        var val uint32
        err := binary.Read(r, binary.LittleEndian, &val)
        return uint64(val), err
    case 0xff:
        var val uint64
        err := binary.Read(r, binary.LittleEndian, &val)
        return val, err
    default:
        return uint64(prefix[0]), nil
    }
}`,
        testCommand: "go test -v -run TestCompactSize",
        rewardSats: 5000
      }
    ]
  },
  {
    id: "quest-2-crypto-primitives",
    level: 2,
    title: "Level 2: Bitcoin Cryptographic Primitives in Go",
    subtitle: "SHA-256, RIPEMD-160, Base58Check & Bech32",
    description: "Write pure cryptographic pipelines from scratch. Transform ECDSA public keys into legacy P2PKH and modern SegWit Native Bech32 addresses.",
    icon: "🔐",
    targetMilestone: "Generate valid Bitcoin testnet and mainnet addresses without third-party blackbox libraries",
    challenges: [
      {
        id: "c-03-hash256",
        number: 3,
        title: "Hash256 (Double SHA-256) Pipeline",
        tier: "25%",
        category: "Cryptography",
        skills: ["crypto/sha256", "hash pipelines"],
        objective: "Write `Hash256(data []byte) [32]byte` executing SHA256(SHA256(data)). This is Satoshi's primary hash function.",
        whyBitcoin: "Proof of Work mining, transaction IDs (TXID), and Merkle trees all rely on Hash256.",
        githubPath: "altradits/challenges",
        starterCode: `package main

import "crypto/sha256"

func Hash256(data []byte) [32]byte {
    // TODO: double SHA-256
    return [32]byte{}
}`,
        solutionCode: `package main

import "crypto/sha256"

func Hash256(data []byte) [32]byte {
    first := sha256.Sum256(data)
    return sha256.Sum256(first[:])
}`,
        testCommand: "go test -v -run TestHash256",
        rewardSats: 7500
      },
      {
        id: "c-04-hash160",
        number: 4,
        title: "Hash160 (RIPEMD-160 of SHA-256)",
        tier: "25%",
        category: "Cryptography",
        skills: ["golang.org/x/crypto/ripemd160", "crypto/sha256"],
        objective: "Implement `Hash160(pubKey []byte) [20]byte` generating the 20-byte Public Key Hash used in standard addresses.",
        whyBitcoin: "Hash160 reduces 33-byte compressed public keys to compact 20-byte identifiers, saving blockchain space.",
        githubPath: "altradits/challenges",
        starterCode: `package main

func Hash160(pubKey []byte) [20]byte {
    // TODO: SHA-256 then RIPEMD-160
    return [20]byte{}
}`,
        solutionCode: `package main

import (
    "crypto/sha256"
    "golang.org/x/crypto/ripemd160"
)

func Hash160(pubKey []byte) [20]byte {
    sha := sha256.Sum256(pubKey)
    hasher := ripemd160.New()
    hasher.Write(sha[:])
    var out [20]byte
    copy(out[:], hasher.Sum(nil))
    return out
}`,
        testCommand: "go test -v -run TestHash160",
        rewardSats: 10000
      }
    ]
  },
  {
    id: "quest-3-lightning-l402",
    level: 3,
    title: "Level 3: Lightning Network & L402 Paywalls in Go",
    subtitle: "HTTP 402, Macaroons, and Satoshi Micropayments",
    description: "Learn how the Lightning Network enables sub-cent machine-to-machine payments. Build an L402 payment-required HTTP proxy.",
    icon: "⚡",
    targetMilestone: "Monetize an API endpoint where users pay sats per request via Lightning invoice",
    challenges: [
      {
        id: "c-05-l402-header",
        number: 5,
        title: "L402 WWW-Authenticate Header Generator",
        tier: "50%",
        category: "Lightning Protocol",
        skills: ["net/http", "macaroons", "BOLT-11"],
        objective: "Write an HTTP handler returning Status 402 with `WWW-Authenticate: L402 token=\"...\", invoice=\"lnbc...\"`.",
        whyBitcoin: "L402 (formerly LSAT) is the open standard allowing Kenyan developers to sell APIs globally without credit card accounts.",
        githubPath: "altradits/challenges",
        starterCode: `package main

import "net/http"

func L402Middleware(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        // TODO: check Authorization: L402 <macaroon>:<preimage>
        // If missing, return 402 with invoice
    }
}`,
        solutionCode: `package main

import (
    "fmt"
    "net/http"
)

func L402Middleware(invoice, macaroon string, next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        auth := r.Header.Get("Authorization")
        if auth == "" {
            w.Header().Set("WWW-Authenticate", fmt.Sprintf("L402 token=\\"%s\\", invoice=\\"%s\\"", macaroon, invoice))
            http.Error(w, "Payment Required: Pay invoice to receive auth preimage", http.StatusPaymentRequired)
            return
        }
        next(w, r)
    }
}`,
        testCommand: "go test -v -run TestL402Middleware",
        rewardSats: 25000
      }
    ]
  },
  {
    id: "quest-4-african-rails",
    level: 4,
    title: "Level 4: Kenyan Sovereign Rails & Node Resilience",
    subtitle: "M-Pesa ↔ Lightning Swaps & Blockstream Satellite Listener",
    description: "Bridge East Africa's dominant mobile money network to Bitcoin and receive blockchain blocks directly over radio waves.",
    icon: "🌍",
    targetMilestone: "Deploy a production-ready Safaricom Daraja STK callback forwarder that settles Lightning invoices",
    challenges: [
      {
        id: "c-06-daraja-webhook",
        number: 6,
        title: "M-Pesa STK Callback to Lightning Settle",
        tier: "75%",
        category: "Payment Rails",
        skills: ["M-Pesa Daraja", "Lightning", "Go Webhooks"],
        objective: "Build a concurrent Go webhook listener that verifies Safaricom Daraja JSON callbacks and triggers an instant Lightning payout.",
        whyBitcoin: "Enables instant on-ramp/off-ramp between Kenyan Shillings (KES) and Satoshis with zero foreign exchange fees.",
        githubPath: "altradits/challenges",
        starterCode: `package main

import "net/http"

type DarajaCallback struct {
    Body struct {
        StkCallback struct {
            ResultCode int \`json:"ResultCode"\`
            ResultDesc string \`json:"ResultDesc"\`
        } \`json:"stkCallback"\`
    } \`json:"Body"\`
}

func HandleDarajaSTK(w http.ResponseWriter, r *http.Request) {
    // TODO: parse callback, verify ResultCode == 0, trigger Lightning payment
}`,
        solutionCode: `package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type DarajaCallback struct {
    Body struct {
        StkCallback struct {
            ResultCode int    \`json:"ResultCode"\`
            ResultDesc string \`json:"ResultDesc"\`
        } \`json:"stkCallback"\`
    } \`json:"Body"\`
}

func HandleDarajaSTK(w http.ResponseWriter, r *http.Request) {
    var cb DarajaCallback
    if err := json.NewDecoder(r.Body).Decode(&cb); err != nil {
        http.Error(w, "Bad Request", http.StatusBadRequest)
        return
    }
    if cb.Body.StkCallback.ResultCode == 0 {
        log.Println("M-Pesa payment confirmed! Settle Lightning invoice.")
        w.WriteHeader(http.StatusOK)
        w.Write([]byte(\`{"status":"settled"}\`))
        return
    }
    http.Error(w, "Payment Failed", http.StatusPaymentRequired)
}`,
        testCommand: "go test -v -run TestDarajaSTK",
        rewardSats: 50000
      }
    ]
  }
];
