"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("446674"),
  s = n("913144"),
  l = n("954016");
let i = new Set,
  r = new Set([l.WhatsNewSection.DISCORD_TURNS_8]);
class o extends a.default.PersistedStore {
  initialize(e) {
    null != e && (Array.isArray(e.acknowledged) && (i = new Set(e.acknowledged)), Array.isArray(e.opened) && (r = new Set(e.opened)))
  }
  getState() {
    return {
      acknowledged: i,
      opened: r
    }
  }
  getOpened() {
    return r
  }
  getAcknowledged() {
    return i
  }
  isOpened(e) {
    return r.has(e)
  }
  isAcknowledged(e) {
    return i.has(e)
  }
}
o.displayName = "ActivitiesWhatsNewStore", o.persistKey = "ActivitiesWhatsNewStore";
var u = new o(s.default, {
  ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION: function(e) {
    let {
      section: t
    } = e;
    i.add(t)
  },
  ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION: function(e) {
    let {
      section: t
    } = e;
    r.add(t)
  }
})