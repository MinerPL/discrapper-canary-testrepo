"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("222007");
var l = a("656280"),
  r = a.n(l),
  s = a("65597"),
  n = a("206230"),
  o = a("388491");
let i = (e, t) => {
    let a = e.toRgb(),
      l = t.toRgb(),
      [s, n, i] = (0, o.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [l.r, l.g, l.b], 50);
    return r({
      r: s,
      g: n,
      b: i
    })
  },
  u = (e, t) => {
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
  c = (e, t) => {
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
      h: a,
      s: l,
      l: s
    } = e.toHsl();
    return r({
      h: a,
      s: l * t,
      l: s
    })
  };
var f = e => t => {
  let a = (0, s.useStateFromStores)([n.default], () => n.default.saturation);
  if (null == t) return {};
  let l = {
    backgroundColors: u(e, t.backgroundColors),
    buttonColors: c(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === a ? {
    ...l,
    isDarkText: !!(null != l.backgroundColors && l.backgroundColors.secondary.isLight())
  } : {
    backgroundColors: null != l.backgroundColors ? {
      primary: d(l.backgroundColors.primary, a),
      secondary: d(l.backgroundColors.secondary, a),
      border: d(l.backgroundColors.border, a),
      label: d(l.backgroundColors.label, a)
    } : void 0,
    buttonColors: null != l.buttonColors ? {
      primary: d(l.buttonColors.primary, a),
      secondary: d(l.buttonColors.secondary, a),
      text: d(l.buttonColors.text, a)
    } : void 0,
    confettiColors: l.confettiColors.map(e => d(e, a)),
    isDarkText: !!(null != l.backgroundColors && l.backgroundColors.secondary.isLight())
  }
}