n.d(t, {
  Z: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  r = n(626135),
  i = n(503899),
  l = n(292352),
  o = n(981631),
  c = n(689938),
  d = n(958421);

function _() {
  return (0, s.jsxs)(a.Button, {
innerClassName: d.qrCodeButtonContent,
size: a.Button.Sizes.LARGE,
onClick: () => {
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('32873'),
      n.e('90688')
    ]).then(n.bind(n, 978305));
    return t => (0, s.jsx)(e, {
      ...t
    });
  }), r.default.track(o.rMx.FAMILY_CENTER_ACTION, {
    action: l.YC.ShowQRCodeModal
  });
},
children: [
  (0, s.jsx)(i.Z, {}),
  c.Z.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_BUTTON
]
  });
}