n.d(t, {
  b: function() {
return T;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(570140),
  o = n(594174),
  s = n(626135),
  l = n(358085),
  u = n(857595),
  c = n(607070),
  d = n(981631);
let _ = window.matchMedia('(prefers-reduced-motion: reduce)'),
  E = window.matchMedia('(prefers-contrast: more)'),
  f = window.matchMedia('(prefers-contrast: less)'),
  h = window.matchMedia('(prefers-color-scheme: dark)'),
  p = window.matchMedia('(prefers-color-scheme: light)'),
  m = window.matchMedia('(forced-colors: active)'),
  I = 5;

function T() {
  return 'windows' === (0, l.getOS)();
}
t.Z = {
  initBasic() {
_.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(_), h.addListener(this.handleSystemColorPreferencesChanged), p.addListener(this.handleSystemColorPreferencesChanged), m.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), E.addListener(this.handleSystemPrefersContrastChanged), f.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged();
  },
  init() {
this.initBasic(), a.Z.subscribe('ACCESSIBILITY_COLORBLIND_TOGGLE', () => {
  s.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, {
    colorblind_enabled: c.Z.colorblindMode
  });
}), a.Z.subscribe('ACCESSIBILITY_SET_SATURATION', e => {
  s.default.track(d.rMx.LOCAL_SETTINGS_UPDATED, {
    saturation_level: e.saturation
  });
});
  },
  maybeShowKeyboardNavigationExplainerModal() {
I = Math.max(I - 1, 0), ! function() {
  let e = o.default.getCurrentUser();
  return null == e || Date.now() - +e.createdAt < 86400000;
}() && !c.Z.keyboardNavigationExplainerModalSeen && 0 === I && (0, i.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('6380'),
    n.e('78333')
  ]).then(n.bind(n, 461964));
  return t => (0, r.jsx)(e, {
    ...t
  });
});
  },
  handleSystemPrefersReducedMotionChanged(e) {
a.Z.wait(() => {
  u.Nc(e.matches ? 'reduce' : 'no-preference');
});
  },
  handleSystemColorPreferencesChanged() {
let e;
h.matches ? e = d.BRd.DARK : p.matches && (e = d.BRd.LIGHT);
let t = (!l.isPlatformEmbedded || T()) && m.matches ? 'active' : 'none';
a.Z.wait(() => {
  u.Ej(e, t);
});
  },
  handleSystemPrefersContrastChanged() {
let e = 'no-preference';
E.matches ? e = 'more' : f.matches && (e = 'less'), a.Z.wait(() => {
  u.TX(e);
});
  }
};