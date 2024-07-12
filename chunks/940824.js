var l = s(735250);
s(470079);
var t = s(481060),
  i = s(37234),
  r = s(100527),
  a = s(906732),
  c = s(703656),
  o = s(335131),
  u = s(981631),
  d = s(689938),
  _ = s(840898);
n.Z = e => {
  let {
onClose: n
  } = e, {
analyticsLocations: s
  } = (0, a.ZP)(), m = () => {
n(), (0, c.uL)(u.Z5c.COLLECTIBLES_SHOP), (0, o.mK)({
  openInLayer: !1,
  analyticsSource: r.Z.PREMIUM_PAYMENT_MODAL,
  analyticsLocations: s
}), (0, i.xf)();
  };
  return (0, l.jsxs)('div', {
className: _.container,
children: [
  (0, l.jsx)('div', {
    className: _.iconBackground,
    children: (0, l.jsx)(t.ShopIcon, {
      size: 'custom',
      width: 20,
      height: 20,
      color: t.tokens.colors.WHITE
    })
  }),
  (0, l.jsx)(t.Text, {
    variant: 'text-sm/normal',
    color: 'header-primary',
    children: d.Z.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
      checkItOut: e => (0, l.jsx)(t.Clickable, {
        className: _.link,
        onClick: m,
        children: e
      })
    })
  })
]
  });
};