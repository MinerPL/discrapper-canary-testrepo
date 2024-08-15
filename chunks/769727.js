n(47120);
var i, a, s = n(735250),
  r = n(470079),
  l = n(338545),
  o = n(143927),
  c = n(704215),
  d = n(481060),
  u = n(393238),
  _ = n(963202),
  E = n(353093),
  h = n(605236),
  m = n(931515),
  I = n(807933),
  g = n(702646),
  p = n(207796),
  T = n(543550),
  S = n(895068),
  f = n(921944),
  C = n(69878);
(a = i || (i = {})).TOP_PICKS = 'top_picks', a.OTHER_GUILDS = 'other_guilds';
let N = new Set([
p.v0.ADMIN_UPSELL,
p.v0.DISCOVERY
  ]),
  A = {
mass: 1,
tension: 600,
friction: 60
  },
  v = r.memo(function(e) {
let {
  mode: t,
  width: n
} = e, [i, a] = r.useState(!0), o = (0, d.useSpring)({
  from: {
    opacity: 0
  },
  to: {
    opacity: t === p.v0.GET_STARTED ? 0 : 1
  },
  config: A,
  delay: 500,
  onRest: () => a(!1)
}), u = (0, h.wE)(c.z.NEW_GAMING_DISCOVERY_NOTIF);
switch (r.useEffect(() => {
    !u && (0, h.EW)(c.z.NEW_GAMING_DISCOVERY_NOTIF, {
      dismissAction: f.L.TAKE_ACTION,
      forceTrack: !0
    });
  }, [u]), t) {
  case p.v0.ADMIN_UPSELL:
    return (0, s.jsx)(T.$, {});
  case p.v0.GET_STARTED:
    return (0, s.jsx)(T.J, {
      containerWidth: n
    });
  case p.v0.DISCOVERY:
  case p.v0.GAMES:
  case p.v0.PLAYSTYLE:
  case p.v0.TRAITS:
  case p.v0.PREFERENCES:
    return (0, s.jsxs)('div', {
      className: C.discoveryContainer,
      children: [
        (0, s.jsx)(l.animated.div, {
          className: C.toolbar,
          style: {
            opacity: o.opacity,
            transform: o.opacity.to([
              0,
              1
            ], [
              -40,
              0
            ]).to(e => 'translateY('.concat(e, 'px)'))
          },
          children: (0, s.jsx)(g.Z, {})
        }),
        (0, s.jsx)(l.animated.div, {
          className: C.content,
          style: {
            opacity: o.opacity,
            transform: o.opacity.to([
              0,
              1
            ], [
              40,
              0
            ]).to(e => 'translateY('.concat(e, 'px)'))
          },
          children: (0, s.jsx)(S.ZP, {
            width: n,
            isAnimating: i,
            variant: (0, S.s)(t)
          })
        }),
        (0, s.jsx)('div', {
          className: C.selectors,
          children: (0, s.jsx)(I.Z, {
            mode: t
          })
        })
      ]
    });
  case p.v0.SAVED_GUILDS:
    return (0, s.jsxs)('div', {
      className: C.discoveryContainer,
      children: [
        (0, s.jsx)('div', {
          className: C.toolbar,
          children: (0, s.jsx)(g.Z, {})
        }),
        (0, s.jsx)('div', {
          className: C.content,
          children: (0, s.jsx)(S.ZP, {
            width: n,
            isAnimating: i,
            variant: (0, S.s)(t)
          })
        }),
        (0, s.jsx)('div', {
          className: C.selectors,
          children: (0, s.jsx)(I.Z, {
            mode: t
          })
        })
      ]
    });
}
  });

function Z(e) {
  let {
mode: t,
children: n
  } = e, i = (0, p.GN)(e => e.userUpsellScreen, o.Z), a = (0, p.GN)(e => e.started, o.Z), {
guilds: l
  } = (0, _.C3)({
location: 'ClanDiscoveryAdminContainer',
includeConverted: !0
  }), c = r.useMemo(() => l.filter(e => !(0, E.EJ)(e)), [l]), {
enableApplication: d
  } = (0, _.Fg)('ClanDiscoveryAdminContainer');
  return r.useEffect(() => {
let e = l.length > 0;
if (e && !d && i === p.o2.USER_UPSELL) {
  (0, p.fH)(p.v0.ADMIN_UPSELL);
  return;
}
let n = N.has(t);
if (!e && d && !a && n) {
  (0, p.fH)(p.v0.GET_STARTED);
  return;
}
if (d && t === p.v0.ADMIN_UPSELL && 0 === c.length) {
  (0, p.fH)(p.v0.GET_STARTED), p.GN.getState().setUserUpsellScreen(p.o2.USER_UPSELL);
  return;
}
  }, [
c.length,
l.length,
a,
d,
t,
i
  ]), (0, s.jsx)(s.Fragment, {
children: n
  });
}
t.Z = r.memo(function() {
  let {
loading: e
  } = (0, m.LE)(), t = (0, p.GN)(e => e.mode, o.Z), {
ref: n,
width: i
  } = (0, u.Z)();
  return (0, s.jsxs)('main', {
className: C.container,
ref: n,
children: [
  (0, s.jsx)('div', {
    className: C.dragRegion
  }),
  e ? (0, s.jsx)('div', {
    className: C.loading,
    children: (0, s.jsx)(d.Spinner, {})
  }) : (0, s.jsx)(Z, {
    mode: t,
    children: (0, s.jsx)(v, {
      width: i,
      mode: t
    })
  })
]
  });
});