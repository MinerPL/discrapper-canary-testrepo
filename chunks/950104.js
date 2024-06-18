"use strict";
n.d(t, {
  Qg: function() {
    return a
  },
  S3: function() {
    return s
  },
  r5: function() {
    return l
  }
}), n(47120), n(411104);
var i = n(688619),
  r = n.n(i);
let s = {
  NonText: 3,
  Text: 4.5,
  HighContrastText: 7
};

function o(e) {
  let [t, n, i, r] = e.rgba();
  return "rgba(".concat(t, ", ").concat(n, ", ").concat(i, ", ").concat(r, ")")
}

function a(e) {
  var t, n, i;
  let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    l = null !== (t = a.contrastRatio) && void 0 !== t ? t : s.NonText,
    u = null !== (n = a.tolerance) && void 0 !== n ? n : 3,
    _ = r()(null !== (i = a.base) && void 0 !== i ? i : e),
    d = r()(e),
    c = _.luminance(),
    E = d,
    I = l + u,
    T = r().contrast(_, d),
    h = 100;
  for (; h-- > 0;) {
    let e = T < l,
      t = T > I;
    if (!e && !t) break;
    let n = E.luminance() > c;
    E = t && n || e && !n ? E.darken() : E.brighten(), T = r().contrast(_, E)
  }
  return o(E)
}

function l(e, t) {
  return o(r()(e).darken(t))
}