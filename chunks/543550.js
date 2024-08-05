n.d(t, {
  $: function() {
return Z;
  },
  J: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(338545),
  o = n(143927),
  c = n(597312),
  d = n(481060),
  u = n(393238),
  _ = n(410030),
  h = n(963202),
  E = n(353093),
  I = n(702646),
  m = n(207796),
  g = n(497189),
  p = n(304231),
  T = n(895068),
  S = n(490610),
  f = n(981631),
  C = n(689938),
  N = n(813580);
let A = (e, t) => {
  switch (e) {
case m.hz.GENSHIN:
  return t === f.BRd.DARK ? N.genshinUpsellBackgroundImageDark : N.genshinUpsellBackgroundImageLight;
case m.hz.VALORANT:
  return t === f.BRd.DARK ? N.valorantUpsellBackgroundImageDark : N.valorantUpsellBackgroundImageLight;
  }
};

function v() {
  let e = (0, m.GN)(e => e.game, o.Z),
t = (0, m.GN)(e => e.mode, o.Z),
n = (0, m.GN)(e => e.userUpsellScreen, o.Z),
s = (0, m.GN)(e => e.setUserUpsellScreen, o.Z),
{
  ref: c,
  width: h
} = (0, u.Z)(),
[E, g] = a.useState(0),
S = (0, d.useSpring)({
  from: {
    scrollHeight: 0
  },
  to: {
    scrollHeight: E
  }
}),
C = (0, _.ZP)(),
v = a.useMemo(() => A(e, C), [
  e,
  C
]),
Z = a.useCallback(e => {
  g(e.currentTarget.scrollTop);
}, [g]),
L = a.useMemo(() => {
  switch (e) {
    case m.hz.GENSHIN:
      return C === f.BRd.DARK ? N.genshinOnboardingBackgroundImageDark : N.genshinOnboardingBackgroundImageLight;
    case m.hz.VALORANT:
      return C === f.BRd.DARK ? N.valorantOnboardingBackgroundImageDark : N.valorantOnboardingBackgroundImageLight;
  }
}, [
  e,
  C
]);
  switch (n) {
case m.o2.USER_UPSELL:
  return (0, i.jsxs)('div', {
    ref: c,
    className: N.container,
    children: [
      (0, i.jsx)('div', {
        className: N.toolbar,
        style: {
          width: h
        },
        children: (0, i.jsx)(I.Z, {})
      }),
      (0, i.jsxs)('div', {
        className: N.upsellContainer,
        children: [
          (0, i.jsxs)(l.animated.div, {
            className: N.backgroundImageContainer,
            style: {
              opacity: S.scrollHeight.to([
                0,
                240
              ], [
                1,
                0
              ])
            },
            children: [
              (0, i.jsx)('div', {
                className: v
              }),
              (0, i.jsx)('div', {
                className: N.backgroundImageBlur
              })
            ]
          }),
          (0, i.jsx)('div', {
            className: r()(N.backgroundImageContent, N.userUpsell),
            children: (0, i.jsx)(T.ZP, {
              onScroll: Z,
              width: null != h ? h : 0,
              isAnimating: !1,
              variant: (0, T.s)(t, T.Bj.UPSELL)
            })
          })
        ]
      })
    ]
  });
case m.o2.USER_ONBOARDING:
  return (0, i.jsx)('div', {
    className: N.container,
    children: (0, i.jsxs)('div', {
      className: r()(L, N.userOnboarding),
      children: [
        (0, i.jsx)('div', {
          className: N.backgroundImageBlur
        }),
        (0, i.jsx)('div', {
          className: N.backgroundImageContent,
          children: (0, i.jsx)(p.Z, {
            setScreen: s
          })
        })
      ]
    })
  });
  }
}

function Z() {
  let e = (0, m.GN)(e => e.game, o.Z),
{
  guilds: t
} = (0, h.C3)({
  location: 'ClanDiscoveryAdminContainer',
  includeConverted: !0
}),
n = a.useMemo(() => t.filter(e => !(0, E.EJ)(e)), [t]),
s = (0, _.ZP)(),
l = a.useMemo(() => A(e, s), [
  e,
  s
]);
  return 0 === t.length ? null : (0, i.jsx)('div', {
className: N.container,
children: (0, i.jsxs)(c.u2, {
  className: N.upsellScroller,
  fade: !0,
  children: [
    (0, i.jsxs)('div', {
      className: r()(l, N.adminUpsell),
      children: [
        (0, i.jsx)('div', {
          className: N.backgroundImageBlur
        }),
        (0, i.jsx)('div', {
          className: N.backgroundImageContent,
          children: (0, i.jsx)(g.Z, {
            eligibleGuilds: n,
            eligibleGuildsIncludingConverted: t
          })
        })
      ]
    }),
    (0, i.jsx)(S.Z, {
      title: C.Z.Messages.CLAN_DISCOVERY_INSPIRATION_TITLE
    })
  ]
})
  });
}