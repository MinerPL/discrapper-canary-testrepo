var a = t(735250);
t(470079);
var n = t(780384),
  i = t(481060),
  r = t(410030),
  l = t(689938),
  o = t(866152),
  c = t(982404),
  u = t(299156);
s.Z = function(e) {
  let {
churnUserDiscountOffer: s,
onDiscountClaim: t,
onContinue: _
  } = e, d = (0, r.ZP)(), I = (0, n.wj)(d) ? c : u;
  return null == s ? null : (0, a.jsxs)('div', {
className: o.churnFooterContainer,
children: [
  (0, a.jsx)('div', {
    className: o.churnFooterGlow
  }),
  (0, a.jsx)('div', {
    className: o.churnFooterTopBorder
  }),
  (0, a.jsx)('div', {
    className: o.churnFooterContent,
    children: (0, a.jsxs)('div', {
      className: o.churnFooterContentBody,
      children: [
        (0, a.jsx)('img', {
          alt: '',
          src: I,
          className: o.churnFooterIcon
        }),
        (0, a.jsxs)('div', {
          className: o.churnFooterContentBodyInner,
          children: [
            (0, a.jsx)(i.Text, {
              variant: 'text-md/medium',
              className: o.churnFooterCopy,
              children: l.Z.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
                percent: s.discount.amount,
                numMonths: s.discount.user_usage_limit
              })
            }),
            (0, a.jsxs)('div', {
              className: o.churnFooterCTAs,
              children: [
                (0, a.jsxs)(i.ShinyButton, {
                  className: o.churnFooterClaimCTA,
                  innerClassName: o.churnFooterClaimCTAInner,
                  look: i.ButtonLooks.OUTLINED,
                  color: i.ButtonColors.CUSTOM,
                  onClick: () => null == t ? void 0 : t(),
                  children: [
                    (0, a.jsx)(i.NitroWheelIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: o.churnFooterClaimIcon
                    }),
                    (0, a.jsx)(i.Text, {
                      variant: 'text-sm/semibold',
                      className: o.churnFooterClaimCopy,
                      children: l.Z.Messages.CHURN_DISCOUNT_CLAIM
                    })
                  ]
                }),
                (0, a.jsx)(i.Button, {
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