t.d(n, {
  w: function() {
return _;
  }
});
var i = t(735250);
t(470079);
var r = t(512722),
  o = t.n(r),
  a = t(481060),
  s = t(598),
  l = t(698708),
  c = t(614277),
  d = t(689938),
  u = t(811586);

function _(e) {
  let {
handleClose: n
  } = e, {
skusById: t,
selectedSkuId: r,
application: _
  } = (0, s.usePaymentContext)();
  o()(null != r, 'Expected selectedSkuId'), o()(null != _, 'Expected application');
  let p = t[r];
  o()(null != p, 'Expected sku');
  let f = d.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
applicationName: _.name,
itemName: p.name
  });
  return (0, i.jsxs)(c.C3, {
children: [
  (0, i.jsx)(l.Z, {}),
  (0, i.jsxs)('div', {
    className: u.confirmation,
    children: [
      (0, i.jsx)(a.Heading, {
        variant: 'heading-xxl/bold',
        className: u.confirmationHeader,
        children: 'Success!'
      }),
      (0, i.jsx)(a.Text, {
        variant: 'text-md/normal',
        children: f
      }),
      (0, i.jsx)('div', {
        className: u.divider
      }),
      (0, i.jsx)(a.Button, {
        onClick: n,
        children: d.Z.Messages.CLOSE
      })
    ]
  })
]
  });
}