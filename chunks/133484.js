s.d(t, {
  Z: function() {
return C;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(481060),
  r = s(410030),
  o = s(100527),
  l = s(906732),
  c = s(197115),
  d = s(626135),
  _ = s(74538),
  E = s(981631),
  u = s(474936),
  T = s(689938),
  I = s(468105),
  S = s(699623),
  N = s(820350);

function C(e) {
  let {
user: t,
showOverlay: s,
children: C
  } = e, m = (0, r.ZP)(), {
analyticsLocations: A
  } = (0, l.ZP)(o.Z.PREMIUM_UPSELL_OVERLAY);
  return (a.useEffect(() => {
s && d.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
  location_stack: A,
  type: u.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
});
  }, [
s,
A
  ]), s) ? (0, n.jsxs)('div', {
className: I.upsellOverlayContainer,
children: [
  (0, n.jsx)('div', {
    children: C
  }),
  (0, n.jsxs)('div', {
    className: I.upsellOverlay,
    children: [
      (0, n.jsx)('img', {
        className: I.upsellImage,
        alt: T.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_IMAGE_ALT,
        src: function(e) {
          switch (e) {
            case E.BRd.DARK:
              return S;
            case E.BRd.LIGHT:
              return N;
          }
        }(m)
      }),
      (0, n.jsxs)('div', {
        className: I.upsellTextContainer,
        children: [
          (0, n.jsx)(i.Text, {
            variant: 'text-lg/semibold',
            color: 'always-white',
            children: T.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_TITLE
          }),
          (0, n.jsx)(i.Text, {
            variant: 'text-sm/normal',
            color: 'always-white',
            children: T.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_DESCRIPTION_THEMES
          })
        ]
      }),
      (0, n.jsx)(c.Z, {
        size: i.Button.Sizes.LARGE,
        color: i.Button.Colors.GREEN,
        buttonText: _.ZP.isPremium(t) ? T.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : T.Z.Messages.CHANGE_IDENTITY_UPSELL,
        subscriptionTier: u.Si.TIER_2
      })
    ]
  })
]
  }) : (0, n.jsx)(n.Fragment, {
children: C
  });
}