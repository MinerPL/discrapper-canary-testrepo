"use strict";
n.r(t), n.d(t, {
  WELCOME_MESSAGE_MIN_LENGTH: function() {
    return s
  },
  WELCOME_MESSAGE_MAX_LENGTH: function() {
    return o
  },
  NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
    return E
  },
  NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
    return c
  },
  NEW_MEMBER_ACTION_MAX: function() {
    return _
  },
  RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
    return f
  },
  RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
    return N
  },
  RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
    return T
  },
  RESOURCE_CHANNEL_MAX: function() {
    return h
  },
  NewMemberActionTypes: function() {
    return u
  },
  newMemberActionFromServer: function() {
    return S
  },
  resourceChannelFromServer: function() {
    return C
  },
  settingsFromServer: function() {
    return m
  },
  settingsToServer: function() {
    return v
  },
  actionsFromServer: function() {
    return I
  },
  isWelcomeMessageEmpty: function() {
    return g
  },
  isSettingsEmpty: function() {
    return M
  },
  isSettingsValid: function() {
    return D
  },
  isChannelValidForResourceChannel: function() {
    return L
  },
  isChannelValidForNewMemberAction: function() {
    return A
  }
});
var l, u, i = n("42203"),
  r = n("449008"),
  d = n("991170"),
  a = n("49111");
let s = 7,
  o = 300,
  E = 7,
  c = 60,
  _ = 5,
  f = 1,
  N = 30,
  T = 200,
  h = 7;

function S(e) {
  var t;
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
    icon: null !== (t = e.icon) && void 0 !== t ? t : null
  }
}

function C(e) {
  var t, n;
  return {
    channelId: e.channel_id,
    title: e.title,
    description: null !== (t = e.description) && void 0 !== t ? t : "",
    emoji: null == e.emoji ? null : {
      id: e.emoji.id,
      name: e.emoji.name,
      animated: e.emoji.animated
    },
    icon: null !== (n = e.icon) && void 0 !== n ? n : null
  }
}

function m(e) {
  if (null == e) return null;
  let {
    welcome_message: t,
    new_member_actions: n,
    resource_channels: l,
    enabled: u
  } = e, d = {
    authorIds: t.author_ids,
    message: t.message
  }, a = n.filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channel_id))).map(S), s = l.filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channel_id))).map(C);
  return {
    welcomeMessage: d,
    newMemberActions: a,
    resourceChannels: s,
    enabled: u
  }
}

function v(e, t) {
  var n, l;
  if (null == t) return null;
  let {
    welcomeMessage: u,
    newMemberActions: d,
    resourceChannels: a,
    enabled: s
  } = t, o = {
    author_ids: null !== (n = null == u ? void 0 : u.authorIds) && void 0 !== n ? n : [],
    message: null !== (l = null == u ? void 0 : u.message) && void 0 !== l ? l : ""
  }, E = (null != d ? d : []).filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId))).map(e => {
    var t, n, l, u, i, r, d;
    return {
      channel_id: e.channelId,
      action_type: e.actionType,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
        name: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : void 0,
        animated: null !== (r = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== r ? r : void 0
      },
      icon: null !== (d = e.icon) && void 0 !== d ? d : void 0
    }
  }), c = (null != a ? a : []).filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId))).map(e => {
    var t, n, l, u, i, r, d;
    return {
      channel_id: e.channelId,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
        name: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : void 0,
        animated: null !== (r = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== r ? r : void 0
      },
      icon: null !== (d = e.icon) && void 0 !== d ? d : void 0
    }
  });
  return {
    guild_id: e,
    welcome_message: o,
    new_member_actions: E,
    resource_channels: c,
    enabled: s
  }
}(l = u || (u = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
let I = e => {
  if (null == e) return null;
  let t = {};
  for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
  return t
};

function g(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
}

function M(e) {
  return null == e || !!g(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
}

function D(e) {
  var t, n;
  return null != e && (!!M(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < s) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
}

function L(e) {
  return e.type === a.ChannelTypes.GUILD_TEXT && !d.canEveryoneRole(a.Permissions.SEND_MESSAGES, e) && d.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e)
}

function A(e) {
  switch (e.type) {
    case a.ChannelTypes.GUILD_TEXT:
    case a.ChannelTypes.GUILD_ANNOUNCEMENT:
    case a.ChannelTypes.GUILD_FORUM:
    case a.ChannelTypes.GUILD_MEDIA:
      return d.canEveryoneRole(a.Permissions.VIEW_CHANNEL, e);
    default:
      return !1
  }
}