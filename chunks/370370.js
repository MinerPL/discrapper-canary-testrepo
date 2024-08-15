var i = n(735250),
  a = n(470079),
  s = n(297781),
  l = n(443487),
  r = n(43205),
  o = n(797342),
  c = n(182022);
let u = [
  s.OV,
  s.Af,
  s.pQ
];
t.Z = a.memo(e => {
  let {
entry: t,
channel: n,
selected: a,
hovered: d
  } = e, {
iconUrl: h,
iconTitle: m
  } = (0, o.n)(t);
  return (0, i.jsxs)(l.Zb, {
selected: a,
children: [
  (0, i.jsxs)(l.e$, {
    children: [
      (0, i.jsx)(l.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, i.jsx)(l.ll, {
        children: t.extra.activity_name
      }),
      (0, i.jsx)(s.Gk, {
        location: s.Gt.CARD,
        children: u.map((e, n) => (0, i.jsx)(e, {
          entry: t,
          hovered: d
        }, n))
      })
    ]
  }),
  (0, i.jsx)(r.f, {
    alt: m,
    src: h,
    size: 48,
    className: c.thumbnail
  })
]
  });
});