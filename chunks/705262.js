n.d(t, {
  Yk: function() {
return F;
  },
  yH: function() {
return r;
  }
}), n(627341), n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(278074),
  c = n(442837),
  d = n(524437),
  _ = n(481060),
  E = n(153867),
  f = n(607070),
  h = n(100527),
  p = n(906732),
  m = n(313201),
  I = n(540059),
  T = n(98278),
  g = n(639119),
  S = n(311476),
  A = n(165583),
  N = n(587446),
  v = n(210887),
  O = n(740492),
  R = n(626135),
  C = n(238302),
  y = n(514361),
  D = n(583901),
  L = n(469115),
  b = n(981631),
  M = n(474936),
  P = n(874893),
  U = n(526761),
  w = n(231338),
  x = n(689938),
  G = n(776133);
(i = r || (r = {})).EDITOR = 'EDITOR', i.SETTINGS = 'SETTINGS';
let k = Object.freeze({
EDITOR: U.fy.SLOW_USER_ACTION,
SETTINGS: U.fy.INFREQUENT_USER_ACTION
  }),
  B = s.createContext({}),
  F = e => {
let {
  isPersisted: t,
  themeName: n,
  analyticsLocations: r
} = e;
R.default.track(b.rMx.CLIENT_THEME_UPDATED, {
  feature_name: M.QP.CLIENT_THEME,
  theme_name: n,
  is_persisted: t,
  location_stack: r
});
  },
  V = e => {
let {
  type: t,
  isPreview: n,
  isCoachmark: r
} = e, {
  enabled: i
} = S.Z.useExperiment({
  location: 'GradientSelectorsTitle'
}, {
  autoTrackExposure: !1,
  disable: !n
}), s = (0, u.EQ)({
  type: t,
  isPreview: n,
  isCoachmark: r,
  appearanceUpsellExperimentEnabled: i
}).with({
  type: 'EDITOR',
  isCoachmark: !0,
  isPreview: !0
}, () => x.Z.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
  type: 'EDITOR',
  isCoachmark: !0
}, () => x.Z.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).with({
  appearanceUpsellExperimentEnabled: !0
}, () => x.Z.Messages.THEME).otherwise(() => x.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
return (0, a.jsxs)('div', {
  className: G.title,
  children: [
    (0, a.jsx)(_.Heading, {
      'aria-label': s,
      variant: 'text-md/medium',
      children: s
    }),
    (!i || 'EDITOR' === t) && (0, a.jsx)(N.Z, {
      className: G.premiumIcon
    })
  ]
});
  },
  H = e => {
var t, n;
let {
  type: r,
  isPreview: i,
  isCoachmark: s
} = e, o = (null === (n = (0, g.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === M.Si.TIER_2, {
  enabled: l
} = S.Z.useExperiment({
  location: 'GradientSelectorsTitle'
}, {
  autoTrackExposure: !1,
  disable: !i
});
if (o && i)
  return null;
let c = (0, u.EQ)({
  type: r,
  isPreview: i,
  isCoachmark: s
}).with({
  type: 'EDITOR',
  isPreview: !0
}, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
  onPremiumClick: T.z
})).with({
  type: 'EDITOR',
  isCoachmark: !0
}, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
  type: 'EDITOR',
  isPreview: !1
}, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
  isPreview: !0
}, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
  onPremiumClick: T.z
})).otherwise(() => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
return l ? (0, a.jsxs)('div', {
  className: G.description,
  children: [
    (0, a.jsx)(_.NitroWheelIcon, {
      size: 'md',
      color: 'currentColor',
      className: G.nitroWheel
    }),
    (0, a.jsx)(_.Heading, {
      variant: 'text-sm/normal',
      children: x.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
        onClick: () => {
          (0, T.$)();
        }
      })
    })
  ]
}) : (0, a.jsx)(_.Heading, {
  variant: 'text-sm/normal',
  children: c
});
  },
  Z = e => {
var t, n;
let {
  renderCTAButtons: r
} = e, {
  type: i
} = s.useContext(B), [o, l] = (0, c.Wu)([y.Z], () => [
  y.Z.isPreview,
  y.Z.isCoachmark
]), u = (null === (n = (0, g.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === M.Si.TIER_2;
return (0, a.jsx)(a.Fragment, {
  children: 'EDITOR' === i && o && u ? (0, a.jsx)(A.ZP, {
    type: M.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
    subscriptionTier: M.Si.TIER_2,
    children: x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
      onPremiumClick: T.z
    })
  }) : (0, a.jsxs)('div', {
    className: G.header,
    children: [
      (0, a.jsxs)('div', {
        className: G.headings,
        children: [
          (0, a.jsx)(V, {
            type: i,
            isPreview: o,
            isCoachmark: l
          }),
          (0, a.jsx)(H, {
            type: i,
            isPreview: o,
            isCoachmark: l
          })
        ]
      }),
      null == r ? void 0 : r()
    ]
  })
});
  },
  Y = e => {
let {
  disabled: t
} = e, {
  type: r,
  delay: i
} = s.useContext(B), {
  analyticsLocations: o
} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [l, u] = (0, c.Wu)([y.Z], () => {
  var e;
  return [
    y.Z.isPreview,
    null === (e = y.Z.gradientPreset) || void 0 === e ? void 0 : e.id
  ];
}), [m, I] = s.useState(!1), [T, g] = s.useState(-1), A = (0, c.e7)([f.Z], () => f.Z.useReducedMotion);
s.useEffect(() => {
  (T === L.XV.length - 2 && 'EDITOR' === r || u === d.Us.EASTER_EGG) && I(!0);
}, [
  T,
  r,
  u
]);
let {
  enabled: N
} = S.Z.useExperiment({
  location: 'useGradientSelectors'
}, {
  autoTrackExposure: !1
}), v = (e, t) => {
  if ((0, C.zO)(e.id), F({
      isPersisted: !l,
      analyticsLocations: o,
      themeName: d.Us[e.id]
    }), l && 'SETTINGS' === r && N) {
    (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('68192').then(n.bind(n, 742234));
      return t => (0, a.jsx)(e, {
        analyticsSource: h.Z.CLIENT_THEMES_THEME_SELECTOR,
        analyticsLocation: {
          section: b.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
          object: b.qAy.BUTTON_ICON
        },
        ...t,
        onClose: () => ((0, C.kj)(), t.onClose())
      });
    }, {
      onCloseCallback: C.kj
    });
    return;
  }
  if ((0, E.ZI)({
      backgroundGradientPresetId: e.id,
      theme: e.theme,
      useSystemTheme: l ? P.K.OFF : void 0
    }, i), null != t) {
    if (m && I(!1), t <= T || 0 === t) {
      g(0);
      return;
    }
    g(e => e + 1);
  }
};
return (0, a.jsxs)(a.Fragment, {
  children: [
    L.XV.filter(e => {
      let {
        id: t
      } = e;
      return t !== d.Us.EASTER_EGG;
    }).map((e, n) => (0, a.jsx)(D.DR, {
      preset: e,
      isSelected: u === e.id,
      onSelect: () => v(e, n),
      disabled: t,
      tabIndex: 0 !== n || t ? void 0 : 0,
      showBadge: !1,
      showLockedBadge: 'SETTINGS' === r && N && l
    }, e.id)),
    (() => {
      if (!m)
        return null;
      let e = L.qt[d.Us.EASTER_EGG];
      if (null == e)
        return null;
      async function t() {
        let {
          default: e
        } = await n.e('5217').then(n.t.bind(n, 801048, 19));
        return e;
      }
      return (0, a.jsxs)('div', {
        className: G.easterEggSelection,
        children: [
          (0, a.jsx)(D.DR, {
            preset: e,
            isSelected: u === d.Us.EASTER_EGG,
            onSelect: () => v(e)
          }),
          (0, a.jsx)(_.LottieAnimation, {
            importData: t,
            shouldAnimate: !A,
            className: G.sparkles
          })
        ]
      });
    })()
  ]
});
  },
  j = e => {
let {
  systemSelectorFirst: t
} = e, {
  delay: n
} = s.useContext(B), {
  analyticsLocations: r
} = (0, p.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [i, o, l] = (0, c.Wu)([
  v.Z,
  O.ZP,
  y.Z
], () => [
  v.Z.theme,
  null == y.Z.gradientPreset,
  O.ZP.useSystemTheme === P.K.ON
]), u = e => {
  (0, C.xs)(), F({
    isPersisted: !0,
    analyticsLocations: r,
    themeName: 'default '.concat(e)
  }), (0, E.ZI)({
    theme: e
  }, n);
}, d = (0, I.Q)('appearance_settings');
return (0, a.jsxs)(a.Fragment, {
  children: [
    t && (0, a.jsx)(D.bD, {
      theme: 'system',
      isSelected: o && l,
      onSelect: () => u('system')
    }),
    (0, a.jsx)(D.bD, {
      theme: w.BR.LIGHT,
      isSelected: o && !l && i === w.BR.LIGHT,
      onSelect: () => u(w.BR.LIGHT)
    }),
    (0, a.jsx)(D.bD, {
      theme: w.BR.DARK,
      isSelected: o && !l && i === w.BR.DARK,
      onSelect: () => u(w.BR.DARK)
    }),
    d && (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(D.bD, {
          theme: w.BR.DARKER,
          isSelected: o && !l && i === w.BR.DARKER,
          onSelect: () => u(w.BR.DARKER)
        }),
        (0, a.jsx)(D.bD, {
          theme: w.BR.MIDNIGHT,
          isSelected: o && !l && i === w.BR.MIDNIGHT,
          onSelect: () => u(w.BR.MIDNIGHT)
        })
      ]
    }),
    !t && (0, a.jsx)(D.bD, {
      theme: 'system',
      isSelected: o && l,
      onSelect: () => u('system')
    })
  ]
});
  },
  W = e => {
let {
  type: t,
  children: n
} = e, r = (0, m.Dt)(), i = (0, _.useRadioGroup)({
  orientation: 'horizontal',
  labelledBy: r
}), o = s.useMemo(() => ({
  type: t,
  delay: k[t]
}), [t]);
return (0, a.jsx)(B.Provider, {
  value: o,
  children: (0, a.jsx)('div', {
    ...i,
    className: G.__invalid_container,
    children: n
  })
});
  };
