"use strict";
n.d(t, {
  HH: function() {
    return R
  },
  O9: function() {
    return T
  },
  Vu: function() {
    return f
  },
  W4: function() {
    return c
  },
  Wz: function() {
    return E
  },
  Z3: function() {
    return I
  },
  ZR: function() {
    return d
  },
  am: function() {
    return S
  },
  av: function() {
    return g
  },
  cq: function() {
    return A
  },
  j: function() {
    return o
  },
  k3: function() {
    return v
  },
  kb: function() {
    return D
  },
  n: function() {
    return h
  },
  oi: function() {
    return s
  },
  pw: function() {
    return p
  },
  rk: function() {
    return C
  },
  tB: function() {
    return O
  },
  uo: function() {
    return L
  },
  vD: function() {
    return m
  },
  x3: function() {
    return N
  }
});
var i, r, s, o, a = n(592125),
  l = n(823379),
  u = n(700785),
  _ = n(981631);
let d = 7,
  c = 300,
  E = 7,
  I = 60,
  T = 5,
  h = 1,
  S = 30,
  f = 200,
  N = 7;

function A(e) {
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

function m(e) {
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

function O(e) {
  if (null == e) return null;
  let {
    welcome_message: t,
    new_member_actions: n,
    resource_channels: i,
    enabled: r
  } = e, s = {
    authorIds: t.author_ids,
    message: t.message
  }, o = n.filter(e => (0, l.lm)(a.Z.getChannel(e.channel_id))).map(A);
  return {
    welcomeMessage: s,
    newMemberActions: o,
    resourceChannels: i.filter(e => (0, l.lm)(a.Z.getChannel(e.channel_id))).map(m),
    enabled: r
  }
}

function R(e, t) {
  var n, i;
  if (null == t) return null;
  let {
    welcomeMessage: r,
    newMemberActions: s,
    resourceChannels: o,
    enabled: u
  } = t, _ = {
    author_ids: null !== (n = null == r ? void 0 : r.authorIds) && void 0 !== n ? n : [],
    message: null !== (i = null == r ? void 0 : r.message) && void 0 !== i ? i : ""
  }, d = (null != s ? s : []).filter(e => (0, l.lm)(a.Z.getChannel(e.channelId))).map(e => {
    var t, n, i, r, s, o, a;
    return {
      channel_id: e.channelId,
      action_type: e.actionType,
      title: e.title,
      description: e.description,
      emoji: {
        id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
        name: null !== (s = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== s ? s : void 0,
        animated: null !== (o = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== o ? o : void 0
      },
      icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
    }
  });
  return {
    guild_id: e,
    welcome_message: _,
    new_member_actions: d,
    resource_channels: (null != o ? o : []).filter(e => (0, l.lm)(a.Z.getChannel(e.channelId))).map(e => {
      var t, n, i, r, s, o, a;
      return {
        channel_id: e.channelId,
        title: e.title,
        description: e.description,
        emoji: {
          id: null !== (r = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : void 0,
          name: null !== (s = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== s ? s : void 0,
          animated: null !== (o = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== o ? o : void 0
        },
        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
      }
    }),
    enabled: u
  }
}(i = s || (s = {}))[i.VIEW = 0] = "VIEW", i[i.CHAT = 1] = "CHAT";
let C = e => {
  if (null == e) return null;
  let t = {};
  for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
  return t
};

function p(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
}

function g(e) {
  return null == e || !!p(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
}

function L(e) {
  var t, n;
  return null != e && (!!g(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < d) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
}

function v(e) {
  return e.type === _.d4z.GUILD_TEXT && !u.Uu(_.Plq.SEND_MESSAGES, e) && u.Uu(_.Plq.VIEW_CHANNEL, e)
}

function D(e) {
  switch (e.type) {
    case _.d4z.GUILD_TEXT:
    case _.d4z.GUILD_ANNOUNCEMENT:
    case _.d4z.GUILD_FORUM:
    case _.d4z.GUILD_MEDIA:
      return u.Uu(_.Plq.VIEW_CHANNEL, e);
    default:
      return !1
  }
}(r = o || (o = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.TODO = 1] = "TODO", r[r.RESOURCE = 2] = "RESOURCE"