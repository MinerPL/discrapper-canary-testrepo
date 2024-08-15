n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(866442),
  s = n(481060),
  r = n(689938),
  l = n(628428);

function o(e) {
  let {
locked: t,
role: n,
textVariant: o = 'text-xs/medium'
  } = e, c = (0, s.useToken)(s.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, i.jsx)('div', {
className: l.roleTagContainer,
children: (0, i.jsxs)('div', {
  className: l.roleTag,
  children: [
    (0, i.jsx)('div', {
      className: l.roleColor,
      style: {
        backgroundColor: (0, a.Rf)(n.color)
      }
    }),
    (0, i.jsx)(s.Spacer, {
      size: 8,
      horizontal: !0
    }),
    (0, i.jsxs)(s.Text, {
      variant: o,
      color: 'text-normal',
      children: [
        (0, i.jsx)(s.HiddenVisually, {
          children: r.Z.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }),
        n.name
      ]
    }),
    !0 === t && (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(s.Spacer, {
          size: 8,
          horizontal: !0
        }),
        (0, i.jsx)(s.LockIcon, {
          size: 'md',
          color: c
        })
      ]
    })
  ]
})
  });
}