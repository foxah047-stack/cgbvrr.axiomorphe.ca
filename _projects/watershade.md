---
layout: default
title: WaterShade
lang: fr
permalink: /projects/watershade/
status: published
featured: true
order: 1
title_en: WaterShade
title_fr: WaterShade
subtitle_en: A watershed-scale strategy to protect cold-water refuges for Atlantic salmon in the Restigouche River watershed.
subtitle_fr: Une stratégie à l’échelle du bassin versant pour protéger les refuges d’eau froide du saumon atlantique.
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Spectral:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet">

<article class="ws">
  <style>
    .ws{
      /* ---- Reglages rapides : couleurs et polices ---- */
      --paper:#FAF6EE;        /* fond papier chaud */
      --panel:#F0E9DC;        /* panneaux / emplacements image */
      --ink:#1C2A2A;          /* texte principal (presque noir, teinte ardoise) */
      --muted:#5B6A68;        /* texte secondaire */
      --teal:#2B6660;         /* eau froide — accent principal */
      --river:#4E8A93;        /* bleu-vert rivière */
      --ember:#B0562C;        /* note de chaleur — usage rare, signal seulement */
      --rule:rgba(28,42,42,.16);
      --display:"Fraunces",Georgia,"Times New Roman",serif;
      --body:"Spectral",Georgia,"Times New Roman",serif;

      background:var(--paper);
      color:var(--ink);
      font-family:var(--body);
      font-weight:400;
      font-size:1.075rem;
      line-height:1.62;
      letter-spacing:.002em;
      padding:clamp(1.4rem,3vw,2.2rem) 0 clamp(1.6rem,3.5vw,2.6rem);
      -webkit-font-smoothing:antialiased;
    }
    .ws *{box-sizing:border-box;}
    .ws-in{max-width:680px;margin:0 auto;padding:0 24px;}

    /* ---- Hero ---- */
    .ws-hero{max-width:760px;margin:0 auto clamp(1.1rem,2.4vw,1.7rem);padding:0 24px;}
    .ws-mark{width:54px;height:auto;color:var(--river);opacity:.85;margin-bottom:.65rem;}
    .ws-eyebrow{
      font-family:var(--body);font-weight:500;font-size:.78rem;
      letter-spacing:.18em;text-transform:uppercase;color:var(--teal);
      margin:0 0 .5rem;
    }
    .ws h1{
      font-family:var(--display);font-weight:500;font-optical-sizing:auto;
      font-size:clamp(2.9rem,8vw,4.6rem);line-height:.98;letter-spacing:-.015em;
      margin:0 0 .55rem;color:var(--ink);
    }
    .ws-lead{
      font-family:var(--display);font-weight:400;
      font-size:clamp(1.3rem,3.2vw,1.65rem);line-height:1.32;
      color:var(--teal);margin:0 0 .75rem;max-width:34ch;
    }
    .ws-hero p.intro{font-size:1.15rem;color:var(--ink);margin:0;max-width:60ch;}

    /* ---- Rythme general ---- */
    .ws section{margin:clamp(1.1rem,2.5vw,1.8rem) 0;}
    .ws h2{
      font-family:var(--display);font-weight:500;font-optical-sizing:auto;
      font-size:clamp(1.7rem,4vw,2.2rem);line-height:1.12;letter-spacing:-.01em;
      margin:0 0 .5rem;color:var(--ink);
    }
    .ws p{margin:0 0 .55rem;}
    .ws p:last-child{margin-bottom:0;}
    .ws strong{font-weight:500;color:var(--ink);}
    .ws .num{font-weight:500;color:var(--teal);white-space:nowrap;}
    .ws .heat{color:var(--ember);font-weight:500;}

    /* ---- Demarche en 4 temps (sans boites) ---- */
    .ws-steps{list-style:none;margin:.75rem 0 0;padding:0;}
    .ws-steps li{
      display:grid;grid-template-columns:auto 1fr;gap:.75rem;
      align-items:baseline;padding:.7rem 0;border-top:1px solid var(--rule);
    }
    .ws-steps li:last-child{border-bottom:1px solid var(--rule);}
    .ws-steps .n{
      font-family:var(--display);font-weight:400;font-size:2.1rem;
      line-height:1;color:var(--river);opacity:.65;font-variant-numeric:lining-nums;
    }
    .ws-steps h3{
      font-family:var(--display);font-weight:500;font-size:1.22rem;
      margin:0 0 .15rem;color:var(--ink);
    }
    .ws-steps p{margin:0;color:var(--muted);font-size:1rem;}

    /* ---- Emplacements image (a remplacer) ---- */
    .ws-fig{margin:clamp(1rem,2.5vw,1.7rem) auto;max-width:880px;padding:0 24px;}
    .ws-ph{
      position:relative;aspect-ratio:16/10;background:var(--panel);
      border:1px solid var(--rule);border-radius:3px;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      text-align:center;padding:.9rem;gap:.35rem;overflow:hidden;
    }
    .ws-ph svg{width:46px;height:auto;color:var(--river);opacity:.5;}
    .ws-ph .tag{
      font-family:var(--body);font-weight:500;font-size:.72rem;
      letter-spacing:.16em;text-transform:uppercase;color:var(--teal);opacity:.8;
    }
    .ws-ph .desc{font-size:.95rem;color:var(--muted);max-width:34ch;margin:0;}
    .ws figcaption{
      font-size:.88rem;font-style:italic;color:var(--muted);
      margin-top:.35rem;text-align:center;
    }
    /* Pour publier une vraie photo : retirer .ws-ph et activer l'<img> dans le HTML. */
    .ws-fig img{width:100%;height:auto;display:block;border-radius:3px;}

    /* ---- Sites associes (seul endroit avec des panneaux) ---- */
    .ws-sites{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:.75rem;}
    .ws-site{
      background:var(--paper);border:1px solid var(--rule);border-top:3px solid var(--teal);
      border-radius:3px;padding:.9rem 1rem;
    }
    .ws-site h3{font-family:var(--display);font-weight:500;font-size:1.3rem;margin:0 0 .3rem;}
    .ws-site p{font-size:1rem;color:var(--muted);margin:0 0 .45rem;}
    .ws-site .soon{
      font-family:var(--body);font-weight:500;font-size:.74rem;
      letter-spacing:.13em;text-transform:uppercase;color:var(--teal);
    }

    /* ---- Note sensibilite ---- */
    .ws-note{
      border-left:3px solid var(--river);background:rgba(78,138,147,.07);
      padding:.65rem .85rem;border-radius:0 3px 3px 0;
      font-size:.98rem;color:var(--muted);max-width:60ch;
    }
    .ws-note p{margin:0;}

    /* ---- Cloture ---- */
    .ws-close{border-top:1px solid var(--rule);padding-top:clamp(.8rem,2vw,1.2rem);}

    @media (max-width:620px){
      .ws-sites{grid-template-columns:1fr;}
      .ws-steps li{grid-template-columns:1fr;gap:.15rem;}
      .ws-steps .n{font-size:1.6rem;}
    }

    /* ---- Apparition douce au chargement ---- */
    @media (prefers-reduced-motion:no-preference){
      .ws-reveal{opacity:0;transform:translateY(14px);animation:wsUp .7s ease forwards;}
      .ws-reveal:nth-of-type(1){animation-delay:.05s;}
      .ws-reveal:nth-of-type(2){animation-delay:.13s;}
      .ws-reveal:nth-of-type(3){animation-delay:.21s;}
      .ws-reveal:nth-of-type(n+4){animation-delay:.28s;}
      @keyframes wsUp{to{opacity:1;transform:none;}}
    }
  </style>

  <!-- ===================== HERO ===================== -->
  <header class="ws-hero ws-reveal">
    <svg class="ws-mark" viewBox="0 0 80 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
      <path d="M2 12c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
      <path d="M2 24c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
    </svg>
    <p class="ws-eyebrow">Projet stratégique</p>
    <h1>WaterShade</h1>
    <p class="ws-lead">Protéger les refuges d’eau froide du bassin versant de la Restigouche.</p>
    <p class="intro">Quand la rivière se réchauffe l’été, le saumon atlantique cherche des zones naturellement plus fraîches pour récupérer. WaterShade est une stratégie à long terme qui vise à repérer ces refuges d’eau froide, à les protéger et, là où c’est nécessaire, à les restaurer.</p>
  </header>

  <!-- ===================== LE PROBLEME ===================== -->
  <section class="ws-reveal">
    <div class="ws-in">
      <h2>Des étés plus chauds, une rivière sous pression</h2>
      <p>Les températures estivales de la Restigouche augmentent, surtout depuis une dizaine d’années. Pendant les périodes de chaleur et de faible débit, certaines sections de la rivière deviennent difficiles à supporter pour le saumon atlantique, un poisson d’eau froide.</p>
      <p>Le signe le plus parlant est le nombre de journées de stress thermique pour le saumon adulte. Entre 2003 et 2017, on en comptait toujours <span class="num">moins de 15</span> par été. En 2018, 2020 et 2021, ce nombre a <span class="heat">dépassé 30</span>.</p>
    </div>
  </section>

  <!-- ===================== IMAGE 1 ===================== -->
  <figure class="ws-fig ws-reveal">
    <!-- Pour publier : décommentez l'image, ajustez le chemin, puis supprimez le bloc .ws-ph ci-dessous.
    <img src="/assets/img/watershade/riviere.jpg" alt="Section ombragée de la rivière Restigouche">
    -->
    <div class="ws-ph">
      <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <path d="M2 12c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
        <path d="M2 24c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
      </svg>
      <span class="tag">Image à venir</span>
      <p class="desc">Rivière ombragée, bande riveraine boisée ou paysage représentatif de la Restigouche.</p>
    </div>
    <figcaption>Une rivière en santé et des berges boisées : la première ligne de défense des refuges d’eau froide.</figcaption>
  </figure>

  <!-- ===================== NOTION CLE ===================== -->
  <section class="ws-reveal">
    <div class="ws-in">
      <h2>Qu’est-ce qu’un refuge d’eau froide?</h2>
      <p>Un refuge d’eau froide est une zone d’une rivière où l’eau reste naturellement plus fraîche que le courant principal. Il peut être alimenté par une source souterraine, un petit tributaire froid, un chenal latéral ombragé ou une résurgence.</p>
      <p>Lorsque l’eau se réchauffe, le saumon et l’omble s’y rassemblent pour réduire leur stress thermique. Protéger un refuge, c’est donc aussi protéger ce qui l’alimente : les petits cours d’eau, les berges boisées et les milieux humides situés en amont.</p>
    </div>
  </section>

  <!-- ===================== LA DEMARCHE ===================== -->
  <section class="ws-reveal">
    <div class="ws-in">
      <h2>De la donnée terrain à l’action</h2>
      <p>WaterShade suit une même démarche, du repérage jusqu’à la protection sur le terrain.</p>
      <ol class="ws-steps">
        <li>
          <span class="n">01</span>
          <div>
            <h3>Cartographier</h3>
            <p>Repérer les refuges d’eau froide et les secteurs les plus sensibles au réchauffement, à partir d’imagerie thermique et de données du territoire.</p>
          </div>
        </li>
        <li>
          <span class="n">02</span>
          <div>
            <h3>Prioriser</h3>
            <p>Choisir les secteurs où la protection ou la restauration apportera le plus grand bénéfice pour l’habitat.</p>
          </div>
        </li>
        <li>
          <span class="n">03</span>
          <div>
            <h3>Valider</h3>
            <p>Vérifier les sites sur le terrain : suivis de température, observations et relevés par drone.</p>
          </div>
        </li>
        <li>
          <span class="n">04</span>
          <div>
            <h3>Agir</h3>
            <p>Protéger les berges, restaurer les sites ciblés et suivre les résultats dans le temps.</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- ===================== IMAGE 2 ===================== -->
  <figure class="ws-fig ws-reveal">
    <!-- Pour publier : décommentez l'image, ajustez le chemin, puis supprimez le bloc .ws-ph ci-dessous.
    <img src="/assets/img/watershade/bassin.jpg" alt="Vue d'ensemble du bassin versant de la Restigouche">
    -->
    <div class="ws-ph">
      <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <path d="M2 12c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
        <path d="M2 24c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
      </svg>
      <span class="tag">Image à venir</span>
      <p class="desc">Vue large de la rivière ou paysage aérien donnant l’échelle du bassin versant.</p>
    </div>
    <figcaption>Le bassin versant s’étend sur des milliers de kilomètres carrés, de part et d’autre de la frontière.</figcaption>
  </figure>

  <!-- ===================== L'ECHELLE ===================== -->
  <section class="ws-reveal">
    <div class="ws-in">
      <h2>Une stratégie à l’échelle du bassin versant</h2>
      <p>Le bassin versant de la Restigouche couvre environ <span class="num">12 800 km²</span>, partagés entre le Nouveau-Brunswick et le Québec. WaterShade se concentre sur la portion néo-brunswickoise, en grande partie forestière.</p>
      <p>Le travail s’appuie sur un inventaire de grande ampleur : près de <span class="num">862 km</span> de rivière ont été survolés en imagerie optique et thermique, ce qui a permis de classer <span class="num">1 825 anomalies thermiques</span> dans l’ensemble du bassin. À partir de là, la démarche vise à cibler une <strong>trentaine de bassins de drainage</strong> à protéger ou à restaurer, dont <strong>cinq sites prioritaires</strong>.</p>
    </div>
  </section>

  <!-- ===================== SITES ===================== -->
  <section class="ws-reveal">
    <div class="ws-in">
      <h2>Des secteurs au cœur du projet</h2>
      <div class="ws-sites">
        <div class="ws-site">
          <h3>Secteurs prioritaires</h3>
          <p>Certains secteurs font l’objet d’un examen plus poussé parce qu’ils peuvent jouer un rôle important lors des périodes de chaleur. Les informations détaillées seront publiées seulement après révision interne.</p>
          <span class="soon">Détails en révision interne</span>
        </div>
        <div class="ws-site">
          <h3>Travaux de terrain</h3>
          <p>Les actions peuvent comprendre le suivi de température, la validation terrain, la protection de bandes riveraines et la restauration de conditions favorables, selon les approbations et les priorités établies.</p>
          <span class="soon">Pages futures à approuver</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== IMAGE 3 ===================== -->
  <figure class="ws-fig ws-reveal">
    <!-- Pour publier : décommentez l'image, ajustez le chemin, puis supprimez le bloc .ws-ph ci-dessous.
    <img src="/assets/img/watershade/terrain.jpg" alt="Travaux de terrain le long d'un cours d'eau">
    -->
    <div class="ws-ph">
      <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <path d="M2 12c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
        <path d="M2 24c10-8 18 8 28 0s18 8 28 0 18 8 20 6"/>
      </svg>
      <span class="tag">Image à venir</span>
      <p class="desc">Travail en rivière : suivi de température, stabilisation de berge, plantation ou équipe sur le terrain.</p>
    </div>
    <figcaption>Sur le terrain, la protection des refuges passe par des gestes concrets et un suivi continu.</figcaption>
  </figure>

  <!-- ===================== NOTE SENSIBILITE ===================== -->
  <section class="ws-reveal">
    <div class="ws-in">
      <div class="ws-note">
        <p>Par souci de conservation, l’emplacement précis de certains refuges n’est pas diffusé publiquement. Les cartes et images présentées ici restent volontairement générales.</p>
      </div>
    </div>
  </section>

  <!-- ===================== CLOTURE ===================== -->
  <section class="ws-reveal">
    <div class="ws-in ws-close">
      <h2>Une stratégie appelée à évoluer</h2>
      <p>Amorcé en 2023, WaterShade se poursuit par l’analyse et le travail terrain, puis par la sélection des sites prioritaires à partir de 2025 et un suivi adaptatif dans les années suivantes. Les données, les méthodes et les priorités continueront d’être mises à jour au fil du projet.</p>
    </div>
  </section>

</article>
