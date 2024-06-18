"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(131951),
  o = n(65154),
  a = n(689938);

function l(e) {
  s.Z.supports(o.AN.VIDEO) ? (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("67753")]).then(n.bind(n, 873809));
    return n => (0, i.jsx)(t, {
      ...n,
      header: a.Z.Messages.CAMERA_UNAVAILABLE,
      body: a.Z.Messages.CAMERA_NO_DEVICE,
      confirmText: a.Z.Messages.OKAY,
      onConfirm: e
    })
  }) : (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("67753")]).then(n.bind(n, 873809));
    return s => (0, i.jsx)(t, {
      ...s,
      header: a.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
      body: a.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
      confirmText: a.Z.Messages.DOWNLOAD_APP,
      onConfirm: () => {
        null == e || e(), (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("61418")]).then(n.bind(n, 431583));
          return t => (0, i.jsx)(e, {
            source: "Video unsupported browser",
            ...t
          })
        })
      }
    })
  })
}