export interface GlobalBountyProgram {
  id: string;
  name: string;
  sponsor: string;
  payoutRange: string;
  payoutType: "Annual Fellowship" | "Milestone Grant" | "Per-Issue Bounty" | "Writing for Sats" | "Micro-Tasks & Freelance";
  payoutCurrency: "Sats & BTC" | "USD (Paid in BTC)" | "STX & sBTC" | "Lightning Sats";
  url: string;
  issuesUrl?: string;
  category: "Writing & Content" | "Core Protocol" | "Lightning & L2" | "Privacy & Global South" | "Tooling & Infra" | "Freelance & Tasks";
  techStack: string[];
  difficulty: "Beginner Friendly" | "Intermediate Builder" | "Advanced Protocol";
  applicationStatus: "Always Open" | "Quarterly Cohort" | "Instant Payout" | "Pitch Based";
  description: string;
  winningStrategy: string;
  sampleIssuesOrDeliverables: string[];
}

export const globalBountyPrograms: GlobalBountyProgram[] = [
  // 1. WRITING & RESEARCH FOR SATS
  {
    id: "stacker-news-writing",
    name: "Stacker News (Daily Technical Writing & Zaps)",
    sponsor: "Stacker News Community",
    payoutRange: "1,000 – 250,000+ Sats per post",
    payoutType: "Writing for Sats",
    payoutCurrency: "Lightning Sats",
    url: "https://stacker.news",
    category: "Writing & Content",
    techStack: ["Technical Writing", "Go", "Bitcoin Tutorials", "Nostr"],
    difficulty: "Beginner Friendly",
    applicationStatus: "Instant Payout",
    description: "The Reddit/Hacker News of Bitcoin powered by Lightning. Users and sponsors zap real satoshis to informative posts, Go tutorials, code breakdowns, and technical explainers. Sats withdraw instantly to your Wallet of Satoshi.",
    winningStrategy: "Publish serialized chapters of your 158-lesson Go curriculum ('Go for Bitcoiners: Day 1 to Day 158') and write about running Blockstream Satellite nodes in Western Kenya. The community generously rewards authentic African engineering stories.",
    sampleIssuesOrDeliverables: [
      "Tutorial: Building a zero-allocation Bitcoin address generator in Go",
      "Field Report: Testing Blockstream Satellite dish angles in Kisumu, Kenya",
      "Explainer: Why M-Pesa Daraja + Lightning Network solves cross-border remittances"
    ]
  },
  {
    id: "bitcoin-magazine-contributor",
    name: "Bitcoin Magazine Paid Freelance Contributor",
    sponsor: "BTC Inc. / Bitcoin Magazine",
    payoutRange: "$150 – $350+ per published article (Paid in BTC)",
    payoutType: "Writing for Sats",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://bitcoinmagazine.com",
    category: "Writing & Content",
    techStack: ["Technical Journalism", "Protocol Analysis", "African Bitcoin"],
    difficulty: "Intermediate Builder",
    applicationStatus: "Pitch Based",
    description: "The oldest and most respected Bitcoin publication in the world pays freelance writers and developers for deep-dive technical essays, protocol explainers, and real-world adoption stories.",
    winningStrategy: "Pitch 'CONTRIBUTOR SUBMISSION: How Western Kenya is Syncing Bitcoin from Space Without Telcos' or 'From Package Main to Protocol PR: A Developer's Path to Bitcoin Core' directly to editor@bitcoinmagazine.com with a 150-word pitch.",
    sampleIssuesOrDeliverables: [
      "1,500-word deep dive into Blockstream Satellite 2.0 reception in rural Kenya",
      "Analysis of BIP-352 Silent Payments adoption for African mobile wallets",
      "Technical walkthrough of L402 paywall microservices for emerging markets"
    ]
  },
  {
    id: "nostr-longform-zaps",
    name: "Nostr Long-Form Publishing (Habla.news & Yakihonne)",
    sponsor: "Decentralized Nostr Network",
    payoutRange: "5,000 – 500,000 Sats in direct Zaps",
    payoutType: "Writing for Sats",
    payoutCurrency: "Lightning Sats",
    url: "https://habla.news",
    issuesUrl: "https://yakihonne.com",
    category: "Writing & Content",
    techStack: ["Nostr", "Markdown", "Open Source", "Lightning Zaps"],
    difficulty: "Beginner Friendly",
    applicationStatus: "Instant Payout",
    description: "Censorship-resistant markdown publishing platforms built on the Nostr protocol (NIP-23). Readers zap satoshis directly to your linked Lightning address (potablesignal21@walletofsatoshi.com) with zero platform fees.",
    winningStrategy: "Cross-post technical articles from your GitHub repos with clean code snippets and an embedded Lightning tip button. Engage with the global Bitcoin Nostr community using tag #nostr #bitcoin #dev.",
    sampleIssuesOrDeliverables: [
      "Complete guide to secp256k1 point multiplication in Go",
      "How to set up a headless Raspberry Pi Bitcoin node in Kenya",
      "Step-by-step tutorial on decoding BOLT-11 invoices without external libraries"
    ]
  },
  {
    id: "bitcoin-optech-contributor",
    name: "Bitcoin Optech Technical Newsletter Reviews",
    sponsor: "Bitcoin Optech Group",
    payoutRange: "Reputation + Bounties / Fellowships",
    payoutType: "Writing for Sats",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://bitcoinops.org",
    category: "Writing & Content",
    techStack: ["Bitcoin Core", "PR Summaries", "Mailing Lists", "Technical Writing"],
    difficulty: "Advanced Protocol",
    applicationStatus: "Always Open",
    description: "Bitcoin Optech helps Bitcoin-based businesses integrate scaling technologies and publishes weekly newsletters summarizing protocol PRs and mailing list discussions.",
    winningStrategy: "Contribute summaries for Delving Bitcoin discussions or Bitcoin Core PR reviews. High-quality contributions directly open doors to funded Brink fellowships.",
    sampleIssuesOrDeliverables: [
      "Summarize Bitcoin Core PR review club sessions",
      "Document BIP-352 test vector progress for mobile developers",
      "Review Mempool cluster fee estimation algorithms"
    ]
  },

  // 2. FELLOWSHIPS & MAJOR OPEN SOURCE GRANTS
  {
    id: "btrust-builders-africa",
    name: "Btrust Builders Africa Fellowship & Starter Grants",
    sponsor: "Btrust (Founded by Jack Dorsey & Jay-Z)",
    payoutRange: "$5,000 – $35,000 (Stipends & Grants)",
    payoutType: "Annual Fellowship",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://btrust.tech",
    issuesUrl: "https://pathways.btrust.tech",
    category: "Core Protocol",
    techStack: ["Go", "Rust", "C++", "Bitcoin Core", "LND", "LDK"],
    difficulty: "Intermediate Builder",
    applicationStatus: "Quarterly Cohort",
    description: "Specifically created to fund and train African software engineers transitioning into Bitcoin and Lightning open-source development. Provides guided cohort stipends, open-source fellowships, and direct grants.",
    winningStrategy: "You are the ideal candidate! You are based in Kenya, co-founding BitDevs Kisumu, and authored the 158-lesson Go engineering curriculum (altradits/challenges). Apply for the Btrust Open Source Fellowship citing your BitDevs leadership.",
    sampleIssuesOrDeliverables: [
      "Graduate from Btrust Pathways live cohort into full Fellowship",
      "Contribute merged PRs to LND / btcsuite in Go",
      "Host local Socratic Seminars bridging Kisumu students to Btrust resources"
    ]
  },
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
    winningStrategy: "Point directly to your 158-lesson Go curriculum (altradits/challenges), start by submitting small bug fixes or test-coverage PRs to btcsuite/btcd and Bitcoin Core functional tests, and highlight your role as Co-Founder of BitDevs Kisumu.",
    sampleIssuesOrDeliverables: [
      "Improve unit test coverage for Bitcoin transaction verification",
      "Contribute to BIP-352 silent payment indexing in Bitcoin Core test suite",
      "Benchmark memory allocation in P2P message deserialization"
    ]
  },
  {
    id: "opensats-grants",
    name: "OpenSats Long-Term Support (LTS) & Project Grants",
    sponsor: "OpenSats 501(c)(3)",
    payoutRange: "$10,000 – $100,000+ (Full-Time Funding)",
    payoutType: "Annual Fellowship",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://opensats.org/apply",
    category: "Core Protocol",
    techStack: ["Go", "Rust", "Bitcoin Infrastructure", "Nostr"],
    difficulty: "Intermediate Builder",
    applicationStatus: "Always Open",
    description: "Public charity that funds free and open-source software contributors working on Bitcoin and Nostr. Offers both Project Grants and Long-Term Support (LTS) providing full-time living expenses.",
    winningStrategy: "Submit a grant application for 'African Offline Node Resilience & Open-Source Go Tooling' citing your bitkeys, rawtx, and satellite tools. OpenSats explicitly prioritizes open-source builders working on sovereign decentralization.",
    sampleIssuesOrDeliverables: [
      "Full-time maintenance of open-source Bitcoin Go libraries",
      "Open-source Blockstream Satellite frame decoding tools",
      "Localization and documentation of Bitcoin tools for African communities"
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
    difficulty: "Beginner Friendly",
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

  // 3. PER-ISSUE BOUNTIES & GITHUB TASKS
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
    difficulty: "Beginner Friendly",
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
    id: "polar-sh-bounties",
    name: "Polar.sh GitHub Open Source Bounties",
    sponsor: "Polar.sh Community",
    payoutRange: "$50 – $1,500 per merged issue",
    payoutType: "Per-Issue Bounty",
    payoutCurrency: "USD (Paid in BTC)",
    url: "https://polar.sh",
    issuesUrl: "https://polar.sh/explore",
    category: "Tooling & Infra",
    techStack: ["Go", "TypeScript", "Python", "Rust"],
    difficulty: "Beginner Friendly",
    applicationStatus: "Instant Payout",
    description: "Crowdfunded bounties attached directly to GitHub issues in top open-source repositories. When your pull request is merged, rewards release automatically.",
    winningStrategy: "Browse tagged issues in Go and developer tooling repositories. Focus on bug reproduction and unit test fixes where you can deliver clean PRs within a weekend.",
    sampleIssuesOrDeliverables: [
      "Fix memory leak in HTTP connection pool",
      "Add missing integration test suite for REST client",
      "Implement structured JSON logger for microservice"
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
    difficulty: "Beginner Friendly",
    applicationStatus: "Instant Payout",
    description: "Bounties for developers and designers improving Bitcoin wallet workflows, merchant checkout guides, and open-source documentation.",
    winningStrategy: "Contribute African merchant payment flow documentation or build a web demo implementing their recommended Lightning checkout UI components.",
    sampleIssuesOrDeliverables: [
      "Implement accessible QR code scanning modal following Bitcoin Design specs",
      "Document offline USSD wallet interaction patterns",
      "Build interactive Bitcoin transaction fee estimator widget"
    ]
  },

  // 4. FREELANCE & MICRO-TASKS FOR SATS
  {
    id: "microlancer-tasks",
    name: "Microlancer (Freelance Gigs Paid in Sats)",
    sponsor: "Microlancer.io",
    payoutRange: "10,000 – 1,000,000 Sats per gig",
    payoutType: "Micro-Tasks & Freelance",
    payoutCurrency: "Lightning Sats",
    url: "https://microlancer.io",
    category: "Freelance & Tasks",
    techStack: ["Go", "Technical Writing", "Code Review", "Scripting"],
    difficulty: "Beginner Friendly",
    applicationStatus: "Instant Payout",
    description: "Decentralized freelance marketplace where clients hire developers, writers, and researchers with escrowed Lightning payments.",
    winningStrategy: "Create gigs offering: 'I will write Go tests for your Bitcoin package', 'I will review your Lightning invoice implementation', or 'I will write technical Bitcoin tutorials'.",
    sampleIssuesOrDeliverables: [
      "Review smart contract code for security vulnerabilities",
      "Write unit tests for a Go payment gateway",
      "Translate Bitcoin educational content to Swahili"
    ]
  },
  {
    id: "stakwork-microtasks",
    name: "Stakwork (Micro-Jobs Paid via Lightning)",
    sponsor: "Stakwork Inc.",
    payoutRange: "500 – 50,000 Sats per task",
    payoutType: "Micro-Tasks & Freelance",
    payoutCurrency: "Lightning Sats",
    url: "https://stakwork.com",
    category: "Freelance & Tasks",
    techStack: ["Micro-tasks", "AI Evaluation", "Data Labeling", "Scripting"],
    difficulty: "Beginner Friendly",
    applicationStatus: "Instant Payout",
    description: "Micro-task platform that breaks down complex tech jobs into atomic tasks distributed globally and paid per second over the Lightning Network.",
    winningStrategy: "Sign up and link your Lightning address. Use it for quick satoshi inflows during spare hours between intensive coding sprints.",
    sampleIssuesOrDeliverables: [
      "AI model evaluation and prompt tuning",
      "Audio transcription and translation",
      "Data validation and categorization"
    ]
  }
];
