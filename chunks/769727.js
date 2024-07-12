n(47120);
var i, s, a = n(735250),
  r = n(470079),
  l = n(338545),
  o = n(143927),
  c = n(704215),
  d = n(481060),
  u = n(442837),
  _ = n(393238),
  h = n(607070),
  E = n(963202),
  I = n(353093),
  m = n(605236),
  g = n(931515),
  p = n(807933),
  T = n(702646),
  S = n(207796),
  C = n(543550),
  f = n(895068),
  N = n(921944),
  A = n(540736);
(s = i || (i = {})).TOP_PICKS = 'top_picks', s.OTHER_GUILDS = 'other_guilds';
let Z = {
mass: 1,
tension: 600,
friction: 60
  },
  L = r.memo(function(e) {
let {
  width: t
} = e, n = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), i = (0, S.GN)(e => e.mode, o.Z), [s, d] = r.useState(!0), _ = (0, l.useSpring)({
  from: {
    opacity: 0
  },
  to: {
    opacity: i === S.v0.GET_STARTED ? 0 : 1
  },
  config: Z,
  delay: 500,
  immediate: n,
  onRest: () => d(!1)
}), g = (0, S.GN)(e => e.userUpsellScreen, o.Z), L = (0, S.GN)(e => e.started, o.Z), {
  guilds: v
} = (0, E.C3)({
  location: 'ClanDiscoveryAdminContainer',
  includeConverted: !0
}), O = r.useMemo(() => v.filter(e => !(0, I.EJ)(e)), [v]), {
  enableApplication: R
} = (0, E.Fg)('ClanDiscoveryAdminContainer'), x = (0, m.wE)(c.z.NEW_GAMING_DISCOVERY_NOTIF);
switch (r.useEffect(() => {
    !x && (0, m.EW)(c.z.NEW_GAMING_DISCOVERY_NOTIF, {
      dismissAction: N.L.TAKE_ACTION,
      forceTrack: !0
    });
  }, [x]), r.useEffect(() => {
    let e = v.length > 0;
    if (e && !R && g === S.o2.USER_UPSELL) {
      (0, S.fH)(S.v0.ADMIN_UPSELL);
      return;
    }
    if (!e && R && !L) {
      (0, S.fH)(S.v0.GET_STARTED);
      return;
    }
    if (R && i === S.v0.ADMIN_UPSELL && 0 === O.length) {
      (0, S.fH)(S.v0.GET_STARTED), S.GN.getState().setUserUpsellScreen(S.o2.USER_UPSELL);
      return;
    }
  }, [
    O.length,
    v.length,
    L,
    R,
    i,
    g
  ]), i) {
  case S.v0.ADMIN_UPSELL:
    return (0, a.jsx)(C.$, {});
  case S.v0.GET_STARTED:
    return (0, a.jsx)(C.J, {});
  case S.v0.DISCOVERY:
  case S.v0.GAMES:
  case S.v0.PLAYSTYLE:
  case S.v0.TRAITS:
    return (0, a.jsxs)('div', {
      className: A.discoveryContainer,
      children: [
        (0, a.jsx)(l.animated.div, {
          className: A.toolbar,
          style: {
            opacity: _.opacity,
            transform: _.opacity.to([
              0,
              1
            ], [
              -40,
              0
            ]).to(e => 'translateY('.concat(e, 'px)')),
            borderBottom: '1px solid var(--bg-mod-strong)'
          },
          children: (0, a.jsx)(T.Z, {})
        }),
        (0, a.jsx)(l.animated.div, {
          className: A.content,
          style: {
            opacity: _.opacity,
            transform: _.opacity.to([
              0,
              1
            ], [
              40,
              0
            ]).to(e => 'translateY('.concat(e, 'px)'))
          },
          children: (0, a.jsx)(f.ZP, {
            width: t,
            isAnimating: s
          })
        }),
        (0, a.jsx)('div', {
          className: A.selectors,
          children: (0, a.jsx)(p.Z, {
            mode: i
          })
        })
      ]
    });
}
  });
t.Z = r.memo(function() {
  let {
loading: e
  } = (0, g.LE)(), {
ref: t,
width: n
  } = (0, _.Z)();
  return (0, a.jsxs)('main', {
className: A.container,
ref: t,
children: [
  (0, a.jsx)('div', {
    className: A.dragRegion
  }),
  e ? (0, a.jsx)('div', {
    className: A.loading,
    children: (0, a.jsx)(d.Spinner, {})
  }) : (0, a.jsx)(L, {
    width: null != n ? n : 0
  })
]
  });
});