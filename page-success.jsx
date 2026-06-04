/* SUCCESS page + CONTACT page */
function SuccessPage({ go }) {
  return (
    <main>
      <PageHero
        eyebrow="Success Stories"
        title={<>Real organisations. Real <span className="italic-accent" style={{ fontStyle: "italic" }}>change.</span></>}
        lead="I partner with organisations, leaders, and professionals to build confidence, foster meaningful connection, and create lasting growth."
      />

      {/* stats recap */}
      <section style={{ paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div className="wrap">
          <div className="succ-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {KT.stats.map((s, i) => (
              <Reveal key={s.label} d={i * 0.08}>
                <div style={{ borderTop: "2px solid var(--accent)", paddingTop: 18 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.4rem,4vw,3.4rem)", lineHeight: 1, color: "var(--on-dark)" }}>
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ marginTop: 10, color: "var(--on-dark-soft)", fontWeight: 500 }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <style>{`@media(max-width:680px){ .succ-stats{ grid-template-columns:1fr !important; } }`}</style>
        </div>
      </section>

      {/* client stories grid */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="story-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {KT.clients.map((c, i) => (
              <Reveal key={c.name} d={(i % 3) * 0.08}>
                <article className="story-card">
                  <div className="story-media">
                    <Img src={c.img} alt={c.name} phLabel={c.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <span className="story-sector">{c.sector}</span>
                  </div>
                  <div className="story-body">
                    <h3 className="h3" style={{ fontSize: "1.45rem" }}>{c.name}</h3>
                    <p style={{ marginTop: 12, color: "var(--on-dark-soft)", lineHeight: 1.55, fontSize: "0.98rem" }}>{c.result}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .story-card{ border-radius:var(--radius-lg); overflow:hidden; background:var(--ink-soft); border:1px solid var(--ink-line); height:100%; transition:.45s var(--ease); }
          .story-card:hover{ transform:translateY(-7px); border-color:var(--accent); }
          .story-media{ position:relative; aspect-ratio:3/2; overflow:hidden; }
          .story-media img{ transition:transform .7s var(--ease); }
          .story-card:hover .story-media img{ transform:scale(1.06); }
          .story-sector{ position:absolute; top:14px; left:14px; background:color-mix(in oklab, var(--ink-deep) 78%, transparent); backdrop-filter:blur(8px); color:var(--on-dark); font-size:.72rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; padding:7px 12px; border-radius:100px; }
          .story-body{ padding:26px 26px 30px; }
          @media(max-width:860px){ .story-grid{ grid-template-columns:1fr 1fr !important; } }
          @media(max-width:560px){ .story-grid{ grid-template-columns:1fr !important; } }
        `}</style>
      </section>

      {/* testimonials stacked */}
      <section className="section on-cream">
        <div className="wrap">
          <SectionHead eyebrow="In their words" title="What partners say" max={520} />
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column" }}>
            {KT.testimonials.map((t, i) => (
              <Reveal key={i} d={i * 0.05}>
                <div className="quote-row" style={{ display: "grid", gridTemplateColumns: "1fr 230px", gap: "clamp(20px,4vw,56px)", padding: "40px 0", borderTop: "1px solid var(--cream-deep)", alignItems: "center" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(1.3rem,2.6vw,2rem)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
                    <span style={{ color: "var(--accent-deep)" }}>“</span>{t.quote}<span style={{ color: "var(--accent-deep)" }}>”</span>
                  </p>
                  <div>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: "var(--on-light-soft)", fontSize: "0.92rem", marginTop: 2 }}>{t.org}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:680px){ .quote-row{ grid-template-columns:1fr !important; gap:18px !important; } }`}</style>
      </section>

      {/* logos */}
      <section style={{ paddingBlock: "clamp(48px,7vw,90px)", borderTop: "1px solid var(--ink-line)" }}>
        <div className="wrap" style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Trusted by teams across Asia</span>
        </div>
        <Marquee items={KT.logos} />
      </section>

      <CTABand go={go} />
    </main>
  );
}

/* ---------- Contact / Book a call ---------- */
function ContactPage({ go }) {
  const [form, setForm] = useState({ name: "", email: "", org: "", goal: "Self", message: "" });
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (valid) {
      const lines = [
        "Hi Coach KT! I'd like to book a discovery call.",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.org ? `Organisation: ${form.org}` : null,
        `Interest: ${form.goal}`,
        form.message ? `\nMessage: ${form.message}` : null,
      ].filter((l) => l !== null).join("\n");
      window.open(`https://wa.me/66869643159?text=${encodeURIComponent(lines)}`, "_blank");
      setSent(true);
    }
  };
  return (
    <main>
      <PageHero
        eyebrow="Let's Talk"
        title={<>Book your <span className="italic-accent" style={{ fontStyle: "italic" }}>discovery call.</span></>}
        lead="Tell me a little about where you are. I'll be in touch within two business days to find a time that works."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap contact-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}>
          <div>
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  { k: "A complimentary 30-minute call", v: "No pitch — just a real conversation about your goals." },
                  { k: "Tailored to you", v: "Whether it's Self, Serve, or Support, we'll find the right starting point." },
                  { k: "Across Asia & online", v: "In-person in the region or anywhere over video." },
                ].map((it) => (
                  <div key={it.k} style={{ display: "flex", gap: 16 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 9, background: "var(--accent)", marginTop: 8, flex: "0 0 auto" }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.25rem" }}>{it.k}</div>
                      <p style={{ color: "var(--on-dark-soft)", marginTop: 6, lineHeight: 1.5 }}>{it.v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal style={{ marginTop: 40, paddingTop: 30, borderTop: "1px solid var(--ink-line)", display: "flex", gap: 18, flexWrap: "wrap" }}>
              {["Facebook", "YouTube", "Instagram", "WhatsApp"].map((s) => (
                <a key={s} href="#" className="social-link" style={{ color: "var(--on-dark-soft)", fontWeight: 500 }}>{s}</a>
              ))}
            </Reveal>
          </div>

          <Reveal d={0.08}>
            {sent ? (
              <div className="form-card" style={{ display: "grid", placeItems: "center", textAlign: "center", minHeight: 420 }}>
                <div>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent)", display: "grid", placeItems: "center", margin: "0 auto 24px" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="var(--ink-deep)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 className="h3">Thank you, {form.name.split(" ")[0] || "friend"}.</h3>
                  <p className="lead" style={{ marginTop: 14, maxWidth: 360 }}>Your message is on its way. I'll reach out within two business days. Let's create some change.</p>
                  <div style={{ marginTop: 28 }}><Btn kind="ghost" onClick={() => go("home")}>Back to start</Btn></div>
                </div>
              </div>
            ) : (
              <form className="form-card" onSubmit={submit} noValidate>
                <div className="field-grid">
                  <Field label="Your name" required>
                    <input value={form.name} onChange={set("name")} placeholder="Jane Doe"
                      className={touched && !form.name.trim() ? "err" : ""} />
                  </Field>
                  <Field label="Email" required>
                    <input type="email" value={form.email} onChange={set("email")} placeholder="jane@company.com"
                      className={touched && !/\S+@\S+\.\S+/.test(form.email) ? "err" : ""} />
                  </Field>
                </div>
                <Field label="Organisation">
                  <input value={form.org} onChange={set("org")} placeholder="Company or team (optional)" />
                </Field>
                <Field label="Where would you like to start?">
                  <div className="seg">
                    {KT.pillars.map((p) => (
                      <button type="button" key={p.key} onClick={() => setForm((f) => ({ ...f, goal: p.key }))}
                        className={form.goal === p.key ? "on" : ""}>{p.key}</button>
                    ))}
                  </div>
                </Field>
                <Field label="What's on your mind?">
                  <textarea rows="4" value={form.message} onChange={set("message")} placeholder="Tell me a little about your goals…" />
                </Field>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
                  <span>Request my call</span><Arrow />
                </button>
                {touched && !valid && <p style={{ color: "var(--accent-deep)", fontSize: "0.88rem", marginTop: 12, textAlign: "center" }}>Please add your name and a valid email.</p>}
              </form>
            )}
          </Reveal>
        </div>
        <style>{`
          .form-card{ background:var(--ink-soft); border:1px solid var(--ink-line); border-radius:var(--radius-lg); padding:clamp(26px,3.5vw,40px); display:flex; flex-direction:column; gap:20px; }
          .field-grid{ display:grid; grid-template-columns:1fr 1fr; gap:20px; }
          .form-card label{ display:block; font-size:.82rem; font-weight:600; letter-spacing:.04em; color:var(--on-dark-soft); margin-bottom:9px; }
          .form-card .req{ color:var(--accent); }
          .form-card input, .form-card textarea{ width:100%; background:var(--ink-deep); border:1px solid var(--ink-line); border-radius:12px; padding:14px 16px; color:var(--on-dark); font-family:var(--font-body); font-size:1rem; transition:border-color .25s, box-shadow .25s; resize:vertical; }
          .form-card input::placeholder, .form-card textarea::placeholder{ color:var(--on-dark-faint); }
          .form-card input:focus, .form-card textarea:focus{ outline:none; border-color:var(--accent); box-shadow:0 0 0 3px color-mix(in oklab, var(--accent) 22%, transparent); }
          .form-card input.err{ border-color:var(--accent-deep); }
          .seg{ display:flex; gap:8px; }
          .seg button{ flex:1; padding:12px; border-radius:12px; border:1px solid var(--ink-line); color:var(--on-dark-soft); font-weight:600; font-family:var(--font-display); transition:.25s var(--ease); }
          .seg button.on{ background:var(--accent); color:var(--ink-deep); border-color:var(--accent); }
          .seg button:not(.on):hover{ border-color:var(--accent); color:var(--accent); }
          @media(max-width:820px){ .contact-grid{ grid-template-columns:1fr !important; } }
          @media(max-width:480px){ .field-grid{ grid-template-columns:1fr !important; } }
        `}</style>
      </section>
    </main>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <label>{label}{required && <span className="req"> *</span>}</label>
      {children}
    </div>
  );
}

Object.assign(window, { SuccessPage, ContactPage, Field });
