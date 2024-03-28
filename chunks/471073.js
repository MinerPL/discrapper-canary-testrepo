"use strict";
let l, a, u, i, o;
n.r(t), n.d(t, {
  InteractionModalState: function() {
    return E
  }
});
var s, d, r, c, E, p, T = n("512722"),
  f = n.n(T),
  m = n("442837"),
  _ = n("570140"),
  S = n("904245"),
  C = n("911969"),
  I = n("603721"),
  N = n("70956");
(s = E || (E = {}))[s.IN_FLIGHT = 0] = "IN_FLIGHT", s[s.ERRORED = 1] = "ERRORED", s[s.SUCCEEDED = 2] = "SUCCEEDED";
class O extends(p = m.default.Store) {
  getModalState(e) {
    return e !== l ? null : a
  }
}
c = "InteractionModalStore", (r = "displayName") in(d = O) ? Object.defineProperty(d, r, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[r] = c, t.default = new O(_.default, {
  LOGOUT: function() {
    return l = null, a = null, u = null, i = null, o = null, !0
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === o && (S.default.deleteMessage(i, u, !0), u = null, i = null, o = null), !1
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === o && (S.default.deleteMessage(i, u, !0), u = null, i = null, o = null), !1
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: s
    } = e;
    switch (s.interactionType) {
      case C.InteractionTypes.APPLICATION_COMMAND:
        return u = t, i = s.channelId, o = n, !1;
      case C.InteractionTypes.MODAL_SUBMIT:
        return f()(null == l || 1 === a || 2 === a, "cannot submit multiple modals at once"), l = n, a = 0, setTimeout(() => {
          l === n && 0 === a && (0, I.setFailed)(n)
        }, 10 * N.default.Millis.SECOND), !0;
      default:
        return !1
    }
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (a = 2, !0)
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    return null != t && t === l && (a = 1, !0)
  }
})