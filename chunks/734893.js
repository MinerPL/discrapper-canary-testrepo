n.d(t, {
  HH: function() {
return N;
  },
  O9: function() {
return h;
  },
  Vu: function() {
return I;
  },
  W4: function() {
return _;
  },
  Wz: function() {
return E;
  },
  Z3: function() {
return f;
  },
  ZR: function() {
return d;
  },
  am: function() {
return m;
  },
  av: function() {
return R;
  },
  cq: function() {
return g;
  },
  j: function() {
return o;
  },
  k3: function() {
return y;
  },
  kb: function() {
return D;
  },
  n: function() {
return p;
  },
  oi: function() {
return a;
  },
  pw: function() {
return O;
  },
  rk: function() {
return v;
  },
  tB: function() {
return A;
  },
  uo: function() {
return C;
  },
  vD: function() {
return S;
  },
  x3: function() {
return T;
  }
});
var r, i, a, o, s = n(592125),
  l = n(823379),
  u = n(700785),
  c = n(981631);
let d = 7,
  _ = 300,
  E = 7,
  f = 60,
  h = 5,
  p = 1,
  m = 30,
  I = 200,
  T = 7;

function g(e) {
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
  };
}

function S(e) {
  var t, n;
  return {
channelId: e.channel_id,
title: e.title,
description: null !== (t = e.description) && void 0 !== t ? t : '',
emoji: null == e.emoji ? null : {
  id: e.emoji.id,
  name: e.emoji.name,
  animated: e.emoji.animated
},
icon: null !== (n = e.icon) && void 0 !== n ? n : null
  };
}

function A(e) {
  if (null == e)
return null;
  let {
welcome_message: t,
new_member_actions: n,
resource_channels: r,
enabled: i
  } = e, a = {
authorIds: t.author_ids,
message: t.message
  }, o = n.filter(e => (0, l.lm)(s.Z.getChannel(e.channel_id))).map(g);
  return {
welcomeMessage: a,
newMemberActions: o,
resourceChannels: r.filter(e => (0, l.lm)(s.Z.getChannel(e.channel_id))).map(S),
enabled: i
  };
}

function N(e, t) {
  var n, r;
  if (null == t)
return null;
  let {
welcomeMessage: i,
newMemberActions: a,
resourceChannels: o,
enabled: u
  } = t, c = {
author_ids: null !== (n = null == i ? void 0 : i.authorIds) && void 0 !== n ? n : [],
message: null !== (r = null == i ? void 0 : i.message) && void 0 !== r ? r : ''
  }, d = (null != a ? a : []).filter(e => (0, l.lm)(s.Z.getChannel(e.channelId))).map(e => {
var t, n, r, i, a, o, s;
return {
  channel_id: e.channelId,
  action_type: e.actionType,
  title: e.title,
  description: e.description,
  emoji: {
    id: null !== (i = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : void 0,
    name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
    animated: null !== (o = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== o ? o : void 0
  },
  icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
};
  });
  return {
guild_id: e,
welcome_message: c,
new_member_actions: d,
resource_channels: (null != o ? o : []).filter(e => (0, l.lm)(s.Z.getChannel(e.channelId))).map(e => {
  var t, n, r, i, a, o, s;
  return {
    channel_id: e.channelId,
    title: e.title,
    description: e.description,
    emoji: {
      id: null !== (i = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : void 0,
      name: null !== (a = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : void 0,
      animated: null !== (o = null === (r = e.emoji) || void 0 === r ? void 0 : r.animated) && void 0 !== o ? o : void 0
    },
    icon: null !== (s = e.icon) && void 0 !== s ? s : void 0
  };
}),
enabled: u
  };
}
(r = a || (a = {}))[r.VIEW = 0] = 'VIEW', r[r.CHAT = 1] = 'CHAT';
let v = e => {
  if (null == e)
return null;
  let t = {};
  for (let n in e.channel_actions)
t[n] = e.channel_actions[n].completed;
  return t;
};

function O(e) {
  return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0;
}

function R(e) {
  return null == e || !!O(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0;
}

function C(e) {
  var t, n;
  return null != e && (!!R(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < d) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0);
}

function y(e) {
  return e.type === c.d4z.GUILD_TEXT && !u.Uu(c.Plq.SEND_MESSAGES, e) && u.Uu(c.Plq.VIEW_CHANNEL, e);
}

function D(e) {
  switch (e.type) {
case c.d4z.GUILD_TEXT:
case c.d4z.GUILD_ANNOUNCEMENT:
case c.d4z.GUILD_FORUM:
case c.d4z.GUILD_MEDIA:
  return u.Uu(c.Plq.VIEW_CHANNEL, e);
default:
  return !1;
  }
}
(i = o || (o = {}))[i.DEFAULT = 0] = 'DEFAULT', i[i.TODO = 1] = 'TODO', i[i.RESOURCE = 2] = 'RESOURCE';