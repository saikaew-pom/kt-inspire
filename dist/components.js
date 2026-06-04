const { useState, useEffect, useRef, useCallback } = React;
const _revealCbs = /* @__PURE__ */ new Set();
let _revealInit = false;
function _ensureRevealListener() {
  if (_revealInit) return;
  _revealInit = true;
  let raf;
  const scan = () => {
    _revealCbs.forEach((cb) => cb());
  };
  const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(scan);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}
function useReveal() {
}
function Reveal({ children, d = 0, as = "div", className = "", style = {}, ...rest }) {
  const Tag = as;
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    _ensureRevealListener();
    const check = () => {
      const el = ref.current;
      if (!el) return false;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 4) {
        setShown(true);
        return true;
      }
      return false;
    };
    if (check()) return;
    const cb = () => {
      if (check()) _revealCbs.delete(cb);
    };
    _revealCbs.add(cb);
    const ts = [80, 280, 650].map((ms) => setTimeout(cb, ms));
    return () => {
      _revealCbs.delete(cb);
      ts.forEach(clearTimeout);
    };
  }, []);
  return /* @__PURE__ */ React.createElement(Tag, { ref, className: `reveal ${shown ? "in" : ""} ${className}`, style: { "--d": `${d}s`, ...style }, ...rest }, children);
}
function Img({ src, alt, className = "", phLabel = "image", style = {}, ...rest }) {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return /* @__PURE__ */ React.createElement("div", { className: `img-ph ${className}`, style }, phLabel);
  }
  return /* @__PURE__ */ React.createElement(
    "img",
    {
      src,
      alt,
      className,
      style,
      loading: "lazy",
      onError: () => setErr(true),
      ...rest
    }
  );
}
function Arrow({ size = 16 }) {
  return /* @__PURE__ */ React.createElement("svg", { className: "arrow", width: size, height: size, viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M3 8h9M8 3l5 5-5 5",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ));
}
function Btn({ kind = "primary", children, onClick, arrow = true, className = "" }) {
  return /* @__PURE__ */ React.createElement("button", { className: `btn btn-${kind} ${className}`, onClick }, /* @__PURE__ */ React.createElement("span", null, children), arrow && /* @__PURE__ */ React.createElement(Arrow, null));
}
function Logo({ onClick, dark = false }) {
  return /* @__PURE__ */ React.createElement("button", { onClick, "aria-label": "KT Inspire home", style: { display: "flex", alignItems: "baseline", gap: 2 } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: "1.5rem",
    letterSpacing: "-0.04em",
    color: dark ? "var(--on-light)" : "var(--on-dark)"
  } }, "KT"), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: "1.05rem",
    letterSpacing: "0.02em",
    color: "var(--accent)"
  } }, "inspire"));
}
function Nav({ route, go }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [route]);
  return /* @__PURE__ */ React.createElement("header", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.5s var(--ease)",
    background: scrolled ? "color-mix(in oklab, var(--ink-deep) 82%, transparent)" : "transparent",
    backdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
    borderBottom: scrolled ? "1px solid var(--ink-line)" : "1px solid transparent"
  } }, /* @__PURE__ */ React.createElement("div", { className: "wrap", style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: scrolled ? 70 : 92,
    transition: "height 0.5s var(--ease)"
  } }, /* @__PURE__ */ React.createElement(Logo, { onClick: () => go("home") }), /* @__PURE__ */ React.createElement("nav", { className: "nav-links", style: { display: "flex", alignItems: "center", gap: 6 } }, KT.nav.map((n) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: n.id,
      onClick: () => go(n.id),
      style: {
        position: "relative",
        padding: "0.5em 0.95em",
        fontSize: "0.95rem",
        fontWeight: 500,
        letterSpacing: "-0.01em",
        color: route === n.id ? "var(--accent)" : "var(--on-dark-soft)",
        transition: "color 0.3s"
      },
      onMouseEnter: (e) => {
        if (route !== n.id) e.currentTarget.style.color = "var(--on-dark)";
      },
      onMouseLeave: (e) => {
        if (route !== n.id) e.currentTarget.style.color = "var(--on-dark-soft)";
      }
    },
    n.label,
    /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      left: "0.95em",
      bottom: 2,
      height: 1.5,
      width: route === n.id ? "calc(100% - 1.9em)" : 0,
      background: "var(--accent)",
      transition: "width 0.4s var(--ease)"
    } })
  ))), /* @__PURE__ */ React.createElement("div", { className: "nav-cta", style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement(Btn, { kind: "primary", onClick: () => go("contact") }, "Let's Talk")), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "nav-burger",
      onClick: () => setOpen((o) => !o),
      "aria-label": "Menu",
      style: { display: "none", flexDirection: "column", gap: 5, padding: 8 }
    },
    /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 2, background: "var(--on-dark)", transition: "0.3s", transform: open ? "translateY(7px) rotate(45deg)" : "none" } }),
    /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 2, background: "var(--on-dark)", opacity: open ? 0 : 1, transition: "0.3s" } }),
    /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 2, background: "var(--on-dark)", transition: "0.3s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" } })
  )), /* @__PURE__ */ React.createElement("div", { className: "nav-drawer", style: {
    maxHeight: open ? 360 : 0,
    overflow: "hidden",
    transition: "max-height 0.5s var(--ease)",
    background: "var(--ink-deep)",
    borderTop: open ? "1px solid var(--ink-line)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { className: "wrap", style: { paddingBlock: open ? 18 : 0, display: "flex", flexDirection: "column", gap: 4 } }, KT.nav.map((n) => /* @__PURE__ */ React.createElement("button", { key: n.id, onClick: () => go(n.id), style: {
    textAlign: "left",
    padding: "0.8em 0",
    fontSize: "1.4rem",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    color: route === n.id ? "var(--accent)" : "var(--on-dark)"
  } }, n.label)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ React.createElement(Btn, { onClick: () => go("contact") }, "Let's Talk")))));
}
function Footer({ go }) {
  const socials = ["Facebook", "YouTube", "Instagram", "WhatsApp"];
  return /* @__PURE__ */ React.createElement("footer", { style: { background: "var(--ink-deep)", borderTop: "1px solid var(--ink-line)", paddingTop: 80 } }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { className: "footer-top", style: { display: "flex", justifyContent: "space-between", gap: 48, flexWrap: "wrap", paddingBottom: 64 } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 440 } }, /* @__PURE__ */ React.createElement(Reveal, { as: "h2", className: "h2", style: { marginBottom: 22 } }, "Let's start the ", /* @__PURE__ */ React.createElement("span", { className: "italic-accent", style: { fontStyle: "italic" } }, "conversation.")), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginBottom: 28 } }, "Tell me where you are today. Together we'll map the path from Self to Success."), /* @__PURE__ */ React.createElement(Btn, { onClick: () => go("contact") }, "Book a discovery call")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 64, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "foot-h" }, "Explore"), KT.nav.map((n) => /* @__PURE__ */ React.createElement("button", { key: n.id, className: "foot-link", onClick: () => go(n.id) }, n.label))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "foot-h" }, "Connect"), socials.map((s) => /* @__PURE__ */ React.createElement("a", { key: s, className: "foot-link", href: "#" }, s))))), /* @__PURE__ */ React.createElement("hr", { className: "hr" }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, paddingBlock: 30 } }, /* @__PURE__ */ React.createElement(Logo, { onClick: () => go("home") }), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--on-dark-faint)", fontSize: "0.85rem" } }, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " KT Inspire \u2014 Communication Creates Change."))), /* @__PURE__ */ React.createElement("style", null, `
        .foot-h{ font-size:.78rem; letter-spacing:.18em; text-transform:uppercase; color:var(--on-dark-faint); margin-bottom:16px; }
        .foot-link{ display:block; text-align:left; color:var(--on-dark-soft); font-size:1rem; padding:6px 0; transition:color .25s, transform .25s var(--ease); }
        .foot-link:hover{ color:var(--accent); transform:translateX(4px); }
      `));
}
function SectionHead({ eyebrow, title, lead, align = "left", max = 640 }) {
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: max, marginInline: align === "center" ? "auto" : 0, textAlign: align } }, eyebrow && /* @__PURE__ */ React.createElement(Reveal, { as: "span", className: "eyebrow", style: { marginBottom: 22, justifyContent: align === "center" ? "center" : "flex-start" } }, eyebrow), /* @__PURE__ */ React.createElement(Reveal, { as: "h2", className: "h2", d: 0.05, style: { marginTop: 14 } }, title), lead && /* @__PURE__ */ React.createElement(Reveal, { as: "p", className: "lead", d: 0.1, style: { marginTop: 22 } }, lead));
}
function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const numeric = parseFloat(value.replace(/,/g, ""));
    const el = ref.current;
    let done = false;
    const fmt = (n) => Math.round(n).toLocaleString("en-US");
    const run = () => {
      if (done || !el) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
        done = true;
        window.removeEventListener("scroll", run);
        const start = performance.now(), dur = 1600;
        const tick = (t2) => {
          const p = Math.min((t2 - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(fmt(numeric * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    };
    setShown(fmt(0));
    const t = setTimeout(run, 80);
    window.addEventListener("scroll", run, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", run);
    };
  }, [value]);
  return /* @__PURE__ */ React.createElement("span", { ref }, shown, suffix);
}
function Marquee({ items, dark = false }) {
  const row = [...items, ...items];
  return /* @__PURE__ */ React.createElement("div", { className: "marquee", style: { overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" } }, /* @__PURE__ */ React.createElement("div", { className: "marquee-track", style: { display: "flex", gap: 0, width: "max-content" } }, row.map((it, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "clamp(1.6rem,3vw,2.4rem)",
    color: dark ? "var(--on-light-soft)" : "var(--on-dark-faint)",
    padding: "0 0.6em",
    display: "inline-flex",
    alignItems: "center",
    gap: "1.2em",
    letterSpacing: "-0.02em"
  } }, it, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--accent)", fontSize: "0.7em" } }, "\u2726")))), /* @__PURE__ */ React.createElement("style", null, `
        .marquee-track{ animation: marq 26s linear infinite; }
        @keyframes marq{ to{ transform: translateX(-50%); } }
        .marquee:hover .marquee-track{ animation-play-state: paused; }
      `));
}
Object.assign(window, {
  useReveal,
  Reveal,
  Img,
  Arrow,
  Btn,
  Logo,
  Nav,
  Footer,
  SectionHead,
  CountUp,
  Marquee
});
