const sections = document.querySelectorAll("main section.reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.2 });
  sections.forEach((s) => io.observe(s));
} else {
  sections.forEach((s) => s.classList.add("in"));
}

const i18n = {
  en: {
    "nav.aria": "Navigation",
    "nav.worlds": "Worlds",
    "nav.rules": "Rules",
    "nav.staff": "Staff",
    "nav.license": "License",
    "nav.home": "Home",
    "lang.to": "FR",
    "lang.aria": "Passer en français",
    "footer.disclaimer": "<strong>Disclaimer:</strong> This project uses an archipelago theme but is fully independent and not affiliated with the official Archipelago Multiworld Randomizer team.",
    "home.title": "Synthorium",
    "home.headline": "Join the community that listens.",
    "home.lede": "A chest here. A key elsewhere. One seed binding every world.",
    "home.discordNote": "To submit a bug report or get information about the mods, everything is on Discord.",
    "home.communityEyebrow": "Community",
    "home.communityTitle": "We listen. We fix. Together.",
    "home.communityLead": "We won’t judge your YAML. Whether you’re new or a multiworld veteran, you belong here.",
    "home.communityBody": "Respect first, support second. Ask your question, share your seed, and we’ll untangle the softlock together — cleanly, calmly.",
    "worlds.title": "Worlds — Synthorium",
    "worlds.eyebrow": "Catalog",
    "worlds.heading": "Worlds",
    "worlds.intro": "Multiworld projects connected to Synthorium.",
    "tag.playable": "Playable",
    "tag.unstable": "Unstable Build",
    "tag.beta": "Beta",
    "tag.soon": "Coming soon",
    "tag.future": "Future-Project",
    "tag.dev": "Dev-Build",
    "world.meta": "Development updates and official patches",
    "world.playableEyebrow": "Worlds · Playable",
    "options.site": "Options site",
    "back.worlds": "Back to Worlds",
    "source.code": "Source code",
    "requiem.title": "Resident Evil Requiem — Synthorium",
    "requiem.intro": "Archipelago client and apworld for Resident Evil Requiem. Development updates, patches, and YAML options.",
    "requiem.body": "Connect Resident Evil Requiem into a multiworld seed. Use the options site to configure your YAML, then grab the client and apworld from the project repository.",
    "village.title": "Resident Evil Village — Synthorium",
    "village.intro": "Archipelago client and apworld for Resident Evil Village. Development updates, patches, and YAML options.",
    "village.body": "Connect Resident Evil Village into a multiworld seed. Use the options site to configure your YAML, then grab the client and apworld from the project repository.",
    "rules.title": "Rules — Synthorium",
    "rules.eyebrow": "Community",
    "rules.heading": "Rules",
    "rules.intro": "Synthorium Discord server guidelines.",
    "rules.r1.title": "Respect & Support",
    "rules.r1.body": "Be respectful to all members. No insults, discrimination, harassment, or toxic behavior will be tolerated.",
    "rules.r2.title": "AI Usage",
    "rules.r2.body": "AI is an assistant, not a 100% developer. Do not post fully AI-generated code without testing, understanding, and validating it yourself. Human work remains core.",
    "rules.r3.title": "Archipelago Disclaimer",
    "rules.r3.body": "No confusion with the official project. Our multiworld projects are independent. Do not share misleading links or ping the official Archipelago team for our custom mods.",
    "rules.r4.title": "Content & Security",
    "rules.r4.body": "No spam, malicious links, or piracy. Only share safe code and use the appropriate thematic channels for your discussions and projects.",
    "rules.r5.title": "Support Tickets",
    "rules.r5.body": "Use tickets wisely. Open a ticket only for actual technical issues or appeals. Please be patient with the administration team.",
    "staff.title": "Staff — Synthorium",
    "staff.eyebrow": "Staff · Multiworld",
    "staff.heading": "The Team",
    "staff.intro": "Three roles, linked like worlds in a seed. Same goal: grow Synthorium without losing respect.",
    "staff.founder": "Founder",
    "staff.founderBody": "World vision, project direction, and the link between multiworld islands.",
    "staff.founderTitle": "Versatile Developer",
    "staff.founderBio": "Passionate and adaptable, I work with Python and Lua for scripting, C / C++ for low-level performance, and JavaScript, HTML and CSS for web development. That versatility lets me adapt quickly to any kind of technical project.",
    "staff.mod": "Moderator",
    "staff.modBody": "Server moderation, listening to members, and keeping the space healthy.",
    "staff.coadmin": "Co-admin",
    "staff.coadminBody": "Organization, support, and day-to-day coordination with the team.",
    "staff.note": "A multiworld community stands thanks to the people who connect players — the same way a seed connects games.",
    "license.title": "License — Synthorium",
    "license.eyebrow": "Legal",
    "license.heading": "License",
    "license.intro": "Synthorium clearly separates code from written content. Here are the applicable terms of use.",
    "license.codeRole": "Code",
    "license.codeBody": "The project code (HTML, CSS, JavaScript, and related scripts) is released under the <strong>MIT</strong> license. Copyright (c) 2026 LechapelierHD.",
    "license.textRole": "Written content",
    "license.textBody": "Site text (presentations, rules, Staff and License pages) is released under <strong>Creative Commons Attribution 4.0 International</strong>. Reuse is allowed with attribution to Synthorium.",
    "license.ccLink": "Read CC BY 4.0",
    "license.fullTitle": "Full text — MIT License",
    "license.summary": "Code under MIT license. Written content under CC BY 4.0."
  },
  fr: {
    "nav.aria": "Navigation",
    "nav.worlds": "Mondes",
    "nav.rules": "Règles",
    "nav.staff": "Staff",
    "nav.license": "Licence",
    "nav.home": "Accueil",
    "lang.to": "EN",
    "lang.aria": "Switch to English",
    "footer.disclaimer": "<strong>Avertissement :</strong> Ce projet utilise un thème archipelago mais est entièrement indépendant et non affilié à l’équipe officielle d’Archipelago Multiworld Randomizer.",
    "home.title": "Synthorium",
    "home.headline": "Rejoins la communauté qui écoute.",
    "home.lede": "Un coffre ici. Une clé ailleurs. Une seed qui relie tous les mondes.",
    "home.discordNote": "Pour signaler un bug ou obtenir des infos sur les mods, tout se passe sur Discord.",
    "home.communityEyebrow": "Communauté",
    "home.communityTitle": "On écoute. On corrige. Ensemble.",
    "home.communityLead": "On ne jugera pas ta YAML. Que tu sois débutant ou vétéran multiworld, tu as ta place ici.",
    "home.communityBody": "Le respect d’abord, le support ensuite. Pose ta question, partage ta seed, et on démêle le softlock ensemble — proprement, calmement.",
    "worlds.title": "Mondes — Synthorium",
    "worlds.eyebrow": "Catalogue",
    "worlds.heading": "Mondes",
    "worlds.intro": "Projets multiworld liés à Synthorium.",
    "tag.playable": "Jouable",
    "tag.unstable": "Build instable",
    "tag.beta": "Bêta",
    "tag.soon": "Bientôt",
    "tag.future": "Projet futur",
    "tag.dev": "Build dev",
    "world.meta": "Mises à jour et patchs officiels",
    "world.playableEyebrow": "Mondes · Jouable",
    "options.site": "Site d’options",
    "back.worlds": "Retour aux mondes",
    "source.code": "Code source",
    "requiem.title": "Resident Evil Requiem — Synthorium",
    "requiem.intro": "Client Archipelago et apworld pour Resident Evil Requiem. Mises à jour, patchs et options YAML.",
    "requiem.body": "Connecte Resident Evil Requiem à une seed multiworld. Configure ta YAML sur le site d’options, puis récupère le client et l’apworld dans le dépôt du projet.",
    "village.title": "Resident Evil Village — Synthorium",
    "village.intro": "Client Archipelago et apworld pour Resident Evil Village. Mises à jour, patchs et options YAML.",
    "village.body": "Connecte Resident Evil Village à une seed multiworld. Configure ta YAML sur le site d’options, puis récupère le client et l’apworld dans le dépôt du projet.",
    "rules.title": "Règles — Synthorium",
    "rules.eyebrow": "Communauté",
    "rules.heading": "Règles",
    "rules.intro": "Règles du serveur Discord Synthorium.",
    "rules.r1.title": "Respect & soutien",
    "rules.r1.body": "Respecte tous les membres. Aucune insulte, discrimination, harcèlement ou toxicité ne sera tolérée.",
    "rules.r2.title": "Usage de l’IA",
    "rules.r2.body": "L’IA est une assistante, pas un développeur à 100 %. Ne publie pas de code entièrement généré par IA sans l’avoir testé, compris et validé toi-même. Le travail humain reste central.",
    "rules.r3.title": "Avertissement Archipelago",
    "rules.r3.body": "Pas de confusion avec le projet officiel. Nos projets multiworld sont indépendants. Ne partage pas de liens trompeurs et ne ping pas l’équipe Archipelago officielle pour nos mods custom.",
    "rules.r4.title": "Contenu & sécurité",
    "rules.r4.body": "Pas de spam, de liens malveillants ou de piratage. Ne partage que du code sûr et utilise les salons thématiques adaptés à tes discussions et projets.",
    "rules.r5.title": "Tickets de support",
    "rules.r5.body": "Utilise les tickets avec discernement. Ouvre un ticket uniquement pour un vrai problème technique ou un appel. Merci d’être patient avec l’équipe d’administration.",
    "staff.title": "Staff — Synthorium",
    "staff.eyebrow": "Staff · Multiworld",
    "staff.heading": "L’équipe",
    "staff.intro": "Trois rôles, liés comme des mondes dans une seed. Même objectif : faire grandir Synthorium sans perdre le respect.",
    "staff.founder": "Fondateur",
    "staff.founderBody": "Vision du monde, direction du projet, et le lien entre les îles multiworld.",
    "staff.founderTitle": "Développeur polyvalent",
    "staff.founderBio": "Passionné et adaptable, je travaille avec Python et Lua pour le scripting, C / C++ pour la performance bas niveau, et JavaScript, HTML et CSS pour le web. Cette polyvalence me permet de m’adapter vite à tout type de projet technique.",
    "staff.mod": "Modérateur",
    "staff.modBody": "Modération du serveur, écoute des membres, et maintien d’un espace sain.",
    "staff.coadmin": "Co-admin",
    "staff.coadminBody": "Organisation, support, et coordination du quotidien avec l’équipe.",
    "staff.note": "Une communauté multiworld tient grâce aux personnes qui relient les joueurs — comme une seed relie les jeux.",
    "license.title": "Licence — Synthorium",
    "license.eyebrow": "Légal",
    "license.heading": "Licence",
    "license.intro": "Synthorium sépare clairement le code du contenu écrit. Voici les conditions d’utilisation applicables.",
    "license.codeRole": "Code",
    "license.codeBody": "Le code du projet (HTML, CSS, JavaScript et scripts associés) est publié sous licence <strong>MIT</strong>. Copyright (c) 2026 LechapelierHD.",
    "license.textRole": "Contenu écrit",
    "license.textBody": "Les textes du site (présentations, règles, pages Staff et Licence) sont publiés sous <strong>Creative Commons Attribution 4.0 International</strong>. La réutilisation est autorisée avec attribution à Synthorium.",
    "license.ccLink": "Lire CC BY 4.0",
    "license.fullTitle": "Texte complet — Licence MIT",
    "license.summary": "Code sous licence MIT. Contenu écrit sous CC BY 4.0."
  }
};

const LANG_KEY = "synthorium-lang";

function readLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch (_) {}
  return "en";
}

function writeLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (_) {}
}

function applyLang(lang) {
  const pack = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = pack[key];
    if (value == null) return;
    el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = pack[key];
    if (value == null) return;
    el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    const value = pack[key];
    if (value == null) return;
    el.setAttribute("aria-label", value);
  });

  const titleKey = document.body.getAttribute("data-i18n-title");
  if (titleKey && pack[titleKey]) document.title = pack[titleKey];

  const btn = document.querySelector("[data-lang-toggle]");
  if (btn) {
    btn.textContent = pack["lang.to"];
    btn.setAttribute("aria-label", pack["lang.aria"]);
  }
}

function setupLang() {
  let lang = readLang();
  applyLang(lang);

  const btn = document.querySelector("[data-lang-toggle]");
  if (!btn) return;

  btn.addEventListener("click", () => {
    lang = lang === "fr" ? "en" : "fr";
    writeLang(lang);
    applyLang(lang);
  });
}

setupLang();
