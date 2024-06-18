"use strict";
n(653041), n(47120);
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(742738);
let c = [d.Z],
  E = [];

function I() {
  let e = [];
  for (let t of c) {
    let n = t.getActivity();
    null != n && e.push(n)
  }
  return !l()(e, E) && (E = e, !0)
}
class T extends(i = u.ZP.Store) {
  initialize() {
    this.syncWith(c, I)
  }
  getActivities() {
    return E
  }
}
o = "FirstPartyRichPresenceStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new T(_.Z)