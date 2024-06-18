"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(470079),
  r = n(913527),
  s = n.n(r),
  o = n(718922),
  a = n(70956),
  l = n(660199);
let u = [
    [2 * a.Z.Seconds.MINUTE, a.Z.Seconds.SECOND],
    [5 * a.Z.Seconds.MINUTE, a.Z.Seconds.MINUTE],
    [45 * a.Z.Seconds.MINUTE, 2 * a.Z.Seconds.MINUTE],
    [21 * a.Z.Seconds.HOUR, 5 * a.Z.Seconds.MINUTE]
  ],
  _ = 2 * a.Z.Seconds.HOUR;

function d(e) {
  let t = (0, o.Z)();
  return (i.useEffect(() => {
    if ("R" !== e.format) return;
    let n = 1e3 * _,
      i = Math.abs(e.parsed.diff(s()()));
    for (let [e, t] of u)
      if (i < 1e3 * e) {
        n = 1e3 * t;
        break
      } let r = setInterval(() => {
      t()
    }, n);
    return () => clearInterval(r)
  }, [t, e.format, e.parsed]), "R" === e.format) ? l.Qh.R(e.parsed) : e.formatted
}