"use strict";
r.r(t), r("47120");
var a = r("979590"),
  o = r.n(a),
  n = r("399606"),
  l = r("607070"),
  s = r("168631");
let i = (e, t) => {
    let r = e.toRgb(),
      a = t.toRgb(),
      [n, l, i] = (0, s.getValueInColorGradientByPercentage)([r.r, r.g, r.b], [a.r, a.g, a.b], 50);
    return o()({
      r: n,
      g: l,
      b: i
    })
  },
  c = (e, t) => {
    if (0 !== t.length) return 1 === t.length ? {
      primary: t[0],
      secondary: t[0],
      border: t[0].setAlpha(.4),
      label: t[0].isLight() ? e.dark : e.light
    } : {
      primary: t[0],
      secondary: t[1],
      border: i(t[0], t[1]).setAlpha(.4),
      label: i(t[0], t[1]).isLight() ? e.dark : e.light
    }
  },
  u = (e, t) => {
    if (0 !== t.length) return 1 === t.length ? {
      primary: t[0],
      secondary: t[0],
      text: t[0].isLight() ? e.dark : e.light
    } : {
      primary: t[0],
      secondary: t[1],
      text: i(t[0], t[1]).isLight() ? e.dark : e.light
    }
  },
  d = (e, t) => {
    let {
      h: r,
      s: a,
      l: n
    } = e.toHsl();
    return o()({
      h: r,
      s: a * t,
      l: n
    })
  };
t.default = e => t => {
  let r = (0, n.useStateFromStores)([l.default], () => l.default.saturation);
  if (null == t) return {};
  let a = {
    backgroundColors: c(e, t.backgroundColors),
    buttonColors: u(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === r ? {
    ...a,
    isDarkText: !!(null != a.backgroundColors && a.backgroundColors.secondary.isLight())
  } : {
    backgroundColors: null != a.backgroundColors ? {
      primary: d(a.backgroundColors.primary, r),
      secondary: d(a.backgroundColors.secondary, r),
      border: d(a.backgroundColors.border, r),
      label: d(a.backgroundColors.label, r)
    } : void 0,
    buttonColors: null != a.buttonColors ? {
      primary: d(a.buttonColors.primary, r),
      secondary: d(a.buttonColors.secondary, r),
      text: d(a.buttonColors.text, r)
    } : void 0,
    confettiColors: a.confettiColors.map(e => d(e, r)),
    isDarkText: !!(null != a.backgroundColors && a.backgroundColors.secondary.isLight())
  }
}