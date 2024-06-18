"use strict";
n.d(e, {
  Eg: function() {
    return N
  },
  Jd: function() {
    return B
  },
  S1: function() {
    return R
  },
  SS: function() {
    return T
  },
  eW: function() {
    return D
  },
  jp: function() {
    return x
  },
  lA: function() {
    return C
  },
  re: function() {
    return A
  },
  xv: function() {
    return I
  },
  yl: function() {
    return U
  }
});
var r = n(344106),
  i = n(740054),
  s = n(595208),
  a = n(110575),
  o = n(876122),
  u = n(507506),
  l = n(432038),
  c = n(698892),
  d = n(529866),
  h = n(880803),
  _ = n(793884),
  f = n(903204),
  p = n(643487),
  m = n(297280),
  g = n(382078),
  y = n(124969),
  v = n(140735),
  b = n(612568),
  E = n(683900),
  S = n(202406),
  w = n(393746),
  k = n(975927);
let T = [new r.QD, new i.c, new g.p, new y.O, new m.d, new v.i, new E.I, new b.q];

function R(t = {}) {
  void 0 === t.defaultIntegrations && (t.defaultIntegrations = T), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), p.m9.SENTRY_RELEASE && p.m9.SENTRY_RELEASE.id && (t.release = p.m9.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
  let e = {
    ...t,
    stackParser: (0, l.Sq)(t.stackParser || S.Dt),
    integrations: (0, s.m8)(t),
    transport: t.transport || ((0, c.Ak)() ? w.f : k.K)
  };
  (0, a.M)(f.R, e), t.autoSessionTracking && function() {
    if (void 0 === p.m9.document) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
      return
    }
    let t = (0, o.Gd)();
    if (!!t.captureSession) O(t), (0, _.oq)("history", ({
      from: t,
      to: e
    }) => {
      !(void 0 === t || t === e) && O((0, o.Gd)())
    })
  }()
}

function x(t = {}, e = (0, o.Gd)()) {
  if (!p.m9.document) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.error("Global document not defined in showReportDialog call");
    return
  }
  let {
    client: n,
    scope: r
  } = e.getStackTop(), i = t.dsn || n && n.getDsn();
  if (!i) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.error("DSN not configured for showReportDialog call");
    return
  }
  r && (t.user = {
    ...r.getUser(),
    ...t.user
  }), !t.eventId && (t.eventId = e.lastEventId());
  let s = p.m9.document.createElement("script");
  s.async = !0, s.crossOrigin = "anonymous", s.src = (0, u.h)(i, t), t.onLoad && (s.onload = t.onLoad);
  let a = p.m9.document.head || p.m9.document.body;
  a ? a.appendChild(s) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.error("Not injecting report dialog. No injection point found in HTML")
}

function D() {
  return (0, o.Gd)().lastEventId()
}

function N() {}

function C(t) {
  t()
}

function U(t) {
  let e = (0, o.Gd)().getClient();
  return e ? e.flush(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.warn("Cannot flush events. No client defined."), (0, h.WD)(!1))
}

function I(t) {
  let e = (0, o.Gd)().getClient();
  return e ? e.close(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && d.kg.warn("Cannot flush events and disable SDK. No client defined."), (0, h.WD)(!1))
}

function A(t) {
  return (0, p.re)(t)()
}

function O(t) {
  t.startSession({
    ignoreDuration: !0
  }), t.captureSession()
}

function B(t) {
  let e = (0, o.Gd)().getClient();
  e && e.captureUserFeedback(t)
}