function Hero({ go }) {
  const ref = useRef(null);
  const [off, setOff] = useState(0);
  useEffect(() => {
    const onScroll = () => setOff(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement("section", { style: { position: "relative", paddingTop: "clamp(88px,12vw,120px)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "-10%",
    right: "-5%",
    width: 620,
    height: 620,
    background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 26%, transparent), transparent 65%)",
    filter: "blur(20px)",
    pointerEvents: "none"
  } }), /* @__PURE__ */ React.createElement("div", { className: "wrap hero-grid", style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "clamp(32px,5vw,80px)",
    alignItems: "center",
    minHeight: "84vh",
    paddingBlock: "clamp(40px,6vw,80px)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "hero-text" }, /* @__PURE__ */ React.createElement(Reveal, { as: "span", className: "eyebrow", style: { marginBottom: 26 } }, "Communication Creates Change"), /* @__PURE__ */ React.createElement(Reveal, { as: "h1", className: "display", d: 0.06, style: { marginTop: 22 } }, "Grow from", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent)" } }, "Self"), " to", " ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic", fontWeight: 500 } }, "Success.")), /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", d: 0.14, style: { marginTop: 30, maxWidth: 520 } }, "I'm Coach KT. For two decades I've helped people, leaders, and teams find their voice \u2014 building the confidence, connection, and clarity that turn potential into momentum."), /* @__PURE__ */ React.createElement(Reveal, { d: 0.2, style: { marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Btn, { onClick: () => go("contact") }, "Book a discovery call"), /* @__PURE__ */ React.createElement(Btn, { kind: "ghost", onClick: () => go("services") }, "Explore the journey")), /* @__PURE__ */ React.createElement(Reveal, { d: 0.28, style: { marginTop: 46, display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--on-dark-faint)" } }, "Find me"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, flexWrap: "wrap" } }, ["Facebook", "YouTube", "Instagram", "WhatsApp"].map((s) => /* @__PURE__ */ React.createElement("a", { key: s, href: "#", className: "social-link" }, s))))), /* @__PURE__ */ React.createElement(Reveal, { d: 0.12, className: "hero-img-wrap", style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", transform: `translateY(${off * -0.04}px)` } }, /* @__PURE__ */ React.createElement("div", { className: "hero-frame", style: {
    position: "absolute",
    inset: "-14px -14px 28px 22px",
    border: "1.5px solid var(--accent)",
    borderRadius: "var(--radius-lg)",
    opacity: 0.6
  } }), /* @__PURE__ */ React.createElement(
    Img,
    {
      src: KT.images.hero,
      alt: "Coach KT",
      phLabel: "coach KT portrait",
      className: "hero-img",
      style: {
        width: "100%",
        aspectRatio: "4/5",
        objectFit: "cover",
        objectPosition: "top center",
        borderRadius: "var(--radius-lg)",
        position: "relative",
        boxShadow: "0 40px 80px -30px rgba(0,0,0,0.6)"
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "hero-chip", style: {
    position: "absolute",
    bottom: 18,
    left: -24,
    background: "var(--paper)",
    color: "var(--on-light)",
    borderRadius: 16,
    padding: "16px 20px",
    boxShadow: "0 24px 50px -20px rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    gap: 14
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", color: "var(--accent-deep)", lineHeight: 1 } }, "20+"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.86rem", lineHeight: 1.25, fontWeight: 500 } }, "years inspiring", /* @__PURE__ */ React.createElement("br", null), "communication"))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, borderBlock: "1px solid var(--ink-line)", paddingBlock: 26 } }, /* @__PURE__ */ React.createElement(Marquee, { items: KT.logos })), /* @__PURE__ */ React.createElement("style", null, `
        @media(max-width:860px){
          .hero-grid{
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            padding-bottom: 0 !important;
          }
          /* show image before text on mobile */
          .hero-img-wrap{ order: -1; }
          .hero-img{ aspect-ratio: 3/2 !important; object-position: top center; }
          .hero-frame{ display: none; }
          .hero-chip{ left: 12px !important; bottom: 12px !important; padding: 12px 16px !important; }
          .hero-chip span:first-child{ font-size: 1.5rem !important; }
          .hero-text{ padding-bottom: 40px; }
        }
      `));
}
function PillarsTeaser({ go }) {
  const [active, setActive] = useState(0);
  return /* @__PURE__ */ React.createElement("section", { className: "section on-cream" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 } }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: "What I offer", title: /* @__PURE__ */ React.createElement(React.Fragment, null, "The Self\xA0\u2192\xA0Success Journey"), max: 560 }), /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", style: { maxWidth: 360 } }, "Three connected practices. One throughline \u2014 communication that changes how you lead, serve, and show up.")), /* @__PURE__ */ React.createElement("div", { className: "pillars", style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 } }, KT.pillars.map((p, i) => /* @__PURE__ */ React.createElement(Reveal, { key: p.key, d: i * 0.08 }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "pillar-card",
      onMouseEnter: () => setActive(i),
      style: { background: active === i ? "var(--ink)" : "var(--paper)", color: active === i ? "var(--on-dark)" : "var(--on-light)" }
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 600, color: "var(--accent)" } }, p.tag), /* @__PURE__ */ React.createElement("span", { style: { opacity: active === i ? 1 : 0.3, transition: "0.3s", color: "var(--accent)" } }, /* @__PURE__ */ React.createElement(Arrow, null))),
    /* @__PURE__ */ React.createElement("h3", { className: "h3", style: { marginTop: 28, fontSize: "2.2rem" } }, p.title),
    /* @__PURE__ */ React.createElement("p", { style: { marginTop: 10, fontWeight: 500, color: active === i ? "var(--on-dark-soft)" : "var(--on-light-soft)" } }, p.lede),
    /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", marginTop: 24, display: "flex", flexDirection: "column", gap: 11 } }, p.points.map((pt) => /* @__PURE__ */ React.createElement("li", { key: pt, style: { display: "flex", gap: 11, alignItems: "center", fontSize: "0.95rem" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 9, background: "var(--accent)", flex: "0 0 auto" } }), pt)))
  )))), /* @__PURE__ */ React.createElement(Reveal, { style: { marginTop: 40 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "light", onClick: () => go("services") }, "See how it works"))), /* @__PURE__ */ React.createElement("style", null, `
        .pillar-card{ border-radius:var(--radius-lg); padding:34px 30px 36px; height:100%;
          transition: background .45s var(--ease), color .45s var(--ease), transform .45s var(--ease);
          box-shadow:0 1px 0 rgba(0,0,0,.04); cursor:default; }
        .pillar-card:hover{ transform:translateY(-6px); }
        @media(max-width:760px){ .pillars{ grid-template-columns:1fr !important; } }
      `));
}
function AboutTeaser({ go }) {
  return /* @__PURE__ */ React.createElement("section", { className: "section" }, /* @__PURE__ */ React.createElement("div", { className: "wrap about-grid", style: { display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" } }, /* @__PURE__ */ React.createElement(Reveal, { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    Img,
    {
      src: KT.images.portrait,
      alt: "Coach KT",
      phLabel: "coach KT photo",
      style: { width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: "var(--radius-lg)", boxShadow: "0 40px 80px -36px rgba(0,0,0,0.6)" }
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Reveal, { as: "span", className: "eyebrow", style: { marginBottom: 22 } }, "Hello, I'm Coach KT"), /* @__PURE__ */ React.createElement(Reveal, { as: "h2", className: "h2", d: 0.05, style: { marginTop: 16 } }, "I believe communication ", /* @__PURE__ */ React.createElement("span", { className: "italic-accent", style: { fontStyle: "italic" } }, "creates change.")), /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", d: 0.1, style: { marginTop: 24 } }, "Working with people from diverse cultures across Asia's hospitality industry taught me that growth almost always begins with a conversation \u2014 one that builds confidence, strengthens relationships, and sparks change."), /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", d: 0.14, style: { marginTop: 18 } }, "Today I help individuals, leaders, and teams discover their strengths, build meaningful connections, and grow into their full potential."), /* @__PURE__ */ React.createElement(Reveal, { d: 0.2, style: { marginTop: 34 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "ghost", onClick: () => go("story") }, "Read my story")))), /* @__PURE__ */ React.createElement("style", null, `@media(max-width:820px){ .about-grid{ grid-template-columns:1fr !important; } }`));
}
function StatsBand() {
  return /* @__PURE__ */ React.createElement("section", { className: "section", style: { background: "var(--ink-deep)", paddingBlock: "clamp(64px,9vw,110px)" } }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { className: "stats-grid", style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 } }, KT.stats.map((s, i) => /* @__PURE__ */ React.createElement(Reveal, { key: s.label, d: i * 0.1, style: {
    padding: "0 clamp(20px,3vw,44px)",
    borderLeft: i === 0 ? "none" : "1px solid var(--ink-line)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(3rem,6vw,5rem)", letterSpacing: "-0.04em", lineHeight: 1, color: "var(--accent)" } }, /* @__PURE__ */ React.createElement(CountUp, { value: s.value, suffix: s.suffix })), /* @__PURE__ */ React.createElement("div", { className: "h3", style: { marginTop: 16, fontSize: "1.3rem" } }, s.label), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12, color: "var(--on-dark-soft)", fontSize: "0.98rem", lineHeight: 1.5 } }, s.sub))))), /* @__PURE__ */ React.createElement("style", null, `@media(max-width:760px){ .stats-grid{ grid-template-columns:1fr !important; gap:36px !important; }
        .stats-grid .reveal{ border-left:none !important; padding-left:0 !important; } }`));
}
function TestimonialsHome() {
  const [i, setI] = useState(0);
  const t = KT.testimonials[i];
  return /* @__PURE__ */ React.createElement("section", { className: "section on-cream" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement(SectionHead, { eyebrow: "In their words", title: "The change, felt firsthand", max: 520 }), /* @__PURE__ */ React.createElement("div", { className: "testimonial-layout", style: { marginTop: 48, display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" } }, /* @__PURE__ */ React.createElement(Reveal, { key: i, style: { maxWidth: 880 } }, /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(1.5rem,3.2vw,2.6rem)", lineHeight: 1.18, letterSpacing: "-0.02em" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent-deep)" } }, '"'), t.quote, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent-deep)" } }, '"')), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28, display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 38, height: 1.5, background: "var(--accent-deep)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600 } }, t.name), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--on-light-soft)", fontSize: "0.92rem" } }, t.org)))), /* @__PURE__ */ React.createElement("div", { className: "tnav-row", style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { className: "tnav", onClick: () => setI((i - 1 + KT.testimonials.length) % KT.testimonials.length), "aria-label": "Previous", style: { transform: "scaleX(-1)" } }, /* @__PURE__ */ React.createElement(Arrow, null)), /* @__PURE__ */ React.createElement("button", { className: "tnav", onClick: () => setI((i + 1) % KT.testimonials.length), "aria-label": "Next" }, /* @__PURE__ */ React.createElement(Arrow, null))))), /* @__PURE__ */ React.createElement("style", null, `
        .tnav{ width:52px; height:52px; border-radius:50%; border:1px solid var(--cream-deep); display:grid; place-items:center; color:var(--on-light); transition:.3s var(--ease); }
        .tnav:hover{ background:var(--ink); color:var(--accent); border-color:var(--ink); }
        @media(max-width:600px){
          .testimonial-layout{ grid-template-columns:1fr !important; gap:28px !important; }
          .tnav-row{ justify-content: flex-start; }
        }
      `));
}
function CTABand({ go }) {
  return /* @__PURE__ */ React.createElement("section", { className: "section", style: { paddingBlock: "clamp(72px,10vw,130px)" } }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement(Reveal, { style: { position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--accent)", color: "var(--ink-deep)", padding: "clamp(44px,7vw,86px)" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", maxWidth: 720 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow", style: { color: "var(--ink-deep)" } }, "Ready when you are"), /* @__PURE__ */ React.createElement("h2", { className: "h1", style: { marginTop: 18 } }, "Your next chapter starts with one conversation."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 22, fontSize: "1.2rem", lineHeight: 1.5, maxWidth: 540, color: "color-mix(in oklab, var(--ink-deep) 78%, transparent)" } }, "Book a complimentary discovery call. We'll talk about where you are, where you want to be, and how communication gets you there."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 36 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "light", onClick: () => go("contact") }, "Let's talk"))), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: "-4%", bottom: "-30%", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(12rem,24vw,26rem)", color: "color-mix(in oklab, var(--ink-deep) 8%, transparent)", lineHeight: 1, letterSpacing: "-0.05em", pointerEvents: "none" } }, "KT"))));
}
function HomePage({ go }) {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Hero, { go }), /* @__PURE__ */ React.createElement(PillarsTeaser, { go }), /* @__PURE__ */ React.createElement(AboutTeaser, { go }), /* @__PURE__ */ React.createElement(StatsBand, null), /* @__PURE__ */ React.createElement(TestimonialsHome, null), /* @__PURE__ */ React.createElement(CTABand, { go }));
}
window.HomePage = HomePage;
