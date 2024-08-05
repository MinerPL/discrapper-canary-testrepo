n(47120);
var i, a, s = n(735250),
  r = n(470079),
  l = n(338545),
  o = n(143927),
  c = n(704215),
  d = n(481060),
  u = n(393238),
  _ = n(963202),
  h = n(353093),
  E = n(605236),
  I = n(931515),
  m = n(807933),
  g = n(702646),
  p = n(207796),
  T = n(543550),
  S = n(895068),
  f = n(921944),
  C = n(540736);
(a = i || (i = {})).TOP_PICKS = 'top_picks', a.OTHER_GUILDS = 'other_guilds';
let N = {
mass: 1,
tension: 600,
friction: 60
  },
  A = r.memo(function(e) {
let {
  width: t
} = e, n = (0, p.GN)(e => e.mode, o.Z), [i, a] = r.useState(!0), u = (0, d.useSpring)({
  from: {
    opacity: 0
  },
  to: {
    opacity: n === p.v0.GET_STARTED ? 0 : 1
  },
  config: N,
  delay: 500,
  onRest: () => a(!1)
}), I = (0, p.GN)(e => e.userUpsellScreen, o.Z), A = (0, p.GN)(e => e.started, o.Z), {
  guilds: v
} = (0, _.C3)({
  location: 'ClanDiscoveryAdminContainer',
  includeConverted: !0
}), Z = r.useMemo(() => v.filter(e => !(0, h.EJ)(e)), [v]), {
  enableApplication: L
} = (0, _.Fg)('ClanDiscoveryAdminContainer'), O = (0, E.wE)(c.z.NEW_GAMING_DISCOVERY_NOTIF);
switch (r.useEffect(() => {
    !O && (0, E.EW)(c.z.NEW_GAMING_DISCOVERY_NOTIF, {
      dismissAction: f.L.TAKE_ACTION,
      forceTrack: !0
    });
  }, [O]), r.useEffect(() => {
    let e = v.length > 0;
    if (e && !L && I === p.o2.USER_UPSELL) {
      (0, p.fH)(p.v0.ADMIN_UPSELL);
      return;
    }
    if (!e && L && !A) {
      (0, p.fH)(p.v0.GET_STARTED);
      return;
    }
    if (L && n === p.v0.ADMIN_UPSELL && 0 === Z.length) {
      (0, p.fH)(p.v0.GET_STARTED), p.GN.getState().setUserUpsellScreen(p.o2.USER_UPSELL);
      return;
    }
  }, [
    Z.length,
    v.length,
    A,
    L,
    n,
    I
  ]), n) {
  case p.v0.ADMIN_UPSELL:
    return (0, s.jsx)(T.$, {});
  case p.v0.GET_STARTED:
    return (0, s.jsx)(T.J, {});
  case p.v0.DISCOVERY:
  case p.v0.GAMES:
  case p.v0.PLAYSTYLE:
  case p.v0.TRAITS:
  case p.v0.SAVED_GUILDS:
    return (0, s.jsxs)('div', {
      className: C.discoveryContainer,
      children: [
        (0, s.jsx)(l.animated.div, {
          className: C.toolbar,
          style: {
            opacity: u.opacity,
            transform: u.opacity.to([
              0,
              1
            ], [
              -40,
              0
            ]).to(e => 'translateY('.concat(e, 'px)')),
            borderBottom: '1px solid var(--bg-mod-strong)'
          },
          children: (0, s.jsx)(g.Z, {})
        }),
        (0, s.jsx)(l.animated.div, {
          className: C.content,
          style: {
            opacity: u.opacity,
            transform: u.opacity.to([
              0,
              1
            ], [
              40,
              0
            ]).to(e => 'translateY('.concat(e, 'px)'))
          },
          children: (0, s.jsx)(S.ZP, {
            width: t,
            isAnimating: i,
            variant: (0, S.s)(n)
          })
        }),
        (0, s.jsx)('div', {
          className: C.selectors,
          children: (0, s.jsx)(m.Z, {
            mode: n
          })
        })
      ]
    });
}
  });
t.Z = r.memo(function() {
  let {
loading: e
  } = (0, I.LE)(), {
ref: t,
width: n
  } = (0, u.Z)();
  return (0, s.jsxs)('main', {
className: C.container,
ref: t,
children: [
  (0, s.jsx)('div', {
    className: C.dragRegion
  }),
  e ? (0, s.jsx)('div', {
    className: C.loading,
    children: (0, s.jsx)(d.Spinner, {})
  }) : (0, s.jsx)(A, {
    width: null != n ? n : 0
  })
]
  });
});