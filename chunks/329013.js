s.d(t, {
  g: function() {
return f;
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
  N = s(165583),
  C = s(197115),
  m = s(504983),
  A = s(626135),
  h = s(981631),
  g = s(921944),
  O = s(474936),
  p = s(689938),
  R = s(823749),
  x = s(549856);
let M = () => {
(0, T.EW)(r.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
  dismissAction: g.L.PRIMARY,
  forceTrack: !0
}), (0, _.bM)(), (0, l.xf)();
  },
  D = () => {
var e, t;
let {
  analyticsLocations: s
} = (0, d.ZP)(c.Z.USER_SETTINGS), r = (0, i.e7)([E.Z], () => E.Z.isPreview), l = (null === (t = (0, S.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.Si.TIER_2, _ = (0, I.Ng)(), T = (0, I.Wp)(_, O.Si.TIER_2);
return a.useEffect(() => {
  r && A.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
    type: O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
    location_stack: s
  });
}, [
  r,
  s
]), (0, n.jsxs)('div', {
  children: [
    (0, n.jsxs)(u.ZP, {
      type: u.yH.SETTINGS,
      children: [
        (0, n.jsx)(u.ZP.Basic, {
          className: R.basicThemeSelectors
        }),
        (0, n.jsxs)(m.Z, {
          className: R.featureBorder,
          isShown: r,
          type: m.Y.PREMIUM,
          children: [
            (0, n.jsx)(u.ZP.Gradient, {
              disabled: r,
              renderCTAButtons: () => !r || l ? null : (0, n.jsxs)('div', {
                className: R.tryItOutButtons,
                children: [
                  (0, n.jsx)(o.Button, {
                    color: o.Button.Colors.PRIMARY,
                    onClick: () => M(),
                    children: p.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
                  }),
                  (0, n.jsx)(C.Z, {
                    subscriptionTier: O.Si.TIER_2,
                    buttonText: T ? p.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
                      percent: null == _ ? void 0 : _.discount.amount
                    }) : p.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                    className: R.premiumCta
                  })
                ]
              })
            }),
            l && r && (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(o.Button, {
                  className: R.previewThemeButtonWide,
                  color: o.Button.Colors.PRIMARY,
                  onClick: () => M(),
                  children: p.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
                }),
                (0, n.jsx)('div', {
                  className: R.premiumTier2Divider
                }),
                (0, n.jsx)(N.ZP, {
                  type: O.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                  subscriptionTier: O.Si.TIER_2
                })
              ]
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: x.marginTop20
    })
  ]
});
  },
  f = () => (0, i.e7)([E.Z], () => E.Z.isPreview) ? null : (0, n.jsx)(o.Button, {
size: o.ButtonSizes.SMALL,
onClick: () => M(),
children: p.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
  });