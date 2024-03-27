"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var l = n("446674"),
  i = n("913144"),
  u = n("449008"),
  a = n("42203"),
  r = n("341542"),
  d = n("923959"),
  s = n("49111");
let o = {},
  c = 0;

function E() {
  c += 1
}

function f(e) {
  if (null == o[e]) return !1;
  delete o[e]
}
class C extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(a.default, r.default), this.removeChangeListener(E), this.addChangeListener(E), o = null != e ? e : {}
  }
  getState() {
    return o
  }
  isCollapsed(e) {
    return null != e && "null" !== e && !!o[e] && o[e]
  }
  getCollapsedCategories() {
    return o
  }
  get version() {
    return c
  }
}
C.displayName = "CategoryCollapseStore", C.persistKey = "collapsedCategories";
var _ = new C(i.default, {
  CONNECTION_OPEN: function(e) {
    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
      if (null != t.channel_overrides)
        for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e, n = new Set(t.map(e => e.guild_id).filter(u.isNotNullish));
    for (let e in o) {
      let t = a.default.getChannel(e);
      null != t && null != t.guild_id && n.has(t.guild_id) && delete o[t.id]
    }
    for (let e of t)
      for (let t of e.channel_overrides) t.collapsed && (o[t.channel_id] = !0)
  },
  CATEGORY_COLLAPSE: function(e) {
    let {
      id: t
    } = e;
    if (o[t]) return !1;
    o[t] = !0
  },
  CATEGORY_EXPAND: function(e) {
    let {
      id: t
    } = e;
    return f(t)
  },
  CATEGORY_COLLAPSE_ALL: function(e) {
    let {
      guildId: t
    } = e;
    d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      "null" !== t.id && (o[t.id] = !0)
    })
  },
  CATEGORY_EXPAND_ALL: function(e) {
    let {
      guildId: t
    } = e;
    d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
      let {
        channel: t
      } = e;
      delete o[t.id]
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e;
    return f(t)
  }
})