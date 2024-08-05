n.d(t, {
  Z: function() {
return M;
  },
  _: function() {
return r;
  }
}), n(627341), n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(278074),
  l = n(442837),
  u = n(481060),
  c = n(230711),
  d = n(351773),
  _ = n(100527),
  E = n(94795),
  f = n(327943),
  h = n(539873),
  p = n(207164),
  m = n(238302),
  I = n(514361),
  T = n(572397),
  g = n(705262),
  S = n(197115),
  A = n(672752),
  N = n(727939),
  v = n(981631),
  O = n(921944),
  R = n(474936),
  C = n(689938),
  y = n(440443);

function D() {
  let e = (0, T.q)();
  return s.useEffect(() => ((0, m.Kq)(), e(v.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => e(v.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [e]), (0, a.jsx)(g.ZP, {
type: g.yH.EDITOR,
children: (0, a.jsx)(g.ZP.BasicAndGradient, {
  isEditor: !0
})
  });
}

function L() {
  let e = (0, p.Z)();
  return s.useEffect(() => {
(0, E.nJ)(), e();
  }, [e]), (0, a.jsx)(h.Z, {
isEditor: !0
  });
}

function b(e) {
  let {
tab: t,
isPreview: r,
isCoachmark: i,
onClose: l
  } = e, d = s.useCallback(() => {
l(), !i && c.Z.open();
  }, [
l,
i
  ]), E = (0, o.EQ)({
isPreview: r,
isCoachmark: i
  }).with({
isCoachmark: !0
  }, () => C.Z.Messages.CLOSE).with({
isPreview: !0
  }, () => C.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => C.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS), f = s.useCallback(() => {
if (1 === t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('69052').then(n.bind(n, 184250));
    return t => (0, a.jsx)(e, {
      analyticsSource: _.Z.APP_ICON_EDITOR,
      analyticsLocation: {
        section: v.jXE.SETTINGS_APP_ICONS
      },
      ...t
    });
  });
  return;
}
if (0 === t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('68192').then(n.bind(n, 742234));
    return t => (0, a.jsx)(e, {
      analyticsSource: _.Z.CLIENT_THEMES_EDITOR,
      analyticsLocation: {
        section: v.jXE.SETTINGS_CLIENT_THEMES
      },
      ...t
    });
  });
  return;
}
  }, [t]);
  return (0, a.jsxs)('div', {
className: y.footerContainer,
children: [
  r && (0, a.jsxs)('div', {
    className: y.footerLabelContainer,
    children: [
      (0, a.jsx)(u.NitroWheelIcon, {
        className: y.footerNitro,
        size: 'xs',
        color: A.JX.PREMIUM_TIER_2
      }),
      (0, a.jsx)(u.Text, {
        className: y.footerText,
        variant: 'text-sm/medium',
        children: C.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
          onClick: f
        })
      })
    ]
  }),
  (0, a.jsxs)('div', {
    className: y.footerButtonContainer,
    children: [
      (0, a.jsx)(u.Button, {
        className: y.footerButton,
        color: u.ButtonColors.PRIMARY,
        onClick: d,
        children: E
      }),
      r && (0, a.jsx)(S.Z, {
        className: y.footerButton,
        subscriptionTier: R.Si.TIER_2,
        showGradient: !0,
        buttonText: C.Z.Messages.PREMIUM_UPSELL_GET_NITRO
      })
    ]
  })
]
  });
}

function M(e) {
  let {
initialTab: t,
markAsDismissed: n
  } = e, [r, i] = s.useState(t), o = s.useMemo(() => [{
  name: C.Z.Messages.THEME,
  value: 0
},
{
  name: C.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
  value: 1
}
  ], []), c = (0, l.e7)([I.Z], () => I.Z.isPreview), _ = (0, l.e7)([f.Z], () => f.Z.isUpsellPreview), h = c || _, p = (0, T.J)(), g = s.useCallback(() => {
c && p(), _ && (0, E.O7)();
  }, [
c,
_,
p
  ]), S = (0, d.Z)(null, h ? g : v.dG4), A = s.useCallback(() => {
(0, E.G8)(), (0, m.Mo)(), g(), null == n || n(O.L.DISMISS);
  }, [
g,
n
  ]);
  return (0, a.jsx)(N.Z, {
className: y.draggableContainer,
children: (0, a.jsxs)('div', {
  ref: S,
  className: y.container,
  children: [
    (0, a.jsxs)('div', {
      className: y.headerParentContainer,
      children: [
        (0, a.jsxs)('div', {
          className: y.headerContainer,
          children: [
            (0, a.jsx)(u.Heading, {
              variant: 'heading-lg/extrabold',
              children: C.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_APP_ICONS_PREVIEW_TITLE
            }),
            (0, a.jsx)(u.ModalCloseButton, {
              className: y.closeContainer,
              innerClassName: y.closeInner,
              withCircleBackground: !0,
              onClick: A
            })
          ]
        }),
        (0, a.jsx)(u.SegmentedControl, {
          options: o,
          value: r,
          onChange: e => {
            let {
              value: t
            } = e;
            return i(t);
          },
          look: 'pill'
        })
      ]
    }),
    (0, a.jsxs)(u.Scroller, {
      className: y.scrollContainer,
      children: [
        0 === r && (0, a.jsx)(D, {}),
        1 === r && (0, a.jsx)(L, {})
      ]
    }),
    (0, a.jsx)(b, {
      tab: r,
      isPreview: h,
      onClose: A,
      isCoachmark: !1
    })
  ]
})
  });
}
(i = r || (r = {}))[i.CLIENT_THEMES = 0] = 'CLIENT_THEMES', i[i.APP_ICONS = 1] = 'APP_ICONS';