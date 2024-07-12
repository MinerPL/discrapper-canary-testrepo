n(47120);
var i = n(735250),
  a = n(470079),
  l = n(704215),
  s = n(481060),
  r = n(243778),
  o = n(689938),
  c = n(229772),
  d = n(442937);
let u = () => (0, i.jsxs)('div', {
  className: c.coachtipInner,
  children: [
(0, i.jsx)('img', {
  src: d,
  alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
  className: c.coachtipAsset
}),
(0, i.jsxs)('div', {
  className: c.coachtipTextContainer,
  children: [
    (0, i.jsx)(s.Heading, {
      variant: 'heading-lg/semibold',
      children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER
    }),
    (0, i.jsx)(s.Text, {
      variant: 'text-md/normal',
      color: 'text-secondary',
      children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_TEXT
    })
  ]
})
  ]
});
t.Z = e => {
  let {
children: t
  } = e, [n] = (0, r.U)([l.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]), [o, d] = a.useState(!1);
  return (a.useEffect(() => {
setTimeout(() => {
  d(!0);
}, 300);
  }), n !== l.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP) ? (0, i.jsx)(i.Fragment, {
children: t
  }) : (0, i.jsx)(s.Tooltip, {
text: (0, i.jsx)(u, {}),
tooltipClassName: c.coachtip,
tooltipContentClassName: c.coachtipContent,
position: 'left',
allowOverflow: !0,
forceOpen: o,
shouldShow: o,
hideOnClick: !1,
'aria-label': 'test',
children: e => (0, i.jsx)('div', {
  ...e,
  children: t
})
  });
};