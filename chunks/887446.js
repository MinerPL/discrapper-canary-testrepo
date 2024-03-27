"use strict";
let i, s, l, a;
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var u = n("748820"),
  r = n("446674"),
  d = n("913144"),
  o = n("724210"),
  c = n("515631");
let h = {};

function E(e) {
  return {
    guildId: e,
    sessionId: (0, u.v4)()
  }
}

function f(e) {
  null != l && l.guildId === e ? (s = l, l = void 0) : s = E(e)
}
class I extends r.default.Store {
  getSavedScrollPosition(e) {
    return h[e]
  }
  getHomeSessionId(e) {
    return null != s && s.guildId === e ? s.sessionId : null != l && l.guildId === e ? l.sessionId : void 0
  }
  getHomeSessionSource(e) {
    return null != a && a.guildId === e ? a.source : c.GuildHomeLandingSource.ORGANIC
  }
}
I.displayName = "GuildHomeStore";
var _ = new I(d.default, {
  CONNECTION_OPEN: function() {
    h = {}
  },
  GUILD_FEED_FETCH_FRESH_START: function(e) {
    let {
      guildId: t
    } = e;
    delete h[t]
  },
  GUILD_HOME_SET_SCROLL_POSITION: function(e) {
    let {
      guildId: t,
      scrollPosition: n
    } = e;
    h[t] = n
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, o.isStaticChannelRoute)(n) || !(0, o.isGuildHomeChannel)(n)) {
      i = void 0, s = void 0, l = void 0, a = void 0;
      return
    }
    let u = (0, o.buildGuildStaticChannelId)(n, t);
    if (i === u || null != s && s.guildId === t) return !1;
    f(t), i = u, null != a && a.guildId !== t && (a = void 0)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t || null == n || !(0, o.isStaticChannelRoute)(n) || !(0, o.isGuildHomeChannel)(n)) {
      l = void 0;
      return
    }
    if (null != l && l.guildId === t) return !1;
    l = E(t)
  },
  GUILD_HOME_SET_SOURCE: function(e) {
    let {
      source: t,
      guildId: n
    } = e;
    a = {
      guildId: n,
      source: t
    }
  },
  GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
    let {
      guildId: t
    } = e;
    if (null != s && s.guildId === t) return !1;
    f(t)
  },
  LOGOUT: function() {
    s = void 0, l = void 0, a = void 0
  }
})