var t = n(735250);
n(470079);
var a = n(780384),
  i = n(481060),
  r = n(410030),
  l = n(689938),
  o = n(514686),
  c = n(982404),
  u = n(299156);
s.Z = function(e) {
  let {
churnUserDiscountOffer: s,
onDiscountClaim: n,
onContinue: _
  } = e, d = (0, r.ZP)(), I = (0, a.wj)(d) ? c : u;
  return null == s ? null : (0, t.jsxs)('div', {
className: o.churnFooterContainer,
children: [
  (0, t.jsx)('div', {
    className: o.churnFooterGlow
  }),
  (0, t.jsx)('div', {
    className: o.churnFooterTopBorder
  }),
  (0, t.jsx)('div', {
    className: o.churnFooterContent,
    children: (0, t.jsxs)('div', {
      className: o.churnFooterContentBody,
      children: [
        (0, t.jsx)('img', {
          alt: '',
          src: I,
          className: o.churnFooterIcon
        }),
        (0, t.jsxs)('div', {
          className: o.churnFooterContentBodyInner,
          children: [
            (0, t.jsx)(i.Text, {
              variant: 'text-md/medium',
              className: o.churnFooterCopy,
              children: l.Z.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
                percent: s.discount.amount,
                numMonths: s.discount.user_usage_limit
              })
            }),
            (0, t.jsxs)('div', {
              className: o.churnFooterCTAs,
              children: [
                (0, t.jsxs)(i.ShinyButton, {
                  className: o.churnFooterClaimCTA,
                  innerClassName: o.churnFooterClaimCTAInner,
                  look: i.ButtonLooks.OUTLINED,
                  color: i.ButtonColors.CUSTOM,
                  onClick: () => null == n ? void 0 : n(),
                  children: [
                    (0, t.jsx)(i.NitroWheelIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: o.churnFooterClaimIcon
                    }),
                    (0, t.jsx)(i.Text, {
                      variant: 'text-sm/semibold',
                      className: o.churnFooterClaimCopy,
                      children: l.Z.Messages.CHURN_DISCOUNT_CLAIM
                    })
                  ]
                }),
                (0, t.jsx)(i.Button, {
                  onClick: () => null == _ ? void 0 : _(),
                  children: l.Z.Messages.CONTINUE
                })
              ]
            })
          ]
        })
      ]
    })
  })
]
  });
};