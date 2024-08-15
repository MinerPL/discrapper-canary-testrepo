n.d(t, {
  U: function() {
return l;
  }
});
var s = n(735250);
n(470079);
var r = n(120356),
  a = n.n(r),
  i = n(481060),
  o = n(689938),
  c = n(613616);
let l = e => {
  let {
className: t,
isPartiallyPurchased: n
  } = e;
  return n ? (0, s.jsx)(i.Tooltip, {
tooltipClassName: c.partiallyOwnedDisclaimer,
position: 'top',
align: 'left',
text: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
children: e => (0, s.jsxs)('div', {
  className: a()(c.partialOwnStateContainer, t),
  ...e,
  children: [
    (0, s.jsx)('span', {
      className: c.iconWrapper,
      children: (0, s.jsx)(i.CircleInformationIcon, {
        size: 'md',
        color: 'currentColor',
        className: c.infoIcon
      })
    }),
    (0, s.jsx)(i.Text, {
      variant: 'text-md/semibold',
      children: o.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED
    })
  ]
})
  }) : (0, s.jsx)(i.Text, {
variant: 'text-md/semibold',
className: t,
children: o.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  });
};