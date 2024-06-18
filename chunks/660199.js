"use strict";
n.d(t, {
  Ay: function() {
    return _
  },
  He: function() {
    return c
  },
  K_: function() {
    return l
  },
  Qh: function() {
    return a
  },
  ZB: function() {
    return d
  }
});
var i = n(913527),
  r = n.n(i),
  s = n(55935),
  o = n(70956);
let a = {
    t: e => (0, s.vc)(e, "LT"),
    T: e => (0, s.vc)(e, "LTS"),
    d: e => (0, s.vc)(e, "L"),
    D: e => (0, s.vc)(e, "LL"),
    f: e => (0, s.vc)(e, "LLL"),
    F: e => (0, s.vc)(e, "LLLL"),
    R: e => {
      let t = r().relativeTimeThreshold("s");
      r().relativeTimeThreshold("s", 60);
      let n = r().relativeTimeThreshold("ss");
      r().relativeTimeThreshold("ss", -1);
      let i = r().relativeTimeThreshold("m");
      r().relativeTimeThreshold("m", 60);
      let s = null;
      try {
        s = r()(e.toDate()).fromNow()
      } catch (e) {}
      return r().relativeTimeThreshold("s", t), r().relativeTimeThreshold("ss", n), r().relativeTimeThreshold("m", i), null != s ? s : r()(e.toDate()).fromNow()
    }
  },
  l = "f";
Object.setPrototypeOf(a, null);
let u = Object.keys(a).join("|"),
  _ = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(u, "))?>"));

function d(e, t) {
  let n = r()(Number(e) * o.Z.Millis.SECOND);
  if (!n.isValid()) return null;
  let i = null != t ? a[t] : void 0;
  return null == i && (i = a[l]), {
    timestamp: e,
    format: t,
    parsed: n,
    full: a.F(n),
    formatted: i(n)
  }
}

function c(e, t) {
  return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
}