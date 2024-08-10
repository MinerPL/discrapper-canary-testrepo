n(47120), n(653041), n(733860), n(724458);
var i, a = n(876215),
  s = n(442837),
  r = n(570140),
  l = n(146282),
  o = n(561308),
  c = n(353926),
  d = n(786761),
  u = n(314897),
  _ = n(592125),
  h = n(375954),
  E = n(306680),
  m = n(699516),
  I = n(9156),
  g = n(626135),
  p = n(70956),
  T = n(709054),
  S = n(761080),
  f = n(584925),
  C = n(207205),
  N = n(981631),
  A = n(206583);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let Z = [],
  L = null,
  O = [],
  R = [],
  x = {},
  b = {},
  P = {},
  M = {},
  D = {},
  y = {},
  j = {},
  U = {},
  G = new Set(),
  k = 0,
  w = !1,
  B = !1,
  H = !1,
  V = null,
  F = null,
  Y = 0,
  W = [],
  z = [],
  K = 0;

function q(e) {
  var t, n;
  let i = new Set(e.map(e => e.id)),
s = null !== (n = null === (t = l.Z.getFeed(A.YN.GLOBAL_FEED)) || void 0 === t ? void 0 : t.entries) && void 0 !== n ? n : [];
  return s.sort((e, t) => e.rank - t.rank), s.forEach((t, n) => {
if (i.has(t.content.id) || t.content.content_type !== a.s.PLAYED_GAME && t.content.content_type !== a.s.CUSTOM_STATUS && t.content.content_type !== a.s.TOP_GAME || (0, o.n2)(t.content))
  return;
null == M[t.content.id] && (M[t.content.id] = {
  id: t.content.id,
  type: S.Rr.ACTIVITY,
  score: 50,
  activity: t.content
});
let s = {
  id: t.content.id,
  type: S.Rr.ACTIVITY,
  score: 50,
  data: {
    user_id: t.content.author_id,
    content_id: t.content.id
  }
};
P[s.id] = s, (n + 1) * 5 < e.length ? e.splice((n + 1) * 5, 0, s) : e.push(s);
  }), e;
}

function Q(e) {
  if (O.length > 0 && (Z = O, O = [], R = []), k++, null != e)
W = e.newUnread, z = e.newRead;
  else {
let [e, t] = X(Z);
W = e, z = t;
  }
  if (null != x.load_id && L !== x.load_id) {
var t;
g.default.track(N.rMx.FEED_LOADED, {
  ...x,
  unread_feed_item_ids: W.map(e => e.id),
  read_feed_item_ids: z.map(e => e.id),
  home_session_id: 'gravity'
}), L = null !== (t = x.load_id) && void 0 !== t ? t : null, x = {};
  }
  K = 0, (0, C.em)([
...W,
...z
  ], 0, S.xy);
}

function X(e) {
  let t = [],
n = [],
i = [];
  return e.forEach(e => {
let a = null != f.Z.getReadTimestamp(e.id);
e.type === S.Rr.MESSAGE ? a = a || !(0, C.$U)(e.data.channel_id, e.data.message_id) : e.type === S.Rr.SUMMARY && (a = a || !(0, C.$U)(e.data.channel_id, e.data.summary_id)), a ? t.push(e) : e.type === S.Rr.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
  }), [
[
  ...i,
  ...n
],
t.sort((e, t) => (0, C.Rm)(e.id, t.id))
  ];
}

function J(e, t) {
  let n = [],
i = new Set(Z.map(e => e.id));
  for (let a of e) {
if (!i.has(a.id) && null == f.Z.getReadTimestamp(a.id) && (a.type !== S.Rr.MESSAGE || !!(0, C.$U)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t) && (a.type !== S.Rr.SUMMARY || !!(0, C.$U)(a.data.channel_id, a.data.summary_id) && a.data.channel_id !== t))
  n.push(a);
  }
  return n;
}

function $(e, t) {
  if ((0, C.jv)(t) === C.aL.MUTED)
Z = Z.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.channel_id !== e), W = W.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.channel_id !== e), z = z.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.channel_id !== e), O = O.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.channel_id !== e), R = R.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.channel_id !== e);
}

