"use strict";
n.r(t);
var l, a = n("442837"),
  s = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = {};
class o extends(l = a.default.PersistedStore) {
  initialize(e) {
    null != e && (r = e)
  }
  getState() {
    return r
  }
  getCountForGuild(e) {
    return r[e]
  }
}
i(o, "displayName", "GuildBoostingProgressBarPersistedStore"), i(o, "persistKey", "PremiumGuildProgressBarPersistedStore"), t.default = new o(s.default, {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
    let {
      guildId: t,
      premiumCount: n
    } = e;
    r = {
      ...r,
      [t]: n
    }
  }
})