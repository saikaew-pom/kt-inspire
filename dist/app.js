const { useState: useS, useEffect: useE } = React;
const TWEAK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "tone": "amber",
    "corners": "soft",
    "flatMotion": false
  }
);
function App() {
  const [route, setRoute] = useS(() => (location.hash || "#home").slice(1) || "home");
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useE(() => {
    applyKTTheme(t);
  }, [t.tone, t.corners, t.flatMotion]);
  const go = (r) => {
    setRoute(r);
    if (history.replaceState) history.replaceState(null, "", "#" + r);
    window.scrollTo(0, 0);
  };
  useReveal();
  const pages = {
    home: HomePage,
    story: StoryPage,
    services: ServicesPage,
    success: SuccessPage,
    contact: ContactPage
  };
  const Page = pages[route] || HomePage;
  const toneOpts = Object.keys(KT_TONES).map((k) => KT_TONES[k].swatch);
  const toneByKey = Object.keys(KT_TONES);
  const curSwatch = (KT_TONES[t.tone] || KT_TONES.amber).swatch;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, { route, go }), /* @__PURE__ */ React.createElement("div", { key: route, className: "page-enter" }, /* @__PURE__ */ React.createElement(Page, { go }), /* @__PURE__ */ React.createElement(Footer, { go })), /* @__PURE__ */ React.createElement(TweaksPanel, { title: "Tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { label: "Color tone" }), /* @__PURE__ */ React.createElement(
    TweakColor,
    {
      label: "Palette",
      value: curSwatch,
      options: toneOpts,
      onChange: (sw) => {
        const key = toneByKey.find((k) => KT_TONES[k].swatch === sw) || "amber";
        setTweak("tone", key);
      }
    }
  ), /* @__PURE__ */ React.createElement(
    TweakRadio,
    {
      label: "Tone",
      value: t.tone,
      options: [
        { value: "amber", label: "Amber" },
        { value: "blue", label: "Blue" },
        { value: "emerald", label: "Green" }
      ],
      onChange: (v) => setTweak("tone", v)
    }
  ), /* @__PURE__ */ React.createElement(TweakSection, { label: "Style" }), /* @__PURE__ */ React.createElement(
    TweakRadio,
    {
      label: "Corners",
      value: t.corners,
      options: [{ value: "soft", label: "Soft" }, { value: "sharp", label: "Sharp" }],
      onChange: (v) => setTweak("corners", v)
    }
  ), /* @__PURE__ */ React.createElement(
    TweakToggle,
    {
      label: "Flat (no motion)",
      value: t.flatMotion,
      onChange: (v) => setTweak("flatMotion", v)
    }
  )));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
