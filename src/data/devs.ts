export interface Developer {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  skills: string[];
  github: string;
  twitter?: string;
  nostr?: string;
  lightningAddress: string;
  availableForHire: boolean;
  featuredProject?: {
    name: string;
    url: string;
    description: string;
  };
}

export const developers: Developer[] = [
  {
    id: "omondi-b",
    name: "Omondi Brian",
    role: "Full-Stack & Lightning Engineer",
    bio: "Building L402 payment gateways and Lightning-enabled web services in Western Kenya. Passionate about financial sovereignty and local P2P rails.",
    location: "Kisumu, Kenya",
    skills: ["TypeScript", "Node.js", "LDK", "LND", "Next.js", "PostgreSQL"],
    github: "https://github.com",
    twitter: "https://x.com",
    nostr: "npub1kisumu...",
    lightningAddress: "omondi@getalby.com",
    availableForHire: true,
    featuredProject: {
      name: "LakePay L402",
      url: "https://github.com",
      description: "Paywall proxy enabling pay-per-request APIs with Lightning micro-transactions."
    }
  },
  {
    id: "atieno-faith",
    name: "Faith Atieno",
    role: "Bitcoin Protocol & Smart Contracts (Clarity/Rust)",
    bio: "Focusing on sBTC integration, Clarity smart contracts on Stacks, and non-custodial Bitcoin escrow mechanisms for East African commerce.",
    location: "Kisumu, Kenya",
    skills: ["Clarity", "Rust", "Stacks.js", "Bitcoin Script", "Tailwind CSS"],
    github: "https://github.com",
    twitter: "https://x.com",
    nostr: "npub1atieno...",
    lightningAddress: "faithatieno@blink.sv",
    availableForHire: true,
    featuredProject: {
      name: "sBTC Escrow Hub",
      url: "https://github.com",
      description: "Clarity smart contract for trustless milestone escrow backed 1:1 by Bitcoin."
    }
  },
  {
    id: "kevin-otieno",
    name: "Kevin Otieno",
    role: "Hardware & Offline Systems Researcher",
    bio: "Experimenting with Blockstream Satellite SDR receivers, mesh radios (Meshtastic), and Raspberry Pi Bitcoin nodes for low-bandwidth communities.",
    location: "Maseno / Kisumu",
    skills: ["Python", "Embedded C", "Raspberry Pi", "Blockstream Satellite", "Linux"],
    github: "https://github.com",
    lightningAddress: "kevinotieno@walletofsatoshi.com",
    availableForHire: true,
    featuredProject: {
      name: "Kisumu SatReceiver",
      url: "https://github.com",
      description: "Step-by-step documentation and 3D-printed bracket for RTL-SDR satellite dish setup."
    }
  },
  {
    id: "victor-odhiambo",
    name: "Victor Odhiambo",
    role: "Mobile & USSD Bitcoin Engineer",
    bio: "Bridging Bitcoin Lightning Network to feature phones via USSD and SMS APIs. Working on zero-data offline transaction verification.",
    location: "Kisumu, Kenya",
    skills: ["Kotlin", "Flutter", "Africa's Talking API", "Lightning", "Go"],
    github: "https://github.com",
    lightningAddress: "victor@getalby.com",
    availableForHire: false,
    featuredProject: {
      name: "OfflineSats USSD",
      url: "https://github.com",
      description: "Interactive USSD menu prototype querying Lightning invoices via Machankura & AfricasTalking."
    }
  }
];
