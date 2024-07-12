n(47120);
var r = n(147913),
  i = n(579806),
  a = n(246946);
let o = !1;

function s() {
  var e;
  let t = null === i.Z || void 0 === i.Z ? void 0 : null === (e = i.Z.window) || void 0 === e ? void 0 : e.setContentProtection;
  if (null == t)
return;
  let n = a.Z.enableContentProtection;
  n !== o && (t(n), o = n);
}
class l extends r.Z {
  constructor() {
var e, t, n;
s(), super(), e = this, t = 'stores', n = new Map().set(a.Z, s), t in e ? Object.defineProperty(e, t, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[t] = n;
  }
}
t.Z = new l();