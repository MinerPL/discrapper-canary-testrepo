s.r(t), s.d(t, {
  SafetyToolsSlides: function() {
return T;
  }
}), s(47120);
var T, o, n = s(735250),
  a = s(470079),
  l = s(481060),
  _ = s(285952),
  i = s(367408),
  r = s(473092),
  S = s(419672),
  E = s(858597),
  c = s(486213),
  O = s(689938),
  d = s(14188);
(o = T || (T = {})).ACTIONS = 'ACTIONS', o.SAFETY_TIPS = 'SAFETY_TIPS', o.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS';
t.default = e => {
  let {
onClose: t,
channelId: s,
warningId: T,
warningType: o,
otherUserId: A,
transitionState: u
  } = e, I = null != (0, i.M)(s), [L, N] = a.useState('ACTIONS'), C = a.useCallback(e => {
(0, r.qc)({
  channelId: s,
  warningId: T,
  warningType: o,
  senderId: A,
  cta: e,
  isNudgeWarning: I
});
  }, [
s,
T,
o,
A,
I
  ]), R = a.useCallback(e => {
let {
  text: t,
  onClick: s
} = e;
return (0, n.jsx)(l.Button, {
  look: l.Button.Looks.LINK,
  size: l.Button.Sizes.MIN,
  onClick: s,
  color: l.Button.Colors.CUSTOM,
  className: d.footerLink,
  children: t
});
  }, []), x = a.useCallback(() => {
switch (L) {
  case 'SAFETY_TIPS':
  case 'ABOUT_SAFETY_ALERTS':
    return (0, n.jsx)(R, {
      text: O.Z.Messages.BACK,
      onClick: () => N('ACTIONS')
    });
  default:
    return null;
}
  }, [
L,
R
  ]), M = a.useCallback(() => {
switch (L) {
  case 'SAFETY_TIPS':
    return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
  case 'ABOUT_SAFETY_ALERTS':
    return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
  default:
    return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER;
}
  }, [L]), F = a.useCallback(e => {
N(e);
  }, [N]);
  return (0, n.jsxs)(l.ModalRoot, {
transitionState: u,
'aria-label': O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
size: l.ModalSize.SMALL,
children: [
  (0, n.jsx)(l.ModalHeader, {
    separator: !1,
    className: d.modalHeader,
    justify: _.Z.Justify.CENTER,
    children: (0, n.jsx)(l.Heading, {
      variant: 'heading-xl/semibold',
      children: M()
    })
  }),
  (0, n.jsx)(l.Scroller, {
    children: (0, n.jsxs)(l.Slides, {
      activeSlide: L,
      width: 440,
      children: [
        (0, n.jsx)(l.Slide, {
          id: 'ACTIONS',
          children: (0, n.jsx)(E.Z, {
            otherUserId: A,
            channelId: s,
            warningId: T,
            warningType: o,
            transitionToSlide: F
          })
        }),
        (0, n.jsx)(l.Slide, {
          id: 'ABOUT_SAFETY_ALERTS',
          children: (0, n.jsx)(S.Z, {
            channelId: s,
            onClose: () => {
              t(), C(r.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
            }
          })
        }),
        (0, n.jsx)(l.Slide, {
          id: 'SAFETY_TIPS',
          children: (0, n.jsx)(c.Z, {})
        })
      ]
    })
  }),
  (0, n.jsxs)(l.ModalFooter, {
    justify: _.Z.Justify.BETWEEN,
    children: [
      (0, n.jsx)(R, {
        text: O.Z.Messages.CLOSE,
        onClick: () => {
          t(), C(r.NM.USER_SAFETY_TOOLS_DISMISS);
        }
      }),
      x()
    ]
  })
]
  });
};