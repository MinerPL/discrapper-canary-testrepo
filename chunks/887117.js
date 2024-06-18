"use strict";
n.r(e), n.d(e, {
  Breadcrumbs: function() {
    return E.O
  },
  BrowserClient: function() {
    return a.R
  },
  BrowserProfilingIntegration: function() {
    return y._
  },
  BrowserTracing: function() {
    return p.gE
  },
  Dedupe: function() {
    return k.I
  },
  FunctionToString: function() {
    return i.cq
  },
  GlobalHandlers: function() {
    return v.d
  },
  HttpContext: function() {
    return w.q
  },
  Hub: function() {
    return i.Xb
  },
  InboundFilters: function() {
    return i.QD
  },
  Integrations: function() {
    return R
  },
  LinkedErrors: function() {
    return S.i
  },
  ModuleMetadata: function() {
    return i._e
  },
  Replay: function() {
    return f.U
  },
  SDK_VERSION: function() {
    return i.Jn
  },
  Scope: function() {
    return i.sX
  },
  TryCatch: function() {
    return b.p
  },
  WINDOW: function() {
    return s.m9
  },
  addBreadcrumb: function() {
    return i.n_
  },
  addGlobalEventProcessor: function() {
    return i.cc
  },
  addTracingExtensions: function() {
    return i.Ts
  },
  captureEvent: function() {
    return i.eN
  },
  captureException: function() {
    return i.Tb
  },
  captureMessage: function() {
    return i.uT
  },
  captureUserFeedback: function() {
    return h.Jd
  },
  chromeStackLineParser: function() {
    return l.$3
  },
  close: function() {
    return h.xv
  },
  configureScope: function() {
    return i.e
  },
  createTransport: function() {
    return i.qv
  },
  createUserFeedbackEnvelope: function() {
    return d.r
  },
  defaultIntegrations: function() {
    return h.SS
  },
  defaultRequestInstrumentationOptions: function() {
    return p.k3
  },
  defaultStackLineParsers: function() {
    return l.d8
  },
  defaultStackParser: function() {
    return l.Dt
  },
  eventFromException: function() {
    return c.dr
  },
  eventFromMessage: function() {
    return c.aB
  },
  extractTraceparentData: function() {
    return i.qG
  },
  flush: function() {
    return h.yl
  },
  forceLoad: function() {
    return h.Eg
  },
  geckoStackLineParser: function() {
    return l.$Q
  },
  getActiveTransaction: function() {
    return i.x1
  },
  getCurrentHub: function() {
    return i.Gd
  },
  getHubFromCarrier: function() {
    return i.vi
  },
  init: function() {
    return h.S1
  },
  instrumentOutgoingRequests: function() {
    return p.L7
  },
  lastEventId: function() {
    return h.eW
  },
  makeBrowserOfflineTransport: function() {
    return m.O1
  },
  makeFetchTransport: function() {
    return o.f
  },
  makeMain: function() {
    return i.pj
  },
  makeMultiplexedTransport: function() {
    return i.Wq
  },
  makeXHRTransport: function() {
    return u.K
  },
  onLoad: function() {
    return h.lA
  },
  onProfilingStartRouteTransaction: function() {
    return g.Uv
  },
  opera10StackLineParser: function() {
    return l.NP
  },
  opera11StackLineParser: function() {
    return l.HH
  },
  setContext: function() {
    return i.v
  },
  setExtra: function() {
    return i.sU
  },
  setExtras: function() {
    return i.rJ
  },
  setTag: function() {
    return i.YA
  },
  setTags: function() {
    return i.mG
  },
  setUser: function() {
    return i.av
  },
  showReportDialog: function() {
    return h.jp
  },
  spanStatusfromHttpCode: function() {
    return i.Zd
  },
  startTransaction: function() {
    return i.Yr
  },
  trace: function() {
    return i.g4
  },
  winjsStackLineParser: function() {
    return l.R2
  },
  withScope: function() {
    return i.$e
  },
  wrap: function() {
    return h.re
  }
});
var r = n(89837),
  i = n(91320),
  s = n(643487),
  a = n(903204),
  o = n(393746),
  u = n(975927),
  l = n(202406),
  c = n(590171),
  d = n(184612),
  h = n(846297),
  _ = n(53383),
  f = n(438142),
  p = n(752875),
  m = n(490753),
  g = n(65534),
  y = n(643714),
  v = n(297280),
  b = n(382078),
  E = n(124969),
  S = n(140735),
  w = n(612568),
  k = n(683900);
let T = {};
s.m9.Sentry && s.m9.Sentry.Integrations && (T = s.m9.Sentry.Integrations);
let R = {
  ...T,
  ...r,
  ..._
}