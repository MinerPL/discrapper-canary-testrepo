"use strict";
r.r(t), r("47120");
var o = r("979590"),
  n = r.n(o),
  a = r("399606"),
  l = r("607070"),
  s = r("168631");
let i = (e, t) => {
    let r = e.toRgb(),
      o = t.toRgb(),
      [a, l, i] = (0, s.getValueInColorGradientByPercentage)([r.r, r.g, r.b], [o.r, o.g, o.b], 50);
    return n()({
      r: a,
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
      s: o,
      l: a
    } = e.toHsl();
    return n()({
      h: r,
      s: o * t,
      l: a
    })
  };
t.default = e => t => {
  let r = (0, a.useStateFromStores)([l.default], () => l.default.saturation);
  if (null == t) return {};
  let o = {
    backgroundColors: c(e, t.backgroundColors),
    buttonColors: u(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === r ? {
    ...o
  } : {
    backgroundColors: null != o.backgroundColors ? {
      primary: d(o.backgroundColors.primary, r),
      secondary: d(o.backgroundColors.secondary, r),
      border: d(o.backgroundColors.border, r),
      label: d(o.backgroundColors.label, r)
    } : void 0,
    buttonColors: null != o.buttonColors ? {
      primary: d(o.buttonColors.primary, r),
      secondary: d(o.buttonColors.secondary, r),
      text: d(o.buttonColors.text, r)
    } : void 0,
    confettiColors: o.confettiColors.map(e => d(e, r))
  }
}