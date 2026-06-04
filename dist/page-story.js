function PageHero({ eyebrow, title, lead, kicker }) {
  return /* @__PURE__ */ React.createElement("section", { style: { paddingTop: 150, paddingBottom: "clamp(40px,6vw,72px)", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "-20%", left: "-8%", width: 520, height: 520, background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 20%, transparent), transparent 65%)", filter: "blur(20px)", pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { className: "wrap", style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Reveal, { as: "span", className: "eyebrow", style: { marginBottom: 24 } }, eyebrow), /* @__PURE__ */ React.createElement(Reveal, { as: "h1", className: "h1", d: 0.05, style: { marginTop: 18, maxWidth: 980, fontSize: "clamp(2.6rem,6.5vw,5.4rem)" } }, title), lead && /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", d: 0.12, style: { marginTop: 28, maxWidth: 620 } }, lead)));
}
function StoryPage({ go }) {
  const timeline = [
    { year: "Early career", title: "Rooms, lobbies & front lines", body: "I began in Asia's hospitality industry, where every interaction is a chance to make someone feel seen. I learned that service is, at its heart, communication." },
    { year: "The turning point", title: "From doing to developing", body: "I moved from delivering experiences to developing the people who create them \u2014 discovering a gift for helping others find confidence and voice." },
    { year: "20+ years on", title: "A practice, not a pitch", body: "Today I work with individuals, leaders, and teams across industries, building communication that creates real, lasting change." }
  ];
  const values = [
    { t: "Human first", d: "Frameworks matter, but people change through connection. Every engagement starts with genuine understanding." },
    { t: "Clarity over jargon", d: "If it can't be said simply, it isn't understood. I make communication practical and immediately usable." },
    { t: "Growth that lasts", d: "I'm not here for the quick win. I build habits and mindsets that keep compounding long after we're done." },
    { t: "Courageous conversation", d: "The most important things are often the hardest to say. I help people say them \u2014 with warmth and conviction." }
  ];
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(
    PageHero,
    {
      eyebrow: "My Story",
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Growth begins with a ", /* @__PURE__ */ React.createElement("span", { className: "italic-accent", style: { fontStyle: "italic" } }, "conversation.")),
      lead: "I'm Coach KT \u2014 a communication coach who has spent two decades helping people across cultures turn talking into transformation."
    }
  ), /* @__PURE__ */ React.createElement("section", { className: "section", style: { paddingTop: 20 } }, /* @__PURE__ */ React.createElement("div", { className: "wrap story-intro-grid", style: { display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" } }, /* @__PURE__ */ React.createElement(Reveal, { className: "story-img-wrap", d: 0.1 }, /* @__PURE__ */ React.createElement(
    Img,
    {
      src: KT.images.portrait,
      alt: "Coach KT",
      phLabel: "coach KT photo",
      className: "story-portrait",
      style: { width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: "var(--radius-lg)", boxShadow: "0 40px 80px -36px rgba(0,0,0,0.6)" }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "story-intro-quote", style: { fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(1.5rem,3vw,2.3rem)", lineHeight: 1.25, letterSpacing: "-0.02em" } }, "I've worked with people from diverse cultures and backgrounds across Asia's hospitality industry \u2014 and the lesson has stayed the same:", /* @__PURE__ */ React.createElement("span", { className: "accent-text" }, " growth almost always begins with a conversation.")), /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", d: 0.08, style: { marginTop: 26 } }, "A conversation that builds confidence. That strengthens relationships. That inspires positive change. Over the years I've turned that belief into a practice \u2014 helping individuals find their voice, leaders find their clarity, and teams find their shared rhythm."), /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", d: 0.12, style: { marginTop: 18 } }, "Wherever you are today, I'm here to support your journey from Self to Success."))), /* @__PURE__ */ React.createElement("style", null, `
          @media(max-width:820px){
            .story-intro-grid{ grid-template-columns:1fr !important; }
            .story-portrait{ aspect-ratio:4/3 !important; max-height:360px; object-fit:cover; object-position:top; }
            .story-intro-quote{ font-size:clamp(1.35rem,5vw,1.8rem) !important; }
          }
        `)), /* @__PURE__ */ React.createElement("section", { className: "section on-cream" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: "The path here", title: "Two decades, one throughline", max: 560 }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 56, display: "flex", flexDirection: "column" } }, timeline.map((s, i) => /* @__PURE__ */ React.createElement(Reveal, { key: i, d: i * 0.06 }, /* @__PURE__ */ React.createElement("div", { className: "tl-row", style: { display: "grid", gridTemplateColumns: "180px 1fr", gap: "clamp(20px,4vw,56px)", padding: "34px 0", borderTop: "1px solid var(--cream-deep)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--accent-deep)", fontSize: "1.05rem", paddingTop: 6 } }, s.year), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "h3" }, s.title), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 12 } }, s.body))))))), /* @__PURE__ */ React.createElement("style", null, `@media(max-width:640px){ .tl-row{ grid-template-columns:1fr !important; gap:8px !important; } }`)), /* @__PURE__ */ React.createElement("section", { className: "section" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: "How I work", title: "What guides every engagement", max: 560 }), /* @__PURE__ */ React.createElement("div", { className: "values-grid", style: { marginTop: 52, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--ink-line)", borderRadius: "var(--radius-lg)", overflow: "hidden" } }, values.map((v, i) => /* @__PURE__ */ React.createElement(Reveal, { key: v.t, d: i % 2 * 0.08, className: "value-cell" }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", color: "var(--accent)", fontWeight: 600 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("h3", { className: "h3", style: { marginTop: 18, fontSize: "1.5rem" } }, v.t), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12, color: "var(--on-dark-soft)", lineHeight: 1.55 } }, v.d))))), /* @__PURE__ */ React.createElement("style", null, `
          .value-cell{ background:var(--ink); padding:clamp(28px,4vw,46px); }
          @media(max-width:680px){ .values-grid{ grid-template-columns:1fr !important; } }
        `)), /* @__PURE__ */ React.createElement("section", { className: "section on-cream" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement(
    SectionHead,
    {
      eyebrow: "Credentials",
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Certified to take you ", /* @__PURE__ */ React.createElement("span", { className: "italic-accent", style: { fontStyle: "italic" } }, "deeper.")),
      lead: "Internationally accredited in the methods behind lasting behavioural change \u2014 so the work goes beyond technique to genuine transformation.",
      max: 620
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "cert-grid", style: { marginTop: 60, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px,3vw,34px)" } }, KT.certifications.map((c, i) => /* @__PURE__ */ React.createElement(Reveal, { key: c.title, d: i % 2 * 0.08 }, /* @__PURE__ */ React.createElement("article", { className: "cert-card" }, /* @__PURE__ */ React.createElement("div", { className: "cert-frame" }, /* @__PURE__ */ React.createElement(
    Img,
    {
      src: c.img,
      alt: c.title,
      phLabel: "certificate",
      style: { width: "100%", aspectRatio: "1.45/1", objectFit: "cover", display: "block" }
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "cert-body" }, /* @__PURE__ */ React.createElement("span", { className: "cert-no" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("h3", { className: "cert-title" }, c.title), /* @__PURE__ */ React.createElement("p", { className: "cert-board" }, c.board), /* @__PURE__ */ React.createElement("ul", { className: "cert-th" }, c.points.map((line, j) => /* @__PURE__ */ React.createElement("li", { key: j }, line)))))))), /* @__PURE__ */ React.createElement(Reveal, { d: 0.06 }, /* @__PURE__ */ React.createElement("div", { className: "cert-close" }, /* @__PURE__ */ React.createElement("p", { className: "cert-close-th" }, "None of this is about the ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent-deep)" } }, "certificates."), /* @__PURE__ */ React.createElement("br", null), "It's about raising the bar on Leadership, Service Excellence,", /* @__PURE__ */ React.createElement("br", null), "and communication that genuinely changes lives."), /* @__PURE__ */ React.createElement("p", { className: "cert-close-en" }, "Because powerful leaders transform from the ", /* @__PURE__ */ React.createElement("span", { className: "italic-accent", style: { fontStyle: "italic" } }, "inside out."))))), /* @__PURE__ */ React.createElement("style", null, `
          .cert-card{
            background:var(--paper);
            border:1px solid var(--cream-deep);
            border-radius:var(--radius-lg);
            overflow:hidden;
            height:100%;
            display:flex; flex-direction:column;
            transition:transform .5s var(--ease), box-shadow .5s var(--ease);
          }
          .cert-card:hover{ transform:translateY(-4px); box-shadow:0 30px 60px -34px rgba(60,40,10,.4); }
          .cert-frame{
            position:relative;
            padding:14px 14px 0;
            background:linear-gradient(160deg, color-mix(in oklab, var(--accent) 16%, var(--paper)), var(--paper));
          }
          .cert-frame img, .cert-frame .img-ph{
            border-radius:12px;
            box-shadow:0 14px 30px -18px rgba(0,0,0,.45);
            border:1px solid var(--cream-deep);
          }
          .cert-body{ padding:clamp(22px,3vw,30px); display:flex; flex-direction:column; flex:1; }
          .cert-no{ font-family:var(--font-display); font-weight:700; color:var(--accent-deep); font-size:.95rem; letter-spacing:.04em; }
          .cert-title{ font-size:1.35rem; line-height:1.12; margin-top:10px; color:var(--on-light); }
          .cert-board{ margin-top:8px; font-size:.85rem; letter-spacing:.02em; color:var(--on-light-soft); font-weight:500; }
          .cert-th{
            list-style:none; margin-top:18px; padding-top:18px;
            border-top:1px solid var(--cream-deep);
            display:flex; flex-direction:column; gap:7px;
            font-family:var(--font-body); font-weight:400; line-height:1.5;
            color:var(--on-light); font-size:1rem;
          }
          .cert-th li{ position:relative; padding-left:20px; }
          .cert-th li::before{
            content:""; position:absolute; left:0; top:.62em;
            width:7px; height:7px; border-radius:50%;
            background:var(--accent); transform:translateY(-50%);
          }
          .cert-close{
            margin-top:clamp(48px,6vw,72px);
            text-align:center;
            display:flex; flex-direction:column; align-items:center; gap:24px;
          }
          .cert-close-th{
            font-family:var(--font-body); font-weight:500;
            font-size:clamp(1.05rem,1.8vw,1.3rem); line-height:1.7;
            color:var(--on-light); max-width:680px;
          }
          .cert-close-en{
            font-family:var(--font-display); font-weight:600;
            font-size:clamp(1.6rem,3.4vw,2.6rem); line-height:1.1;
            letter-spacing:-0.02em; color:var(--on-light); max-width:760px;
          }
          @media(max-width:720px){ .cert-grid{ grid-template-columns:1fr !important; } }
        `)), /* @__PURE__ */ React.createElement(CTABand, { go }));
}
window.StoryPage = StoryPage;
window.PageHero = PageHero;
