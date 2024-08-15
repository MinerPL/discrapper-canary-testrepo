n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(338545),
  s = n(481060),
  l = n(871499),
  r = n(689938),
  o = n(126888);
let c = (0, a.animated)(e => {
  let {
percentComplete: t
  } = e, n = 20;
  return (0, i.jsx)('svg', {
className: o.countdown,
width: 40,
height: 40,
viewBox: '0 0 '.concat(40, ' ').concat(40),
children: (0, i.jsx)('circle', {
  style: {
    strokeDashoffset: Math.round(100 * t)
  },
  className: o.progress,
  cx: n,
  cy: n,
  r: n - 6,
  fill: 'none',
  stroke: '#4F545C',
  pathLength: '100'
})
  });
});

function u(e) {
  let {
totalCooldownSeconds: t,
remainingCooldownSeconds: n,
onClick: u,
onKeyDown: d,
onMouseEnter: h,
onMouseLeave: m,
isActive: p = !1,
isCenterButton: _ = !1,
...f
  } = e, E = n > 0, g = (0, s.useSpring)({
percentComplete: 0 !== n ? (t - n) / t : 0,
config: {
  ...a.config.molasses,
  duration: 1000
}
  }, 'animate-always'), C = E ? r.Z.Messages.VOICE_CHANNEL_EFFECTS_COOLDOWN.format({
seconds: n
  }) : void 0, I = _ ? l.d : l.Z;
  return (0, i.jsxs)('div', {
className: o.container,
children: [
  E ? (0, i.jsx)(c, {
    percentComplete: g.percentComplete
  }) : null,
  (0, i.jsx)(I, {
    ...f,
    disabled: E,
    label: C,
    iconComponent: s.ReactionIcon,
    onClick: u,
    onKeyDown: d,
    onMouseEnter: h,
    onMouseLeave: m,
    isActive: p,
    grow: !1
  })
]
  });
}