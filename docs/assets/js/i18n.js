(function () {
    "use strict";

    var translations = {
        en: {
            "home.ctf.writeups": "Read my write-ups &rarr;",
            "home.quizia.tagline": "Describe a topic, get a complete quiz in seconds.",
            "home.sesame.tagline": "Log in by cooking: a password made of recipe ingredients.",
            "home.uml.tagline": "PlantUML class diagrams turned into C++, Java and Python code.",
            "home.uml.context": "Academic project, team of three",
            "home.saine.tagline": "A hardened kiosk that cleans files from untrusted USB drives before they reach the network.",
            "home.saine.context": "Internship at <a href=\"https://kodetis.com\">Kodetis</a>",
            "home.combava.tagline": "Markdown in, finished PDF out: an opinionated report generator with nothing to configure.",
            "nav.blog": "Write-ups",
            "nav.home": "Home",
            "skip.content": "Skip to content",
            "brand.label": "al3ph_zero \u2014 Home",
            "nav.projects": "Projects",
            "nav.about": "About",
            "language.label": "Language",
            "footer.legal": "Legal mentions",
            "back.home": "&larr; Back to home",
            "back.blog": "&larr; Back to write-ups",
            "page.about.title": "About",
            "page.blog.title": "Write-ups",
            "page.legal.title": "Legal mentions",
            "home.intro": "Engineering student. I work on system security and Rust, I play CTFs, and I bring a little too much math into everything.",
            "home.projects": "Projects",
            "home.combava.alt": "combava banner: Markdown in, PDF out, no knobs",
            "home.combava.context": "Personal project",
            "home.combava.body": "You write Markdown with a small TOML header, and combava gives you a finished report: no style to tune and no template to set up. It makes the choices for you: one template, French typography, a closed list of header keys, and mistakes such as broken links, remote images or citations without a bibliography stop the build. A failed build never destroys the previous PDF. A core library transpiles Markdown to Typst, with diagnostics that point back to the exact line and column of the source, and Typst is built in, so there is no LaTeX or Pandoc to install. Read the <a href=\"https://thomas.mezino.re/combava\">documentation</a>.",
            "home.saine.body": "SAINE is a hardened fork of the CEA's <a href=\"https://github.com/cea-sec/usbsas\">usbsas</a> framework: a standalone kiosk that copies files from an untrusted USB device to a trusted destination, so no workstation ever touches the device. The design is microkernel-style: every USB, SCSI and filesystem parser runs as its own user-space process under a dedicated seccomp and Landlock policy, and the whole pipeline resets between transfers. On top of the upstream project I added an encrypted upload destination over VPN, antivirus deep scanning, a QR-code transfer report and recipient selection in the GUI. I also built the surrounding platform: reproducible NixOS kiosk images for Raspberry Pi 5 (aarch64) and Zimaboard 2 (x86_64), full Nix cross-compilation, a signed update server, a Dagger CI/CD pipeline, and system hardening validated with Lynis.",
            "home.saine.alt": "SAINE transfer pipeline: insertion, isolation, analysis, release",
            "home.saine.arch.legend": "added in SAINE on top of the CEA's usbsas",
            "home.saine.arch.alt": "SAINE pipeline: an untrusted USB drive is read by sandboxed processes driven by usbsas, scanned, then released to a clean USB drive, an encrypted VPN upload or a QR-code report",
            "home.uml.body": "It parses classes, interfaces, enumerations and the usual relationships (inheritance, implementation, composition, aggregation and association), and relies on the Abstract Factory pattern to keep diagram parsing fully decoupled from language-specific generation.",
            "home.uml.alt": "uml2code core class diagram",
            "home.sesame.body": "Instead of typing characters, you build a recipe by dragging and dropping ingredients, each one mapping to a character. The idea is to rely on procedural memory rather than rote recall.",
            "home.sesame.context": "Hackathon, <a href=\"https://www.nuitdelinfo.com/\">Nuit de l'Info</a>",
            "home.sesame.home.alt": "Sésame home page",
            "home.sesame.login.alt": "Sésame login page",
            "home.quizia.body": "The AI writes the whole quiz from a topic and a number of questions, ready to share or keep private. Quizzes can also be built by hand, and a public catalog offers search, filtering and gameplay tracking.",
            "home.quizia.context": "Academic project",
            "home.quizia.alt": "Quizia landing page",
            "home.ctf.rank3": "3rd <small>/ 19</small>",
            "home.ctf.rank10": "10th <small>/ 96</small>",
            "home.ctf.rank286": "286th <small>/ 1052</small>",
            "home.ctf.team": "Team",
            "home.contact.mail": "Email",
            "about.quote": "&laquo;&nbsp;Simplicity is the ultimate sophistication.&nbsp;&raquo;",
            "about.quote.source": "&mdash; attributed to Leonardo da Vinci",
            "about.who.title": "Who I am",
            "about.who.body": "I'm Thomas, an engineering student who likes computer science a little too much. I spend my time building small tools, breaking things to understand how they work, and learning whatever the next project happens to require.",
            "about.name.title": "Why &laquo;&nbsp;al3ph_zero&nbsp;&raquo;",
            "about.name.body1": "The name is a play on <strong>&#8501;<sub>0</sub></strong> (aleph-null), the symbol mathematicians use for the smallest infinity &mdash; the size of the set of natural numbers, the first of Cantor's transfinite cardinals.",
            "about.name.body2": "I chose this symbol because, to me, it outlines the limits of human cognition: no matter how hard we try, certain concepts (such as infinity) will forever remain beyond our reach. Written with a bit of leetspeak (&laquo;&nbsp;al3ph&nbsp;&raquo;) on top, because old habits die hard.",
            "about.name.body3": "As you can imagine, I'm a math enthusiast, hence I have the obligation to make mathematical references in the content I post online.",
            "about.work.title": "How I work",
            "about.work.body1": "I like building things that are simple before they are clever. I would rather ship something small that I fully understand than something large that I only half control. Most of my projects start as a curiosity and grow only as far as they stay fun to maintain.",
            "about.work.body2": "I care about clear code, honest documentation, and tools that respect the people who use them.",
            "about.ai.title": "On artificial intelligence",
            "about.ai.body1": "I use AI every day, and extensively: to write code, to research a topic, to find my way around an unfamiliar codebase. Pretending otherwise would be dishonest. It has changed the way I work, and I see no reason to go back.",
            "about.ai.body2": "That doesn't mean handing over the craft. I can still code by hand, and I keep that skill sharp with LeetCode-style exercises from time to time. Above all, I like to understand a language in depth &mdash; its memory model, its type system, its subtleties &mdash; because that is what lets me judge what an AI suggests instead of simply accepting it.",
            "about.ai.body3": "I still see myself as a <strong>code artisan</strong>; my tools have just changed.",
            "legal.publisher.title": "Publisher",
            "legal.publisher.body": "This website is published by Thomas Mezino, as an individual, for personal and non-commercial purposes.",
            "legal.contact": "Contact:",
            "legal.hosting.title": "Hosting",
            "legal.hosting.body": "This website is hosted by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States, through the GitHub Pages service (<a href=\"https://pages.github.com\">pages.github.com</a>).",
            "legal.ip.title": "Intellectual property",
            "legal.ip.body": "Unless otherwise stated, the content of this website (text, source code, graphics) is the property of Thomas Mezino. Any reproduction or use without prior authorization is prohibited.",
            "legal.data.title": "Personal data",
            "legal.data.body": "This website sets no cookies, runs no analytics and collects no personal data of its own. The only data you may share is the information you choose to send by email.",
            "legal.data.third": "Blog posts containing mathematical notation load the MathJax library from the jsDelivr content delivery network. Your IP address and browser details are therefore transmitted to that third party when you open such a post. No other external resource is loaded.",
            "blog.empty.title": "Coming soon",
            "blog.empty.body": "Nothing here yet. Write-ups from CTFs and notes on my projects are on the way. Check back later."
        },
        fr: {
            "home.ctf.writeups": "Lire mes write-ups &rarr;",
            "home.quizia.tagline": "Décrivez un sujet, obtenez un quiz complet en quelques secondes.",
            "home.sesame.tagline": "Se connecter en cuisinant&nbsp;: un mot de passe fait d'ingrédients.",
            "home.uml.tagline": "Des diagrammes de classes PlantUML transformés en code C++, Java et Python.",
            "home.uml.context": "Projet universitaire, équipe de trois",
            "home.saine.tagline": "Une borne durcie qui assainit les fichiers des clés USB non fiables avant qu'ils n'atteignent le réseau.",
            "home.saine.context": "Stage chez <a href=\"https://kodetis.com\">Kodetis</a>",
            "home.combava.tagline": "Du Markdown en entrée, un PDF fini en sortie&nbsp;: un générateur de rapports opiniâtre, sans rien à configurer.",
            "nav.blog": "Write-ups",
            "nav.home": "Accueil",
            "skip.content": "Aller au contenu",
            "brand.label": "al3ph_zero \u2014 Accueil",
            "nav.projects": "Projets",
            "nav.about": "À propos",
            "language.label": "Langue",
            "footer.legal": "Mentions légales",
            "back.home": "&larr; Retour à l'accueil",
            "back.blog": "&larr; Retour aux write-ups",
            "page.about.title": "À propos",
            "page.blog.title": "Write-ups",
            "page.legal.title": "Mentions légales",
            "home.intro": "Étudiant ingénieur. Je travaille sur la sécurité système et Rust, je participe à des CTF, et je glisse un peu trop de maths partout.",
            "home.projects": "Projets",
            "home.combava.alt": "Bannière de combava&nbsp;: du Markdown en entrée, un PDF en sortie, aucun réglage",
            "home.combava.context": "Projet personnel",
            "home.combava.body": "On écrit du Markdown avec un petit en-tête TOML, et combava produit un rapport finalisé&nbsp;: aucun style à régler, aucun modèle à configurer. L'outil tranche à votre place&nbsp;: un seul modèle, la typographie française, une liste fermée de clés d'en-tête, et les erreurs comme les liens cassés, les images distantes ou les citations sans bibliographie interrompent la compilation. Un échec de compilation n'écrase jamais le PDF précédent. Une bibliothèque centrale transpile le Markdown en Typst, avec des diagnostics qui renvoient à la ligne et à la colonne exactes de la source, et Typst est intégré&nbsp;: inutile d'installer LaTeX ou Pandoc. Consulter la <a href=\"https://thomas.mezino.re/combava\">documentation</a>.",
            "home.saine.body": "SAINE est un fork renforcé du framework <a href=\"https://github.com/cea-sec/usbsas\">usbsas</a> du CEA&nbsp;: une borne autonome qui copie les fichiers d'un périphérique USB non fiable vers une destination de confiance, sans qu'aucun poste de travail ne touche le périphérique. Son architecture s'inspire d'un micro-noyau&nbsp;: chaque analyseur USB, SCSI et de système de fichiers s'exécute dans son propre processus en espace utilisateur, sous une politique seccomp et Landlock dédiée, et toute la chaîne est réinitialisée entre les transferts. J'ai ajouté au projet d'origine une destination de téléversement chiffrée à travers un VPN, une analyse antivirus approfondie, un compte rendu de transfert par QR code et la sélection du destinataire dans l'interface. J'ai également construit la plateforme environnante&nbsp;: images de borne NixOS reproductibles pour Raspberry Pi 5 (aarch64) et Zimaboard 2 (x86_64), compilation croisée Nix complète, serveur de mises à jour signées, pipeline CI/CD Dagger et durcissement système validé avec Lynis.",
            "home.saine.alt": "Chaîne de transfert SAINE&nbsp;: insertion, isolation, analyse et libération",
            "home.saine.arch.legend": "ajouté dans SAINE au-dessus d'usbsas (CEA)",
            "home.saine.arch.alt": "Chaîne SAINE : une clé USB non fiable est lue par des processus isolés pilotés par usbsas, analysée, puis libérée vers une clé saine, un téléversement chiffré via VPN ou un compte rendu par QR code",
            "home.uml.body": "Il analyse les classes, interfaces, énumérations et relations courantes (héritage, implémentation, composition, agrégation et association). Le design pattern <strong>abstract factory</strong> découple totalement l'analyse du diagramme de la génération propre à chaque langage.",
            "home.uml.alt": "Diagramme de classes du cœur d'uml2code",
            "home.sesame.body": "Au lieu de saisir des caractères, on compose une recette en glissant-déposant des ingrédients, chacun correspondant à un caractère. L'idée est de s'appuyer sur la mémoire procédurale plutôt que sur la mémorisation brute.",
            "home.sesame.context": "Hackathon, <a href=\"https://www.nuitdelinfo.com/\">Nuit de l'Info</a>",
            "home.sesame.home.alt": "Page d'accueil de Sésame",
            "home.sesame.login.alt": "Page de connexion de Sésame",
            "home.quizia.body": "L'IA rédige tout le quiz à partir d'un sujet et d'un nombre de questions, prêt à être partagé ou gardé privé. Les quiz peuvent aussi être créés à la main&nbsp;; un catalogue public permet la recherche, le filtrage et le suivi des parties.",
            "home.quizia.context": "Projet universitaire",
            "home.quizia.alt": "Page d'accueil de Quizia",
            "home.ctf.rank3": "3e <small>/ 19</small>",
            "home.ctf.rank10": "10e <small>/ 96</small>",
            "home.ctf.rank286": "286e <small>/ 1&nbsp;052</small>",
            "home.ctf.team": "Équipe",
            "home.contact.mail": "Courriel",
            "about.quote": "&laquo;&nbsp;La simplicité est la sophistication suprême.&nbsp;&raquo;",
            "about.quote.source": "&mdash; attribué à Léonard de Vinci",
            "about.who.title": "Qui je suis",
            "about.who.body": "Je m'appelle Thomas, je suis étudiant ingénieur et j'aime peut-être un peu trop l'informatique. Je passe mon temps à construire de petits outils, à casser des choses pour comprendre leur fonctionnement et à apprendre ce que le prochain projet exige.",
            "about.name.title": "Pourquoi &laquo;&nbsp;al3ph_zero&nbsp;&raquo;",
            "about.name.body1": "Ce nom est une référence à <strong>&#8501;<sub>0</sub></strong> (aleph-zéro), le symbole utilisé par les mathématiciens pour désigner le plus petit infini&nbsp;: le cardinal de l'ensemble des entiers naturels et le premier des cardinaux transfinis de Cantor.",
            "about.name.body2": "J'ai choisi ce symbole car, à mon sens, il montre les limites de l'esprit humain&nbsp;: malgré tous les efforts que nous pourrions fournir, certains concepts (comme l'infini) nous resteront à jamais hors de portée. Écrit toujours avec une touche de leetspeak (&laquo;&nbsp;al3ph&nbsp;&raquo;), parce que les vieilles habitudes ont la vie dure.",
            "about.name.body3": "Comme vous pouvez l'imaginer, je suis passionné de mathématiques&nbsp;; j'ai donc l'obligation de glisser des références mathématiques dans ce que je publie en ligne.",
            "about.work.title": "Ma façon de travailler",
            "about.work.body1": "J'aime construire des choses simples avant de chercher les abstractions. Je préfère livrer un petit projet que je comprends entièrement plutôt qu'un grand projet que je ne maîtrise qu'à moitié. La plupart de mes projets naissent d'une curiosité et ne grandissent que tant qu'ils restent agréables à maintenir.",
            "about.work.body2": "J'accorde de l'importance à la clarté du code, à une documentation honnête et aux outils qui respectent leurs utilisateurs.",
            "about.ai.title": "À propos de l'intelligence artificielle",
            "about.ai.body1": "J'utilise l'IA tous les jours, et de façon intensive&nbsp;: pour coder, pour me documenter sur un sujet, pour m'orienter dans un code que je ne connais pas. Prétendre le contraire serait malhonnête. Elle a changé ma façon de travailler, et je ne vois aucune raison de revenir en arrière.",
            "about.ai.body2": "Cela ne veut pas dire lui céder le métier. Je sais toujours programmer à la main, et j'entretiens ce savoir-faire de temps à autre avec des exercices de type LeetCode. Surtout, j'aime comprendre un langage en profondeur &mdash; son modèle mémoire, son système de types, ses subtilités &mdash;, parce que c'est ce qui me permet de juger ce que l'IA propose plutôt que de l'accepter tel quel.",
            "about.ai.body3": "Je me vois toujours comme un <strong>artisan du code</strong>&nbsp;; ce sont simplement mes outils qui ont changé.",
            "legal.publisher.title": "Éditeur",
            "legal.publisher.body": "Ce site est édité par Thomas Mezino, à titre individuel, à des fins personnelles et non commerciales.",
            "legal.contact": "Contact&nbsp;:",
            "legal.hosting.title": "Hébergement",
            "legal.hosting.body": "Ce site est hébergé par GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis, par l'intermédiaire du service GitHub Pages (<a href=\"https://pages.github.com\">pages.github.com</a>).",
            "legal.ip.title": "Propriété intellectuelle",
            "legal.ip.body": "Sauf mention contraire, le contenu de ce site (textes, code source et éléments graphiques) est la propriété de Thomas Mezino. Toute reproduction ou utilisation sans autorisation préalable est interdite.",
            "legal.data.title": "Données personnelles",
            "legal.data.body": "Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne collecte lui-même aucune donnée personnelle. Les seules données que vous pouvez transmettre sont celles que vous choisissez d'envoyer par courriel.",
            "legal.data.third": "Les articles du blog contenant des notations mathématiques chargent la bibliothèque MathJax depuis le réseau de diffusion jsDelivr. Votre adresse IP et les informations de votre navigateur sont donc transmises à ce tiers lorsque vous ouvrez un tel article. Aucune autre ressource externe n'est chargée.",
            "blog.empty.title": "Bientôt disponible",
            "blog.empty.body": "Rien ici pour le moment. Des write-ups de CTF et des notes sur mes projets arrivent bientôt. Revenez plus tard."
        }
    };

    var root = document.documentElement;

    function selectedLanguage() {
        return root.getAttribute("data-language") === "fr" ? "fr" : "en";
    }

    function translateElement(element, language) {
        var key = element.getAttribute("data-i18n");
        if (key && translations[language][key] !== undefined) {
            element.innerHTML = translations[language][key];
        }

        ["aria-label", "alt", "title"].forEach(function (attribute) {
            var attributeKey = element.getAttribute("data-i18n-" + attribute);
            if (attributeKey && translations[language][attributeKey] !== undefined) {
                element.setAttribute(attribute, translations[language][attributeKey]);
            }
        });
    }

    function localizeDates(language) {
        var formatter = new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        document.querySelectorAll("[data-localized-date]").forEach(function (element) {
            var date = new Date(element.getAttribute("datetime"));
            if (!Number.isNaN(date.getTime())) element.textContent = formatter.format(date);
        });
    }

    // Doit reproduire exactement le motif de _includes/head.html : le nom
    // complet ferme le titre. Sinon la bascule de langue écrase, côté client,
    // le titre optimisé rendu par Jekyll — et Googlebot exécute ce script.
    var SITE_AUTHOR = "Thomas Mezino";

    function updateTitle(language) {
        var page = root.getAttribute("data-page");
        if (page === "post") {
            var postTitle = document.querySelector(".post-header h1 [data-language-content=\"" + language + "\"]");
            if (postTitle) document.title = postTitle.textContent.trim() + " — " + SITE_AUTHOR;
            return;
        }
        var key = "page." + page + ".title";
        var title = translations[language][key];
        if (title) document.title = title + " — " + SITE_AUTHOR;
    }

    function applyLanguage(language, persist) {
        language = language === "fr" ? "fr" : "en";
        root.lang = language;
        root.setAttribute("data-language", language);

        document.querySelectorAll("[data-i18n], [data-i18n-aria-label], [data-i18n-alt], [data-i18n-title]").forEach(function (element) {
            translateElement(element, language);
        });
        document.querySelectorAll("[data-language-option]").forEach(function (button) {
            var active = button.getAttribute("data-language-option") === language;
            button.setAttribute("aria-pressed", String(active));
        });
        localizeDates(language);
        updateTitle(language);

        if (persist) {
            try { localStorage.setItem("language", language); } catch (e) {}
        }
        root.classList.remove("js-i18n");
        document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: language } }));
    }

    document.querySelectorAll("[data-language-option]").forEach(function (button) {
        button.addEventListener("click", function () {
            applyLanguage(button.getAttribute("data-language-option"), true);
        });
    });

    applyLanguage(window.__preferredLanguage || selectedLanguage(), false);
})();
