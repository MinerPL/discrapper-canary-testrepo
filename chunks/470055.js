"use strict";
let l, a, u, o, r;
n.r(t), n.d(t, {
  InteractionModalState: function() {
    return i
  },
  default: function() {
    return M
  }
});
var s, i, c = n("627445"),
  d = n.n(c),
  f = n("446674"),
  I = n("913144"),
  p = n("819689"),
  m = n("798609"),
  T = n("274800"),
  C = n("718517");
(s = i || (i = {}))[s.IN_FLIGHT = 0] = "IN_FLIGHT", s[s.ERRORED = 1] = "ERRORED", s[s.SUCCEEDED = 2] = "SUCCEEDED";
class h extends f.default.Store {
  getModalState(e) {
    return e !== l ? null : a
  }
}
h.displayName = "InteractionModalStore";
var M = new h(I.default, {
  LOGOUT: function() {
    return l = null, a = null, u = null, o = null, r = null, !0
  },
  INTERACTION_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (p.default.deleteMessage(o, u, !0), u = null, o = null, r = null), !1
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      nonce: t
    } = e;
    return t === r && (p.default.deleteMessage(o, u, !0), u = null, o = null, r = null), !1
  },
  INTERACTION_QUEUE: function(e) {
    let {
      messageId: t,
      nonce: n,
      data: s
    } = e;
    switch (s.interactionType) {
      case m.InteractionTypes.APPLICATION_COMMAND:
        return u = t, o = s.channelId, r = n, !1;
      case m.InteractionTypes.MODAL_SUBMIT:
        return d(null == l || 1 === a || 2 === a, "cannot submit multiple modals at once"), l = n, a = 0, setTimeout(() => {
          l === n && 0 === a && (0, T.setFailed)(n)
        }, 10 * C.default.Millis.SECOND), !0;
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