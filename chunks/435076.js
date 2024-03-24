"use strict";
s.r(t), s.d(t, {
  updateWelcomeMessage: function() {
    return T
  },
  addNewMemberAction: function() {
    return S
  },
  updateNewMemberAction: function() {
    return f
  },
  deleteNewMemberAction: function() {
    return m
  },
  reorderNewMemberActions: function() {
    return N
  },
  updateNewMemberActionIconData: function() {
    return g
  },
  updateNewMemberActionIcon: function() {
    return h
  },
  addResourceChannel: function() {
    return C
  },
  updateResourceChannel: function() {
    return R
  },
  deleteResourceChannel: function() {
    return x
  },
  reorderResourceChannels: function() {
    return L
  },
  updateResourceChannelIcon: function() {
    return O
  },
  saveHomeSettings: function() {
    return A
  },
  enableHomeSettings: function() {
    return p
  },
  dismissSuggestedChannels: function() {
    return D
  },
  resetHomeSettings: function() {
    return v
  }
}), s("881410");
var a = s("917351"),
  l = s.n(a),
  n = s("872717"),
  i = s("913144"),
  r = s("404118"),
  o = s("698882"),
  d = s("129092"),
  u = s("233706"),
  c = s("599110"),
  E = s("642807"),
  _ = s("49111"),
  I = s("782340");

function T(e) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
    welcomeMessage: e
  })
}

function S(e) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
    action: e
  })
}

function f(e, t) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
    channelId: e,
    action: t
  })
}

function m(e) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
    channelId: e
  })
}

function N(e) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
    actions: e
  })
}

function g(e, t) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_ICON_DATA",
    channelId: e,
    iconData: t
  })
}
async function h(e, t, s, a) {
  if (!a) return Promise.resolve();
  try {
    let a = await n.HTTP.patch({
        url: _.Endpoints.NEW_MEMBER_ACTION(e, t),
        body: {
          icon: s
        },
        oldFormErrors: !0
      }),
      l = (0, d.newMemberActionFromServer)(a.body);
    return i.default.dispatch({
      type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
      guildId: e,
      action: l
    }), Promise.resolve(a.body)
  } catch (t) {
    var o;
    let e = l.flatMap(null !== (o = t.body) && void 0 !== o ? o : {}, e => e);
    return r.default.show({
      title: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({
        errorMessage: e.join(", ")
      })
    }), Promise.reject()
  }
}

function C(e) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
    resourceChannel: e
  })
}

function R(e, t) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
    channelId: e,
    resourceChannel: t
  })
}

function x(e) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
    resourceChannelId: e
  })
}

function L(e) {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
    resourceChannels: e
  })
}
async function O(e, t, s) {
  try {
    let a = await n.HTTP.put({
        url: _.Endpoints.RESOURCE_CHANNEL(e, t),
        body: {
          icon: s
        },
        oldFormErrors: !0
      }),
      l = (0, d.resourceChannelFromServer)(a.body);
    return i.default.dispatch({
      type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
      guildId: e,
      resourceChannel: l
    }), a.body
  } catch (t) {
    var a;
    let e = l.flatMap(null !== (a = t.body) && void 0 !== a ? a : {}, e => e);
    r.default.show({
      title: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({
        errorMessage: e.join(", ")
      })
    })
  }
}

function A(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!s && !E.default.hasChanges()) return Promise.resolve();
  let {
    serverGuideOptional: a
  } = (0, u.getOptionalOnboardingHomeAdminExperiment)(e), l = !a || o.default.getEnabled(e);
  return l && !(0, d.isSettingsValid)(t) ? (r.default.show({
    title: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
    body: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_REASON
  }), Promise.reject()) : (!a && null != t && (t.enabled = !0), M(e, t))
}

function p(e, t) {
  let s = o.default.getSettings(e);
  if (t && !(0, d.isSettingsValid)(s)) {
    r.default.show({
      title: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_REASON
    });
    return
  }
  return i.default.dispatch({
    type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
    guildId: e,
    enabled: t
  }), M(e, {
    ...s,
    enabled: t
  })
}
async function M(e, t) {
  var s, a, o, u, E, T, S, f, m;
  i.default.dispatch({
    type: "GUILD_HOME_SETTINGS_UPDATE_START"
  });
  try {
    let l = await n.HTTP.put({
        url: _.Endpoints.GUILD_HOME_SETTINGS(e),
        body: (0, d.settingsToServer)(e, t),
        oldFormErrors: !0
      }),
      r = (0, d.settingsFromServer)(l.body);
    return i.default.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
      guildId: e,
      homeSettings: r
    }), c.default.track(_.AnalyticEvents.GUILD_SETTINGS_GUIDE_UPDATED, {
      guild_id: e,
      welcome_message_author_id: (null !== (u = null == r ? void 0 : null === (s = r.welcomeMessage) || void 0 === s ? void 0 : s.authorIds) && void 0 !== u ? u : [])[0],
      welcome_message_length: null !== (E = null == r ? void 0 : null === (o = r.welcomeMessage) || void 0 === o ? void 0 : null === (a = o.message) || void 0 === a ? void 0 : a.length) && void 0 !== E ? E : 0,
      member_action_channel_ids: (null !== (T = null == r ? void 0 : r.newMemberActions) && void 0 !== T ? T : []).map(e => e.channelId),
      member_action_channel_actions: (null !== (S = null == r ? void 0 : r.newMemberActions) && void 0 !== S ? S : []).map(e => e.actionType),
      resource_channel_ids: (null !== (f = null == r ? void 0 : r.resourceChannels) && void 0 !== f ? f : []).map(e => e.channelId),
      enabled: null == r ? void 0 : r.enabled
    }), l.body
  } catch (t) {
    let e = l.flatMap(null !== (m = t.body) && void 0 !== m ? m : {}, e => e);
    i.default.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_FAIL"
    }), r.default.show({
      title: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({
        errorMessage: e.join(", ")
      })
    })
  }
}

function D(e, t) {
  null != e && i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
    guildId: e,
    channelIds: t
  })
}

function v() {
  i.default.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET"
  })
}