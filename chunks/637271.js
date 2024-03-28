"use strict";
n.r(t);
var a, l = n("442837"),
  s = n("570140"),
  i = n("592125"),
  r = n("176505");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {},
  d = {};
class c extends(a = l.default.PersistedStore) {
  initialize(e) {
    var t;
    u = null !== (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) && void 0 !== t ? t : {}
  }
  getState() {
    return {
      selectedResourceChannelIdByGuildId: u
    }
  }
  getSelectedResourceChannelId(e) {
    return null == e ? null : u[e]
  }
  getHomeNavigationChannelId(e) {
    var t;
    return null == e ? null : null !== (t = u[e]) && void 0 !== t ? t : d[e]
  }
}
o(c, "displayName", "GuildOnboardingHomeNavigationStore"), o(c, "persistKey", "GuildOnboardingHomeNavigationStore"), t.default = new c(s.default, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (null == n || t === r.StaticChannelRoute.GUILD_HOME) return;
    let a = i.default.getChannel(t),
      l = u[n],
      s = d[n];
    !((null == a ? void 0 : a.isThread()) && (null == a ? void 0 : a.parent_id) != null && [s, l].includes(null == a ? void 0 : a.parent_id)) && (t !== l && delete u[n], t !== s && delete d[n])
  },
  SELECT_HOME_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    null == t ? delete d[n] : u[n] = t, delete d[n]
  },
  SELECT_NEW_MEMBER_ACTION_CHANNEL: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    delete u[n], d[n] = t
  }
})