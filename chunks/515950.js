"use strict";
e.r(E), e.d(E, {
  transformColorForReducedSaturation: function() {
    return t
  },
  transformColorContrast: function() {
    return i
  }
}), e("222007");
var I = e("10371"),
  a = e.n(I);

function o(_, E, e) {
  let [I, a] = _, [o, R] = E, t = (I + a) / 2;
  return e === t ? t : e < t ? o + (e - I) / (t - I) * (t - o) : t + (e - t) / (a - t) * (R - t)
}
let R = [0, 2];

function t(_, E, e) {
  let I = a(_);
  if ("background" !== E) return I.set("hsl.s", "*".concat(e)).hex();
  {
    let _ = function(_, E, e) {
      let [I, a] = _, [o, R] = E;
      return o + (R - o) * ((e - I) / (a - I))
    }([0, 1], [.75, 1], e);
    return I.set("hsl.s", "*".concat(_)).hex()
  }
}
let A = [1.3, .85],
  T = [.98, 1],
  r = [.75, 1.5],
  N = [1.45, .45];

function i(_, E, e, I) {
  switch (E) {
    case "background":
    case "border":
      return a(_).set("hsl.l", "*".concat(o(R, "light" === e ? T : A, I))).hex();
    case "text":
      return a(_).set("hsl.l", "*".concat(o(R, "light" === e ? N : r, I))).hex();
    default:
      return _
  }
}