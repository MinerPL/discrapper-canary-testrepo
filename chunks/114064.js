"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(168232);
let _ = {
    perksDemos: null,
    activated: {},
    lastFetched: null,
    overrides: {}
  },
  d = _;
class c extends(o = a.ZP.Store) {
  getPerksDemos() {
    return d.perksDemos
  }
  getActivated() {
    return d.activated
  }
  shouldFetch() {
    return null == d.lastFetched || Date.now() > d.lastFetched + 864e5
  }
  shouldActivate(e) {
    var t;
    return (null === (t = d.perksDemos) || void 0 === t ? void 0 : t[e]) === !0
  }
  overrides() {
    return d.overrides
  }
}
s = "PerksDemosStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(l.Z, {
  PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: function(e) {
    let {
      demos: t
    } = e;
    d.perksDemos = t, d.lastFetched = Date.now()
  },
  PREMIUM_PERKS_DEMOS_FETCH_FAILURE: function() {
    d.perksDemos = _.perksDemos, d.lastFetched = null
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: function(e) {
    let {
      perkType: t
    } = e;
    d.activated[t] = !0
  },
  PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: function(e) {
    let {
      perkType: t
    } = e;
    d.activated[t] = !1
  },
  PREMIUM_PERKS_DEMO_COMPLETE: function(e) {
    let {
      perkType: t
    } = e;
    null != d.perksDemos && !0 === d.activated[t] && (d.perksDemos[t] = !1)
  },
  LOGOUT: function() {
    d = _
  },
  PREMIUM_PERKS_DEMO_OVERRIDE: function(e) {
    let {
      user: t,
      perkType: n,
      available: i,
      activateSuccess: r
    } = e;
    void 0 !== t && (0, u.QI)(t) && (d.overrides[n] = {
      available: i,
      activateSuccess: r
    }, null == d.perksDemos && (d.perksDemos = {}), d.perksDemos[n] = i || !1, d.activated[n] = !1, d.lastFetched = null)
  }
})