function ee(e, t) {
  if ((0, C.jv)(t) === C.aL.MUTED)
Z = Z.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.guild_id !== e), W = W.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.guild_id !== e), z = z.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.guild_id !== e), O = O.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.guild_id !== e), R = R.filter(t => t.type !== S.Rr.MESSAGE && t.type !== S.Rr.SUMMARY || t.data.guild_id !== e);
}

function et(e) {
  let {
type: t,
messageId: n,
userId: i,
emoji: a,
reactionType: s
  } = e, r = M[n];
  if (null == r || r.type !== S.Rr.MESSAGE)
return !1;
  let l = u.default.getId() === i;
  'MESSAGE_REACTION_ADD' === t ? r.message = r.message.addReaction(a, l, e.colors, s) : r.message = r.message.removeReaction(a, l, s);
}

function en(e) {
  let {
channelId: t
  } = e, n = [], i = [];
  W.forEach((e, a) => {
a > K && (e.type === S.Rr.MESSAGE || e.type === S.Rr.SUMMARY) && e.data.channel_id === t ? n.push(e) : i.push(e);
  });
  let a = B,
[s, r] = X(O);
  if (R = J(s, t), B = H ? R.length >= S.Lb : i.length > 0, 0 === n.length && a === B)
return !1;
  if (0 !== n.length)
W = i, z = [
  ...z,
  ...n
];
}
class ei extends(i = s.ZP.PersistedStore) {
  initialize(e) {
if (this.waitFor(h.Z, _.Z, E.ZP, c.Z, I.ZP, u.default, f.Z, l.Z), null != e) {
  var t, n, i, a, s;
  Z = null !== (t = e.dehydratedItems) && void 0 !== t ? t : [], b = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}, e.dehydratedItems.forEach(e => {
    P[e.id] = e;
  }), y = null !== (i = e.customGuildScores) && void 0 !== i ? i : {}, j = null !== (a = e.customChannelScoresByGuild) && void 0 !== a ? a : {}, Y = null !== (s = e.numOpens) && void 0 !== s ? s : 0;
}
  }
  getVersion() {
return k;
  }
  getDehydratedItems() {
return Z;
  }
  getNewDehydratedItems() {
return O;
  }
  getDehydratedItem(e) {
var t;
return null !== (t = P[e]) && void 0 !== t ? t : null;
  }
  getHydratedItem(e) {
var t;
return null !== (t = M[e]) && void 0 !== t ? t : null;
  }
  getMessage(e) {
let t = M[e];
return null == t || t.type !== S.Rr.MESSAGE ? null : t.message;
  }
  getHydratedItems() {
return M;
  }
  getUnreadDisplayItems() {
return W;
  }
  getNewUnreadDehydratedItems() {
return R;
  }
  getReadDisplayItems() {
return z;
  }
  getNextIndexToHydrate() {
return K;
  }
  getMissingItems() {
return D;
  }
  getCustomChannelScore(e, t) {
return null == j[e] || null == j[e][t] ? C.aL.UNKNOWN : (0, C.jv)(j[e][t]);
  }
  getCustomGuildScore(e) {
var t;
return null !== (t = y[e]) && void 0 !== t ? t : 0;
  }
  getCustomGuildScores() {
return y;
  }
  getNumLocallyAddedItems() {
return Object.keys(b).length;
  }
  hasNewContent() {
return B;
  }
  getSelectedSummary(e) {
return null == V || V.channelId !== e ? null : V;
  }
  isGravitySelectedChannel(e) {
return null != F && F === e;
  }
  getLoadId() {
return L;
  }
  hasOpenedEnoughTimes() {
return 5 === Y;
  }
  hasOpened() {
return H;
  }
  getState() {
return {
  dehydratedItems: Z,
  locallyAddedItems: b,
  numOpens: Y,
  customGuildScores: y,
  customChannelScoresByGuild: j
};
  }
}
v(ei, 'displayName', 'GravityStore'), v(ei, 'persistKey', 'GravityStore'), t.Z = new ei(r.Z, {
  POST_CONNECTION_OPEN: function() {
if (Z.length > 0) {
  let [e, t] = X(Z);
  W = e, z = t, K = 0, (0, C.em)([
    ...W,
    ...z
  ], 0, S.xy);
}
  },
  LOGOUT: function() {
return !1;
  },
  MESSAGE_CREATE: function(e) {
var t, n;
let {
  message: i,
  guildId: a,
  channelId: s
} = e;
if (!(0, C.rK)('GravityStore-handleMessageCreate') || null == a || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === u.default.getId() || m.Z.isBlocked(null === (n = i.author) || void 0 === n ? void 0 : n.id) || a in y && y[a] < 0 || null != j[a] && s in j[a] && null != j[a][s] && j[a][s] < 0)
  return !1;
let r = _.Z.getChannel(s);
if (null == r || r.type !== N.d4z.GUILD_ANNOUNCEMENT || I.ZP.isChannelMuted(a, s))
  return !1;
let l = h.Z.getMessage(i.channel_id, i.id);
null == l && (l = (0, d.e5)(i));
let o = l.mentionEveryone;
if (i.id in P)
  return !1;
let c = {
  type: S.Rr.MESSAGE,
  id: i.id,
  score: Date.now(),
  data: {
    channel_id: i.channel_id,
    guild_id: a,
    message_id: i.id,
    channel_type: N.d4z.GUILD_ANNOUNCEMENT,
    has_mention: o
  }
};
o && (null == U[s] && (U[s] = 0), U[s]++, G.add(a)), null == (O = 0 === O.length ? [...Z] : [...O]).find(e => e.id === i.id) && (O = [
  c,
  ...O
], b[i.id] = c), (0, C.$U)(s, i.id) && (R = [
  c,
  ...R
]), R.length >= S.Lb && k > 0 && (B = !0), P[i.id] = c, M[i.id] = {
  ...c,
  message: l
};
  },
  LOAD_GRAVITY_DEHYDRATED: function(e) {
let {
  items: t,
  loadId: n,
  startTime: i
} = e;
O = t.filter(e => S.zd.has(e.type)), ! function() {
  let e = new Set();
  O.forEach(t => {
    e.add(t.id);
  }), Object.values(b).forEach(t => {
    S.zd.has(t.type) && (e.has(t.id) || T.default.age(t.id) > p.Z.Millis.DAY || t.type === S.Rr.MESSAGE && I.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id) ? delete b[t.id] : !e.has(t.id) && (O.unshift(t), e.add(t.id)));
  }), O.forEach(e => {
    P[e.id] = e, e.type === S.Rr.CUSTOM_STATUS && (m.Z.isBlocked(e.data.user_id) ? D[e.id] = !0 : M[e.id] = (0, C.mV)(e));
  });
}(), O = q(O), x = {
  load_id: n,
  load_time_millis: Date.now() - i,
  feed_item_ids: O.map(e => e.id)
};
let [a, s] = X(O);
if (R = J(a), H && 0 !== k) {
  let e = R.length > S.Lb;
  B = e, e && (0, C.em)([
    ...a,
    ...s
  ], 0, S.xy);
} else
  k = 0, a.length > 0 && !H && (B = !0, w = !0), Q({
    newUnread: a,
    newRead: s
  });
  },
  LOAD_GRAVITY_HYDRATED: function(e) {
let {
  messageItems: t,
  summaryItems: n,
  activityItems: i,
  requestMessageItems: a,
  requestSummaryItems: s,
  requestActivityItems: r,
  startingIndex: l,
  endingIndex: o
} = e;
M = {
  ...M
};
let c = t.reduce((e, t) => (e[t.message.id] = t, e), {}),
  u = n.reduce((e, t) => (e[t.id] = t, e), {}),
  _ = i.reduce((e, t) => (e[t.id] = t, e), {});
a.forEach(e => {
  let t = c[e.message_id];
  if (null == t) {
    D[e.message_id] = !0;
    return;
  }
  let n = P[e.message_id];
  if (null == n) {
    D[e.message_id] = !0;
    return;
  }
  null != h.Z.getMessage(t.channel_id, t.message.id) ? M[t.message.id] = {
    ...n,
    message: h.Z.getMessage(t.channel_id, t.message.id)
  } : M[t.message.id] = {
    ...n,
    message: (0, d.e5)(t.message)
  };
}), s.forEach(e => {
  let t = u[e.summary_id];
  if (null == t) {
    D[e.summary_id] = !0;
    return;
  }
  let n = P[e.summary_id];
  if (null == n || n.type !== S.Rr.SUMMARY || t.messages.length < 3) {
    D[e.summary_id] = !0;
    return;
  }
  M[t.id] = {
    ...n,
    summary: (0, C.wV)(t, n.data.guild_id)
  };
}), r.forEach(e => {
  let t = _[e.content_id];
  if (null == t) {
    D[e.content_id] = !0;
    return;
  }
  let n = P[e.content_id];
  if (null == n) {
    D[e.content_id] = !0;
    return;
  }
  M[t.id] = {
    ...n,
    activity: t
  };
}), l === K && (K = o);
  },
  LOAD_GRAVITY_CUSTOM_SCORES: function(e) {
let {
  scores: t
} = e;
for (let e of t)
  for (let t of (y[e.guild_id] = e.guild_score, ee(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores)))
    null == j[e.guild_id] && (j[e.guild_id] = {}), j[e.guild_id][t] = e.custom_channel_scores[t], $(t, e.custom_channel_scores[t]);
y = {
  ...y
}, j = {
  ...j
};
  },
  GRAVITY_CUSTOM_SCORES_UPDATED: function(e) {
let {
  channelScores: t,
  guildId: n,
  guildScore: i
} = e;
null != i && (y[n] = i, ee(n, i), y = {
  ...y
}), null == t || t.forEach(e => {
  let {
    channelId: t,
    score: i
  } = e;
  null == j[n] && (j[n] = {}), j[n][t] = i, $(t, i), j = {
    ...j
  };
});
  },
  RELOAD_GRAVITY: function() {
if (0 === O.length)
  return !1;
Q(), B = !1;
  },
  GRAVITY_TAB_OPENED: function() {
H = !0, w && (w = !1, B = !1), Y < 5 && Y++;
  },
  GRAVITY_FEEDBACK_GIVEN: function() {
Y = 6;
  },
  SET_GRAVITY_SELECTED_SUMMARY: function(e) {
if (null == e.summaryId) {
  V = null;
  return;
}
let t = M[e.summaryId];
if (null == t || t.type !== S.Rr.SUMMARY) {
  V = null;
  return;
}
V = t.summary;
  },
  SET_GRAVITY_SELECTED_CHANNEL: function(e) {
F = e.channelId;
  },
  MESSAGE_REACTION_ADD: et,
  MESSAGE_REACTION_ADD_MANY: function(e) {
let {
  messageId: t,
  reactions: n
} = e, i = M[t];
if (null == i || i.type !== S.Rr.MESSAGE)
  return !1;
let a = u.default.getId();
i.message = i.message.addReactionBatch(n, a);
  },
  MESSAGE_REACTION_REMOVE: et,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
let {
  messageId: t
} = e, n = M[t];
if (null == n || n.type !== S.Rr.MESSAGE)
  return !1;
n.message = n.message.set('reactions', []);
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
let {
  messageId: t,
  emoji: n
} = e, i = M[t];
if (null == i || i.type !== S.Rr.MESSAGE)
  return !1;
i.message = i.message.removeReactionsForEmoji(n);
  },
  CHANNEL_ACK: en,
  MESSAGE_ACK: en,
  CONTENT_INVENTORY_SET_FEED: function(e) {
let {
  feedId: t
} = e;
if (t !== A.YN.GLOBAL_FEED)
  return !1;
if (!H) {
  let [e, t] = X(Z = q(Z));
  W = e, z = t;
}
let [n, i] = X(O = q(O = 0 === O.length ? [...Z] : O));
R = J(n);
  }
});