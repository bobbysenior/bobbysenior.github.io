(function () {
    "use strict";

    var translations = {
        en: {
            "nav.home": "Home",
            "nav.projects": "Projects",
            "nav.about": "About",
            "language.label": "Language",
            "footer.legal": "Legal mentions",
            "back.home": "&larr; Back to home",
            "back.blog": "&larr; Back to blog",
            "page.about.title": "About",
            "page.blog.title": "Blog",
            "page.legal.title": "Legal mentions",
            "home.intro": "Hey! I'm an engineering student passionate about computer science. On this page, you'll find information about my school and personal projects, as well as ways to contact me.",
            "home.tools": "Languages and tools",
            "home.tools.label": "Technologies I use",
            "home.projects": "Projects",
            "home.saine.name": "SAINE / USB-SAS — secure USB clean station (<a href=\"https://kodetis.com\">Kodetis</a>, internship)",
            "home.saine.body": "SAINE is a hardened fork of the CEA's <a href=\"https://github.com/cea-sec/usbsas\">usbsas</a> framework: a standalone kiosk that copies files from an untrusted USB device to a trusted destination, so no workstation ever touches the device. The design is microkernel-style: every USB, SCSI and filesystem parser runs as its own user-space process under a dedicated seccomp and Landlock policy, and the whole pipeline resets between transfers. On top of the upstream project I added an encrypted upload destination over VPN, antivirus deep scanning, a QR-code transfer report and recipient selection in the GUI. I also built the surrounding platform: reproducible NixOS kiosk images for Raspberry Pi 5 (aarch64) and Zimaboard 2 (x86_64), full Nix cross-compilation, a signed update server, a Dagger CI/CD pipeline, and system hardening validated with Lynis. Rust, Nix, protobuf, ClamAV.",
            "home.saine.alt": "SAINE transfer pipeline: insertion, isolation, analysis, release",
            "home.uml.body": "A multi-language code generator that turns PlantUML class diagrams into object-oriented source code in C++, Java and Python. It parses classes, interfaces, enumerations and the usual relationships (inheritance, implementation, composition, aggregation and association), and relies on the Abstract Factory pattern to keep diagram parsing fully decoupled from language-specific generation. An academic project carried out by a team of three.",
            "home.uml.alt": "uml2code core class diagram",
            "home.sesame.body": "An alternative authentication system that replaces the usual alphanumeric password with a culinary one: instead of typing characters, you build a recipe by dragging and dropping ingredients, each one mapping to a character. The idea is to rely on procedural memory rather than rote recall. Built with a Laravel backend and vanilla JavaScript drag-and-drop during the <a href=\"https://www.nuitdelinfo.com/\">Nuit de l'Info</a> hackathon.",
            "home.sesame.home.alt": "Sésame home page",
            "home.sesame.login.alt": "Sésame login page",
            "home.quizia.body": "An AI-powered quiz application: describe a topic and a number of questions, and the AI writes the whole quiz in seconds, ready to share or keep private. Quizzes can also be built by hand, and a public catalog offers search, filtering and gameplay tracking. Built with Next.js, React, TypeScript and Tailwind CSS on top of Supabase, with question generation powered by the Cerebras Cloud SDK.",
            "home.quizia.alt": "Quizia landing page",
            "home.ctf.rank3": "3rd / 19",
            "home.ctf.rank10": "10th / 96",
            "home.ctf.rank286": "286th / 1052",
            "home.ctf.team": "Team",
            "home.contact.mail": "Professional email —",
            "about.quote": "&laquo;&nbsp;Simplicity is the ultimate sophistication.&nbsp;&raquo;",
            "about.quote.source": "&mdash; attributed to Leonardo da Vinci",
            "about.who.title": "Who I am",
            "about.who.body": "I'm Thomas, an engineering student who likes computer science a little too much. I spend my time building small tools, breaking things to understand how they work, and learning whatever the next project happens to require.",
            "about.name.title": "Why &laquo;&nbsp;al3ph_zero&nbsp;&raquo;",
            "about.name.body1": "The name is a play on <strong>&#8501;<sub>0</sub></strong> (aleph-null), the symbol mathematicians use for the smallest infinity &mdash; the size of the set of natural numbers, the first of Cantor's transfinite cardinals.",
            "about.name.body2": "I chose this symbol because, to me, it outlines the limits of human cognition : no matter how hard we try, certain concepts (such as infinity) will forever remain beyond our reach. Written with a bit of leetspeak (&laquo;&nbsp;al3ph&nbsp;&raquo;) on top, because old habits die hard.",
            "about.name.body3": "As you can imagine, I'm a math enthusiast, hence I have the obligation to make mathematical references in the content I post online.",
            "about.work.title": "How I work",
            "about.work.body1": "I like building things that are simple before they are clever. I would rather ship something small that I fully understand than something large that I only half control. Most of my projects start as a curiosity and grow only as far as they stay fun to maintain.",
            "about.work.body2": "I care about clear code, honest documentation, and tools that respect the people who use them.",
            "about.ai.title": "On artificial intelligence",
            "about.ai.body1": "AI is the most interesting tool of my generation, and also the easiest to misuse. I'm still studying computer science, and I think relying on AI can be detrimental to the learning process if it isn't used carefully. I like coding, and I don't want a machine to do it for me &mdash; in that sense, I see myself as a <strong>code artisan</strong>.",
            "about.ai.body2": "That said, I recognize that AI has revolutionized the industry, and I understand its importance in modern development, so I'm happy to use it in a professional context. For my own projects, I always make it clear when AI was involved. But I still code by hand, because I like it.",
            "legal.publisher.title": "Publisher",
            "legal.publisher.body": "This website is published by Thomas Mezino, as an individual, for personal and non-commercial purposes.",
            "legal.contact": "Contact:",
            "legal.hosting.title": "Hosting",
            "legal.hosting.body": "This website is hosted by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States, through the GitHub Pages service (<a href=\"https://pages.github.com\">pages.github.com</a>).",
            "legal.ip.title": "Intellectual property",
            "legal.ip.body": "Unless otherwise stated, the content of this website (text, source code, graphics) is the property of Thomas Mezino. Any reproduction or use without prior authorization is prohibited.",
            "legal.data.title": "Personal data",
            "legal.data.body": "This website does not collect any personal data and does not use cookies or tracking tools. The only data you may share is the information you choose to send by email.",
            "blog.empty.title": "Coming soon",
            "blog.empty.body": "Nothing here yet. I plan to write about my projects, things I learn, and a few thoughts along the way. Check back later."
        },
        fr: {
            "nav.home": "Accueil",
            "nav.projects": "Projets",
            "nav.about": "À propos",
            "language.label": "Langue",
            "footer.legal": "Mentions légales",
            "back.home": "&larr; Retour à l'accueil",
            "back.blog": "&larr; Retour au blog",
            "page.about.title": "À propos",
            "page.blog.title": "Blog",
            "page.legal.title": "Mentions légales",
            "home.intro": "Salut ! Je suis étudiant ingénieur, passionné d'informatique. Vous trouverez ici mes projets scolaires et personnels, ainsi que les moyens de me contacter.",
            "home.tools": "Langages et outils",
            "home.tools.label": "Technologies que j'utilise",
            "home.projects": "Projets",
            "home.saine.name": "SAINE / USB-SAS — station de décontamination USB (stage chez <a href=\"https://kodetis.com\">Kodetis</a>)",
            "home.saine.body": "SAINE est un fork renforcé du framework <a href=\"https://github.com/cea-sec/usbsas\">usbsas</a> du CEA : une borne autonome qui copie les fichiers d'un périphérique USB non fiable vers une destination de confiance, sans qu'aucun poste de travail ne touche le périphérique. Son architecture s'inspire d'un micro-noyau : chaque analyseur USB, SCSI et de système de fichiers s'exécute dans son propre processus en espace utilisateur, sous une politique seccomp et Landlock dédiée, et toute la chaîne est réinitialisée entre les transferts. J'ai ajouté au projet d'origine une destination de téléversement chiffrée à travers un VPN, une analyse antivirus approfondie, un compte rendu de transfert par QR code et la sélection du destinataire dans l'interface. J'ai également construit la plateforme environnante : images de borne NixOS reproductibles pour Raspberry Pi 5 (aarch64) et Zimaboard 2 (x86_64), compilation croisée Nix complète, serveur de mises à jour signées, pipeline CI/CD Dagger et durcissement système validé avec Lynis. Rust, Nix, protobuf, ClamAV.",
            "home.saine.alt": "Chaîne de transfert SAINE : insertion, isolation, analyse et libération",
            "home.uml.body": "Un générateur de code multilangage qui transforme des diagrammes de classes PlantUML en code source orienté objet en C++, Java et Python. Il analyse les classes, interfaces, énumérations et relations courantes (héritage, implémentation, composition, agrégation et association). Le design patern <strong>abstract factory</strong> découple totalement l'analyse du diagramme de la génération propre à chaque langage. Projet universitaire réalisé en équipe de trois.",
            "home.uml.alt": "Diagramme de classes du cœur d'uml2code",
            "home.sesame.body": "Un système d'authentification alternatif qui remplace le mot de passe alphanumérique habituel par un mot de passe culinaire : au lieu de saisir des caractères, on compose une recette en glissant-déposant des ingrédients, chacun correspondant à un caractère. L'idée est de s'appuyer sur la mémoire procédurale plutôt que sur la mémorisation brute. Réalisé avec un backend Laravel et une interface de glisser-déposer en JavaScript natif pendant le hackathon de la <a href=\"https://www.nuitdelinfo.com/\">Nuit de l'Info</a>.",
            "home.sesame.home.alt": "Page d'accueil de Sésame",
            "home.sesame.login.alt": "Page de connexion de Sésame",
            "home.quizia.body": "Une application de quiz assistée par IA : décrivez un sujet et un nombre de questions, et l'IA rédige le quiz en quelques secondes, prêt à être partagé ou gardé privé. Les quiz peuvent aussi être créés à la main ; un catalogue public permet la recherche, le filtrage et le suivi des parties. Réalisée avec Next.js, React, TypeScript et Tailwind CSS sur Supabase, avec une génération de questions propulsée par le SDK Cerebras Cloud.",
            "home.quizia.alt": "Page d'accueil de Quizia",
            "home.ctf.rank3": "3ème / 19",
            "home.ctf.rank10": "10ème / 96",
            "home.ctf.rank286": "286ème / 1 052",
            "home.ctf.team": "Équipe",
            "home.contact.mail": "Adresse professionnelle —",
            "about.quote": "&laquo;&nbsp;La simplicité est la sophistication suprême.&nbsp;&raquo;",
            "about.quote.source": "&mdash; attribué à Léonard de Vinci",
            "about.who.title": "Qui je suis",
            "about.who.body": "Je m'appelle Thomas, je suis étudiant ingénieur et j'aime peut-être un peu trop l'informatique. Je passe mon temps à construire de petits outils, à casser des choses pour comprendre leur fonctionnement et à apprendre ce que le prochain projet exige.",
            "about.name.title": "Pourquoi &laquo;&nbsp;al3ph_zero&nbsp;&raquo;",
            "about.name.body1": "Ce nom est une référence à <strong>&#8501;<sub>0</sub></strong> (aleph-zéro), le symbole utilisé par les mathématiciens pour désigner le plus petit infini : le cardinal de l'ensemble des entiers naturels et le premier des cardinaux transfinis de Cantor.",
            "about.name.body2": "J'ai choisis ce symbole car, à mon sens, il montre les limites de l'esprit humain : malgré tous les efforts que nous pourrions fournir, certains concepts (comme l'infini) nous serons à jamais hors de portée. Ecris toujours avec une touche de leetspeak (&laquo;&nbsp;al3ph&nbsp;&raquo;), parce que les vieilles habitudes ont la vie dure.",
            "about.name.body3": "Comme vous pouvez l'imaginer, je suis passionné de mathématiques ; j'ai donc l'obligation de glisser des références mathématiques dans ce que je publie en ligne.",
            "about.work.title": "Ma façon de travailler",
            "about.work.body1": "J'aime construire des choses simples avant de chercher les abstractions. Je préfère livrer un petit projet que je comprends entièrement plutôt qu'un grand projet que je ne maîtrise qu'à moitié. La plupart de mes projets naissent d'une curiosité et ne grandissent que tant qu'ils restent agréables à maintenir.",
            "about.work.body2": "J'accorde de l'importance à la clarté du code, à une documentation honnête et aux outils qui respectent leurs utilisateurs.",
            "about.ai.title": "À propos de l'intelligence artificielle",
            "about.ai.body1": "L'IA est l'outil le plus intéressant de ma génération, mais aussi le plus facile à mal utiliser. J'étudie encore l'informatique et je pense que s'appuyer sur l'IA peut nuire à l'apprentissage si elle n'est pas utilisée avec précaution. J'aime programmer et je ne veux pas qu'une machine le fasse à ma place &mdash; en ce sens, je me vois comme un <strong>artisan du code</strong>.",
            "about.ai.body2": "Cela dit, je reconnais que l'IA a révolutionné le secteur et je comprends son importance dans le développement moderne ; je l'utilise donc volontiers dans un contexte professionnel. Pour mes projets personnels, je précise toujours lorsqu'une IA est intervenue. Mais je continue de programmer à la main, parce que j'aime ça.",
            "legal.publisher.title": "Éditeur",
            "legal.publisher.body": "Ce site est édité par Thomas Mezino, à titre individuel, à des fins personnelles et non commerciales.",
            "legal.contact": "Contact :",
            "legal.hosting.title": "Hébergement",
            "legal.hosting.body": "Ce site est hébergé par GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis, par l'intermédiaire du service GitHub Pages (<a href=\"https://pages.github.com\">pages.github.com</a>).",
            "legal.ip.title": "Propriété intellectuelle",
            "legal.ip.body": "Sauf mention contraire, le contenu de ce site (textes, code source et éléments graphiques) est la propriété de Thomas Mezino. Toute reproduction ou utilisation sans autorisation préalable est interdite.",
            "legal.data.title": "Données personnelles",
            "legal.data.body": "Ce site ne collecte aucune donnée personnelle et n'utilise aucun cookie ni outil de suivi. Les seules données susceptibles d'être transmises sont celles que vous choisissez d'envoyer par courriel.",
            "blog.empty.title": "Bientôt disponible",
            "blog.empty.body": "Rien ici pour le moment. Je prévois d'écrire sur mes projets, ce que j'apprends et quelques réflexions en chemin. Revenez bientôt."
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

    function updateTitle(language) {
        var page = root.getAttribute("data-page");
        if (page === "post") {
            var postTitle = document.querySelector(".post-header h1 [data-language-content=\"" + language + "\"]");
            if (postTitle) document.title = "al3ph_zero — " + postTitle.textContent.trim();
            return;
        }
        var key = "page." + page + ".title";
        var title = translations[language][key];
        if (title) document.title = "al3ph_zero — " + title;
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
