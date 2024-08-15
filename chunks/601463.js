n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(338545),
  r = n(481060),
  l = n(532490),
  o = n(620929),
  c = n(689938),
  d = n(629209);

function u(e) {
  let {
guildId: t,
signed: n,
setSigned: u,
sidebarWidth: _,
windowWidth: E,
transition: h,
brandPrimaryColor: m
  } = e, I = a.useMemo(() => (E - _) / 2, [
_,
E
  ]);
  return (0, i.jsxs)('div', {
className: d.sidebarContent,
children: [
  h((e, t) => t && (0, i.jsx)(s.animated.div, {
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
      width: I
    },
    children: (0, i.jsxs)('div', {
      className: d.sidebarLeftDecoration,
      style: {
        width: I
      },
      children: [
        (0, i.jsx)(r.Heading, {
          variant: 'heading-xxl/medium',
          className: d.header,
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
      signed: n,
      onSignCharter: e => null == u ? void 0 : u(e),
      signHintPosition: l.p.RIGHT,
      primaryColor: m,
      className: d.charterScroll,
      fullHeight: !0,
      showDisclaimer: !0
    })
  })
]
  });
}