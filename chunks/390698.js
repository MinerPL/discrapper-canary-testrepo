n.d(t, {
  U: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  o = n(481060),
  i = n(689938),
  l = n(26504);
let c = e => {
  let {
className: t,
isPartiallyPurchased: n
  } = e;
  return n ? (0, r.jsx)(o.Tooltip, {
tooltipClassName: l.partiallyOwnedDisclaimer,
position: 'top',
align: 'left',
text: i.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
children: e => (0, r.jsxs)('div', {
  className: a()(l.partialOwnStateContainer, t),
  ...e,
  children: [
    (0, r.jsx)('span', {
      className: l.iconWrapper,
      children: (0, r.jsx)(o.CircleInformationIcon, {
        size: 'md',
        color: 'currentColor',
        className: l.infoIcon
      })
    }),
    (0, r.jsx)(o.Text, {
      variant: 'text-md/semibold',
      children: i.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
    })
  ]
})
  }) : (0, r.jsx)(o.Text, {
variant: 'text-md/semibold',
className: t,
children: i.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  });
};