/* ============================================================
   HOMEPAGE RENDERER
   Reads projectsData / experienceData / extracurricularsData
   from data.js and builds the homepage sections.
   To add content, edit assets/data.js — this file never needs
   to change for new projects/experience/extracurriculars.
   ============================================================ */

   function chip(text) {
    return `<span class="tag">${text}</span>`;
  }

  function renderProjectCards() {
    const container = document.getElementById("project-cards");
    if (!container) return;

    container.innerHTML = projectsData.map((p, i) => `
      <article class="project-card">
        <div class="project-media">
          ${p.image
            ? `<img src="${p.image}" alt="${p.title} screenshot">`
            : `<div class="project-placeholder" aria-label="${p.title} project preview"><span class="preview-kicker mono">PROJECT PREVIEW</span><strong>${p.title}</strong><span>Interface and systems design</span></div>`
          }
        </div>
        <div class="project-body">
          <div class="project-index mono">${String(i + 1).padStart(2, "0")}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tag-row">${p.skills.map(chip).join("")}</div>
          <p class="status-text"><span class="status-dot" aria-hidden="true"></span>${p.status}</p>
          <a class="project-link" href="project.html?id=${p.id}">View project →</a>
        </div>
      </article>
    `).join("");

    document.querySelectorAll("#projects .code")[0] &&
      (document.querySelectorAll("#projects .code")[0].textContent = `${String(projectsData.length).padStart(2, "0")} PROJECTS`);
  }

  function renderExperience() {
    const container = document.getElementById("experience-list");
    if (!container) return;

    container.innerHTML = experienceData.map(e => `
      <div class="exp-row">
        <div class="exp-when mono">${e.dates}</div>
        <div>
          <div class="exp-role">${e.role}</div>
          <div class="exp-org">${e.organization}</div>
          <div class="exp-detail">${e.description}</div>
          ${e.skills && e.skills.length ? `<div class="tag-row" style="margin-top:12px;">${e.skills.map(chip).join("")}</div>` : ""}
        </div>
      </div>
    `).join("");
  }

  function renderExtracurriculars() {
    const container = document.getElementById("extracurricular-list");
    if (!container) return;

    container.innerHTML = extracurricularsData.map(x => `
      <div class="exp-row">
        <div class="exp-when mono">${x.dates}</div>
        <div>
          <div class="exp-role">${x.role}</div>
          <div class="exp-org">${x.activity}</div>
          <div class="exp-detail">${x.description}</div>
          ${x.accomplishments && x.accomplishments.length ? `
            <ul class="mini-list">
              ${x.accomplishments.map(a => `<li>${a}</li>`).join("")}
            </ul>` : ""}
          ${x.skills && x.skills.length ? `<div class="tag-row" style="margin-top:12px;">${x.skills.map(chip).join("")}</div>` : ""}
          ${x.link ? `<a class="project-link" style="margin-top:12px;" href="${x.link}">Learn more →</a>` : ""}
        </div>
      </div>
    `).join("");
  }

  renderProjectCards();
  renderExperience();
  renderExtracurriculars();
