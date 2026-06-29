// ─────────────────────────────────────────────────────────────
//  EDIT YOUR CONTENT HERE
//  Each project is one object. Copy an existing block to add more.
//  tab: "apps" | "portfolio" | "misc"   (controls which tab it shows under)
//  link: "" to hide the button (e.g. private/unreleased work)
// ─────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Jacob Hess",
  tagline: "Detection engineering · security tooling · indie apps",
  blurb:
    "I build security detection content and the occasional game or app. Below is most of what I've shipped — open-source detection labs, a few live products, and side projects.",
  linkedin: "https://www.linkedin.com/in/jrhess-active/",
  github: "https://github.com/JacobRHess",
  email: "hess.jacobr@gmail.com",
};

// ── LICENSES & CERTIFICATIONS ──────────────────────────────────
//  Fill these in from your LinkedIn "Licenses & certifications" section.
//  date and link are optional — leave "" to omit.
const CERTS = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC2", date: "Jun 2024", link: "" },
  { name: "CompTIA Security+", issuer: "CompTIA", date: "Jan 2023", link: "" },
  { name: "CompTIA Network+", issuer: "CompTIA", date: "Jan 2023", link: "" },
];

// ── SKILLS ─────────────────────────────────────────────────────
//  Plain list of skill names, shown as tags.
const SKILLS = [
  "Cybersecurity",
  "Network Security",
  "Security Principles",
  "Security Incident Response",
  "Access Controls",
  "Identity and Access Management (IAM)",
  "Cryptography",
  "Windows Security",
  "Linux System Administration",
  "Internet Protocol Suite (TCP/IP)",
  "Domain Name System (DNS)",
  "Python",
  "Rust",
  "Back-End Web Development",
  "Back-end Operations",
  "Website Administration",
  "Quality Assurance",
  "Project Management",
  "Customer Service",
  "Sales",
  "Consumer Electronics",
];

const PROJECTS = [
  // ── APPS ─────────────────────────────────────────────────────
  {
    tab: "apps",
    name: "TrailerTilt",
    tag: "iOS + watchOS · App Store",
    desc: "A trailer-leveling app for iPhone and Apple Watch — line up your trailer quickly with a clear visual level.",
    link: "https://apps.apple.com/us/app/trailertilt/id6771577784",
    linkLabel: "App Store",
  },
  {
    tab: "apps",
    name: "PixelFront",
    tag: "iOS game · in progress",
    desc: "An 8-bit real-time hex strategy game (think HoI4-lite) for iOS. Built with Phaser, TypeScript, Vite and Capacitor. Economy-to-armies model with a clean DOM HUD.",
    link: "",
    linkLabel: "",
  },
  {
    tab: "apps",
    name: "TalkRadius",
    tag: "Real-time voice · App Store",
    desc: "A real-time proximity voice chat app — talk to people near you. React + Vite frontend wrapped with Capacitor for iOS, Node server, deployed on Fly.io.",
    link: "https://apps.apple.com/us/app/talkradius/id6764141616",
    linkLabel: "App Store",
  },

  // ── PORTFOLIO / DETECTION ENGINEERING (LinkedIn work) ─────────
  {
    tab: "portfolio",
    name: "purpleloop",
    tag: "Detection lab · open source",
    desc: "Flagship closed-loop purple-team detection lab: emulate ATT&CK techniques, capture host + network + IDS telemetry into Splunk, replay detections, and measure coverage. 10 scenarios across Sysmon, Zeek and Suricata.",
    link: "https://github.com/JacobRHess/purpleloop",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "responseloop",
    tag: "DFIR · open source",
    desc: "Investigate-and-respond companion to purpleloop. 14 cases, 12 analyzers, 13 ATT&CK techniques across host/network/IDS, with Sigma + STIX export, campaign correlation, Plaso super-timelines and Volatility3 memory forensics.",
    link: "https://github.com/JacobRHess/responseloop",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "clouddetect",
    tag: "Cloud detection · open source",
    desc: "Cloud and identity detection engineering. Sigma rules compiled to SPL + Lucene and replayed through both Splunk and OpenSearch in CI. 19 detections across AWS CloudTrail, Okta and Entra ID.",
    link: "https://github.com/JacobRHess/clouddetect",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "netdetect",
    tag: "Network detection · open source",
    desc: "Network-security detections — Suricata signatures and Zeek behavioural analytics, each with alert and benign PCAP fixtures replayed by real engines in CI. Includes an HTML report and ATT&CK Navigator layer.",
    link: "https://github.com/JacobRHess/netdetect",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "flipperdetect",
    tag: "Hardware-attack detection · open source",
    desc: "Detections for attacks staged from a Flipper Zero, with proof traffic. 7 detections across both attack modes, CI-replayed through live Suricata + Zeek.",
    link: "https://github.com/JacobRHess/flipperdetect",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "hidsentry",
    tag: "BadUSB detection · open source",
    desc: "Detects BadUSB / keystroke-injection attacks by HID timing rather than payload content. Pure-stdlib scorer, CI-replayed labeled trace fixtures, and a live Windows hook.",
    link: "https://github.com/JacobRHess/hidsentry",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "webdetect",
    tag: "Web/app detection · open source",
    desc: "Application-layer detections proven against a real ModSecurity + OWASP CRS stack in CI. Malicious and benign fixtures per case, with an ATT&CK Navigator layer. 11 detections across 5 ATT&CK techniques.",
    link: "https://github.com/JacobRHess/webdetect",
    linkLabel: "GitHub",
  },

  // ── MISC (published MTG + other released) ────────────────────
  {
    tab: "misc",
    name: "STACK",
    tag: "Daily game · live",
    desc: "A daily Magic: The Gathering card-ranking game. Rank 5 cards three ways (popularity, printings, price) — fully automated from Scryfall data, 13.6k cards across 240 themes.",
    link: "https://timewaster9000.com/stack/",
    linkLabel: "Play",
  },
  {
    tab: "misc",
    name: "Timewaster9000",
    tag: "Web · live",
    desc: "Home for STACK and a growing set of quick daily games, plus a public mirror of league reports.",
    link: "https://timewaster9000.com",
    linkLabel: "Visit",
  },
  {
    tab: "misc",
    name: "TCG Tournament Bot",
    tag: "Discord bot · live",
    desc: "Feature-complete Discord bot for running trading-card tournaments — standings, match flow, decklists, auto-generated visual reports and recaps. Deployed on Fly.io.",
    link: "https://tcg-tournament-bot.fly.dev",
    linkLabel: "Site",
  },
  {
    tab: "misc",
    name: "Atlanta Highlander",
    tag: "League site",
    desc: "A format-guide website for the Atlanta Highlander Magic league — rules, bans and watchlist in one clean page.",
    link: "https://tcg-tournament-bot.fly.dev/highlander",
    linkLabel: "Visit",
  },
];
