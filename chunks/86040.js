s.d(n, {
  C: function() {
return c;
  },
  N: function() {
return o;
  }
});
var l = s(735250);
s(470079);
var t = s(481060),
  i = s(285952),
  r = s(689938),
  a = s(454234);
let c = e => {
let {
  className: n,
  isEmailResent: s,
  resendEmail: i
} = e;
return (0, l.jsx)('div', {
  className: n,
  children: (0, l.jsxs)('div', {
    className: a.awaitingWrapper,
    children: [
      (0, l.jsx)(t.Heading, {
        variant: 'heading-xl/bold',
        children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
      }),
      (0, l.jsxs)('p', {
        children: [
          (0, l.jsx)(t.Text, {
            variant: 'text-md/normal',
            children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
          }),
          (0, l.jsx)('br', {}),
          (0, l.jsx)(t.Text, {
            variant: 'text-md/normal',
            children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
          }),
          (0, l.jsx)('br', {}),
          (0, l.jsxs)(t.Text, {
            variant: 'text-md/normal',
            children: [
              r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT,
              '\xA0',
              s ? r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, l.jsx)(t.Anchor, {
                onClick: i,
                children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
              })
            ]
          })
        ]
      })
    ]
  })
});
  },
  o = () => (0, l.jsx)('div', {
children: (0, l.jsx)(t.ModalFooter, {
  justify: i.Z.Justify.BETWEEN,
  align: i.Z.Align.CENTER,
  children: (0, l.jsx)(t.Button, {
    'data-testid': 'continue',
    color: t.Button.Colors.BRAND,
    disabled: !0,
    children: r.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
  })
})
  });