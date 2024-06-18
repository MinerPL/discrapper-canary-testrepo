"use strict";
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(544891),
  d = n(570140),
  c = n(592125),
  E = n(944486),
  I = n(914010),
  T = n(981631);
let h = {},
  S = {};

function f() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Z.getChannelId(),
    n = c.Z.getChannel(t);
  if (null != n && null == n.getGuildId() && null != t && (null == h[t] || e)) {
    var i;
    return h[t] = null !== (i = h[t]) && void 0 !== i ? i : {
      channelId: t,
      ringing: []
    }, d.Z.dispatch({
      type: "CALL_CONNECT",
      channelId: t
    }), !0
  }
  return !1
}
class N extends(o = u.ZP.Store) {
  initialize() {
    this.waitFor(I.Z, E.Z)
  }
  getCall(e) {
    return h[e]
  }
  getCalls() {
    return Object.values(h)
  }
  getMessageId(e) {
    let t = this.getCall(e);
    return null != t ? t.messageId : null
  }
  isCallActive(e, t) {
    let n = h[e];
    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
  }
  isCallUnavailable(e) {
    let t = h[e];
    return null != t && t.unavailable
  }
  getInternalState() {
    return {
      calls: h,
      enqueuedRings: S
    }
  }
}
s = "CallStore", (r = "displayName") in(i = N) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new N(d.Z, {
  CONNECTION_OPEN: function() {
    return f(!0)
  },
  CONNECTION_CLOSED: function() {
    h = {}, S = {}
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      callStoreInternalState: t
    } = e;
    h = {
      ...t.calls
    }, S = {
      ...t.enqueuedRings
    }
  },
  CONNECTION_RESUMED: function() {
    return f(!0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return f(!1, t)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null != S[t.id] && delete S[t.id], null == h[t.id]) return !1;
    delete h[t.id]
  },
  CALL_CREATE: function(e) {
    let {
      channelId: t,
      messageId: n,
      region: i,
      ringing: r
    } = e;
    if (h[t] = {
        channelId: t,
        messageId: n,
        region: i,
        ringing: r,
        unavailable: !1,
        regionUpdated: !1
      }, null != S[t]) {
      let e = S[t];
      delete S[t], 1 !== e.indexOf("all") && (e = null), _.tn.post({
        url: T.ANM.CALL_RING(t),
        body: {
          recipients: e
        },
        oldFormErrors: !0
      })
    }
  },
  CALL_UPDATE: function(e) {
    let {
      channelId: t,
      messageId: n,
      region: i,
      ringing: r
    } = e, s = h[t], o = null != s && (s.regionUpdated || s.region !== i);
    h[t] = {
      ...h[t],
      messageId: n,
      region: i,
      ringing: r,
      regionUpdated: o
    }
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t,
      unavailable: n
    } = e, i = h[t];
    !0 === n && null != i ? h[t] = {
      ...i,
      unavailable: n
    } : h[t] = {
      channelId: t,
      ringing: [],
      messageId: null,
      region: null,
      regionUpdated: !1,
      unavailable: n
    }, null != S[t] && delete S[t]
  },
  CALL_ENQUEUE_RING: function(e) {
    var t;
    let {
      channelId: n,
      recipients: i
    } = e;
    S[n] = l().union(null !== (t = S[n]) && void 0 !== t ? t : [], null != i ? i : ["all"])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    null == t && (S = {})
  }
})