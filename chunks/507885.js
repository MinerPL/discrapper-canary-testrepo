"use strict";
n.r(t), n("47120");
var a, s = n("442837"),
  l = n("570140"),
  i = n("701488");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = new Set,
  u = new Set([i.WhatsNewSection.DISCORD_TURNS_8]);
class d extends(a = s.default.PersistedStore) {
  initialize(e) {
    null != e && (Array.isArray(e.acknowledged) && (o = new Set(e.acknowledged)), Array.isArray(e.opened) && (u = new Set(e.opened)))
  }
  getState() {
    return {
      acknowledged: o,
      opened: u
    }
  }
  getOpened() {
    return u
  }
  getAcknowledged() {
    return o
  }
  isOpened(e) {
    return u.has(e)
  }
  isAcknowledged(e) {
    return o.has(e)
  }
}
r(d, "displayName", "ActivitiesWhatsNewStore"), r(d, "persistKey", "ActivitiesWhatsNewStore"), t.default = new d(l.default, {
  ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION: function(e) {
    let {
      section: t
    } = e;
    o.add(t)
  },
  ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION: function(e) {
    let {
      section: t
    } = e;
    u.add(t)
  }
})