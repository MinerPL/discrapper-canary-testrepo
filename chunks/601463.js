n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(481060),
  l = n(532490),
  o = n(620929),
  c = n(689938),
  d = n(433369);

function u(e) {
  let {
guildId: t,
signed: n,
setSigned: u,
sidebarWidth: _,
windowWidth: h,
transition: E,
brandPrimaryColor: I
  } = e, m = s.useMemo(() => (h - _) / 2, [
_,
h
  ]);
  return (0, i.jsxs)('div', {
className: d.sidebarContent,
children: [
  E((e, t) => t && (0, i.jsx)(a.animated.div, {
    className: d.sidebarLeftDecorationContainer,
    style: {
      opacity: e.opacity,
      transform: e.opacity.to([
        0,
        1
      ], [
        40,
        0
      ]).to(e => 'translateY('.concat(e, 'px)')),
      width: m
    },
    children: (0, i.jsxs)('div', {
      className: d.sidebarLeftDecoration,
      style: {
        width: m
      },
      children: [
        (0, i.jsx)(r.Heading, {
          variant: 'heading-xxl/medium',
          children: c.Z.Messages.CLAN_SETUP_SIGN_TITLE
        }),
        (0, i.jsx)(r.Text, {
          variant: 'text-md/normal',
          color: 'text-muted',
          children: c.Z.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })
      ]
    })
  })),
  (0, i.jsx)('div', {
    className: d.charterScrollContainer,
    children: (0, i.jsx)(o.Z, {
      guildId: t,
      canSignCharter: null != u,
      onSignCharter: () => null == u ? void 0 : u(!n),
      signHintPosition: l.p.RIGHT,
      primaryColor: I,
      className: d.charterScroll,
      fullHeight: !0
    })
  })
]
  });
}