"use strict";
let i;
n(47120);
var r, s, o, a, l = n(442837),
  u = n(570140),
  _ = n(70956),
  d = n(709054);
let c = 14 * _.Z.Millis.DAY,
  E = Object.freeze([]);
let I = {},
  T = {};

function h() {
  I = {}, T = {}
}
class S extends(r = l.ZP.Store) {
  getFpMessageInfo(e) {
    return I[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null !== (t = T[e]) && void 0 !== t ? t : E
  }
  canSubmitFpReport(e) {
    let t = I[e];
    return null != t && !t.reportSubmit && d.default.age(t.messageId) < c
  }
  get validContentScanVersion() {
    return i
  }
}
a = "FalsePositiveStore", (o = "displayName") in(s = S) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new S(u.Z, {
  LOGOUT: function() {
    (function() {
      I = {}, T = {}
    })()
  },
  CONNECTION_OPEN: function(e) {
    let {
      explicitContentScanVersion: t
    } = e;
    i = t,
      function() {
        I = {}, T = {}
      }()
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function(e) {
    var t;
    let {
      messageId: n,
      channelId: i,
      attachments: r
    } = e, s = {
      messageId: n,
      channelId: i,
      attachments: r,
      reportSubmit: !1
    }, o = null !== (t = T[i]) && void 0 !== t ? t : E;
    T[i] = [...o, s], I[n] = s
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, i = T[n];
    null != i && (T[n] = i.map(e => e.messageId === t ? {
      ...e,
      reportSubmit: !0
    } : e), I[t] = {
      ...I[t],
      reportSubmit: !0
    })
  }
})