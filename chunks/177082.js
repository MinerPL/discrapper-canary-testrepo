"use strict";
n(47120);
var i = n(355467),
  r = n(496929),
  s = n(147913),
  o = n(594174),
  a = n(351402),
  l = n(78839),
  u = n(580130),
  _ = n(630388),
  d = n(74538),
  c = n(474936);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends s.Z {
  constructor(...e) {
    super(...e), E(this, "actions", {
      POST_CONNECTION_OPEN: () => {
        this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription()
      }
    }), E(this, "maybeFetchSubscriptions", async () => {
      let e = o.default.getCurrentUser();
      if (d.ZP.isPremium(e)) {
        !l.ZP.hasFetchedSubscriptions() && await (0, i.jg)();
        let e = l.ZP.getPremiumSubscription();
        (null == e ? void 0 : e.paymentSourceId) == null && !u.Z.applicationIdsFetched.has(c.RQ) && await (0, r.yD)(c.RQ)
      }
    }), E(this, "maybeFetchMostRecentSubscription", () => {
      let e = o.default.getCurrentUser();
      null != e && !d.ZP.isPremium(e) && null != e.purchasedFlags && ((0, _.yE)(e.purchasedFlags, c.in.PREMIUM_TIER_1) || (0, _.yE)(e.purchasedFlags, c.in.PREMIUM_TIER_2)) && (0, i.ou)()
    }), E(this, "maybeFetchCountryCode", async () => {
      let e = o.default.getCurrentUser();
      d.ZP.isPremium(e) && !a.Z.ipCountryCodeLoaded && await this.fetchCountryCode()
    }), E(this, "fetchCountryCode", async () => {
      await (0, i.GE)(), null != a.Z.ipCountryCode && await (0, i.tZ)()
    })
  }
}
t.Z = new I