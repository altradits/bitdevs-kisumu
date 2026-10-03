# BitDevs Kisumu (Western Kenya Bitcoin Guild) ⚡🌊

> **Location**: 0°05'29.0"S, 34°46'04.8"E • Kisumu, Kenya  
> **Website**: Running locally on `http://127.0.0.1:4321`

BitDevs Kisumu is a technical Bitcoin developer community in Kisumu, Kenya. We host monthly Socratic Seminars, test offline and Blockstream Satellite node synchronization for the Lake Victoria region, and connect local developers directly to global Bitcoin-native income rails.

---

## 🧭 Core Pillars

1. **Socratic Seminars (Chatham House Rule)**: Monthly deep-dive technical discussions analyzing Bitcoin Core PRs, Lightning advancements, BIPs, Stacks/sBTC Clarity contracts, and cryptography. No token speculation; pure engineering.
2. **Kisumu Bitcoin Developer Showcase & Lightning Remittance**: A directory spotlighting local builders with integrated Lightning addresses (`LNURL-pay`). Remote sponsors, clients, and diaspora can tip or pay local developers in satoshis with zero foreign exchange fees.
3. **Offline & Satellite Resilience**: Pre-calculated dish aiming metrics (Azimuth 82.4°, Elevation 54.8°) for Blockstream Satellite 2.0 (ABS-2A / Telstar 11N) to keep nodes synchronized during fiber cuts or mobile data outages, plus Machankura USSD (`*483*8333#`) for zero-internet feature phones.
4. **Global Bitcoin Earning Rails**: Curated directory of grants (Brink, Stacks Foundation), bounties (Geyser, Bountycaster), and L402 paywall micro-services.

---

## 🛠️ How to Add Your Developer Profile (via Git PR)

Any developer in Kisumu or Western Kenya can add their profile:

1. Fork this repository.
2. Open [`src/data/devs.ts`](file:///Users/mac/BitDevs/src/data/devs.ts).
3. Add your entry to the `developers` array:

```typescript
{
  id: "your-handle",
  name: "Your Full Name",
  role: "e.g. Full-Stack & Lightning Dev",
  bio: "Brief 1-2 sentence description of what you build in Bitcoin.",
  location: "Kisumu, Kenya",
  skills: ["TypeScript", "Rust", "Lightning", "Go"],
  github: "https://github.com/your-username",
  lightningAddress: "yourname@getalby.com", // or Blink, WoS, Phoenix
  availableForHire: true,
  featuredProject: {
    name: "Project Name",
    url: "https://github.com/your-username/project",
    description: "Short description of what the project does."
  }
}
```

4. Submit a Pull Request. Once merged, your card and interactive Lightning tip modal will appear live!

---

## 💻 Tech Stack

- **Framework**: [Astro 7](https://astro.build) (Zero-JS by default, ultra-low bandwidth for mobile networks)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Payments**: Lightning Network (LNURL-pay, QR codes, deep-links)
- **Deployment Ready**: GitHub Pages, Cloudflare Pages, or Vercel

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build production bundle to ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 Socratic Seminar Guidelines

- **Chatham House Rule**: Use any knowledge gained, but never quote or attribute identities outside the room.
- **Technical Focus Only**: We talk code, cryptography, mempools, channel states, and peer-to-peer resilience.
- **Do Your Homework**: Review the posted topic list and GitHub PRs before the meetup.
- **Don't Trust, Verify**: Run your own node and inspect source code.
