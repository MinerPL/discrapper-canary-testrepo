"use strict";
let i, r, s;
n.d(t, {
  At: function() {
    return O
  },
  DB: function() {
    return g
  },
  DR: function() {
    return R
  },
  Wf: function() {
    return p
  },
  XU: function() {
    return f
  },
  dL: function() {
    return A
  },
  eH: function() {
    return v
  },
  m1: function() {
    return C
  },
  op: function() {
    return L
  },
  s1: function() {
    return m
  },
  uL: function() {
    return S
  },
  uv: function() {
    return N
  }
}), n(653041), n(757143);
var o = n(539528),
  a = n(710845),
  l = n(585483),
  u = n(143816),
  _ = n(981631);
let d = new a.Z("Routing/Utils"),
  c = [_.E07.DEVELOPER_PORTAL];
i = __OVERLAY__ ? (0, o.PP)() : (0, o.lX)();
let E = !1,
  I = i.listen((e, t) => {
    "REPLACE" !== t && (E = !0, I())
  });

function T() {
  return !l.S.hasSubscribers(_.CkL.MODAL_CLOSE) && (n(574254).Z.close(), !0)
}

function h(e, t) {
  return !!("string" == typeof e && c.some(t => e.startsWith(t))) && (d.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), !0)
}

function S(e, t, n, o) {
  !h(e, "assign") && (d.log("transitionTo - Transitioning to ".concat(e)), null != n && (null == t ? t = {
    source: n
  } : t.source = n), null == t ? i.push(e) : i.push({
    pathname: e,
    ...t
  }), r = n, s = o)
}

function f(e, t, n, i, r) {
  d.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
    guildId: e,
    channelId: t,
    messageId: n
  }))), S(_.Z5c.CHANNEL(e, t, n), null != r ? r : null, i)
}

function N() {
  return null != r && u.Hb.has(r)
}

function A(e, t, n) {
  !h(e, "replace") && (d.log("Replacing route with ".concat(e)), "string" == typeof e ? i.replace(e, t) : i.replace(e), r = n)
}

function m() {
  return i
}

function O() {
  return r
}

function R() {
  return s
}

function C(e) {
  if (null == e) {
    var t;
    e = null !== (t = i.location.pathname) && void 0 !== t ? t : ""
  }
  return !e.startsWith(_.Z5c.HANDOFF) && !0
}

function p(e) {
  if (null == e) {
    var t;
    e = null !== (t = i.location.pathname) && void 0 !== t ? t : ""
  }
  if (e.startsWith(_.Z5c.LOGIN)) return _.Usc.LOGIN;
  if (e.startsWith(_.Z5c.REGISTER)) return _.Usc.REGISTER;
  if (e.startsWith(_.Z5c.INVITE(""))) return _.Usc.INVITE;
  else if (e.startsWith(_.Z5c.VERIFY)) return _.Usc.VERIFY;
  else if (e.startsWith(_.Z5c.DISABLE_EMAIL_NOTIFICATIONS)) return _.Usc.DISABLE_EMAIL_NOTIFICATIONS;
  else if (e.startsWith(_.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return _.Usc.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  else if (e.startsWith(_.Z5c.REJECT_IP)) return _.Usc.REJECT_IP;
  else if (e.startsWith(_.Z5c.REJECT_MFA)) return _.Usc.REJECT_MFA;
  else if (e.startsWith(_.Z5c.AUTHORIZE_IP)) return _.Usc.AUTHORIZE_IP;
  else if (e.startsWith(_.Z5c.AUTHORIZE_PAYMENT)) return _.Usc.AUTHORIZE_PAYMENT;
  else if (e.startsWith(_.Z5c.RESET)) return _.Usc.RESET;
  else if (e.startsWith(_.Z5c.REPORT)) return _.Usc.REPORT;
  else if (e.startsWith(_.Z5c.REPORT_SECOND_LOOK)) return _.Usc.REPORT_SECOND_LOOK;
  return e
}

function g() {
  return E
}

function L() {
  T() && (r = null, i.goBack())
}

function v() {
  T() && (r = null, i.goForward())
}