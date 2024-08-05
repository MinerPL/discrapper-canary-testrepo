a.r(s), a.d(s, {
  default: function() {
return C;
  }
});
var r = a(735250),
  t = a(470079),
  n = a(442837),
  d = a(481060),
  c = a(277390),
  o = a(639351),
  i = a(63063),
  l = a(258609),
  f = a(259408),
  u = a(893387),
  m = a(927923),
  x = a(981631),
  _ = a(689938),
  N = a(255789);

function h(e) {
  let {
step: s,
instructions: a
  } = e;
  return (0, r.jsxs)('div', {
className: N.cardRow,
children: [
  (0, r.jsx)('div', {
    className: N.stepNumberContainer,
    children: (0, r.jsx)(d.Text, {
      variant: 'text-sm/semibold',
      className: N.stepNumber,
      children: s
    })
  }),
  (0, r.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'header-primary',
    className: N.instructions,
    children: a
  })
]
  });
}

function C(e) {
  let {
channel: s,
transitionState: a,
onClose: C
  } = e, p = (0, n.e7)([l.Z], () => null != l.Z.getRemoteSessionId()), g = (0, f.Z)(s, {
forQRCode: !0
  });
  return t.useEffect(() => {
p && C();
  }, [
p,
C
  ]), t.useEffect(() => {
(0, u.Z)(s.id, m.YE.XBOX);
  }, [s.id]), (0, r.jsxs)(d.ModalRoot, {
size: d.ModalSize.DYNAMIC,
className: N.modalRoot,
transitionState: a,
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