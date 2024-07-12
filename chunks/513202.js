n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(570140),
  o = n(468026),
  s = n(626135),
  l = n(358085),
  u = n(998502),
  c = n(566620),
  d = n(287545),
  _ = n(318891),
  E = n(719296),
  f = n(981631),
  h = n(689938);
class p extends d.Z {
  _initialize() {
super._initialize(), l.isPlatformEmbedded && u.ZP.on('APP_PUSH_ANALYTICS', (e, t) => {
  t.forEach(e => {
    'activities' === e.type && e.name === f.rMx.ACTIVITIES_RESTRICTRED_CSP_VIOLATION && s.default.track(e.name, e.data);
  });
});
  }
  showErrorModal(e) {
let {
  code: t,
  message: n
} = e;
(0, i.openModalLazy)(async () => e => (0, r.jsx)(o.default, {
  title: h.Z.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
    code: t
  }),
  body: n,
  ...e
}));
  }
  showLaunchErrorModal(e) {
(0, i.openModalLazy)(async () => t => (0, r.jsx)(o.default, {
  title: h.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
  body: e,
  ...t
}));
  }
  leaveActivity(e) {
let {
  channelId: t,
  applicationId: n
} = e;
a.Z.wait(() => {
  (0, c.mW)({
    channelId: t,
    applicationId: n
  });
});
  }
  hidePIPEmbed(e) {
let {
  channelId: t,
  applicationId: n
} = e, r = (0, E.Z)(t, n);
(0, _.RI)(r);
  }
  releaseWebView() {}
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'handleRPCDisconnect', r = e => {
  let {
    reason: t,
    application: n
  } = e;
  this.superHandleRPCDisconnect({
    reason: t,
    application: n
  });
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new p();