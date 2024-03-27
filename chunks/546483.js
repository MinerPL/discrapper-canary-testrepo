"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("222007");
var r = a("656280"),
  n = a.n(r),
  o = a("65597"),
  s = a("206230"),
  i = a("388491");
let l = (e, t) => {
    let a = e.toRgb(),
      r = t.toRgb(),
      [o, s, l] = (0, i.getValueInColorGradientByPercentage)([a.r, a.g, a.b], [r.r, r.g, r.b], 50);
    return n({
      r: o,
      g: s,
      b: l
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
      border: l(t[0], t[1]).setAlpha(.4),
      label: l(t[0], t[1]).isLight() ? e.dark : e.light
    }
  },
  d = (e, t) => {
    if (0 !== t.length) return 1 === t.length ? {
      primary: t[0],
      secondary: t[0],
      text: t[0].isLight() ? e.dark : e.light
    } : {
      primary: t[0],
      secondary: t[1],
      text: l(t[0], t[1]).isLight() ? e.dark : e.light
    }
  },
  u = (e, t) => {
    let {
      h: a,
      s: r,
      l: o
    } = e.toHsl();
    return n({
      h: a,
      s: r * t,
      l: o
    })
  };
var f = e => t => {
  let a = (0, o.useStateFromStores)([s.default], () => s.default.saturation);
  if (null == t) return {};
  let r = {
    backgroundColors: c(e, t.backgroundColors),
    buttonColors: d(e, t.buttonColors),
    confettiColors: t.confettiColors
  };
  return 1 === a ? {
    ...r,
    isDarkText: !!(null != r.backgroundColors && r.backgroundColors.secondary.isLight())
  } : {
    backgroundColors: null != r.backgroundColors ? {
      primary: u(r.backgroundColors.primary, a),
      secondary: u(r.backgroundColors.secondary, a),
      border: u(r.backgroundColors.border, a),
      label: u(r.backgroundColors.label, a)
    } : void 0,
    buttonColors: null != r.buttonColors ? {
      primary: u(r.buttonColors.primary, a),
      secondary: u(r.buttonColors.secondary, a),
      text: u(r.buttonColors.text, a)
    } : void 0,
    confettiColors: r.confettiColors.map(e => u(e, a)),
    isDarkText: !!(null != r.backgroundColors && r.backgroundColors.secondary.isLight())
  }
}