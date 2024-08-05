n.d(t, {
  Ho: function() {
return E;
  },
  y9: function() {
return f;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(317261),
  s = n(823379),
  o = n(162461),
  l = n(561308),
  u = n(297781),
  c = n(443487),
  d = n(43205),
  _ = n(827418);
let E = [u.An],
  f = [a._.WEEK];
t.ZP = i.memo(e => {
  let {
entry: t,
channel: n,
selected: i
  } = e;
  if (!(0, o.Rg)('MemberListTopArtistContent'))
return null;
  let a = (0, l.Nq)(t);
  return null != a && (0, s.Hi)(a, f) ? (0, r.jsxs)(c.Zb, {
selected: i,
children: [
  (0, r.jsxs)(c.e$, {
    children: [
      (0, r.jsx)(c.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, r.jsx)(c.ll, {
        children: t.extra.artist.name
      }),
      (0, r.jsx)(u.Gk, {
        location: u.Gt.CARD,
        children: E.map((e, n) => (0, r.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, r.jsx)(d.f, {
    src: t.extra.media.image_url,
    size: 48,
    className: _.thumbnail
  })
]
  }) : null;
});