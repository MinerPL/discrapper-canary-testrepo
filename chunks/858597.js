var o = s(735250),
  T = s(470079),
  n = s(120356),
  a = s.n(n),
  l = s(442837),
  i = s(692547),
  r = s(481060),
  _ = s(194359),
  S = s(782568),
  c = s(726521),
  E = s(485664),
  O = s(699516),
  d = s(941362),
  u = s(367408),
  A = s(423932),
  I = s(473092),
  L = s(611446),
  C = s(993750),
  N = s(134612),
  R = s(689938),
  x = s(265262);

function M(e) {
  let {
children: t
  } = e;
  return (0, o.jsx)('div', {
className: x.actionGroup,
children: t
  });
}

function F(e) {
  let {
title: t,
subTitle: s,
buttonText: T,
buttonColor: n,
onPress: a
  } = e;
  return (0, o.jsxs)('div', {
className: x.actionRow,
children: [
  (0, o.jsxs)('div', {
    className: x.actionButtonDetails,
    children: [
      (0, o.jsx)(r.Text, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: t
      }),
      (0, o.jsx)(r.Text, {
        variant: 'text-xs/medium',
        color: 'header-secondary',
        children: s
      })
    ]
  }),
  (0, o.jsx)(r.Button, {
    size: r.Button.Sizes.SMALL,
    color: n,
    onClick: a,
    children: T
  })
]
  });
}

function h(e) {
  let {
title: t,
onPress: s
  } = e;
  return (0, o.jsxs)(r.Clickable, {
className: a()(x.actionRow, x.clickableActionRow),
onClick: s,
children: [
  (0, o.jsx)(r.Text, {
    variant: 'text-md/semibold',
    color: 'header-primary',
    children: t
  }),
  (0, o.jsx)(r.ChevronSmallRightIcon, {
    size: 'md',
    color: i.Z.colors.INTERACTIVE_NORMAL
  })
]
  });
}
t.Z = function(e) {
  let {
otherUserId: t,
channelId: n,
warningId: a,
warningType: i,
transitionToSlide: x
  } = e, B = (0, E.o)(), p = (0, d.q)(n), b = null != (0, u.M)(n), Y = (0, l.e7)([O.Z], () => O.Z.isBlocked(t)), Z = T.useCallback(e => {
(0, I.qc)({
  channelId: n,
  warningId: a,
  senderId: t,
  warningType: i,
  cta: e,
  isNudgeWarning: b
});
  }, [
n,
a,
t,
i,
b
  ]), m = T.useCallback(() => {
(0, r.closeModal)(N.X_), Z(I.NM.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
  }, [Z]), f = T.useCallback(() => {
_.Z.unblockUser(t, {
  location: N.DL
}), Z(I.NM.USER_SAFETY_TOOLS_UNBLOCK);
  }, [
t,
Z
  ]), j = T.useCallback(() => {
(0, r.closeModal)(N.X_), Z(I.NM.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
  }, [Z]), P = T.useMemo(() => {
let e = {
    title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_TITLE,
    subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_TEXT_LINE_SUBTITLE,
    buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_CRISIS_BUTTON,
    buttonColor: r.ButtonColors.PRIMARY,
    onPress: () => {
      (0, S.Z)(N.EI), Z(I.NM.USER_SAFETY_TOOLS_CTL);
    }
  },
  T = {
    title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_TITLE,
    subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_SUBTITLE,
    buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_NO_FILTR_BUTTON,
    buttonColor: r.ButtonColors.PRIMARY,
    onPress: () => {
      (0, S.Z)(N.n4), Z(I.NM.USER_SAFETY_TOOLS_NO_FILTR);
    }
  };
return [{
    title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
    subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_SUBTITLE,
    buttonText: Y ? R.Z.Messages.INAPPROPRIATE_CONVERSATION_UNBLOCK : R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BLOCK_TITLE,
    buttonColor: r.ButtonColors.BRAND,
    onPress: () => {
      Y ? f() : (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.e('41128').then(s.bind(s, 699783));
        return s => {
          let {
            transitionState: T,
            onClose: a
          } = s;
          return (0, o.jsx)(e, {
            transitionState: T,
            onBlock: m,
            onBlockAndReport: j,
            onCancel: () => {
              null == a || a(), Z(I.NM.USER_SAFETY_TOOLS_BLOCK_CANCEL);
            },
            onClose: a,
            userId: t,
            channelId: n
          });
        };
      });
    }
  },
  {
    title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
    subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_SUBTITLE,
    buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_REPORT_TITLE,
    buttonColor: r.ButtonColors.PRIMARY,
    onPress: () => {
      (0, r.closeModal)(N.X_), (0, c.wk)(p), Z(I.NM.USER_SAFETY_TOOLS_REPORT);
    }
  },
  B ? e : T,
  {
    title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_TITLE,
    subTitle: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_SUBTITLE,
    buttonText: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_BREAK_BUTTON,
    buttonColor: r.ButtonColors.PRIMARY,
    onPress: () => {
      (0, A.Z)(r.closeAllModals), Z(I.NM.USER_SAFETY_TOOLS_VIBING_WUMPUS);
    }
  }
];
  }, [
Y,
B,
Z,
f,
m,
j,
t,
n,
p
  ]), g = T.useMemo(() => [{
  title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE,
  onPress: () => {
    x(L.SafetyToolsSlides.SAFETY_TIPS), Z(I.NM.USER_SAFETY_TOOLS_SAFETY_TIPS);
  }
},
{
  title: R.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE,
  onPress: () => {
    x(L.SafetyToolsSlides.ABOUT_SAFETY_ALERTS), Z(I.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
  }
}
  ], [
x,
Z
  ]);
  return (0, o.jsxs)(C.Z, {
children: [
  (0, o.jsx)(M, {
    children: P.map(e => {
      let {
        title: t,
        subTitle: s,
        buttonText: T,
        buttonColor: n,
        onPress: a
      } = e;
      return (0, o.jsx)(F, {
        title: t,
        subTitle: s,
        buttonText: T,
        buttonColor: n,
        onPress: a
      }, t);
    })
  }),
  (0, o.jsx)(M, {
    children: g.map(e => {
      let {
        title: t,
        onPress: s
      } = e;
      return (0, o.jsx)(h, {
        title: t,
        onPress: s
      }, t);
    })
  })
]
  });
};