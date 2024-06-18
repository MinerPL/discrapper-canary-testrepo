"use strict";
t.d(s, {
  Hr: function() {
    return S
  },
  Hz: function() {
    return R
  },
  To: function() {
    return p
  },
  XG: function() {
    return C
  },
  _N: function() {
    return T
  },
  ad: function() {
    return g
  },
  bj: function() {
    return v
  },
  el: function() {
    return m
  },
  hS: function() {
    return h
  },
  lq: function() {
    return L
  },
  mM: function() {
    return O
  },
  oo: function() {
    return A
  },
  q6: function() {
    return f
  },
  r2: function() {
    return x
  },
  vR: function() {
    return N
  }
}), t(390547);
var n = t(392711),
  i = t.n(n),
  l = t(544891),
  a = t(570140),
  r = t(668781),
  o = t(563534),
  c = t(734893),
  d = t(621923),
  u = t(626135),
  E = t(969632),
  _ = t(981631),
  I = t(689938);

function T(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
    welcomeMessage: e
  })
}

function N(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
    action: e
  })
}

function m(e, s) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
    channelId: e,
    action: s
  })
}

function S(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
    channelId: e
  })
}

function h(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
    actions: e
  })
}
async function g(e, s, t, n) {
  if (!n) return Promise.resolve();
  try {
    let n = await l.tn.patch({
        url: _.ANM.NEW_MEMBER_ACTION(e, s),
        body: {
          icon: t
        },
        oldFormErrors: !0
      }),
      i = (0, c.cq)(n.body);
    return a.Z.dispatch({
      type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
      guildId: e,
      action: i
    }), Promise.resolve(n.body)
  } catch (s) {
    var o;
    let e = i().flatMap(null !== (o = s.body) && void 0 !== o ? o : {}, e => e);
    return r.Z.show({
      title: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({
        errorMessage: e.join(", ")
      })
    }), Promise.reject()
  }
}

function x(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
    resourceChannel: e
  })
}

function C(e, s) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
    channelId: e,
    resourceChannel: s
  })
}

function R(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
    resourceChannelId: e
  })
}

function L(e) {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
    resourceChannels: e
  })
}
async function O(e, s, t) {
  try {
    let n = await l.tn.put({
        url: _.ANM.RESOURCE_CHANNEL(e, s),
        body: {
          icon: t
        },
        oldFormErrors: !0
      }),
      i = (0, c.vD)(n.body);
    return a.Z.dispatch({
      type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
      guildId: e,
      resourceChannel: i
    }), n.body
  } catch (s) {
    var n;
    let e = i().flatMap(null !== (n = s.body) && void 0 !== n ? n : {}, e => e);
    r.Z.show({
      title: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({
        errorMessage: e.join(", ")
      })
    })
  }
}

function A(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!t && !E.Z.hasChanges()) return Promise.resolve();
  let {
    serverGuideOptional: n
  } = (0, d.FJ)(e);
  return (!n || o.Z.getEnabled(e)) && !(0, c.uo)(s) ? (r.Z.show({
    title: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
    body: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_REASON
  }), Promise.reject()) : (!n && null != s && (s.enabled = !0), M(e, s))
}

function p(e, s) {
  let t = o.Z.getSettings(e);
  if (s && !(0, c.uo)(t)) {
    r.Z.show({
      title: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_REASON
    });
    return
  }
  return a.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
    guildId: e,
    enabled: s
  }), M(e, {
    ...t,
    enabled: s
  })
}
async function M(e, s) {
  var t, n, o, d, E, T, N, m, S;
  a.Z.dispatch({
    type: "GUILD_HOME_SETTINGS_UPDATE_START"
  });
  try {
    let i = await l.tn.put({
        url: _.ANM.GUILD_HOME_SETTINGS(e),
        body: (0, c.HH)(e, s),
        oldFormErrors: !0
      }),
      r = (0, c.tB)(i.body);
    return a.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
      guildId: e,
      homeSettings: r
    }), u.default.track(_.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
      guild_id: e,
      welcome_message_author_id: (null !== (d = null == r ? void 0 : null === (t = r.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) && void 0 !== d ? d : [])[0],
      welcome_message_length: null !== (E = null == r ? void 0 : null === (o = r.welcomeMessage) || void 0 === o ? void 0 : null === (n = o.message) || void 0 === n ? void 0 : n.length) && void 0 !== E ? E : 0,
      member_action_channel_ids: (null !== (T = null == r ? void 0 : r.newMemberActions) && void 0 !== T ? T : []).map(e => e.channelId),
      member_action_channel_actions: (null !== (N = null == r ? void 0 : r.newMemberActions) && void 0 !== N ? N : []).map(e => e.actionType),
      resource_channel_ids: (null !== (m = null == r ? void 0 : r.resourceChannels) && void 0 !== m ? m : []).map(e => e.channelId),
      enabled: null == r ? void 0 : r.enabled
    }), i.body
  } catch (s) {
    let e = i().flatMap(null !== (S = s.body) && void 0 !== S ? S : {}, e => e);
    a.Z.dispatch({
      type: "GUILD_HOME_SETTINGS_UPDATE_FAIL"
    }), r.Z.show({
      title: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
      body: I.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({
        errorMessage: e.join(", ")
      })
    })
  }
}

function f(e, s) {
  null != e && a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
    guildId: e,
    channelIds: s
  })
}

function v() {
  a.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET"
  })
}