"use strict";
n.r(t), n("47120");
var i, s = n("442837"),
  l = n("570140");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = new Set;
class d extends(i = s.default.PersistedStore) {
  initialize(e) {
    r.clear(), null == e || e.guilds.forEach(e => r.add(e))
  }
  isCollapsed(e) {
    return r.has(e)
  }
  getState() {
    return {
      guilds: r
    }
  }
}
a(d, "displayName", "RecentlyActiveCollapseStore"), a(d, "persistKey", "RecentlyActiveCollapseStore"), t.default = new d(l.default, {
  SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
    let {
      guildId: t,
      collapsed: n
    } = e;
    n ? r.add(t) : r.delete(t)
  }
})