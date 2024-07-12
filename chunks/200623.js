s.r(a), s.d(a, {
  default: function() {
return C;
  }
});
var r = s(735250),
  t = s(470079),
  n = s(442837),
  d = s(481060),
  c = s(277390),
  o = s(639351),
  i = s(63063),
  l = s(258609),
  f = s(259408),
  u = s(893387),
  m = s(927923),
  x = s(981631),
  _ = s(689938),
  N = s(255789);

function h(e) {
  let {
step: a,
instructions: s
  } = e;
  return (0, r.jsxs)('div', {
className: N.cardRow,
children: [
  (0, r.jsx)('div', {
    className: N.stepNumberContainer,
    children: (0, r.jsx)(d.Text, {
      variant: 'text-sm/semibold',
      className: N.stepNumber,
      children: a
    })
  }),
  (0, r.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'header-primary',
    className: N.instructions,
    children: s
  })
]
  });
}

function C(e) {
  let {
channel: a,
transitionState: s,
onClose: C
  } = e, p = (0, n.e7)([l.Z], () => null != l.Z.getRemoteSessionId()), g = (0, f.Z)(a, {
forQRCode: !0
  });
  return t.useEffect(() => {
p && C();
  }, [
p,
C
  ]), t.useEffect(() => {
(0, u.Z)(a.id, m.YE.XBOX);
  }, [a.id]), (0, r.jsxs)(d.ModalRoot, {
size: d.ModalSize.DYNAMIC,
className: N.modalRoot,
transitionState: s,
children: [
  (0, r.jsxs)(d.ModalHeader, {
    separator: !1,
    className: N.modalHeaderContainer,
    children: [
      (0, r.jsx)(d.Heading, {
        className: N.modalHeader,
        variant: 'heading-xl/extrabold',
        children: _.Z.Messages.TRANSFER_VOICE_TO_XBOX
      }),
      (0, r.jsx)(d.Text, {
        variant: 'text-md/medium',
        color: 'header-secondary',
        children: _.Z.Messages.XBOX_APP_REQUIRED_SUBHEADER
      })
    ]
  }),
  (0, r.jsx)(d.ModalContent, {
    className: N.content,
    children: (0, r.jsxs)('div', {
      className: N.card,
      children: [
        (0, r.jsxs)('div', {
          className: N.cardText,
          children: [
            (0, r.jsxs)(d.Text, {
              variant: 'text-lg/semibold',
              color: 'header-primary',
              className: N.cardRow,
              children: [
                (0, r.jsx)(o.Z, {
                  className: N.cardHeaderIcon
                }),
                _.Z.Messages.XBOX_APP_FOR_MOBILE
              ]
            }),
            (0, r.jsx)(h, {
              step: 1,
              instructions: _.Z.Messages.XBOX_APP_STEP_ONE
            }),
            (0, r.jsx)(h, {
              step: 2,
              instructions: _.Z.Messages.XBOX_APP_STEP_TWO
            }),
            (0, r.jsx)(d.Text, {
              variant: 'text-sm/medium',
              children: (0, r.jsx)(d.Anchor, {
                className: N.learnMore,
                href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                children: _.Z.Messages.LEARN_MORE
              })
            })
          ]
        }),
        (0, r.jsx)(c.ZP, {
          className: N.qrCode,
          size: 120,
          text: g
        })
      ]
    })
  }),
  (0, r.jsx)(d.ModalCloseButton, {
    className: N.closeButton,
    onClick: C
  })
]
  });
}