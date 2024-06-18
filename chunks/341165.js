"use strict";
let i;
var r, s, o, a, l = n(569048),
  u = n.n(l),
  _ = n(167006),
  d = n.n(_),
  c = n(989872),
  E = n.n(c),
  I = n(442837),
  T = n(570140),
  h = n(758449),
  S = n(245335);
let f = {},
  N = {},
  A = {},
  m = {},
  O = !1,
  R = !1,
  C = !1;
class p extends(a = I.ZP.Store) {
  getInvite(e) {
    var t, n;
    let {
      targetType: i,
      targetUserId: r,
      targetApplicationId: s
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return i === S.Iq.STREAM && null != r ? null === (t = N[e]) || void 0 === t ? void 0 : t[r] : i === S.Iq.EMBEDDED_APPLICATION && null != s ? null === (n = A[e]) || void 0 === n ? void 0 : n[s] : f[e]
  }
  getFriendInvite() {
    return i
  }
  getFriendInvitesFetching() {
    return O
  }
  canRevokeFriendInvite() {
    return null != i && !R && !C
  }
}
o = "InstantInviteStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new p(T.Z, {
  CONNECTION_OPEN: function() {
    f = {}, N = {}, A = {}, m = {}, i = null, R = !1, C = !1, O = !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    delete f[t.id], delete N[t.id], delete A[t.id]
  },
  FRIEND_INVITE_CREATE_SUCCESS: function(e) {
    var t;
    m[e.invite.code] = h.Z.createFromServer(e.invite), i = null !== (t = u()(d()(E()(Object.values(m), "createdAt")))) && void 0 !== t ? t : null, C = !1
  },
  FRIEND_INVITE_CREATE_FAILURE: function() {
    C = !1
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
    var t;
    null != e.invites && e.invites.forEach(e => {
      null != m[e.code] && delete m[e.code]
    }), i = null !== (t = u()(d()(E()(Object.values(m), "createdAt")))) && void 0 !== t ? t : null, R = !1
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    let {
      channelId: t,
      invite: n
    } = e, i = h.Z.createFromServer(n);
    i.targetType === S.Iq.STREAM && null != i.targetUser ? (null == N[t] && (N[t] = {}), N[t][String(i.targetUser.id)] = i) : i.targetType === S.Iq.EMBEDDED_APPLICATION && null != i.targetApplication ? (null == A[t] && (A[t] = {}), A[t][i.targetApplication.id] = i) : f[t] = i
  },
  INSTANT_INVITE_CREATE_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    f[t] = null
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
    let {
      channelId: t
    } = e;
    f[t] = null
  },
  FRIEND_INVITE_REVOKE_REQUEST: function() {
    R = !0
  },
  FRIEND_INVITE_CREATE_REQUEST: function() {
    C = !0
  },
  FRIEND_INVITES_FETCH_REQUEST: function() {
    O = !0
  },
  FRIEND_INVITES_FETCH_RESPONSE: function(e) {
    var t;
    m = {}, e.invites.forEach(e => {
      m[e.code] = h.Z.createFromServer(e)
    }), i = null !== (t = u()(d()(E()(Object.values(m), "createdAt")))) && void 0 !== t ? t : null, O = !1
  },
  INSTANT_INVITE_CLEAR: function(e) {
    delete f[e.channelId]
  }
})