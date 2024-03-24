"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("222007");
var s = a("656280"),
  r = a.n(s),
  l = a("65597"),
  n = a("206230"),
  i = a("388491");
let o = (e, t) => {
    let a = e.toRgb(),
      s = t.toRgb(),
      [l, n, o] = (0, i.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [s.r, s.g, s.b], 50);
    return r({
      r: l,
      g: n,
      b: o
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
      border: o(t[0], t[1]).setAlpha(.4),
      label: o(t[0], t[1]).isLight() ? e.dark : e.light
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
      text: o(t[0], t[1]).isLight() ? e.dark : e.light
    }
  },
  d = (e, t) => {
    let {
      h: a,
      s,
      l
    } = e.toHsl();
    return r({
      h: a,
      s: s * t,
      l
    })
  };
var f = e => t => {
  let a = (0, l.useStateFromStores)([n.default], () => n.default.saturation);
  if (null == t) return {};
  let s = {
    backgroundColors: c(e, t.backgroundColors),
    buttonColors: u(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === a ? {
    ...s,
    isDarkText: !!(null != s.backgroundColors && s.backgroundColors.secondary.isLight())
  } : {
    backgroundColors: null != s.backgroundColors ? {
      primary: d(s.backgroundColors.primary, a),
      secondary: d(s.backgroundColors.secondary, a),
      border: d(s.backgroundColors.border, a),
      label: d(s.backgroundColors.label, a)
    } : void 0,
    buttonColors: null != s.buttonColors ? {
      primary: d(s.buttonColors.primary, a),
      secondary: d(s.buttonColors.secondary, a),
      text: d(s.buttonColors.text, a)
    } : void 0,
    confettiColors: s.confettiColors.map(e => d(e, a)),
    isDarkText: !!(null != s.backgroundColors && s.backgroundColors.secondary.isLight())
  }
}