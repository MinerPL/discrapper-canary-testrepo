"use strict";
n.r(t), n("222007"), n("424973");
var a = n("446674"),
  s = n("913144"),
  l = n("271938"),
  i = n("42203"),
  r = n("305961"),
  o = n("299039"),
  u = n("188631");
let d = {};

function c(e, t) {
  let n = d[e];
  return !(null == n || n.has(t)) && (d[e] = new Set(n.add(t)), !0)
}
class f extends a.default.PersistedStore {
  initialize(e) {
    this.waitFor(l.default, r.default), d = {}, null != e && o.default.keys(e).forEach(t => {
      let n = e[t];
      null != n && "function" == typeof n[Symbol.iterator] && (d[t] = new Set(n))
    })
  }
  getProgress(e) {
    return d[e]
  }
  hasProgress(e) {
    let t = d[e];
    return null != t && !t.has(u.Steps.DISMISSED)
  }
  getState() {
    return d
  }
}
f.displayName = "GuildProgressStore", f.persistKey = "GuildProgressStore", new f(s.default, {
  CONNECTION_OPEN: function() {
    let e = [];
    o.default.keys(d).forEach(t => {
      d[t].has(u.Steps.COMPLETED) && e.push(t)
    }), e.forEach(e => c(e, u.Steps.DISMISSED))
  },
  GUILD_PROGRESS_INITIALIZE: function(e) {
    let {
      guildId: t
    } = e;
    null == d[t] && (d[t] = new Set), !d[t].has(u.Steps.COMPLETED) && d[t].delete(u.Steps.DISMISSED)
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function(e) {
    let {
      guildId: t
    } = e;
    if (null == d[t]) return !1;
    d[t] = new Set(d[t].add(u.Steps.COMPLETED))
  },
  GUILD_PROGRESS_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return c(t, u.Steps.DISMISSED)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: {
        id: t,
        member_count: n
      }
    } = e, a = r.default.getGuild(t);
    if (null == a) return !1;
    a.ownerId === l.default.getId() && null != d[a.id] && (null != a.icon && d[a.id].add(u.Steps.AVATAR), n > 1 && d[a.id].add(u.Steps.INVITE))
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    return null != t && null != t.guild_id && null != d[t.guild_id] && c(t.guild_id, u.Steps.CHANNEL)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) null != e && null != e.guild_id && null != d[e.guild_id] && !1 !== c(e.guild_id, u.Steps.CHANNEL) && (n = !0);
    return n
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function(e) {
    let {
      guild: t
    } = e;
    return null != t && null != t.id && null != d[t.id] && null != t.icon && c(t.id, u.Steps.AVATAR)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: a
    } = e, s = i.default.getChannel(n);
    return (null === (t = a.author) || void 0 === t ? void 0 : t.id) === l.default.getId() && null != s && null != d[s.guild_id] && c(s.guild_id, u.Steps.MESSAGE)
  },
  GUILD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      memberCount: n
    } = e;
    return null != d[t] && !!(n > 1) && c(t, u.Steps.INVITE)
  }
})