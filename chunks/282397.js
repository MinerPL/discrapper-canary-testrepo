"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(442837),
  _ = n(570140),
  d = n(911969),
  c = n(314897),
  E = n(592125),
  I = n(622449);
let T = {},
  h = {},
  S = {};

function f(e) {
  var t;
  if (null == e) return !1;
  let n = T[e];
  if (null == n) return !1;
  null === (t = n.onSuccess) || void 0 === t || t.call(n), N(e)
}

function N(e) {
  delete T[e];
  let t = S[e];
  null != t && delete h[t], delete S[e]
}
class A extends(s = u.ZP.Store) {
  getInteraction(e) {
    let t = h[e.id];
    return null != t ? T[t] : null
  }
  getMessageInteractionStates() {
    let e = {};
    for (let [t, n] of Object.entries(T)) {
      let i = S[t];
      null != i && (e[i] = n.state)
    }
    return e
  }
  canQueueInteraction(e, t) {
    let n = h[e];
    return (null == n || null == T[n] || T[n].state === I.F.FAILED) && (null == T[t] || T[t].state === I.F.FAILED) && !0
  }
  getIFrameModalApplicationId() {
    return r
  }
  getIFrameModalKey() {
    return i
  }
}
l = "InteractionStore", (a = "displayName") in(o = A) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new A(_.Z, {
  LOGOUT: function() {
    T = {}, h = {}, S = {}
  },
  INTERACTION_QUEUE: function(e) {
    let {
      nonce: t,
      messageId: n,
      data: i,
      onCreate: r,
      onCancel: s,
      onSuccess: o,
      onFailure: a
    } = e;
    null != n && (h[n] = t, S[t] = n), T[t] = {
      state: I.F.QUEUED,
      data: i,
      onCreate: r,
      onCancel: s,
      onSuccess: o,
      onFailure: a
    }
  },
  INTERACTION_CREATE: function(e) {
    var t;
    let {
      nonce: n,
      interactionId: i
    } = e;
    if (null == n) return !1;
    let r = T[n];
    if (null == r || r.state !== I.F.QUEUED) return !1;
    r.state = I.F.CREATED, null === (t = r.onCreate) || void 0 === t || t.call(r, i)
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    f(t)
  },
  INTERACTION_FAILURE: function(e) {
    var t;
    let {
      nonce: n,
      errorCode: i,
      errorMessage: r
    } = e;
    if (null == n) return !1;
    let s = T[n];
    if (null == s) return !1;
    null === (t = s.onFailure) || void 0 === t || t.call(s, i, r), s.data.interactionType === d.B8.APPLICATION_COMMAND ? N(n) : T[n] = {
      ...s,
      state: I.F.FAILED,
      errorCode: i,
      errorMessage: r
    }
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    if (null == t.nonce) return !1;
    {
      var n;
      let e = T[t.nonce];
      if (null == e) return !1;
      null === (n = e.onSuccess) || void 0 === n || n.call(e), N(t.nonce)
    }
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == E.Z.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(T)) t.state === I.F.FAILED && N(e)
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
    let {
      application: t
    } = e;
    r = t.id
  },
  INTERACTION_IFRAME_MODAL_CLOSE: function() {
    i = void 0, r = void 0
  },
  INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
    let {
      modalKey: t
    } = e;
    i = t
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
    let {
      participants: t
    } = e, n = c.default.getSessionId(), i = c.default.getId(), r = t.find(e => e.user_id === i && e.session_id === n);
    if (null != r && null != r.nonce) f(r.nonce)
  }
})