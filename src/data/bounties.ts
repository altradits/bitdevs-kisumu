export interface BountyOpportunity {
  id: string;
  title: string;
  source: string;
  reward: string;
  category: "Grant" | "Bounty" | "Remote Job" | "Micro-Task";
  tags: string[];
  link: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const bounties: BountyOpportunity[] = [
  {
    id: "brink-grants",
    title: "Brink Bitcoin Developer Fellowship & Grants",
    source: "Brink.dev",
    reward: "$25k – $150k / yr (Paid in BTC)",
    category: "Grant",
    tags: ["Bitcoin Core", "C++", "Rust", "Protocol"],
    link: "https://brink.dev",
    description: "Full-time fellowships and developer grants for dedicated open-source Bitcoin Core and Lightning contributors worldwide.",
    difficulty: "Advanced"
  },
  {
    id: "stacks-builder-grants",
    title: "Stacks Foundation Developer & Clarity Grants",
    source: "Stacks Foundation",
    reward: "$5k – $50k in STX / sBTC",
    category: "Grant",
    tags: ["Clarity", "Smart Contracts", "Bitcoin L2", "TypeScript"],
    link: "https://stacks.org/grants",
    description: "Milestone-based funding for developers building tools, Clarity contracts, and infrastructure for the sBTC Bitcoin economy.",
    difficulty: "Intermediate"
  },
  {
    id: "geyser-fund",
    title: "Geyser Fund Bitcoin Community Crowdfunding",
    source: "Geyser.fund",
    reward: "Crowdfunded in Sats",
    category: "Bounty",
    tags: ["Education", "Open Source", "Grassroots", "Lightning"],
    link: "https://geyser.fund",
    description: "Crowdfunding platform for Bitcoin creators, builders, and educational meetups in the Global South.",
    difficulty: "Beginner"
  },
  {
    id: "bitcoin-design",
    title: "Bitcoin Design Community Bounties & Tasks",
    source: "Bitcoin Design Foundation",
    reward: "50,000 – 2,000,000 Sats",
    category: "Bounty",
    tags: ["UI/UX", "Frontend", "Figma", "Design Guide"],
    link: "https://bitcoindesign.org",
    description: "Paid bounties for improving open-source Bitcoin wallet interfaces, icons, and developer documentation.",
    difficulty: "Beginner"
  },
  {
    id: "nostr-bounties",
    title: "NIP Protocol & Nostr Client Bounties",
    source: "Bountycaster / Nostr",
    reward: "100k – 10M Sats",
    category: "Bounty",
    tags: ["Nostr", "TypeScript", "WebSockets", "Relays"],
    link: "https://bountycaster.io",
    description: "Direct micro-bounties posted by the global decentralized community for feature pull requests on clients and relays.",
    difficulty: "Intermediate"
  },
  {
    id: "l402-api-services",
    title: "Build Pay-Per-Call AI & Data APIs with L402",
    source: "Lightning Labs / BitDevs Kisumu Guild",
    reward: "Sats per API invocation",
    category: "Micro-Task",
    tags: ["Lightning", "L402", "Python", "Go"],
    link: "https://docs.lightning.engineering/the-lightning-network/l402",
    description: "Deploy microservices that sell local data (weather, lake traffic, translation) or AI compute to global clients via HTTP 402.",
    difficulty: "Intermediate"
  }
];

export const earningGuides = [
  {
    step: "1",
    title: "Set Up Your Non-Custodial Lightning Address",
    summary: "Create a lightning address (e.g. Alby Hub, Blink, Phoenix, or self-hosted LND node) to receive satoshis instantly from any lightning wallet worldwide."
  },
  {
    step: "2",
    title: "Build in Public on GitHub",
    summary: "Fork open source Bitcoin repositories, contribute PRs, and document your learnings on Delving Bitcoin and technical blogs."
  },
  {
    step: "3",
    title: "Submit a PR to the BitDevs Kisumu Directory",
    summary: "Add your developer card with your GitHub, skills, and Lightning Address so global sponsors and hiring managers can discover and pay you directly."
  },
  {
    step: "4",
    title: "Solve Bounties on Bountycaster & Geyser",
    summary: "Pick tagged issues, submit verified solutions, and receive satoshis straight to your wallet without banking intermediaries."
  }
];
