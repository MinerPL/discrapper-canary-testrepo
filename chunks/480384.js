"use strict";
n(653041);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(650774),
  _ = n(771845);
let d = [];

function c() {
  d = [];
  let e = _.ZP.getFlattenedGuildIds();
  for (let t = 0; t < e.length; t++) {
    let n = e[t],
      i = u.Z.getMemberCount(n);
    if (null != i && i >= 2 && i <= 95 && (d.push(n), d.length >= 5)) return
  }
}
class E extends(i = a.ZP.Store) {
  initialize() {
    this.syncWith([u.Z, _.ZP], c), c()
  }
  getPriorityGuilds() {
    return d
  }
}
o = "RecentlyOnlineExperimentPriorityGuildsStore", (s = "displayName") in(r = E) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new E(l.Z, {})