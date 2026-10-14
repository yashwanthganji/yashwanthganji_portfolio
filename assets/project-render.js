/* ============================================================
   PROJECT PAGE RENDERER — modular section system
   ============================================================

   HOW THIS WORKS
   Each project in assets/data.js has a `sections` array, e.g.:

     sections: [
       { type: "text", title: "Overview", body: "..." },
       { type: "textColumns", title: "Problem / Solution", columns: [...] },
       { type: "challenges", title: "Challenges & Iteration", items: [...] }
     ]

   This file loops over that array in order and renders each
   section using the matching function in SECTION_RENDERERS
   below. The array order IS the page order.

   -------------------------------------------------------------
   TO REMOVE A SECTION FROM A PROJECT
   Open assets/data.js, find the project, delete (or comment
   out) its object from that project's `sections` array. Nothing
   in this file or project.html needs to change — the section
   heading, spacing, and layout all disappear with it.

   TO ADD A SECTION TO A PROJECT
   Add a new object to that project's `sections` array, using
   one of the `type` values below and that type's fields.
   Every renderer already handles a missing/empty field by
   showing nothing for that project (no fake data, no broken
   layout) — see the "empty" checks inside each renderer.

   TO REORDER SECTIONS
   Reorder the objects inside the `sections` array. The page
   renders top to bottom in array order.

   TO ADD A NEW SECTION *TYPE* (rare — most content fits an
   existing type)
   1. Write a new `render<Name>(section)` function below that
      returns a full `<section class="case-section wrap">...`
      string, or "" if the section has nothing to show.
   2. Register it in SECTION_RENDERERS as `yourType: renderX`.
   3. Use `type: "yourType"` in a project's sections array.
   -------------------------------------------------------------

   AVAILABLE SECTION TYPES
     text        — { title, body?, list? }
                   One paragraph (body) and/or a bullet list
                   (list: string[]). Used for Overview, Results,
                   What I Learned, Future Improvements, etc.

     textColumns — { title, columns: [{ heading, body }] }
                   Side-by-side columns (stacks on mobile).
                   Used for Problem / Solution, or any compare-
                   style section (e.g. Hardware / Software).

     steps       — { title, intro?, items: [{ title, description, image? }] }
                   Numbered step list, each step optionally with
                   an image. Used for How It Works, Development
                   Process, Methodology, Testing.

     techStack   — { title, groups: [{ label, items: string[] }] }
                   Grouped technology/skill chips. Used for
                   Technical Implementation.

     challenges  — { title, items: [{ challenge, solution }] }
                   Challenge → solution pairs.

     metrics     — { title, items: [{ label, value }] }
                   Stat cards. Only renders with real values —
                   never invent numbers here.

     timeline    — { title, items: [{ date, title, description, image? }] }
                   Milestone list. Used for project progression.

     gallery     — { title, images: [{ src, caption? }] }
                   Grid of images.

     image       — { title?, src, caption? }
                   One large image or diagram.

     quote       — { text, attribution? }
                   A pull-quote (no heading).
   ============================================================ */

   function chip(text) {
    return `<span class="tag">${text}</span>`;
  }

  function isBlank(str) {
    return !str || !String(str).trim();
  }

  /* ---------------- section wrapper ---------------- */
  // Every section shares the same heading/spacing shell so the
  // page stays consistent no matter which types a project uses.
  function wrapSection(title, innerHtml) {
    return `
      <section class="case-section wrap">
        ${title ? `<h2>${title}</h2>` : ""}
        ${innerHtml}
      </section>`;
  }

  /* ---------------- individual renderers ---------------- */

  function renderText(s) {
    const hasBody = !isBlank(s.body);
    const hasList = s.list && s.list.length;
    if (!hasBody && !hasList) return "";
    return wrapSection(s.title, `
      ${hasBody ? `<p>${s.body}</p>` : ""}
      ${hasList ? `<ul class="case-list">${s.list.map(i => `<li>${i}</li>`).join("")}</ul>` : ""}
    `);
  }

  function renderTextColumns(s) {
    const cols = (s.columns || []).filter(c => !isBlank(c.body));
    if (!cols.length) return "";
    return wrapSection(s.title, `
      <div class="two-col-block" style="--cols:${cols.length};">
        ${cols.map(c => `
          <div>
            <div class="col-heading mono">${c.heading}</div>
            <p class="col-body">${c.body}</p>
          </div>
        `).join("")}
      </div>
    `);
  }

  function renderSteps(s) {
    const items = s.items || [];
    if (!items.length) return "";
    return wrapSection(s.title, `
      ${!isBlank(s.intro) ? `<p class="steps-intro">${s.intro}</p>` : ""}
      <ol class="steps-list">
        ${items.map(step => `
          <li class="step-item">
            <div class="step-index"></div>
            <div>
              <h4>${step.title}</h4>
              <p>${step.description}</p>
              ${step.image ? `<div class="step-media"><img src="${step.image}" alt="${step.title}"></div>` : ""}
            </div>
          </li>
        `).join("")}
      </ol>
    `);
  }

  function renderTechStack(s) {
    const groups = (s.groups || []).filter(g => g.items && g.items.length);
    if (!groups.length) return "";
    return wrapSection(s.title, `
      <div class="techstack-groups">
        ${groups.map(g => `
          <div class="skill-block">
            <h4>${g.label}</h4>
            <div class="tag-row">${g.items.map(chip).join("")}</div>
          </div>
        `).join("")}
      </div>
    `);
  }

  function renderChallenges(s) {
    const items = s.items || [];
    if (!items.length) return "";
    return wrapSection(s.title, items.map(c => `
      <div class="challenge-block">
        <div class="challenge-label">CHALLENGE</div>
        <p>${c.challenge}</p>
        <div class="challenge-label">SOLUTION</div>
        <p>${c.solution}</p>
      </div>
    `).join(""));
  }

  function renderMetrics(s) {
    // Never fabricate values — only renders when real items are given.
    const items = s.items || [];
    if (!items.length) return "";
    return wrapSection(s.title, `
      <div class="metrics-grid">
        ${items.map(m => `
          <div class="metric-card">
            <div class="metric-value">${m.value}</div>
            <div class="metric-label mono">${m.label}</div>
          </div>
        `).join("")}
      </div>
    `);
  }

  function renderTimeline(s) {
    const items = s.items || [];
    if (!items.length) return "";
    return wrapSection(s.title, `
      <ol class="milestone-list">
        ${items.map(m => `
          <li class="milestone">
            <div class="milestone-date mono">${m.date}</div>
            <div class="milestone-body">
              <h4>${m.title}</h4>
              <p>${m.description}</p>
              ${m.image ? `<div class="milestone-media"><img src="${m.image}" alt="${m.title}"></div>` : ""}
            </div>
          </li>
        `).join("")}
      </ol>
    `);
  }

  function renderGallery(s) {
    const images = (s.images || []).filter(i => i.src);
    if (!images.length) return "";
    return wrapSection(s.title, `
      <div class="gallery-grid">
        ${images.map(i => `
          <figure class="gallery-item">
            <img src="${i.src}" alt="${i.caption || s.title || "Project image"}">
            ${i.caption ? `<figcaption class="gallery-caption">${i.caption}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    `);
  }

  function renderImage(s) {
    if (!s.src) return "";
    return wrapSection(s.title, `
      <div class="case-image-block">
        <img src="${s.src}" alt="${s.caption || s.title || "Project image"}">
      </div>
      ${s.caption ? `<div class="case-image-caption">${s.caption}</div>` : ""}
    `);
  }

  function renderQuote(s) {
    if (isBlank(s.text)) return "";
    return `
      <section class="case-section wrap">
        <blockquote class="quote-block">
          "${s.text}"
          ${s.attribution ? `<div class="quote-attribution">— ${s.attribution}</div>` : ""}
        </blockquote>
      </section>`;
  }

  /* ---------------- registry: type name -> renderer ---------------- */
  const SECTION_RENDERERS = {
    text: renderText,
    textColumns: renderTextColumns,
    steps: renderSteps,
    techStack: renderTechStack,
    challenges: renderChallenges,
    metrics: renderMetrics,
    timeline: renderTimeline,
    gallery: renderGallery,
    image: renderImage,
    quote: renderQuote
  };

  /* ---------------- page-level rendering ---------------- */

  function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function renderMissingProject() {
    document.getElementById("project-root").innerHTML = `
      <section class="case-hero wrap">
        <a class="case-back" href="index.html#projects">← Back to projects</a>
        <h1>Project not found</h1>
        <p class="tagline" style="margin-top:16px;">No project matches this link. Check assets/data.js for valid project ids.</p>
      </section>`;
  }

  function renderHero(p) {
    const hasGithub = p.links && p.links.github;
    const hasDemo = p.links && p.links.demo;
    return `
      <section class="case-hero wrap">
        <a class="case-back" href="index.html#projects">← Back to projects</a>
        <div class="hero-eyebrow mono">PROJECT</div>
        <h1>${p.title}</h1>
        <p class="tagline" style="margin-top:16px;">${p.tagline}</p>
        <div class="case-meta-row">${p.skills.map(chip).join("")}</div>
        <div class="case-hero-media">
          ${p.image
            ? `<img src="${p.image}" alt="${p.title}">`
            : `<div class="project-placeholder">Add a hero screenshot for ${p.title}<br>(set the "image" field in assets/data.js)</div>`
          }
        </div>
        ${hasDemo || hasGithub ? `
          <div class="case-links">
            ${hasDemo ? `<a class="btn primary" href="${p.links.demo}" target="_blank" rel="noopener noreferrer">View Live Project</a>` : ""}
            ${hasGithub ? `<a class="btn secondary" href="${p.links.github}" target="_blank" rel="noopener noreferrer">View Source Code</a>` : ""}
          </div>` : ""}
      </section>`;
  }

  function renderFinalLinks(p) {
    const hasGithub = p.links && p.links.github;
    const hasDemo = p.links && p.links.demo;
    if (!hasGithub && !hasDemo) {
      return `
        <section class="case-section wrap">
          <a class="case-back" href="index.html#projects" style="margin-bottom:0;">← Back to projects</a>
        </section>`;
    }
    return `
      <section class="case-section wrap">
        <h2>PROJECT LINKS</h2>
        <div class="case-links">
          ${hasDemo ? `<a class="btn primary" href="${p.links.demo}" target="_blank" rel="noopener noreferrer">View Live Project</a>` : ""}
          ${hasGithub ? `<a class="btn secondary" href="${p.links.github}" target="_blank" rel="noopener noreferrer">View Source Code</a>` : ""}
        </div>
        <a class="case-back" href="index.html#projects" style="margin-top:24px; margin-bottom:0;">← Back to projects</a>
      </section>`;
  }

  function renderProject(p) {
    document.title = `${p.title} — Yashwanth Ganji`;

    const sections = p.sections || [];
    const sectionsHtml = sections
      .map(s => {
        const renderer = SECTION_RENDERERS[s.type];
        if (!renderer) {
          console.warn(`Unknown section type "${s.type}" on project "${p.id}" — skipped.`);
          return "";
        }
        return renderer(s);
      })
      .filter(Boolean) // drop any section that rendered empty -- no blank containers
      .join("");

    document.getElementById("project-root").innerHTML =
      renderHero(p) + sectionsHtml + renderFinalLinks(p);
  }

  (function init() {
    const id = getProjectId();
    const project = projectsData.find(p => p.id === id);
    if (!project) {
      renderMissingProject();
      return;
    }
    renderProject(project);
  })();
