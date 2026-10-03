export interface DiscussionTopic {
  title: string;
  category: "Core" | "Lightning" | "L2 & Stacks" | "Privacy & Security" | "Offline & Hardware";
  link: string;
  summary: string;
}

export interface MeetupEvent {
  number: number;
  date: string;
  time: string;
  location: string;
  venueName: string;
  status: "upcoming" | "past";
  rsvpLink: string;
  topics: DiscussionTopic[];
}

export const meetups: MeetupEvent[] = [
  {
    number: 1,
    date: "Saturday, November 7, 2026",
    time: "2:00 PM – 5:30 PM EAT",
    location: "LakeHub / Kisumu CBD (or Maseno Tech Hub)",
    venueName: "LakeHub Kisumu (Oginga Odinga St)",
    status: "upcoming",
    rsvpLink: "https://t.me/+bitdevskisumu",
    topics: [
      {
        title: "Blockstream Satellite 2.0 & Syncing Bitcoin Without Telcos",
        category: "Offline & Hardware",
        link: "https://blockstream.com/satellite/",
        summary: "Analyzing the DVB-S2 transmission standard, RTL-SDR receiver setup in Western Kenya, and dish elevation angles for Telstar 11N."
      },
      {
        title: "sBTC & Clarity: Building Bitcoin-Native Finance on Stacks",
        category: "L2 & Stacks",
        link: "https://stacks.co",
        summary: "Deep dive into 1:1 Bitcoin backing, decentralized signing committees, and writing bug-free Clarity smart contracts without reentrancy."
      },
      {
        title: "L402 Protocol: Monetizing APIs with Lightning Invoices",
        category: "Lightning",
        link: "https://docs.lightning.engineering/the-lightning-network/l402",
        summary: "How East African developers can sell API services, compute, and web apps to global clients without international credit card merchant accounts."
      },
      {
        title: "Security Engineering: Lessons from Reperiendi & Key Storage",
        category: "Privacy & Security",
        link: "https://bitcoin.org",
        summary: "Distinguishing crypto primitives from operational security, pitfalls in password derivation, and safe seed phrase multisig schemes."
      },
      {
        title: "Bitcoin Optech & Core PR Review: BIP-352 Silent Payments",
        category: "Core",
        link: "https://bitcoinops.org",
        summary: "Technical breakdown of static address privacy, scanning costs for mobile wallets, and indexing optimizations."
      }
    ]
  }
];

export const socraticGuidelines = [
  {
    title: "Chatham House Rule",
    description: "Participants are free to use the information received, but neither the identity nor the affiliation of the speaker(s) may be revealed."
  },
  {
    title: "Technical Focus Only",
    description: "No price talk, no token speculation, no trading advice. We strictly analyze protocol code, cryptographic primitives, cryptography, scaling, and engineering implementations."
  },
  {
    title: "Do Your Homework",
    description: "Read the linked papers, GitHub pull requests, and Optech newsletters before attending. Everyone is encouraged to question assumptions and contribute."
  },
  {
    title: "Don't Trust, Verify",
    description: "We encourage running your own node, inspecting raw code commits, and testing software locally on Signet or Regtest."
  }
];
