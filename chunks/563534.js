"use strict";
n.d(t, {
  P: function() {
    return u
  }
}), n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = {
    enabled: !1
  },
  _ = [],
  d = {},
  c = new Set,
  E = {};

function I(e) {
  var t;
  let n = null === (t = d[e]) || void 0 === t ? void 0 : t.newMemberActions;
  return null == n ? null : (E[e] = n, E[e])
}

function T(e) {
  let {
    homeSettings: t,
    guildId: n
  } = e;
  null != n && (null == t && (d[n] = u), d[n] = t, I(n), c.delete(n))
}
class h extends(i = a.ZP.Store) {
  getSettings(e) {
    var t;
    return null == e ? null : null !== (t = d[e]) && void 0 !== t ? t : u
  }
  getNewMemberActions(e) {
    var t;
    return null == e || (null === (t = this.getSettings(e)) || void 0 === t ? void 0 : t.newMemberActions) == null ? null : null == E[e] ? I(e) : E[e]
  }
  getActionForChannel(e, t) {
    var n;
    let i = this.getSettings(e);
    return null == i ? null : (null !== (n = i.newMemberActions) && void 0 !== n ? n : []).find(e => e.channelId === t)
  }
  hasMemberAction(e, t) {
    return null != this.getActionForChannel(e, t)
  }
  getResourceChannels(e) {
    var t, n;
    return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.resourceChannels) && void 0 !== n ? n : _
  }
  getResourceForChannel(e, t) {
    if (null == e) return null;
    let n = this.getResourceChannels(e);
    return n === _ ? null : n.find(e => e.channelId === t)
  }
  getIsLoading(e) {
    return null != e && c.has(e)
  }
  getWelcomeMessage(e) {
    var t;
    if (null != e) return null === (t = d[e]) || void 0 === t ? void 0 : t.welcomeMessage
  }
  hasSettings(e) {
    return null != e && null != d[e]
  }
  getEnabled(e) {
    var t, n;
    return null != e && null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
  }
  getNewMemberAction(e, t) {
    var n, i, r;
    return null == e || null == t ? null : null !== (r = null === (i = d[e]) || void 0 === i ? void 0 : null === (n = i.newMemberActions) || void 0 === n ? void 0 : n.find(e => e.channelId === t)) && void 0 !== r ? r : null
  }
}
o = "GuildOnboardingHomeSettingsStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new h(l.Z, {
  GUILD_HOME_SETTINGS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    c.add(t)
  },
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: T,
  GUILD_HOME_SETTINGS_FETCH_FAIL: function(e) {
    let {
      guildId: t
    } = e;
    c.delete(t)
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: T,
  GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function(e) {
    let {
      guildId: t,
      enabled: n
    } = e, i = d[t];
    if (null == i) return !1;
    i.enabled = n
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    var t;
    let {
      guildId: n,
      resourceChannel: i
    } = e, r = d[n];
    if (null == r) return !1;
    r.resourceChannels = null !== (t = r.resourceChannels) && void 0 !== t ? t : [];
    let s = r.resourceChannels.findIndex(e => e.channelId === i.channelId);
    return -1 !== s && (r.resourceChannels[s] = {
      ...i
    }, !0)
  },
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    var t;
    let {
      guildId: n,
      action: i
    } = e, r = d[n];
    if (null == r) return !1;
    r.newMemberActions = null !== (t = r.newMemberActions) && void 0 !== t ? t : [];
    let s = r.newMemberActions.findIndex(e => e.channelId === i.channelId);
    return -1 !== s && (r.newMemberActions[s] = {
      ...i
    }, !0)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    if (null == d[t.id]) return !1;
    delete d[t.id], delete E[t.id]
  }
})