n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(197115),
  r = n(834129),
  l = n(981631),
  o = n(474936),
  c = n(689938),
  u = n(364497);

function d(e) {
  let {
message: t,
channel: n
  } = e, d = null != n.guild_id ? l.jXE.TEXT_IN_VOICE : l.jXE.CHANNEL_TEXT_AREA;
  return (0, i.jsx)(r.Z, {
contentClassName: u.messageContentContainer,
iconContainerClassName: u.iconContainer,
iconNode: (0, i.jsx)(a.BellIcon, {
  colorClass: u.icon
}),
children: (0, i.jsxs)('div', {
  className: u.container,
  children: [
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsx)(a.Text, {
          variant: 'text-sm/medium',
          children: t.content
        }),
        (0, i.jsxs)('div', {
          className: u.nitroBadge,
          children: [
            (0, i.jsx)(a.NitroWheelIcon, {
              size: 'xs',
              colorClass: u.nitroBadgeIcon
            }),
            (0, i.jsx)(a.Text, {
              variant: 'text-xs/medium',
              className: u.nitroBadgeText,
              children: c.Z.Messages.POWERED_BY_NITRO
            })
          ]
        })
      ]
    }),
    (0, i.jsx)('div', {
      className: u.buttonContainer,
      children: (0, i.jsx)(s.Z, {
        showGradient: !0,
        iconClassName: u.premiumIcon,
        subscriptionTier: o.Si.TIER_2,
        buttonText: c.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: a.Button.Sizes.SMALL,
        premiumModalAnalyticsLocation: {
          section: d,
          object: l.qAy.MESSAGE
        }
      })
    })
  ]
})
  });
}