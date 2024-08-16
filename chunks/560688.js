n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(131951),
    s = n(65154),
    o = n(689938);
function l(e) {
    a.Z.supports(s.AN.VIDEO)
        ? (0, i.openModalLazy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (n) =>
                  (0, r.jsx)(t, {
                      ...n,
                      header: o.Z.Messages.CAMERA_UNAVAILABLE,
                      body: o.Z.Messages.CAMERA_NO_DEVICE,
                      confirmText: o.Z.Messages.OKAY,
                      onConfirm: e
                  });
          })
        : (0, i.openModalLazy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (a) =>
                  (0, r.jsx)(t, {
                      ...a,
                      header: o.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                      body: o.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                      confirmText: o.Z.Messages.DOWNLOAD_APP,
                      onConfirm: () => {
                          null == e || e(),
                              (0, i.openModalLazy)(async () => {
                                  let { default: e } = await n.e('82935').then(n.bind(n, 431583));
                                  return (t) =>
                                      (0, r.jsx)(e, {
                                          source: 'Video unsupported browser',
                                          ...t
                                      });
                              });
                      }
                  });
          });
}
