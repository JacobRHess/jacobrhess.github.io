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
    name: "Ringhold",
    tag: "Strategy game · in testing",
    desc: "A ring-fortress RTS roguelite: hold a keep at the center of the ring against waves pushing in from every side. 49 forts across 6 campaigns, 4 factions and an endless mode.",
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
    name: "agentdetect",
    tag: "LLM agent detection · open source",
    desc: "Detections for intrusions driven by autonomous LLM agents — keyed to the agent's operating rhythm (tool-use loops, inference-latency cadence, retry storms) rather than any payload. 10 detections, each proven in CI by replaying attack and benign traces through a real Splunk, with attack telemetry captured from a real agent in a honeypot sandbox.",
    link: "https://github.com/JacobRHess/agentdetect",
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
    name: "pyramidcheck",
    tag: "Detection durability · open source",
    desc: "Pyramid-of-Pain durability scorer for Sigma rules: proves brittle IOC-based rules die under infrastructure rotation while behavioral rules survive. Scored the full SigmaHQ corpus (~3.1k rules) and cross-validated the evaluator against real Splunk in CI.",
    link: "https://github.com/JacobRHess/pyramidcheck",
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
  {
    tab: "portfolio",
    name: "splunk-bots-hunts",
    tag: "Threat hunting · open source",
    desc: "Threat-hunting walkthroughs over Splunk's Boss of the SOC v3 dataset. 20 hunts across 5 attack scenarios, each validated against Splunk running in Docker in CI, with a deployable app, dashboards and a written report.",
    link: "https://github.com/JacobRHess/splunk-bots-hunts",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "detlab",
    tag: "Detection lab · open source",
    desc: "A reproducible Splunk network-detection lab. Attack and detection cases mapped to MITRE ATT&CK, packaged as a deployable Splunk app with dashboards and a coverage matrix.",
    link: "https://github.com/JacobRHess/detlab",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "sigma-pipeline",
    tag: "Detection CI/CD · open source",
    desc: "Detection-as-code CI/CD for Sigma rules: lint, fixture-test against positive and negative samples, then deploy straight to Splunk over its REST API.",
    link: "https://github.com/JacobRHess/sigma-pipeline",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "splunk-sigma",
    tag: "Splunk app · open source",
    desc: "A Splunk app that runs Sigma rules natively through a custom | sigma search command, bundled with 7 ATT&CK-mapped detections.",
    link: "https://github.com/JacobRHess/splunk-sigma",
    linkLabel: "GitHub",
  },
  {
    tab: "portfolio",
    name: "cybersmith",
    tag: "AI security education · open source",
    desc: "An AI cybersecurity tutor that adapts to the learner. FastAPI backend with the Anthropic API driving lessons and questions.",
    link: "https://github.com/JacobRHess/cybersmith",
    linkLabel: "GitHub",
  },

  // ── MISC (published MTG + other released) ────────────────────
  {
    tab: "misc",
    name: "Wild Map",
    tag: "Web · live",
    desc: "A world map where every pin is a live nature webcam — safari waterholes, bear rivers, coral reefs, eagle nests, erupting volcanoes and more. Around 200 verified-live streams that play right on the map, with a day/night overlay so you can find whatever is awake, and a 'cams near me' finder. Grew out of two single-page walls I built first for bat cams and bird cams.",
    link: "https://wildmap.fly.dev",
    linkLabel: "Explore",
  },
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
