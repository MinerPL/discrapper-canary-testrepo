t.d(s, {
  Z: function() {
return _;
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(230711),
  r = t(2052),
  o = t(434650),
  d = t(906732),
  c = t(436774),
  u = t(690221),
  h = t(626135),
  N = t(197115),
  S = t(474936),
  E = t(981631),
  g = t(689938),
  m = t(638853);

function _(e) {
  let {
onClose: s
  } = e, t = (0, r.O)(), {
analyticsLocations: _
  } = (0, d.ZP)(), [T, x] = i.useState(!1), I = i.useCallback(e => {
if (!T && !!e)
  h.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
    type: S.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
    location: t.location,
    location_stack: _
  }), x(!0);
  }, [
t.location,
_,
T
  ]), O = (0, o.O)(I, 0.8, !0);
  return (0, n.jsxs)('div', {
ref: O,
className: m.container,
children: [
  (0, n.jsx)(l.NitroWheelIcon, {
    size: 'md',
    color: c.JX.PREMIUM_TIER_2,
    className: m.nitroWheel
  }),
  (0, n.jsxs)(l.Text, {
    className: m.text,
    variant: 'text-sm/normal',
    children: [
      g.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_UPSELL,
      ' ',
      (0, n.jsx)(u.Z, {
        onClick: () => {
          s(), a.Z.open(E.oAB.PREMIUM);
        },
        children: g.Z.Messages.LEARN_MORE
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: m.nitroButton,
    children: (0, n.jsx)(N.Z, {
      showGradient: !0,
      buttonText: g.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
      size: l.Button.Sizes.SMALL,
      shinyButtonClassName: m.nitroButton,
      subscriptionTier: S.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: E.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL
      }
    })
  })
]
  });
}