s.d(t, {
  c: function() {
return h;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(37234),
  l = s(100527),
  c = s(906732),
  d = s(94795),
  _ = s(327943),
  E = s(539873),
  u = s(311476),
  T = s(197115),
  I = s(626135),
  S = s(981631),
  N = s(474936),
  C = s(689938),
  m = s(245732),
  A = s(549856);
let g = () => {
(0, d.nJ)(), (0, o.xf)();
  },
  h = () => {
let {
  analyticsLocations: e
} = (0, c.ZP)(l.Z.USER_SETTINGS), t = (0, i.e7)([_.Z], () => _.Z.isUpsellPreview), {
  enabled: s
} = u.Z.getCurrentConfig({
  location: 'UserSettingsAppearanceInAppIcon'
}, {
  autoTrackExposure: t,
  disable: !t
});
return a.useEffect(() => {
  t && I.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
    type: N.cd.APP_ICON_UPSELL,
    location_stack: e
  });
}, []), (0, n.jsxs)('div', {
  className: m.selectionGroup,
  children: [
    (0, n.jsx)(E.Z, {
      disabled: t && !s,
      renderCTAButtons: () => (0, n.jsxs)('div', {
        className: m.tryItOutButtons,
        children: [
          (0, n.jsx)(r.Button, {
            color: !s && t ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
            onClick: () => g(),
            children: s ? C.Z.Messages.PREVIEW : C.Z.Messages.APP_ICON_PREVIEW_TITLE
          }),
          t ? (0, n.jsx)(T.Z, {
            showGradient: s,
            subscriptionTier: N.Si.TIER_2,
            buttonText: s ? C.Z.Messages.PREMIUM_UPSELL_GET_NITRO : C.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          }) : null
        ]
      })
    }),
    (0, n.jsx)(r.FormDivider, {
      className: A.marginTop20
    })
  ]
});
  };