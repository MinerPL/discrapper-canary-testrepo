"use strict";
n.d(t, {
  b: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140),
  o = n(594174),
  a = n(626135),
  l = n(358085),
  u = n(857595),
  _ = n(607070),
  d = n(981631);
let c = window.matchMedia("(prefers-reduced-motion: reduce)"),
  E = window.matchMedia("(prefers-contrast: more)"),
  I = window.matchMedia("(prefers-contrast: less)"),
  T = window.matchMedia("(prefers-color-scheme: dark)"),
  h = window.matchMedia("(prefers-color-scheme: light)"),
  S = window.matchMedia("(forced-colors: active)"),
  f = 5;

function N() {
  return "windows" === (0, l.getOS)()
}
t.Z = {
  initBasic() {
    c.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(c), T.addListener(this.handleSystemColorPreferencesChanged), h.addListener(this.handleSystemColorPreferencesChanged), S.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), E.addListener(this.handleSystemPrefersContrastChanged), I.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
  },
  init() {
    this.initBasic(), s.Z.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      a.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, {
        colorblind_enabled: _.Z.colorblindMode
      })
    }), s.Z.subscribe("ACCESSIBILITY_SET_SATURATION", e => {
      a.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, {
        saturation_level: e.saturation
      })
    })
  },
  maybeShowKeyboardNavigationExplainerModal() {
    f = Math.max(f - 1, 0), ! function() {
      let e = o.default.getCurrentUser();
      return null == e || Date.now() - +e.createdAt < 864e5
    }() && !_.Z.keyboardNavigationExplainerModalSeen && 0 === f && (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("6380"), n.e("73872")]).then(n.bind(n, 461964));
      return t => (0, i.jsx)(e, {
        ...t
      })
    })
  },
  handleSystemPrefersReducedMotionChanged(e) {
    s.Z.wait(() => {
      u.Nc(e.matches ? "reduce" : "no-preference")
    })
  },
  handleSystemColorPreferencesChanged() {
    let e;
    T.matches ? e = d.BRd.DARK : h.matches && (e = d.BRd.LIGHT);
    let t = (!l.isPlatformEmbedded || N()) && S.matches ? "active" : "none";
    s.Z.wait(() => {
      u.Ej(e, t)
    })
  },
  handleSystemPrefersContrastChanged() {
    let e = "no-preference";
    E.matches ? e = "more" : I.matches && (e = "less"), s.Z.wait(() => {
      u.TX(e)
    })
  }
}