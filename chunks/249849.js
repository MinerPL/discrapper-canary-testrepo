"use strict";
n.d(t, {
  s: function() {
    return o
  }
});
var i = n(688619),
  r = n.n(i);

function s(e, t, n) {
  if (!r().valid(t)) return e.map(() => "#000000");
  let i = r()(t),
    s = i.luminance();
  return e.map((e, t) => i.luminance((e * n[t].base + s * n[t].tint) / (n[t].base + n[t].tint)).hex())
}

function o(e) {
  let {
    primaryBaseColors: t,
    primaryTintColor: n,
    primaryTintLuminances: i,
    primaryLuminanceWeights: r,
    secondaryBaseColors: o,
    secondaryTintColor: a,
    secondaryTintLuminances: l,
    secondaryLuminanceWeights: u
  } = e, _ = null != n ? s(i, n, r) : t, d = [];
  return null != o && null != l && null != u && (d = null != a ? s(l, a, u) : o), {
    primaryColorsTransformed: _,
    secondaryColorsTransformed: d
  }
}