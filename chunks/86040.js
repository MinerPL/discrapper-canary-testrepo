t.d(n, {
  C: function() {
return o;
  },
  N: function() {
return c;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(285952),
  s = t(689938),
  l = t(454234);
let o = e => {
let {
  className: n,
  isEmailResent: t,
  resendEmail: r
} = e;
return (0, i.jsx)('div', {
  className: n,
  children: (0, i.jsxs)('div', {
    className: l.awaitingWrapper,
    children: [
      (0, i.jsx)(a.Heading, {
        variant: 'heading-xl/bold',
        children: s.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
      }),
      (0, i.jsxs)('p', {
        children: [
          (0, i.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: s.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
          }),
          (0, i.jsx)('br', {}),
          (0, i.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: s.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
          }),
          (0, i.jsx)('br', {}),
          (0, i.jsxs)(a.Text, {
            variant: 'text-md/normal',
            children: [
              s.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
              '\xA0',
              t ? s.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, i.jsx)(a.Anchor, {
                onClick: r,
                children: s.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
              })
            ]
          })
        ]
      })
    ]
  })
});
  },
  c = () => (0, i.jsx)('div', {
children: (0, i.jsx)(a.ModalFooter, {
  justify: r.Z.Justify.BETWEEN,
  align: r.Z.Align.CENTER,
  children: (0, i.jsx)(a.Button, {
    'data-testid': 'continue',
    color: a.Button.Colors.BRAND,
    disabled: !0,
    children: s.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
  })
})
  });