W.Basic = e => {
  let {
className: t
  } = e;
  return (0, a.jsx)('section', {
className: l()(G.presets, t),
children: (0, a.jsx)(j, {})
  });
}, W.Gradient = e => {
  let {
className: t,
renderCTAButtons: n,
disabled: r = !1
  } = e;
  return (0, a.jsxs)('section', {
className: t,
children: [
  (0, a.jsx)(Z, {
    renderCTAButtons: n
  }),
  (0, a.jsx)('div', {
    className: G.presets,
    children: (0, a.jsx)(Y, {
      disabled: r
    })
  })
]
  });
}, W.BasicAndGradient = e => {
  let {
isEditor: t,
className: n,
renderCTAButtons: r
  } = e, i = (0, c.e7)([y.Z], () => y.Z.isCoachmark);
  return (0, a.jsxs)('section', {
className: n,
children: [
  !t && (0, a.jsx)(Z, {
    renderCTAButtons: r
  }),
  t && i && (0, a.jsx)(_.Heading, {
    className: G.upsellText,
    variant: 'heading-sm/semibold',
    children: x.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
  }),
  (0, a.jsxs)('div', {
    className: l()(G.presets, {
      [G.presetsJustify]: t
    }),
    children: [
      (0, a.jsx)(j, {
        systemSelectorFirst: !0
      }),
      (0, a.jsx)(Y, {
        disabled: !1
      })
    ]
  })
]
  });
}, t.ZP = W;