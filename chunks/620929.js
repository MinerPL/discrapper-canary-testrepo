n.d(t, {
  p: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(913527),
  o = n.n(r),
  c = n(442837),
  d = n(481060),
  u = n(430824),
  h = n(650461),
  p = n(353093),
  m = n(105671),
  _ = n(532490),
  f = n(979264),
  E = n(570938),
  C = n(550271),
  g = n(116175),
  I = n(308083),
  x = n(689938),
  T = n(322591);

function v(e) {
  let {
guildId: t,
tag: n,
badge: a,
primaryColor: l,
secondaryColor: s
  } = e;
  return null == n || 0 === n.length ? (0, i.jsx)('div', {
className: T.placeholderIcon,
children: (0, i.jsx)(E.Z, {
  height: 42,
  width: 42
})
  }) : (0, i.jsx)(f.aG, {
guildId: t,
className: T.charterClanTag,
clanTag: n,
textVariant: 'heading-lg/semibold',
textColor: 'text-normal',
badgeSize: I.NC.SIZE_24,
clanBadge: (0, i.jsx)(C.A, {
  className: T.charterClanBadge,
  badge: a,
  width: I.NC.SIZE_24,
  height: I.NC.SIZE_24,
  primaryTintColor: l,
  secondaryTintColor: s
})
  });
}

function N(e) {
  let {
applicationIds: t,
playstyle: n,
className: l
  } = e, r = a.useMemo(() => Array.from(t), [t]), o = (0, m.i)(r), c = a.useMemo(() => {
if (null == o)
  return null;
let e = (0, I.mv)(n);
return null == e ? x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
  games: o
}) : x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
  playstyle: e,
  games: o
});
  }, [
o,
n
  ]);
  return (0, i.jsx)(d.Text, {
variant: 'text-sm/normal',
color: 'text-muted',
className: s()(T.overviewText, l),
children: null == c ? x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : c
  });
}
t.Z = 12633 == n.j ? e => {
  let {
guildId: t
  } = e, n = (0, h.Wg)(), l = (0, c.e7)([u.Z], () => {
var e, n;
return null !== (n = null === (e = u.Z.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : '';
  }), {
gameApplicationIds: s,
playstyle: r,
interests: m,
tag: f,
badgeKind: E,
badgePrimaryColor: C,
badgeSecondaryColor: S
  } = (0, c.cj)([h.ZP], () => {
var e;
return null !== (e = h.ZP.getStateForGuild(t).progress) && void 0 !== e ? e : n;
  }), Z = a.useMemo(() => (null == m ? void 0 : m.size) > 0 ? (0, p.f6)(Array.from(m), I.nt) : null, [m]);
  return (0, i.jsxs)(_.Z, {
...e,
children: [
  (0, i.jsx)(v, {
    guildId: t,
    tag: f,
    badge: E,
    primaryColor: null != C ? C : g.Nh,
    secondaryColor: null != S ? S : g.vY
  }),
  (0, i.jsx)(d.Heading, {
    variant: 'heading-xl/normal',
    color: 'text-muted',
    className: T.overviewHeaderPrelude,
    children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
  }),
  (0, i.jsx)(d.Heading, {
    variant: 'heading-xl/bold',
    color: 'interactive-active',
    className: T.overviewGuildName,
    children: l
  }),
  (0, i.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    className: T.overviewText,
    children: x.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
      date: o()().format('MMMM YYYY')
    })
  }),
  (0, i.jsx)(N, {
    applicationIds: s,
    playstyle: r
  }),
  null != Z ? (0, i.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    className: T.overviewText,
    children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
      traits: Z
    })
  }) : null,
  (0, i.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    className: T.overviewText,
    children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
  })
]
  });
} : null;