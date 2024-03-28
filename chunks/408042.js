"use strict";
n.r(t), n("47120"), n("653041");
var a, s = n("442837"),
  l = n("570140"),
  i = n("314897"),
  r = n("592125"),
  o = n("430824"),
  u = n("709054"),
  d = n("231873");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = {};

function E(e, t) {
  let n = f[e];
  return !(null == n || n.has(t)) && (f[e] = new Set(n.add(t)), !0)
}
class h extends(a = s.default.PersistedStore) {
  initialize(e) {
    this.waitFor(i.default, o.default), f = {}, null != e && u.default.keys(e).forEach(t => {
      let n = e[t];
      null != n && "function" == typeof n[Symbol.iterator] && (f[t] = new Set(n))
    })
  }
  getProgress(e) {
    return f[e]
  }
  hasProgress(e) {
    let t = f[e];
    return null != t && !t.has(d.Steps.DISMISSED)
  }
  getState() {
    return f
  }
}
c(h, "displayName", "GuildProgressStore"), c(h, "persistKey", "GuildProgressStore"), new h(l.default, {
  CONNECTION_OPEN: function() {
    let e = [];
    u.default.keys(f).forEach(t => {
      f[t].has(d.Steps.COMPLETED) && e.push(t)
    }), e.forEach(e => E(e, d.Steps.DISMISSED))
  },
  GUILD_PROGRESS_INITIALIZE: function(e) {
    let {
      guildId: t
    } = e;
    null == f[t] && (f[t] = new Set), !f[t].has(d.Steps.COMPLETED) && f[t].delete(d.Steps.DISMISSED)
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    if (null == f[t]) return !1;
    f[t] = new Set(f[t].add(d.Steps.COMPLETED))
  },
  GUILD_PROGRESS_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return E(t, d.Steps.DISMISSED)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: {
        id: t,
        member_count: n
      }
    } = e, a = o.default.getGuild(t);
    if (null == a) return !1;
    a.ownerId === i.default.getId() && null != f[a.id] && (null != a.icon && f[a.id].add(d.Steps.AVATAR), n > 1 && f[a.id].add(d.Steps.INVITE))
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    return null != t && null != t.guild_id && null != f[t.guild_id] && E(t.guild_id, d.Steps.CHANNEL)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) null != e && null != e.guild_id && null != f[e.guild_id] && !1 !== E(e.guild_id, d.Steps.CHANNEL) && (n = !0);
    return n
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function(e) {
    let {
      guild: t
    } = e;
    return null != t && null != t.id && null != f[t.id] && null != t.icon && E(t.id, d.Steps.AVATAR)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: a
    } = e, s = r.default.getChannel(n);
    return (null === (t = a.author) || void 0 === t ? void 0 : t.id) === i.default.getId() && null != s && null != f[s.guild_id] && E(s.guild_id, d.Steps.MESSAGE)
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      memberCount: n
    } = e;
    return null != f[t] && !!(n > 1) && E(t, d.Steps.INVITE)
  }
})