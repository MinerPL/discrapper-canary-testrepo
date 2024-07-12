s.d(n, {
  Z: function() {
return C;
  }
}), s(47120);
var a = s(735250),
  t = s(470079),
  l = s(120356),
  i = s.n(l),
  o = s(442837),
  r = s(481060),
  c = s(570140),
  d = s(285952),
  _ = s(236289),
  E = s(788080),
  N = s(613734),
  u = s(800530),
  x = s(689938),
  A = s(65877),
  I = s(291205);

function C(e) {
  let {
isDsaEligible: n = !1,
className: s,
onClose: l,
onNext: C,
onBack: S
  } = e, T = (0, N.U0)(), m = (0, o.e7)([_.Z], () => _.Z.getFreeTextAppealReason()), [h, M] = t.useState(''), [L, g] = t.useState(!1);
  t.useEffect(() => {
M(null != m ? m : ''), g(T === u.bK.SOMETHING_ELSE);
  }, [
m,
T
  ]);
  let O = e => {
  g(e === u.bK.SOMETHING_ELSE), e !== u.bK.SOMETHING_ELSE && (M(''), c.Z.dispatch({
    type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
    userInput: ''
  })), c.Z.dispatch({
    type: 'SAFETY_HUB_APPEAL_SIGNAL_SELECT',
    signal: e
  });
},
p = u.RY.map(e => ({
  value: e,
  name: (0, E.ox)(e)
}));
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)(r.ModalHeader, {
    direction: d.Z.Direction.VERTICAL,
    className: I.header,
    separator: !1,
    children: [
      (0, a.jsx)(r.Heading, {
        className: I.title,
        variant: 'heading-xl/semibold',
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
      }),
      (0, a.jsx)(r.Text, {
        className: I.subtitle,
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
      }),
      null != l && (0, a.jsx)(r.ModalCloseButton, {
        className: I.closeButton,
        onClick: l
      })
    ]
  }),
  (0, a.jsxs)(r.ModalContent, {
    className: i()(A.modalContent, s),
    paddingFix: !1,
    children: [
      (0, a.jsx)(r.RadioGroup, {
        radioPosition: 'right',
        radioItemClassName: I.radioItem,
        size: r.RadioGroup.Sizes.NOT_SET,
        value: T,
        options: p,
        onChange: e => {
          let {
            value: n
          } = e;
          return O(n);
        }
      }),
      L && (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(r.TextArea, {
            rows: 4,
            maxLength: 1024,
            placeholder: x.Z.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
            value: h,
            onChange: M,
            autoFocus: !0
          }),
          (0, a.jsx)(r.Text, {
            variant: 'text-sm/normal',
            color: 'header-muted',
            children: x.Z.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
          })
        ]
      }),
      (0, a.jsx)(r.Text, {
        variant: 'text-sm/normal',
        className: A.disclaimer,
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DISCLAIMER.format()
      })
    ]
  }),
  (0, a.jsxs)(r.ModalFooter, {
    children: [
      (0, a.jsx)(r.Button, {
        onClick: () => {
          c.Z.dispatch({
            type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
            userInput: h
          }), null == C || C();
        },
        color: r.Button.Colors.BRAND,
        children: x.Z.Messages.NEXT
      }),
      n && (0, a.jsx)(r.Button, {
        onClick: () => {
          c.Z.dispatch({
            type: 'SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE',
            userInput: h
          }), null == S || S();
        },
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        children: x.Z.Messages.BACK
      })
    ]
  })
]
  });
}