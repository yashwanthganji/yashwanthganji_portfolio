/* ============================================================
   BACKGROUND DECORATION
   Injects a few subtle, fixed engineering-drawing marks behind
   the content on every page: corner registration marks, a
   vertical ruler tick strip, and a rotated edge label. Sits
   alongside the existing dot/line grid (.grid-bg), not in
   place of it. Purely decorative — aria-hidden, no interaction.
   ============================================================ */

   (function () {
    const layer = document.createElement("div");
    layer.className = "blueprint-marks";
    layer.setAttribute("aria-hidden", "true");

    layer.innerHTML = `
      <svg class="corner-mark corner-tl" viewBox="0 0 40 40"><path d="M2 16 V2 H16" fill="none" stroke="currentColor" stroke-width="1"/></svg>
      <svg class="corner-mark corner-tr" viewBox="0 0 40 40"><path d="M24 2 H38 V16" fill="none" stroke="currentColor" stroke-width="1"/></svg>
      <svg class="corner-mark corner-bl" viewBox="0 0 40 40"><path d="M2 24 V38 H16" fill="none" stroke="currentColor" stroke-width="1"/></svg>
      <svg class="corner-mark corner-br" viewBox="0 0 40 40"><path d="M38 24 V38 H24" fill="none" stroke="currentColor" stroke-width="1"/></svg>
      <div class="ruler-strip"></div>
      <div class="side-label mono">YASHWANTH GANJI &nbsp;·&nbsp; ENGINEERING PORTFOLIO</div>
    `;

    document.body.prepend(layer);
  })();
