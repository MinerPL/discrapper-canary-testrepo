t.d(A, {
  Z: function() {
return l;
  }
});
var a = t(735250);
t(470079);
var n = t(866442),
  r = t(481060),
  s = t(689938),
  o = t(744882);

function l(e) {
  let {
locked: A,
role: t,
textVariant: l = 'text-xs/medium'
  } = e, i = (0, r.useToken)(r.tokens.colors.INTERACTIVE_NORMAL).hex();
  return (0, a.jsx)('div', {
className: o.roleTagContainer,
children: (0, a.jsxs)('div', {
  className: o.roleTag,
  children: [
    (0, a.jsx)('div', {
      className: o.roleColor,
      style: {
        backgroundColor: (0, n.Rf)(t.color)
      }
    }),
    (0, a.jsx)(r.Spacer, {
      size: 8,
      horizontal: !0
    }),
    (0, a.jsxs)(r.Text, {
      variant: l,
      color: 'text-normal',
      children: [
        (0, a.jsx)(r.HiddenVisually, {
          children: s.Z.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
        }),
        t.name
      ]
    }),
    !0 === A && (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(r.Spacer, {
          size: 8,
          horizontal: !0
        }),
        (0, a.jsx)(r.LockIcon, {
          size: 'md',
          color: i
        })
      ]
    })
  ]
})
  });
}