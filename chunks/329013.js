s.d(t, {
  g: function() {
return P;
  },
  i: function() {
return D;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(704215),
  o = s(481060),
  l = s(37234),
  c = s(100527),
  d = s(906732),
  _ = s(238302),
  E = s(514361),
  u = s(705262),
  T = s(605236),
  I = s(104494),
  S = s(639119),
  N = s(311476),
  C = s(165583),
  m = s(197115),
  A = s(504983),
  g = s(626135),
  h = s(981631),
  O = s(921944),
  p = s(474936),
  R = s(689938),
  x = s(823749),
  M = s(549856);
let f = () => {
(0, T.EW)(r.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
  dismissAction: O.L.PRIMARY,
  forceTrack: !0
}), (0, _.Kq)(), (0, l.xf)();
  },
  D = () => {
var e, t;
let {
  analyticsLocations: s
} = (0, d.ZP)(c.Z.USER_SETTINGS), r = (0, i.e7)([E.Z], () => E.Z.isPreview), l = (null === (t = (0, S.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === p.Si.TIER_2, _ = (0, I.Ng)(), T = (0, I.Wp)(_, p.Si.TIER_2), O = !r || l, {
  enabled: D
} = N.Z.getCurrentConfig({
  location: 'UserSettingsAppearanceClientThemes'
}, {
  autoTrackExposure: !O,
  disable: O
}), P = () => !r || l ? null : (0, n.jsxs)('div', {
  className: x.tryItOutButtons,
  children: [
    (0, n.jsx)(o.Button, {
      color: D ? o.Button.Colors.BRAND : o.Button.Colors.PRIMARY,
      onClick: () => f(),
      children: D ? R.Z.Messages.PREVIEW : R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
    }),
    (0, n.jsx)(m.Z, {
      showGradient: D,
      subscriptionTier: p.Si.TIER_2,
      buttonText: D ? R.Z.Messages.PREMIUM_UPSELL_GET_NITRO : T ? R.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == _ ? void 0 : _.discount.amount
      }) : R.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      className: x.premiumCta
    })
  ]
});
return a.useEffect(() => {
  r && g.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
    type: p.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
    location_stack: s
  });
}, [
  r,
  s
]), (0, n.jsxs)('div', {
  children: [
    (0, n.jsx)(u.ZP, {
      type: u.yH.SETTINGS,
      children: D ? (0, n.jsx)(u.ZP.BasicAndGradient, {
        className: x.basicThemeSelectors,
        renderCTAButtons: P
      }) : (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(u.ZP.Basic, {
            className: x.basicThemeSelectors
          }),
          (0, n.jsxs)(A.Z, {
            className: x.featureBorder,
            isShown: r,
            type: A.Y.PREMIUM,
            children: [
              (0, n.jsx)(u.ZP.Gradient, {
                disabled: r,
                renderCTAButtons: P
              }),
              l && r && (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)(o.Button, {
                    className: x.previewThemeButtonWide,
                    color: o.Button.Colors.PRIMARY,
                    onClick: () => f(),
                    children: R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
                  }),
                  (0, n.jsx)('div', {
                    className: x.premiumTier2Divider
                  }),
                  (0, n.jsx)(C.ZP, {
                    type: p.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                    subscriptionTier: p.Si.TIER_2
                  })
                ]
              })
            ]
          })
        ]
      })
    }),
    (0, n.jsx)(o.FormDivider, {
      className: M.marginTop20
    })
  ]
});
  },
  P = () => (0, i.e7)([E.Z], () => E.Z.isPreview) ? null : (0, n.jsx)(o.Button, {
size: o.ButtonSizes.SMALL,
onClick: () => f(),
children: R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
  });