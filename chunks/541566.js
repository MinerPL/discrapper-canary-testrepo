"use strict";
n.r(t);
var a, s = n("442837"),
  l = n("570140"),
  i = n("267642"),
  r = n("981631");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {};
u = {
  lastDismissedGracePeriods: {},
  isVisible: {}
};
class d extends(a = s.default.PersistedStore) {
  initialize(e) {
    null != e && (u = e)
  }
  getLastDismissedGracePeriodForGuild(e) {
    return null != u.lastDismissedGracePeriods[e] ? u.lastDismissedGracePeriods[e] : null
  }
  isVisible(e) {
    return null != e && null != u.isVisible[e] && u.isVisible[e]
  }
  getState() {
    return u
  }
}
o(d, "displayName", "GuildBoostingGracePeriodNoticeStore"), o(d, "persistKey", "PremiumGuildGracePeriodNoticeStore"), o(d, "migrations", [e => ({
  ...e,
  lastDismissedGracePeriods: null != e ? {
    ...e.lastDismissedGracePeriods
  } : {},
  isVisible: {}
})]), t.default = new d(l.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e, a = null != u.lastDismissedGracePeriods[t] ? u.lastDismissedGracePeriods[t] : null, s = null != a && Date.now() - a <= r.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY, l = null != n && !s && (0, i.isInGracePeriod)(n, t);
    u = {
      ...u,
      isVisible: {
        ...u.isVisible,
        [t]: l
      }
    }
  },
  BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    u = {
      ...u,
      lastDismissedGracePeriods: {
        ...u.lastDismissedGracePeriods,
        [t]: Date.now()
      },
      isVisible: {
        ...u.isVisible,
        [t]: !1
      }
    }
  }
})