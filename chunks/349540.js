"use strict";
n(47120);
var i = n(147913),
  r = n(594174),
  s = n(74538),
  o = n(163684),
  a = n(748770),
  l = n(474936);
class u extends i.Z {
  onPostConnectionOpen() {
    this.maybeFetchActiveOutboundPromotions()
  }
  maybeFetchActiveOutboundPromotions() {
    let e = r.default.getCurrentUser(),
      t = s.ZP.isPremium(e),
      n = o.g.getCurrentConfig({
        location: "maybeFetchActiveOutboundPromotions"
      }, {
        autoTrackExposure: !t,
        disable: t
      }).enabled;
    (s.ZP.isPremiumExactly(e, l.p9.TIER_2) || n) && (0, a.vM)()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
      EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new u