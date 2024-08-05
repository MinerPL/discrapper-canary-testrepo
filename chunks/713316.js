t.d(n, {
  w: function() {
return E;
  }
});
var a = t(735250);
t(470079);
var s = t(512722),
  i = t.n(s),
  l = t(481060),
  r = t(598),
  o = t(698708),
  d = t(614277),
  u = t(689938),
  c = t(811586);

function E(e) {
  let {
handleClose: n
  } = e, {
skusById: t,
selectedSkuId: s,
application: E
  } = (0, r.usePaymentContext)();
  i()(null != s, 'Expected selectedSkuId'), i()(null != E, 'Expected application');
  let f = t[s];
  i()(null != f, 'Expected sku');
  let h = u.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
applicationName: E.name,
itemName: f.name
  });
  return (0, a.jsxs)(d.C3, {
children: [
  (0, a.jsx)(o.Z, {}),
  (0, a.jsxs)('div', {
    className: c.confirmation,
    children: [
      (0, a.jsx)(l.Heading, {
        variant: 'heading-xxl/bold',
        className: c.confirmationHeader,
        children: 'Success!'
      }),
      (0, a.jsx)(l.Text, {
        variant: 'text-md/normal',
        children: h
      }),
      (0, a.jsx)('div', {
        className: c.divider
      }),
      (0, a.jsx)(l.Button, {
        onClick: n,
        children: u.Z.Messages.CLOSE
      })
    ]
  })
]
  });
}