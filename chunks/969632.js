"use strict";
t(47120);
var n, i = t(392711),
  l = t.n(i),
  a = t(442837),
  r = t(570140),
  o = t(563534),
  c = t(999382);

function d(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let u = {
    enabled: !1
  },
  E = null,
  _ = Object.assign({}, u),
  I = !1,
  T = {};

function N() {
  (function() {
    E = null, _ = Object.assign({}, u), I = !1
  })(), E = c.Z.getGuildId(), _ = l().cloneDeep(Object.assign({}, o.Z.getSettings(E)))
}

function m(e, s) {
  if (null == _.newMemberActions) return !1;
  let t = _.newMemberActions.findIndex(s => s.channelId === e);
  if (t < 0) return !1;
  _.newMemberActions[t] = {
    ...s
  }, _.newMemberActions = [..._.newMemberActions]
}

function S(e, s) {
  if (null == _.resourceChannels) return !1;
  let t = _.resourceChannels.findIndex(s => s.channelId === e);
  if (t < 0) return !1;
  _.resourceChannels[t] = {
    ...s
  }, _.resourceChannels = [..._.resourceChannels]
}

function h() {
  I = !1, _ = l().cloneDeep(Object.assign({}, o.Z.getSettings(E)))
}
class g extends(n = a.ZP.PersistedStore) {
  initialize(e) {
    null != e && (T = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z)
  }
  getState() {
    return {
      dismissedSuggestedChannelIdsByGuildId: T
    }
  }
  getSettings() {
    return null != _ ? _ : u
  }
  hasChanges() {
    return null != E && !l().isEqual(l().omit(_, "newMemberActions"), l().omit(o.Z.getSettings(E), "newMemberActions"))
  }
  getSubmitting() {
    return I
  }
  getDismissedSuggestedChannelIds(e) {
    var s;
    return null == e ? [] : null !== (s = T[e]) && void 0 !== s ? s : []
  }
  getResourceChannel(e) {
    var s;
    if (null == e) return null;
    let t = null === (s = _.resourceChannels) || void 0 === s ? void 0 : s.find(s => s.channelId === e);
    return null == t ? null : t
  }
  getNewMemberAction(e) {
    var s;
    if (null == e) return null;
    let t = null === (s = _.newMemberActions) || void 0 === s ? void 0 : s.find(s => s.channelId === e);
    return null == t ? null : t
  }
}
d(g, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), d(g, "persistKey", "GuildSettingsOnboardingHomeSettingsStore"), s.Z = new g(r.Z, {
  GUILD_SETTINGS_INIT: N,
  GUILD_SETTINGS_SET_SECTION: N,
  GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: N,
  GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
    _ = l().cloneDeep(Object.assign({}, o.Z.getSettings(E)))
  },
  GUILD_HOME_SETTINGS_UPDATE_START: function() {
    I = !0
  },
  GUILD_HOME_SETTINGS_UPDATE_SUCCESS: h,
  GUILD_HOME_SETTINGS_UPDATE_FAIL: h,
  GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
    let {
      action: s
    } = e;
    return m(s.channelId, s)
  },
  GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
    let {
      resourceChannel: s
    } = e;
    S(s.channelId, s)
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
    let {
      welcomeMessage: s
    } = e;
    if (null == s) _.welcomeMessage = void 0;
    else {
      var t, n, i, l, a, r;
      _.welcomeMessage = {
        authorIds: null !== (l = null !== (i = s.authorIds) && void 0 !== i ? i : null === (t = _.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) && void 0 !== l ? l : [],
        message: null !== (r = null !== (a = s.message) && void 0 !== a ? a : null === (n = _.welcomeMessage) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : ""
      }
    }
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: s,
      action: t
    } = e;
    return m(s, t)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
    var s;
    let {
      action: t
    } = e;
    _.newMemberActions = null !== (s = _.newMemberActions) && void 0 !== s ? s : [], _.newMemberActions = [..._.newMemberActions, t]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
    let {
      channelId: s
    } = e;
    if (null == _.newMemberActions) return !1;
    _.newMemberActions = [..._.newMemberActions.filter(e => e.channelId !== s)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
    let {
      actions: s
    } = e;
    _.newMemberActions = s
  },
  GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
    let {
      channelId: s,
      resourceChannel: t
    } = e;
    S(s, t)
  },
  GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
    var s;
    let {
      resourceChannel: t
    } = e;
    _.resourceChannels = (null !== (s = _.resourceChannels) && void 0 !== s ? s : []).filter(e => e.channelId !== t.channelId), _.resourceChannels = [..._.resourceChannels, t]
  },
  GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannelId: s
    } = e;
    if (null == _.resourceChannels) return !1;
    _.resourceChannels = [..._.resourceChannels.filter(e => e.channelId !== s)]
  },
  GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
    let {
      resourceChannels: s
    } = e;
    _.resourceChannels = s
  },
  GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
    var s;
    let {
      guildId: t,
      channelIds: n
    } = e;
    T[t] = [...null !== (s = T[t]) && void 0 !== s ? s : [], ...n]
  }
})