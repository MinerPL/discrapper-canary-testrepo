let r;
var i, a, s, o, l = n(569048),
  u = n.n(l),
  c = n(167006),
  d = n.n(c),
  _ = n(989872),
  E = n.n(_),
  f = n(442837),
  h = n(570140),
  p = n(758449),
  m = n(245335);
let I = {},
  T = {},
  g = {},
  S = {},
  A = !1,
  N = !1,
  v = !1;
class O extends(o = f.ZP.Store) {
  getInvite(e) {
var t, n;
let {
  targetType: r,
  targetUserId: i,
  targetApplicationId: a
} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
return r === m.Iq.STREAM && null != i ? null === (t = T[e]) || void 0 === t ? void 0 : t[i] : r === m.Iq.EMBEDDED_APPLICATION && null != a ? null === (n = g[e]) || void 0 === n ? void 0 : n[a] : I[e];
  }
  getFriendInvite() {
return r;
  }
  getFriendInvitesFetching() {
return A;
  }
  canRevokeFriendInvite() {
return null != r && !N && !v;
  }
}
s = 'InstantInviteStore', (a = 'displayName') in(i = O) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new O(h.Z, {
  CONNECTION_OPEN: function() {
I = {}, T = {}, g = {}, S = {}, r = null, N = !1, v = !1, A = !1;
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
delete I[t.id], delete T[t.id], delete g[t.id];
  },
  FRIEND_INVITE_CREATE_SUCCESS: function(e) {
var t;
S[e.invite.code] = p.Z.createFromServer(e.invite), r = null !== (t = u()(d()(E()(Object.values(S), 'createdAt')))) && void 0 !== t ? t : null, v = !1;
  },
  FRIEND_INVITE_CREATE_FAILURE: function() {
v = !1;
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
var t;
null != e.invites && e.invites.forEach(e => {
  null != S[e.code] && delete S[e.code];
}), r = null !== (t = u()(d()(E()(Object.values(S), 'createdAt')))) && void 0 !== t ? t : null, N = !1;
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
let {
  channelId: t,
  invite: n
} = e, r = p.Z.createFromServer(n);
r.targetType === m.Iq.STREAM && null != r.targetUser ? (null == T[t] && (T[t] = {}), T[t][String(r.targetUser.id)] = r) : r.targetType === m.Iq.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == g[t] && (g[t] = {}), g[t][r.targetApplication.id] = r) : I[t] = r;
  },
  INSTANT_INVITE_CREATE_FAILURE: function(e) {
let {
  channelId: t
} = e;
I[t] = null;
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
let {
  channelId: t
} = e;
I[t] = null;
  },
  FRIEND_INVITE_REVOKE_REQUEST: function() {
N = !0;
  },
  FRIEND_INVITE_CREATE_REQUEST: function() {
v = !0;
  },
  FRIEND_INVITES_FETCH_REQUEST: function() {
A = !0;
  },
  FRIEND_INVITES_FETCH_RESPONSE: function(e) {
var t;
S = {}, e.invites.forEach(e => {
  S[e.code] = p.Z.createFromServer(e);
}), r = null !== (t = u()(d()(E()(Object.values(S), 'createdAt')))) && void 0 !== t ? t : null, A = !1;
  },
  INSTANT_INVITE_CLEAR: function(e) {
delete I[e.channelId];
  }
});