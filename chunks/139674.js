"use strict";
let i;
n(47120);
var r, s, o, a, l = n(442837),
  u = n(433517),
  _ = n(570140),
  d = n(902676),
  c = n(626135),
  E = n(358085),
  I = n(704133),
  T = n(981631);
let h = "BlockedDomainStore",
  S = "BlockedDomainRevision",
  f = null;
class N extends(r = l.ZP.Store) {
  initialize() {
    i = null, u.K.get(h) && (u.K.remove(S), u.K.remove(h))
  }
  getCurrentRevision() {
    if (!(0, E.isDesktop)()) return null;
    if (null == i) {
      var e;
      i = null !== (e = u.K.get(S)) && void 0 !== e ? e : null
    }
    return i
  }
  async getBlockedDomainList() {
    return null == f && (f = new Set(await I.Z.getBlockedDomains())), f
  }
  isBlockedDomain(e) {
    let t = n(647229);
    if (null == f) return this.getBlockedDomainList(), null;
    let i = (0, d.F)(e),
      r = new t.hash.sha256,
      s = t.codec.hex.fromBits(r.update(i).finalize()),
      o = "";
    f.has(s) && (o = i);
    let a = i.indexOf(".");
    for (; - 1 !== a && "" === o;) i = i.substring(a + 1), r.reset(), s = t.codec.hex.fromBits(r.update(i).finalize()), f.has(s) && (o = i), a = i.indexOf(".");
    return "" !== o ? (c.default.track(T.rMx.LINK_SECURITY_CHECK_BLOCKED, {
      blocked_domain: o
    }), o) : null
  }
}
a = "BlockedDomainStore", (o = "displayName") in(s = N) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new N(_.Z, {
  BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
    let {
      list: t,
      revision: n
    } = e;
    i = null, f = new Set(t), I.Z.saveBlockedDomains(t), u.K.set("BlockedDomainRevision", n)
  }
})