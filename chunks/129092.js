"use strict";
t.r(n), t.d(n, {
  WELCOME_MESSAGE_MIN_LENGTH: function() {
    return d
  },
  WELCOME_MESSAGE_MAX_LENGTH: function() {
    return s
  },
  NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
    return c
  },
  NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
    return f
  },
  NEW_MEMBER_ACTION_MAX: function() {
    return E
  },
  RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
    return _
  },
  RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
    return m
  },
  RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
    return M
  },
  RESOURCE_CHANNEL_MAX: function() {
    return T
  },
  NewMemberActionTypes: function() {
    return l
  },
  newMemberActionFromServer: function() {
    return h
  },
  resourceChannelFromServer: function() {
    return C
  },
  settingsFromServer: function() {
    return A
  },
  settingsToServer: function() {
    return S
  },
  actionsFromServer: function() {
    return v
  },
  isWelcomeMessageEmpty: function() {
    return N
  },
  isSettingsEmpty: function() {
    return p
  },
  isSettingsValid: function() {
    return g
  },
  isChannelValidForResourceChannel: function() {
    return I
  },
  isChannelValidForNewMemberAction: function() {
    return y
  }
});
var i, l, u = t("42203"),
  r = t("449008"),
  a = t("991170"),
  o = t("49111");
let d = 7,
  s = 300,
  c = 7,
  f = 60,
  E = 5,
  _ = 1,
  m = 30,
  M = 200,
  T = 7;

function h(e) {
  var n;
  return {
    channelId: e.channel_id,
    actionType: e.action_type,
    title: e.title,
    description: e.description,
    emoji: null == e.emoji ? null : {
      id: e.emoji.id,
      name: e.emoji.name,
      animated: e.emoji.animated
    },
    icon: null !== (n = e.icon) && void 0 !== n ? n : null
  }
}

function C(e) {
  var n, t;
  return {
    channelId: e.channel_id,
    title: e.title,
    description: null !== (n = e.description) && void 0 !== n ? n : "",
    emoji: null == e.emoji ? null : {
      id: e.emoji.id,
      name: e.emoji.name,
      animated: e.emoji.animated
    },
    icon: null !== (t = e.icon) && void 0 !== t ? t : null
  }
}

function A(e) {
  if (null == e) return null;
  let {
    welcome_message: n,
    new_member_actions: t,
    resource_channels: i,
    enabled: l
  } = e, a = {
    authorIds: n.author_ids,
    message: n.message
  }, o = t.filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channel_id))).map(h), d = i.filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channel_id))).map(C);
  return {
    welcomeMessage: a,
    newMemberActions: o,
    resourceChannels: d,
    enabled: l
  }
}

function S(e, n) {
  var t, i;
  if (null == n) return null;
  let {
    welcomeMessage: l,
    newMemberActions: a,
    resourceChannels: o,
    enabled: d
  } = n, s = {
    author_ids: null !== (t = null == l ? void 0 : l.authorIds) && void 0 !== t ? t : [],
    message: null !== (i = null == l ? void 0 : l.message) && void 0 !== i ? i : ""
  }, c = (null != a ? a : []).filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId))).map(e => {
    var n, t, i, l, u, r, a;
    return {
      channel_id: e.channelId,
      action_type: e.actionType,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (l = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : void 0,
        name: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== u ? u : void 0,
        animated: null !== (r = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== r ? r : void 0
      },
      icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
    }
  }), f = (null != o ? o : []).filter(e => (0, r.isNotNullish)(u.default.getChannel(e.channelId))).map(e => {
    var n, t, i, l, u, r, a;
    return {
      channel_id: e.channelId,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (l = null === (n = e.emoji) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : void 0,
        name: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.name) && void 0 !== u ? u : void 0,
        animated: null !== (r = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== r ? r : void 0
      },
      icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
    }
  });
  return {
    guild_id: e,
    welcome_message: s,
    new_member_actions: c,
    resource_channels: f,
    enabled: d
  }
}(i = l || (l = {}))[i.VIEW = 0] = "VIEW", i[i.CHAT = 1] = "CHAT";
let v = e => {
  if (null == e) return null;
  let n = {};
  for (let t in e.channel_actions) n[t] = e.channel_actions[t].completed;
  return n
};

function N(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
}

function p(e) {
  return null == e || !!N(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
}

function g(e) {
  var n, t;
  return null != e && (!!p(e) || (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.message) != null && !(e.welcomeMessage.message.length < d) && (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
}

function I(e) {
  return e.type === o.ChannelTypes.GUILD_TEXT && !a.canEveryoneRole(o.Permissions.SEND_MESSAGES, e) && a.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e)
}

function y(e) {
  switch (e.type) {
    case o.ChannelTypes.GUILD_TEXT:
    case o.ChannelTypes.GUILD_ANNOUNCEMENT:
    case o.ChannelTypes.GUILD_FORUM:
    case o.ChannelTypes.GUILD_MEDIA:
      return a.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e);
    default:
      return !1
  }
}