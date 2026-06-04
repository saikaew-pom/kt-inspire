const KT_TONES = {
  amber: {
    swatch: ["#E8A23D", "#1b2230", "#f4f1ea"],
    vars: {
      "--ink": "oklch(0.19 0.022 258)",
      "--ink-deep": "oklch(0.145 0.02 258)",
      "--ink-soft": "oklch(0.255 0.022 258)",
      "--ink-line": "oklch(0.34 0.018 258)",
      "--paper": "oklch(0.985 0.006 85)",
      "--cream": "oklch(0.963 0.012 83)",
      "--cream-deep": "oklch(0.93 0.015 82)",
      "--accent": "oklch(0.78 0.135 66)",
      "--accent-deep": "oklch(0.685 0.15 50)",
      "--accent-soft": "oklch(0.88 0.07 72)",
      "--on-dark": "oklch(0.97 0.008 85)",
      "--on-dark-soft": "oklch(0.77 0.014 80)",
      "--on-dark-faint": "oklch(0.58 0.012 80)"
    }
  },
  blue: {
    // Luxury blue — deep sapphire navy + luminous azure accent.
    swatch: ["#5C9BF0", "#0f1830", "#eaf0f9"],
    vars: {
      "--ink": "oklch(0.185 0.034 262)",
      "--ink-deep": "oklch(0.135 0.036 264)",
      "--ink-soft": "oklch(0.25 0.036 262)",
      "--ink-line": "oklch(0.345 0.03 262)",
      "--paper": "oklch(0.985 0.005 250)",
      "--cream": "oklch(0.964 0.009 250)",
      "--cream-deep": "oklch(0.922 0.014 252)",
      "--accent": "oklch(0.705 0.135 252)",
      "--accent-deep": "oklch(0.6 0.16 258)",
      "--accent-soft": "oklch(0.82 0.085 250)",
      "--on-dark": "oklch(0.972 0.008 250)",
      "--on-dark-soft": "oklch(0.78 0.018 252)",
      "--on-dark-faint": "oklch(0.6 0.02 254)"
    }
  },
  emerald: {
    swatch: ["#3FB489", "#0f231d", "#e9f2ee"],
    vars: {
      "--ink": "oklch(0.19 0.026 210)",
      "--ink-deep": "oklch(0.142 0.026 208)",
      "--ink-soft": "oklch(0.255 0.026 210)",
      "--ink-line": "oklch(0.34 0.022 210)",
      "--paper": "oklch(0.985 0.006 160)",
      "--cream": "oklch(0.964 0.01 162)",
      "--cream-deep": "oklch(0.924 0.014 162)",
      "--accent": "oklch(0.72 0.13 162)",
      "--accent-deep": "oklch(0.62 0.14 158)",
      "--accent-soft": "oklch(0.84 0.08 165)",
      "--on-dark": "oklch(0.972 0.008 160)",
      "--on-dark-soft": "oklch(0.78 0.016 165)",
      "--on-dark-faint": "oklch(0.6 0.016 168)"
    }
  }
};
const KT_CORNERS = {
  soft: { "--radius": "18px", "--radius-lg": "28px" },
  sharp: { "--radius": "4px", "--radius-lg": "8px" }
};
function applyKTTheme({ tone, corners, flatMotion }) {
  const root = document.documentElement;
  const t = KT_TONES[tone] || KT_TONES.amber;
  Object.entries(t.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  const c = KT_CORNERS[corners] || KT_CORNERS.soft;
  Object.entries(c).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute("data-motion", flatMotion ? "flat" : "full");
}
window.KT_TONES = KT_TONES;
window.applyKTTheme = applyKTTheme;
