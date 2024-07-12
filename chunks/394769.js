var r = n(735250);
n(470079);
var i = n(338545),
  a = n(399606),
  o = n(481060),
  s = n(607070),
  l = n(346656),
  u = n(678558),
  c = n(981631),
  d = n(65389);
t.Z = function(e) {
  let {
closeLayer: t,
guild: n,
isVisible: _
  } = e, E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), f = (0, i.useSpring)({
transform: _ ? 'translateY(-100%)' : 'translateY(0%)',
opacity: _ ? 1 : 0,
config: {
  tension: 120,
  friction: 12
},
immediate: E
  });
  return (0, r.jsx)(i.animated.div, {
className: d.wrapper,
style: f,
children: (0, r.jsxs)('div', {
  className: d.innerWrapper,
  children: [
    (0, r.jsxs)('div', {
      className: d.guildInfo,
      children: [
        (0, r.jsx)(l.Z, {
          className: d.guildIcon,
          guild: n,
          size: l.Z.Sizes.LARGER
        }),
        (0, r.jsx)(o.Heading, {
          className: d.guildName,
          variant: 'text-lg/bold',
          children: n.name
        })
      ]
    }),
    (0, r.jsx)(u.Z, {
      className: d.ctaButton,
      guild: n,
      analyticsLocation: {
        page: c.ZY5.PREMIUM_GUILD_USER_MODAL,
        section: c.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
        object: c.qAy.BUTTON_CTA,
        objectType: c.Qqv.BUY
      },
      closeLayer: t,
      pauseAnimation: !_,
      size: o.Button.Sizes.LARGE
    })
  ]
})
  });
};