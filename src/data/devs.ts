export interface Developer {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  avatar?: string;
  skills: string[];
  github: string;
  twitter?: string;
  nostr?: string;
  lightningAddress: string;
  lnurl?: string;
  availableForHire: boolean;
  featuredProject?: {
    name: string;
    url: string;
    description: string;
  };
  openSourceHighlights?: {
    name: string;
    url: string;
    description: string;
  }[];
}

export const developers: Developer[] = [
  {
    id: "stanley-thuita",
    name: "Stanley Thuita",
    role: "Co-Founder & Bitcoin Infrastructure Contributor",
    avatar: "https://avatars.githubusercontent.com/u/227045218?v=4",
    bio: "Building Bitcoin & Lightning infrastructure for Africa. Active open-source protocol contributor, author of the 158-lesson Go-to-Bitcoin engineering curriculum, and bridging Western Kenya developers to global sound money rails.",
    location: "Kisumu, Kenya",
    skills: ["Go", "Bitcoin Protocol", "Lightning Network", "Infrastructure", "M-Pesa API", "Astro"],
    github: "https://github.com/altradits",
    twitter: "https://x.com/BitDevsKsm",
    lightningAddress: "potablesignal21@walletofsatoshi.com",
    lnurl: "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhqmm5v93xcetnd9nkuctvxgcsm55zyn",
    availableForHire: true,
    featuredProject: {
      name: "altradits / challenges",
      url: "https://github.com/altradits/challenges",
      description: "Progressive Go curriculum — 158 structured lessons from package main to Bitcoin open source contributor."
    },
    openSourceHighlights: [
      {
        name: "africa-route-lang-ai",
        url: "https://github.com/altradits/africa-route-lang-ai",
        description: "Bridging African languages & Bitcoin education with context-aware AI & Lightning rewards."
      },
      {
        name: "bursaryhub",
        url: "https://github.com/altradits/bursaryhub",
        description: "Fraud-proof bursary and scholarship platform for Kenya connecting donors and students in Go."
      }
    ]
  }
];
