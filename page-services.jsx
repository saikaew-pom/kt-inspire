/* SERVICES page */
function ServicesPage({ go }) {
  const formats = [
    { t: "Keynotes", d: "High-energy talks that move a room and reset how an organisation thinks about communication." },
    { t: "Workshops", d: "Hands-on group sessions where skills are practised, not just presented." },
    { t: "1:1 Coaching", d: "Private, tailored work for leaders and professionals ready to level up their voice." },
    { t: "Team programs", d: "Multi-session journeys that embed new habits across a whole department." },
  ];
  const process = [
    { n: "01", t: "Discover", d: "We start with a conversation to understand your people, goals, and the gap you want to close." },
    { n: "02", t: "Design", d: "I shape a program around your reality — your industry, your culture, your language." },
    { n: "03", t: "Deliver", d: "Energising, practical sessions where skills are built through real practice and feedback." },
    { n: "04", t: "Sustain", d: "Tools, habits, and follow-through so the change keeps compounding long after." },
  ];
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={<>Communication that moves you from <span className="italic-accent" style={{ fontStyle: "italic" }}>Self</span> to <span className="accent-text">Success</span>.</>}
        lead="Three connected practices — Self, Serve, and Support. Together they build people who communicate with confidence, connection, and clarity."
      />

      {/* pillar detail sections */}
      {KT.pillars.map((p, i) => (
        <section key={p.key} className="section" style={{ background: i % 2 === 1 ? "var(--ink-deep)" : "transparent", paddingBlock: "clamp(56px,8vw,100px)" }}>
          <div className="wrap pillar-detail" style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "clamp(28px,5vw,72px)", alignItems: "start" }}>
            <Reveal style={{ position: "sticky", top: 110 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(4rem,9vw,8rem)", lineHeight: 0.9, color: "var(--accent)", letterSpacing: "-0.05em", display: "block" }}>{p.tag}</span>
              <h2 className="h1" style={{ marginTop: 6 }}>{p.title}</h2>
              <p style={{ marginTop: 14, fontWeight: 600, color: "var(--accent)", fontSize: "1.05rem" }}>{p.lede}</p>
            </Reveal>
            <div>
              <Reveal as="p" className="lead" style={{ fontSize: "clamp(1.2rem,1.9vw,1.5rem)", color: "var(--on-dark)" }}>{p.desc}</Reveal>
              <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 0 }}>
                {p.points.map((pt, j) => (
                  <Reveal key={pt} d={j * 0.06}>
                    <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "20px 0", borderTop: "1px solid var(--ink-line)" }}>
                      <span style={{ fontFamily: "var(--font-display)", color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", minWidth: 28 }}>{String(j + 1).padStart(2, "0")}</span>
                      <span style={{ fontSize: "1.25rem", fontWeight: 500, fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>{pt}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal style={{ marginTop: 34 }}>
                <Btn kind="ghost" onClick={() => go("contact")}>Start with {p.title}</Btn>
              </Reveal>
            </div>
          </div>
          <style>{`@media(max-width:780px){ .pillar-detail{ grid-template-columns:1fr !important; } .pillar-detail .reveal{ position:static !important; } }`}</style>
        </section>
      ))}

      {/* process */}
      <section className="section on-cream">
        <div className="wrap">
          <SectionHead eyebrow="The approach" title="How we work together" max={560} />
          <div className="proc-grid" style={{ marginTop: 52, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {process.map((s, i) => (
              <Reveal key={s.n} d={i * 0.07}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--accent-deep)" }}>{s.n}</div>
                <div style={{ height: 1, background: "var(--cream-deep)", margin: "16px 0" }} />
                <h3 className="h3" style={{ fontSize: "1.5rem" }}>{s.t}</h3>
                <p style={{ marginTop: 12, color: "var(--on-light-soft)", lineHeight: 1.55 }}>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:780px){ .proc-grid{ grid-template-columns:1fr 1fr !important; } } @media(max-width:460px){ .proc-grid{ grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* formats */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 44 }}>
            <SectionHead eyebrow="Ways to engage" title="Choose the format that fits" max={520} />
          </div>
          <div className="fmt-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {formats.map((f, i) => (
              <Reveal key={f.t} d={(i % 2) * 0.07}>
                <div className="fmt-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 className="h3" style={{ fontSize: "1.7rem" }}>{f.t}</h3>
                    <span style={{ color: "var(--accent)" }}><Arrow /></span>
                  </div>
                  <p style={{ marginTop: 14, color: "var(--on-dark-soft)", lineHeight: 1.55, maxWidth: 420 }}>{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .fmt-card{ border:1px solid var(--ink-line); border-radius:var(--radius-lg); padding:clamp(26px,3.5vw,40px); height:100%; transition:.4s var(--ease); background:var(--ink); }
          .fmt-card:hover{ border-color:var(--accent); transform:translateY(-5px); background:var(--ink-soft); }
          @media(max-width:680px){ .fmt-grid{ grid-template-columns:1fr !important; } }
        `}</style>
      </section>

      <CTABand go={go} />
    </main>
  );
}

window.ServicesPage = ServicesPage;
