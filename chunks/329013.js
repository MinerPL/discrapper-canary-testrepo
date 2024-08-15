t.d(s, {
  g: function() {
return P;
  },
  i: function() {
return D;
  }
});
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(704215),
  o = t(481060),
  l = t(37234),
  c = t(100527),
  d = t(906732),
  _ = t(238302),
  E = t(514361),
  u = t(705262),
  I = t(605236),
  T = t(104494),
  S = t(639119),
  N = t(311476),
  C = t(165583),
  m = t(197115),
  A = t(504983),
  g = t(626135),
  O = t(981631),
  h = t(921944),
  p = t(474936),
  R = t(689938),
  x = t(582889),
  M = t(224499);
let f = () => {
(0, I.EW)(r.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
  dismissAction: h.L.PRIMARY,
  forceTrack: !0
}), (0, _.Kq)(), (0, l.xf)();
  },
  D = () => {
var e, s;
let {
  analyticsLocations: t
} = (0, d.ZP)(c.Z.USER_SETTINGS), r = (0, i.e7)([E.Z], () => E.Z.isPreview), l = (null === (s = (0, S.N)()) || void 0 === s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === p.Si.TIER_2, _ = (0, T.Ng)(), I = (0, T.Wp)(_, p.Si.TIER_2), h = !r || l, {
  enabled: D
} = N.Z.getCurrentConfig({
  location: 'UserSettingsAppearanceClientThemes'
}, {
  autoTrackExposure: !h,
  disable: h
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
      buttonText: D ? R.Z.Messages.PREMIUM_UPSELL_GET_NITRO : I ? R.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == _ ? void 0 : _.discount.amount
      }) : R.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      className: x.premiumCta
    })
  ]
});
return a.useEffect(() => {
  r && g.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
    type: p.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
    location_stack: t
  });
}, [
  r,
  t
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