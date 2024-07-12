s(47120);
var n = s(735250),
  a = s(470079),
  i = s(481060),
  r = s(484614),
  o = s(430492),
  l = s(153124),
  c = s(518638),
  d = s(689938),
  _ = s(925457);
t.Z = function(e) {
  let {
onClose: t,
onClaim: s,
code: E,
outboundPromotion: u,
transitionState: T
  } = e, [I, S] = a.useState(null), N = (0, l.Dt)();
  return a.useEffect(() => {
null == E && (0, c.A2)(u.id).then(e => s(e)).catch(e => {
  var t;
  return S(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code);
});
  }, [
E,
u.id,
s
  ]), (0, n.jsx)(i.ModalRoot, {
transitionState: T,
'aria-labelledby': N,
children: null != I ? (0, n.jsx)(o.L1, {
  onClose: t,
  errorCode: I
}) : null == E ? (0, n.jsx)(i.ModalContent, {
  children: (0, n.jsx)(i.Spinner, {
    className: _.loading
  })
}) : (0, n.jsxs)(n.Fragment, {
  children: [
    (0, n.jsxs)(i.ModalHeader, {
      separator: !1,
      className: _.headerContainer,
      children: [
        (0, n.jsx)('div', {
          className: _.art
        }),
        (0, n.jsx)(i.Heading, {
          variant: 'heading-xl/semibold',
          children: d.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
        })
      ]
    }),
    (0, n.jsxs)(i.ModalContent, {
      children: [
        (0, n.jsx)(i.Text, {
          variant: 'text-md/normal',
          className: _.bodyText,
          children: u.outboundRedemptionModalBody
        }),
        (0, n.jsx)(i.FormDivider, {
          className: _.formDivider
        }),
        (0, n.jsxs)(i.FormSection, {
          title: d.Z.Messages.REDEMPTION_CODE,
          className: _.formSection,
          children: [
            (0, n.jsx)(r.Z, {
              value: E,
              buttonColor: i.Button.Colors.BRAND,
              buttonLook: i.Button.Looks.FILLED,
              delay: 1000,
              inputClassName: _.textInput
            }),
            (0, n.jsx)(i.Text, {
              variant: 'text-xs/normal',
              color: 'header-secondary',
              className: _.confirmationText,
              children: d.Z.Messages.OUTBOUND_PROMOTION_CODE_CONFIRMATION_EMAIL
            })
          ]
        })
      ]
    }),
    (0, n.jsxs)(i.ModalFooter, {
      children: [
        (0, n.jsx)(i.Button, {
          color: i.Button.Colors.BRAND,
          onClick: () => {
            let e = (0, c.BU)(E, u);
            window.open(e, '_blank');
          },
          children: d.Z.Messages.REDEEM
        }),
        (0, n.jsx)(i.Button, {
          onClick: t,
          look: i.Button.Looks.LINK,
          color: _.maybeLaterButton,
          children: d.Z.Messages.MAYBE_LATER
        })
      ]
    })
  ]
})
  });
};