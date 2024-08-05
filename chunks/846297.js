r.d(e, {
  Eg: function() {
return M;
  },
  Jd: function() {
return B;
  },
  S1: function() {
return C;
  },
  SS: function() {
return h;
  },
  eW: function() {
return P;
  },
  jp: function() {
return g;
  },
  lA: function() {
return U;
  },
  re: function() {
return y;
  },
  xv: function() {
return m;
  },
  yl: function() {
return G;
  }
});
var n = r(344106),
  _ = r(740054),
  a = r(595208),
  i = r(110575),
  o = r(876122),
  E = r(507506),
  s = r(432038),
  c = r(698892),
  I = r(529866),
  R = r(880803),
  T = r(793884),
  u = r(903204),
  l = r(643487),
  A = r(297280),
  N = r(382078),
  d = r(124969),
  O = r(140735),
  S = r(612568),
  p = r(683900),
  D = r(202406),
  f = r(393746),
  L = r(975927);
let h = [
  new n.QD(),
  new _.c(),
  new N.p(),
  new d.O(),
  new A.d(),
  new O.i(),
  new p.I(),
  new S.q()
];

function C(t = {}) {
  void 0 === t.defaultIntegrations && (t.defaultIntegrations = h), void 0 === t.release && ('string' == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), l.m9.SENTRY_RELEASE && l.m9.SENTRY_RELEASE.id && (t.release = l.m9.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
  let e = {
...t,
stackParser: (0, s.Sq)(t.stackParser || D.Dt),
integrations: (0, a.m8)(t),
transport: t.transport || ((0, c.Ak)() ? f.f : L.K)
  };
  (0, i.M)(u.R, e), t.autoSessionTracking && function() {
if (void 0 === l.m9.document) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
  return;
}
let t = (0, o.Gd)();
if (!!t.captureSession)
  b(t), (0, T.oq)('history', ({
    from: t,
    to: e
  }) => {
    !(void 0 === t || t === e) && b((0, o.Gd)());
  });
  }();
}

function g(t = {}, e = (0, o.Gd)()) {
  if (!l.m9.document) {
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error('Global document not defined in showReportDialog call');
return;
  }
  let {
client: r,
scope: n
  } = e.getStackTop(), _ = t.dsn || r && r.getDsn();
  if (!_) {
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error('DSN not configured for showReportDialog call');
return;
  }
  n && (t.user = {
...n.getUser(),
...t.user
  }), !t.eventId && (t.eventId = e.lastEventId());
  let a = l.m9.document.createElement('script');
  a.async = !0, a.crossOrigin = 'anonymous', a.src = (0, E.h)(_, t), t.onLoad && (a.onload = t.onLoad);
  let i = l.m9.document.head || l.m9.document.body;
  i ? i.appendChild(a) : ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error('Not injecting report dialog. No injection point found in HTML');
}

function P() {
  return (0, o.Gd)().lastEventId();
}

function M() {}

function U(t) {
  t();
}

function G(t) {
  let e = (0, o.Gd)().getClient();
  return e ? e.flush(t) : (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn('Cannot flush events. No client defined.'), (0, R.WD)(!1));
}

function m(t) {
  let e = (0, o.Gd)().getClient();
  return e ? e.close(t) : (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn('Cannot flush events and disable SDK. No client defined.'), (0, R.WD)(!1));
}

function y(t) {
  return (0, l.re)(t)();
}

function b(t) {
  t.startSession({
ignoreDuration: !0
  }), t.captureSession();
}

function B(t) {
  let e = (0, o.Gd)().getClient();
  e && e.captureUserFeedback(t);
}