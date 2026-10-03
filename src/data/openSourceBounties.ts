export interface GlobalBountyProgram {
  id: string;
  name: string;
  sponsor: string;
  payoutRange: string;
  payoutType: "Annual Fellowship" | "Milestone Grant" | "Per-Issue Bounty" | "Crowdfunded Sats";
  payoutCurrency: "Sats & BTC" | "USD (Paid in BTC)" | "STX & sBTC" | "Lightning Sats";
  url: string;
  issuesUrl?: string;
  category: "Core Protocol" | "Lightning & L2" | "Privacy & Global South" | "Tooling & Infra";
  techStack: string[];
  difficulty: "Beginner Good First Issue" | "Intermediate Builder" | "Advanced Protocol";
  applicationStatus: "Always Open" | "Quarterly Cohort" | "Instant Payout";
  description: string;
  winningStrategy: string;
  sampleIssuesOrDeliverables: string[];
}

export const globalBountyPrograms: GlobalBountyProgram[] = [
  {
    id: "brink-fellowship",
    name: "Brink Developer Fellowship & Grants",
    sponsor: "Brink.dev",
    payoutRange: "$25,000 – $150,000 / year",
    payoutType: "Annual Fellowship",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://brink.dev/programs/",
    category: "Core Protocol",
    techStack: ["C++", "Rust", "Go", "Bitcoin Core", "Testing"],
    difficulty: "Advanced Protocol",
    applicationStatus: "Always Open",
    description: "Full-time fellowships and developer grants for dedicated open-source Bitcoin Core, Lightning, and protocol contributors worldwide.",
    winningStrategy: "Point directly to your 158-lesson Go curriculum (altradits/challenges), start by submitting small bug fixes or test-coverage PRs to btcsuite/btcd and Bitcoin Core functional tests in Python, and highlight your role as Co-Founder of BitDevs Kisumu.",
    sampleIssuesOrDeliverables: [
      "Improve unit test coverage for Bitcoin transaction verification",
      "Contribute to BIP-352 silent payment indexing in Bitcoin Core test suite",
      "Benchmark memory allocation in P2P message deserialization"
    ]
  },
  {
    id: "spiral-grants",
    name: "Spiral (Block) Bitcoin Developer Grants",
    sponsor: "Spiral.xyz (Block Inc.)",
    payoutRange: "$25,000 – $100,000 / year",
    payoutType: "Milestone Grant",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://spiral.xyz/grants/",
    category: "Lightning & L2",
    techStack: ["Rust", "Go", "LDK (Lightning Dev Kit)", "BDK", "Mobile"],
    difficulty: "Intermediate Builder",
    applicationStatus: "Always Open",
    description: "Grants for engineers building free, open-source projects that make Bitcoin more accessible and useful around the globe.",
    winningStrategy: "Propose building African infrastructure bridges: 'LDK/LND Go bindings for African Mobile Money & Offline Satellite synchronization'. Spiral loves developer tooling that solves real-world adoption constraints.",
    sampleIssuesOrDeliverables: [
      "Build a Go SDK wrapping LDK for offline transaction caching",
      "Improve LDK documentation and sample apps for emerging markets",
      "Contribute mobile wallet syncing optimizations over low-bandwidth links"
    ]
  },
  {
    id: "bountycaster-sats",
    name: "Bountycaster Lightning GitHub Bounties",
    sponsor: "Decentralized Nostr & Bitcoin Community",
    payoutRange: "50,000 – 5,000,000 Sats (~$50 – $5,000)",
    payoutType: "Per-Issue Bounty",
    payoutCurrency: "Lightning Sats",
    url: "https://bountycaster.io",
    issuesUrl: "https://bountycaster.io/?tag=bitcoin",
    category: "Tooling & Infra",
    techStack: ["Go", "TypeScript", "Python", "Rust", "Nostr"],
    difficulty: "Beginner Good First Issue",
    applicationStatus: "Instant Payout",
    description: "Open bounty board where project maintainers attach instant Lightning satoshi bounties to GitHub issues, feature requests, and bug fixes.",
    winningStrategy: "Filter by 'Bitcoin' or 'Go'. Look for issues with 100k-500k sat rewards. Comment with your planned approach, submit a clean PR within 48 hours, and receive payment directly to potablesignal21@walletofsatoshi.com.",
    sampleIssuesOrDeliverables: [
      "Implement missing NIP-57 Zaps parsing in Go nostr client",
      "Fix race condition in Lightning invoice webhook handler",
      "Write CLI tool for exporting Nostr key backups"
    ]
  },
  {
    id: "hrf-bitcoin-fund",
    name: "Human Rights Foundation (HRF) Bitcoin Dev Fund",
    sponsor: "HRF",
    payoutRange: "$10,000 – $50,000",
    payoutType: "Milestone Grant",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://hrf.org/programs_posts/devfund/",
    category: "Privacy & Global South",
    techStack: ["Go", "Python", "C", "Satellite", "USSD", "Mesh"],
    difficulty: "Intermediate Builder",
    applicationStatus: "Always Open",
    description: "Grants supporting open-source Bitcoin developers focused on financial freedom, anti-censorship, zero-internet broadcasting, and Global South adoption.",
    winningStrategy: "Position your work on Blockstream Satellite node synchronization for Lake Victoria and offline USSD Bitcoin for feature phones. HRF specifically prioritizes African builders creating tools resilient against power and internet cuts.",
    sampleIssuesOrDeliverables: [
      "Develop open-source receiver scripts for Blockstream Satellite in East Africa",
      "Document zero-internet Bitcoin transaction relay over mesh radios",
      "Build educational Bitcoin tutorials translated to regional African languages"
    ]
  },
  {
    id: "geyser-fund-campaigns",
    name: "Geyser Fund Bitcoin Creator & Dev Grants",
    sponsor: "Geyser.fund",
    payoutRange: "100,000 – 50,000,000 Sats",
    payoutType: "Crowdfunded Sats",
    payoutCurrency: "Sats & BTC",
    url: "https://geyser.fund/explore",
    category: "Tooling & Infra",
    techStack: ["Go", "Open Source", "Education", "Hardware"],
    difficulty: "Beginner Good First Issue",
    applicationStatus: "Always Open",
    description: "Global crowdfunding and grant platform dedicated to Bitcoin open source software, educational meetups, and grassroots projects.",
    winningStrategy: "Create a Geyser project for 'BitDevs Kisumu Hardware Lab & Go Mastery School'. Highlight your existing 158-lesson repository and request micro-funding for RTL-SDR satellite dongles and Raspberry Pis.",
    sampleIssuesOrDeliverables: [
      "Publish weekly open-source Go Bitcoin coding tutorials",
      "Document community satellite dish builds with video guides",
      "Ship open-source L402 paywall micro-services"
    ]
  },
  {
    id: "stacks-builder-grants",
    name: "Stacks Foundation Developer Grants",
    sponsor: "Stacks Foundation",
    payoutRange: "$5,000 – $60,000",
    payoutType: "Milestone Grant",
    payoutCurrency: "STX & sBTC",
    url: "https://stacks.org/grants",
    category: "Lightning & L2",
    techStack: ["Clarity", "Go", "TypeScript", "Smart Contracts"],
    difficulty: "Intermediate Builder",
    applicationStatus: "Quarterly Cohort",
    description: "Milestone-based funding for developers creating tools, smart contracts, and decentralized financial primitives backed 1:1 by Bitcoin (sBTC).",
    winningStrategy: "Apply to build a 'Go SDK for sBTC transactions' or a 'Clarity non-custodial milestone escrow for African cross-border trade'. Highlight your Go expertise and Kisumu developer network.",
    sampleIssuesOrDeliverables: [
      "Write a Go client library interacting with the Stacks blockchain node API",
      "Build a decentralized escrow Clarity contract for P2P Bitcoin payments",
      "Deploy open-source sBTC liquidity tracker dashboard"
    ]
  },
  {
    id: "bitcoin-design-bounties",
    name: "Bitcoin Design Community Bounties",
    sponsor: "Bitcoin Design Foundation",
    payoutRange: "50,000 – 2,000,000 Sats",
    payoutType: "Per-Issue Bounty",
    payoutCurrency: "Lightning Sats",
    url: "https://bitcoindesign.org",
    issuesUrl: "https://github.com/BitcoinDesign/Meta/issues",
    category: "Tooling & Infra",
    techStack: ["Frontend", "UI/UX", "Markdown", "Go", "Figma"],
    difficulty: "Beginner Good First Issue",
    applicationStatus: "Instant Payout",
    description: "Bounties for developers and designers improving Bitcoin wallet workflows, merchant checkout guides, and open-source documentation.",
    winningStrategy: "Contribute African merchant payment flow documentation or build a web demo implementing their recommended Lightning checkout UI components.",
    sampleIssuesOrDeliverables: [
      "Implement accessible QR code scanning modal following Bitcoin Design specs",
      "Document offline USSD wallet interaction patterns",
      "Build interactive Bitcoin transaction fee estimator widget"
    ]
  }
];
