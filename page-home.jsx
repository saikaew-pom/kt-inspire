/* HOME page */
function Hero({ go }) {
  const ref = useRef(null);
  const [off, setOff] = useState(0);
  useEffect(() => {
    const onScroll = () => setOff(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section style={{ position: "relative", paddingTop: "clamp(88px,12vw,120px)", overflow: "hidden" }}>
      {/* ambient glow */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%", width: 620, height: 620,
        background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 26%, transparent), transparent 65%)",
        filter: "blur(20px)", pointerEvents: "none",
      }} />
      <div className="wrap hero-grid" style={{
        position: "relative", display: "grid", gridTemplateColumns: "1.15fr 0.85fr",
        gap: "clamp(32px,5vw,80px)", alignItems: "center", minHeight: "84vh", paddingBlock: "clamp(40px,6vw,80px)",
      }}>
        <div className="hero-text">
          <Reveal as="span" className="eyebrow" style={{ marginBottom: 26 }}>Communication Creates Change</Reveal>
          <Reveal as="h1" className="display" d={0.06} style={{ marginTop: 22 }}>
            Grow from<br />
            <span style={{ color: "var(--accent)" }}>Self</span> to{" "}
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>Success.</span>
          </Reveal>
          <Reveal as="p" className="lead" d={0.14} style={{ marginTop: 30, maxWidth: 520 }}>
            I'm Coach KT. For two decades I've helped people, leaders, and teams
            find their voice — building the confidence, connection, and clarity
            that turn potential into momentum.
          </Reveal>
          <Reveal d={0.2} style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Btn onClick={() => go("contact")}>Book a discovery call</Btn>
            <Btn kind="ghost" onClick={() => go("services")}>Explore the journey</Btn>
          </Reveal>
          <Reveal d={0.28} style={{ marginTop: 46, display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--on-dark-faint)" }}>Find me</span>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              {["Facebook", "YouTube", "Instagram", "WhatsApp"].map((s) => (
                <a key={s} href="#" className="social-link">{s}</a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal d={0.12} className="hero-img-wrap" style={{ position: "relative" }}>
          <div style={{ position: "relative", transform: `translateY(${off * -0.04}px)` }}>
            {/* accent frame — hidden on mobile to avoid overflow */}
            <div className="hero-frame" style={{
              position: "absolute", inset: "-14px -14px 28px 22px", border: "1.5px solid var(--accent)",
              borderRadius: "var(--radius-lg)", opacity: 0.6,
            }} />
            <Img src={KT.images.hero} alt="Coach KT" phLabel="coach KT portrait"
              className="hero-img"
              style={{
                width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "top center",
                borderRadius: "var(--radius-lg)", position: "relative",
                boxShadow: "0 40px 80px -30px rgba(0,0,0,0.6)",
              }} />
            {/* floating chip */}
            <div className="hero-chip" style={{
              position: "absolute", bottom: 18, left: -24, background: "var(--paper)", color: "var(--on-light)",
              borderRadius: 16, padding: "16px 20px", boxShadow: "0 24px 50px -20px rgba(0,0,0,0.5)",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", color: "var(--accent-deep)", lineHeight: 1 }}>20+</span>
              <span style={{ fontSize: "0.86rem", lineHeight: 1.25, fontWeight: 500 }}>years inspiring<br />communication</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div style={{ marginTop: 24, borderBlock: "1px solid var(--ink-line)", paddingBlock: 26 }}>
        <Marquee items={KT.logos} />
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}

function PillarsTeaser({ go }) {
  const [active, setActive] = useState(0);
  return (
    <section className="section on-cream">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <SectionHead eyebrow="What I offer" title={<>The Self&nbsp;→&nbsp;Success Journey</>} max={560} />
          <Reveal as="p" className="lead" style={{ maxWidth: 360 }}>
            Three connected practices. One throughline — communication that
            changes how you lead, serve, and show up.
          </Reveal>
        </div>

        <div className="pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {KT.pillars.map((p, i) => (
            <Reveal key={p.key} d={i * 0.08}>
              <div className="pillar-card" onMouseEnter={() => setActive(i)}
                style={{ background: active === i ? "var(--ink)" : "var(--paper)", color: active === i ? "var(--on-dark)" : "var(--on-light)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 600, color: "var(--accent)" }}>{p.tag}</span>
                  <span style={{ opacity: active === i ? 1 : 0.3, transition: "0.3s", color: "var(--accent)" }}><Arrow /></span>
                </div>
                <h3 className="h3" style={{ marginTop: 28, fontSize: "2.2rem" }}>{p.title}</h3>
                <p style={{ marginTop: 10, fontWeight: 500, color: active === i ? "var(--on-dark-soft)" : "var(--on-light-soft)" }}>{p.lede}</p>
                <ul style={{ listStyle: "none", marginTop: 24, display: "flex", flexDirection: "column", gap: 11 }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: 11, alignItems: "center", fontSize: "0.95rem" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 9, background: "var(--accent)", flex: "0 0 auto" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 40 }}>
          <Btn kind="light" onClick={() => go("services")}>See how it works</Btn>
        </Reveal>
      </div>
      <style>{`
        .pillar-card{ border-radius:var(--radius-lg); padding:34px 30px 36px; height:100%;
          transition: background .45s var(--ease), color .45s var(--ease), transform .45s var(--ease);
          box-shadow:0 1px 0 rgba(0,0,0,.04); cursor:default; }
        .pillar-card:hover{ transform:translateY(-6px); }
        @media(max-width:760px){ .pillars{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

function AboutTeaser({ go }) {
  return (
    <section className="section">
      <div className="wrap about-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
        <Reveal style={{ position: "relative" }}>
          <Img src={KT.images.portrait} alt="Coach KT" phLabel="coach KT photo"
            style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: "var(--radius-lg)", boxShadow: "0 40px 80px -36px rgba(0,0,0,0.6)" }} />
        </Reveal>
        <div>
          <Reveal as="span" className="eyebrow" style={{ marginBottom: 22 }}>Hello, I'm Coach KT</Reveal>
          <Reveal as="h2" className="h2" d={0.05} style={{ marginTop: 16 }}>
            I believe communication <span className="italic-accent" style={{ fontStyle: "italic" }}>creates change.</span>
          </Reveal>
          <Reveal as="p" className="lead" d={0.1} style={{ marginTop: 24 }}>
            Working with people from diverse cultures across Asia's hospitality
            industry taught me that growth almost always begins with a conversation —
            one that builds confidence, strengthens relationships, and sparks change.
          </Reveal>
          <Reveal as="p" className="lead" d={0.14} style={{ marginTop: 18 }}>
            Today I help individuals, leaders, and teams discover their strengths,
            build meaningful connections, and grow into their full potential.
          </Reveal>
          <Reveal d={0.2} style={{ marginTop: 34 }}>
            <Btn kind="ghost" onClick={() => go("story")}>Read my story</Btn>
          </Reveal>
        </div>
      </div>
      <style>{`@media(max-width:820px){ .about-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="section" style={{ background: "var(--ink-deep)", paddingBlock: "clamp(64px,9vw,110px)" }}>
      <div className="wrap">
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
          {KT.stats.map((s, i) => (
            <Reveal key={s.label} d={i * 0.1} style={{
              padding: "0 clamp(20px,3vw,44px)",
              borderLeft: i === 0 ? "none" : "1px solid var(--ink-line)",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(3rem,6vw,5rem)", letterSpacing: "-0.04em", lineHeight: 1, color: "var(--accent)" }}>
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="h3" style={{ marginTop: 16, fontSize: "1.3rem" }}>{s.label}</div>
              <p style={{ marginTop: 12, color: "var(--on-dark-soft)", fontSize: "0.98rem", lineHeight: 1.5 }}>{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:760px){ .stats-grid{ grid-template-columns:1fr !important; gap:36px !important; }
        .stats-grid .reveal{ border-left:none !important; padding-left:0 !important; } }`}</style>
    </section>
  );
}

function TestimonialsHome() {
  const [i, setI] = useState(0);
  const t = KT.testimonials[i];
  return (
    <section className="section on-cream">
      <div className="wrap">
        <SectionHead eyebrow="In their words" title="The change, felt firsthand" max={520} />
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" }}>
          <Reveal key={i} style={{ maxWidth: 880 }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(1.5rem,3.2vw,2.6rem)", lineHeight: 1.18, letterSpacing: "-0.02em" }}>
              <span style={{ color: "var(--accent-deep)" }}>“</span>{t.quote}<span style={{ color: "var(--accent-deep)" }}>”</span>
            </p>
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 38, height: 1.5, background: "var(--accent-deep)" }} />
              <div>
                <div style={{ fontWeight: 600 }}>{t.name}</div>
                <div style={{ color: "var(--on-light-soft)", fontSize: "0.92rem" }}>{t.org}</div>
              </div>
            </div>
          </Reveal>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="tnav" onClick={() => setI((i - 1 + KT.testimonials.length) % KT.testimonials.length)} aria-label="Previous" style={{ transform: "scaleX(-1)" }}><Arrow /></button>
            <button className="tnav" onClick={() => setI((i + 1) % KT.testimonials.length)} aria-label="Next"><Arrow /></button>
          </div>
        </div>
      </div>
      <style>{`
        .tnav{ width:52px; height:52px; border-radius:50%; border:1px solid var(--cream-deep); display:grid; place-items:center; color:var(--on-light); transition:.3s var(--ease); }
        .tnav:hover{ background:var(--ink); color:var(--accent); border-color:var(--ink); }
      `}</style>
    </section>
  );
}

function CTABand({ go }) {
  return (
    <section className="section" style={{ paddingBlock: "clamp(72px,10vw,130px)" }}>
      <div className="wrap">
        <Reveal style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--accent)", color: "var(--ink-deep)", padding: "clamp(44px,7vw,86px)" }}>
          <div style={{ position: "relative", maxWidth: 720 }}>
            <span className="eyebrow" style={{ color: "var(--ink-deep)" }}>Ready when you are</span>
            <h2 className="h1" style={{ marginTop: 18 }}>Your next chapter starts with one conversation.</h2>
            <p style={{ marginTop: 22, fontSize: "1.2rem", lineHeight: 1.5, maxWidth: 540, color: "color-mix(in oklab, var(--ink-deep) 78%, transparent)" }}>
              Book a complimentary discovery call. We'll talk about where you are,
              where you want to be, and how communication gets you there.
            </p>
            <div style={{ marginTop: 36 }}>
              <Btn kind="light" onClick={() => go("contact")}>Let's talk</Btn>
            </div>
          </div>
          <span style={{ position: "absolute", right: "-4%", bottom: "-30%", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(12rem,24vw,26rem)", color: "color-mix(in oklab, var(--ink-deep) 8%, transparent)", lineHeight: 1, letterSpacing: "-0.05em", pointerEvents: "none" }}>KT</span>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage({ go }) {
  return (
    <main>
      <Hero go={go} />
      <PillarsTeaser go={go} />
      <AboutTeaser go={go} />
      <StatsBand />
      <TestimonialsHome />
      <CTABand go={go} />
    </main>
  );
}

window.HomePage = HomePage;
