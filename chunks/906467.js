"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(168232),
  a = n(430824),
  l = n(594174),
  u = n(987338),
  _ = n(48541);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = "production" === _.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === _.C.STAGING;

function E() {
  c = (0, o.QI)(l.default.getCurrentUser())
}
class I extends(i = r.ZP.Store) {
  initialize() {
    this.waitFor(l.default, a.Z), Object.defineProperties(this, {
      isDeveloper: {
        configurable: !1,
        get: () => c,
        set: () => {}
      }
    }), E(), setTimeout(() => Object.freeze(this))
  }
  getExperimentDescriptor() {
    return c ? {
      type: "developer",
      name: "discord_dev_testing",
      revision: 1,
      override: !0,
      bucket: u.NZ.TREATMENT_1
    } : null
  }
  constructor(...e) {
    super(...e), d(this, "isDeveloper", !1)
  }
}
d(I, "displayName", "DeveloperExperimentStore"), t.Z = new I(s.Z, {
  CONNECTION_OPEN: E,
  OVERLAY_INITIALIZE: E,
  CURRENT_USER_UPDATE: E
})