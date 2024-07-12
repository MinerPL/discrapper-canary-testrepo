n(47120);
var r = n(735250);
n(470079);
var i = n(525654),
  a = n.n(i),
  o = n(481060),
  s = n(570140),
  l = n(468026),
  u = n(317770),
  c = n(63063),
  d = n(981631),
  _ = n(689938);
class E extends u.Z {
  _initialize() {
s.Z.subscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
  }
  _terminate() {
s.Z.unsubscribe('MEDIA_ENGINE_PERMISSION', this.handlePermission);
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'handlePermission', i = e => {
  let {
    kind: t,
    granted: n
  } = e, i = 'Firefox' === a().name ? d.BhN.ENABLE_MIC_FIREFOX : d.BhN.ENABLE_MIC_CHROME;
  if (!n) {
    let e = 'audio' !== t;
    (0, o.openModal)(t => (0, r.jsx)(l.default, {
      title: e ? _.Z.Messages.NO_CAMERA_TITLE : _.Z.Messages.NO_MIC_TITLE,
      body: e ? _.Z.Messages.NO_CAMERA_BODY : _.Z.Messages.NO_MIC_BODY,
      onConfirm: () => window.open(c.Z.getArticleURL(i), '_blank'),
      confirmText: _.Z.Messages.HELP_DESK,
      ...t
    }));
  }
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
t.Z = new E();