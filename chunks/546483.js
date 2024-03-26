"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("222007");
var r = a("656280"),
  s = a.n(r),
  l = a("65597"),
  n = a("206230"),
  i = a("388491");
let o = (e, t) => {
    let a = e.toRgb(),
      r = t.toRgb(),
      [l, n, o] = (0, i.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [r.r, r.g, r.b], 50);
    return s({
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
      s: r,
      l
    } = e.toHsl();
    return s({
      h: a,
      s: r * t,
      l
    })
  };
var f = e => t => {
  let a = (0, l.useStateFromStores)([n.default], () => n.default.saturation);
  if (null == t) return {};
  let r = {
    backgroundColors: c(e, t.backgroundColors),
    buttonColors: u(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === a ? {
    ...r,
    isDarkText: !!(null != r.backgroundColors && r.backgroundColors.secondary.isLight())
  } : {
    backgroundColors: null != r.backgroundColors ? {
      primary: d(r.backgroundColors.primary, a),
      secondary: d(r.backgroundColors.secondary, a),
      border: d(r.backgroundColors.border, a),
      label: d(r.backgroundColors.label, a)
    } : void 0,
    buttonColors: null != r.buttonColors ? {
      primary: d(r.buttonColors.primary, a),
      secondary: d(r.buttonColors.secondary, a),
      text: d(r.buttonColors.text, a)
    } : void 0,
    confettiColors: r.confettiColors.map(e => d(e, a)),
    isDarkText: !!(null != r.backgroundColors && r.backgroundColors.secondary.isLight())
  }
}