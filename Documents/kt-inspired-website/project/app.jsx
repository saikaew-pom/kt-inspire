/* App shell + routing + tweaks */
const { useState: useS, useEffect: useE } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tone": "amber",
  "corners": "soft",
  "flatMotion": false
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useS(() => (location.hash || "#home").slice(1) || "home");
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply theme tokens whenever a tweak changes
  useE(() => { applyKTTheme(t); }, [t.tone, t.corners, t.flatMotion]);

  const go = (r) => {
    setRoute(r);
    if (history.replaceState) history.replaceState(null, "", "#" + r);
    window.scrollTo(0, 0);
  };

  useReveal();

  const pages = {
    home: HomePage, story: StoryPage, services: ServicesPage,
    success: SuccessPage, contact: ContactPage,
  };
  const Page = pages[route] || HomePage;

  const toneOpts = Object.keys(KT_TONES).map((k) => KT_TONES[k].swatch);
  const toneByKey = Object.keys(KT_TONES);
  const curSwatch = (KT_TONES[t.tone] || KT_TONES.amber).swatch;

  return (
    <React.Fragment>
      <Nav route={route} go={go} />
      <div key={route} className="page-enter">
        <Page go={go} />
        <Footer go={go} />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color tone" />
        <TweakColor
          label="Palette"
          value={curSwatch}
          options={toneOpts}
          onChange={(sw) => {
            const key = toneByKey.find((k) => KT_TONES[k].swatch === sw) || "amber";
            setTweak("tone", key);
          }}
        />
        <TweakRadio
          label="Tone"
          value={t.tone}
          options={[
            { value: "amber", label: "Amber" },
            { value: "blue", label: "Blue" },
            { value: "emerald", label: "Green" },
          ]}
          onChange={(v) => setTweak("tone", v)}
        />
        <TweakSection label="Style" />
        <TweakRadio
          label="Corners"
          value={t.corners}
          options={[{ value: "soft", label: "Soft" }, { value: "sharp", label: "Sharp" }]}
          onChange={(v) => setTweak("corners", v)}
        />
        <TweakToggle
          label="Flat (no motion)"
          value={t.flatMotion}
          onChange={(v) => setTweak("flatMotion", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
