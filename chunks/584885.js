n(653041);
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(570140),
  l = n(906732),
  o = n(451603),
  c = n(885714),
  d = n(514611),
  u = n(127541),
  _ = n(981631),
  h = n(378042);
let E = [
[
  1696,
  20
],
[
  1432,
  16
],
[
  1168,
  12
],
[
  0,
  8
]
  ],
  I = [
[
  1696,
  30
],
[
  1432,
  24
],
[
  1168,
  18
],
[
  0,
  12
]
  ];
t.Z = e => {
  let t, {
title: n,
subtitle: m,
guildsData: g,
analyticsContext: p,
theme: T,
onViewGuild: S,
fetchGuilds: C,
onGuildCardSeen: f,
currentCategoryId: N,
loadId: A,
onTagClick: Z,
showMoreCards: L = !1
  } = e;
  s.useEffect(() => {
r.Z.wait(() => C());
  }, [N]);
  let v = (0, u.Z)(L ? I : E),
{
  analyticsLocations: O
} = (0, l.ZP)();
  if (null == g)
return null;
  let {
guilds: R,
loading: x
  } = g, b = null == R || 0 === R.length;
  if (!x && b)
return null;
  let P = async e => {
if ((0, o.yU)())
  (0, c.Z)({
    analyticsSource: {
      page: _.ZY5.GUILD_DISCOVERY
    },
    analyticsLocation: {
      page: _.ZY5.GUILD_DISCOVERY,
      section: _.jXE.GUILD_CAP_UPSELL_MODAL
    },
    analyticsLocations: O
  });
else {
  let t = R.findIndex(t => t.id === e);
  await S(e, t, p, A);
}
  };
  if (x || null == R) {
let e = [];
for (let t = 0; t < v; t++)
  e.push((0, i.jsx)(d.Z.Placeholder, {}, t));
t = e;
  } else
t = R.slice(0, v).map(e => (0, i.jsx)(d.Z, {
  className: h.__invalid_guildCard,
  guild: e,
  onView: P,
  theme: T,
  onGuildCardSeen: f,
  onTagClick: Z
}, e.id));
  return (0, i.jsx)('section', {
className: h.guildListSection,
children: (0, i.jsxs)(a.HeadingLevel, {
  component: (0, i.jsx)(a.Heading, {
    className: h.__invalid_title,
    variant: 'heading-lg/semibold',
    children: n
  }),
  children: [
    null != m && (0, i.jsx)(a.Text, {
      className: h.subtitle,
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: m
    }),
    (0, i.jsx)('div', {
      className: h.guildList,
      children: t
    })
  ]
})
  });
};