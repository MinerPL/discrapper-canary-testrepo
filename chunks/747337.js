"use strict";
n.d(t, {
  h: function() {
    return s
  }
});
var r = n(146150),
  i = n(695170),
  a = n(686942),
  o = n(603259);

function s(e, t) {
  var n, s, u = (0, i.t2)(e, 1, 1),
    c = (0, i.Eg)(e) ? 366 : 365,
    l = (0, i.Eg)(e + 1) ? 366 : 365,
    d = (0, i.fv)(u),
    f = (0, i.FO)(u),
    p = (0, r.pi)((0, r.pi)({
      yearlen: c,
      nextyearlen: l,
      yearordinal: d,
      yearweekday: f
    }, function(e) {
      var t = (0, i.Eg)(e) ? 366 : 365,
        n = (0, i.t2)(e, 1, 1),
        r = (0, i.FO)(n);
      return 365 === t ? {
        mmask: o.RL,
        mdaymask: o.qm,
        nmdaymask: o.nB,
        wdaymask: o.fV.slice(r),
        mrange: o.sr
      } : {
        mmask: o.h3,
        mdaymask: o.fY,
        nmdaymask: o.RP,
        wdaymask: o.fV.slice(r),
        mrange: o.Pi
      }
    }(e)), {
      wnomask: null
    });
  if ((0, a.cS)(t.byweekno)) return p;
  p.wnomask = (0, a.rx)(0, c + 7);
  var h = n = (0, a.Vy)(7 - f + t.wkst, 7);
  h >= 4 ? (h = 0, s = p.yearlen + (0, a.Vy)(f - t.wkst, 7)) : s = c - h;
  for (var m = Math.floor(Math.floor(s / 7) + (0, a.Vy)(s, 7) / 4), g = 0; g < t.byweekno.length; g++) {
    var _ = t.byweekno[g];
    if (_ < 0 && (_ += m + 1), !!(_ > 0 && _ <= m)) {
      var b = void 0;
      _ > 1 ? (b = h + (_ - 1) * 7, h !== n && (b -= 7 - n)) : b = h;
      for (var v = 0; v < 7 && (p.wnomask[b] = 1, b++, p.wdaymask[b] !== t.wkst); v++);
    }
  }
  if ((0, a.q9)(t.byweekno, 1)) {
    var b = h + 7 * m;
    if (h !== n && (b -= 7 - n), b < c)
      for (var g = 0; g < 7 && (p.wnomask[b] = 1, b += 1, p.wdaymask[b] !== t.wkst); g++);
  }
  if (h) {
    var y = void 0;
    if ((0, a.q9)(t.byweekno, -1)) y = -1;
    else {
      var E = (0, i.FO)((0, i.t2)(e - 1, 1, 1)),
        S = (0, a.Vy)(7 - E.valueOf() + t.wkst, 7),
        x = (0, i.Eg)(e - 1) ? 366 : 365,
        w = void 0;
      S >= 4 ? (S = 0, w = x + (0, a.Vy)(E - t.wkst, 7)) : w = c - h, y = Math.floor(52 + (0, a.Vy)(w, 7) / 4)
    }
    if ((0, a.q9)(t.byweekno, y))
      for (var b = 0; b < h; b++) p.wnomask[b] = 1
  }
  return p
}