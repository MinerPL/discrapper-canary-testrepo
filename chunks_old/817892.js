"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("446674"),
  a = n("913144"),
  l = n("718517"),
  i = n("299039");
let r = 14 * l.default.Millis.DAY,
  o = Object.freeze([]),
  u = {},
  d = {};

function c() {
  u = {}, d = {}
}
class E extends s.default.Store {
  getFpMessageInfo(e) {
    return u[e]
  }
  getChannelFpInfo(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : o
  }
  canSubmitFpReport(e) {
    let t = u[e];
    return null != t && !t.reportSubmit && i.default.age(t.messageId) < r
  }
}
E.displayName = "FalsePositiveStore";
var f = new E(a.default, {
  LOGOUT: function() {
    (function() {
      u = {}, d = {}
    })()
  },
  CONNECTION_OPEN: function() {
    (function() {
      u = {}, d = {}
    })()
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function(e) {
    var t;
    let {
      messageId: n,
      channelId: s,
      attachments: a
    } = e, l = {
      messageId: n,
      channelId: s,
      attachments: a,
      reportSubmit: !1
    }, i = null !== (t = d[s]) && void 0 !== t ? t : o;
    d[s] = [...i, l], u[n] = l
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, s = d[n];
    null != s && (d[n] = s.map(e => e.messageId === t ? {
      ...e,
      reportSubmit: !0
    } : e), u[t] = {
      ...u[t],
      reportSubmit: !0
    })
  }
})