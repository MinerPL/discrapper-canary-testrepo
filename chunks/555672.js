n.d(t, {
  Hs: function() {
return p;
  },
  qy: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(317261),
  s = n(561308),
  r = n(297781),
  o = n(443487),
  c = n(43205),
  d = n(265048),
  u = n(689938),
  h = n(827418);
let p = [r.E6],
  m = [l._.WEEK];

function _(e) {
  return null != e && m.includes(e);
}
t.ZP = a.memo(e => {
  let {
entry: t,
channel: n,
selected: a
  } = e, {
iconUrl: l
  } = (0, d.F)(t), m = (0, s.Nq)(t);
  return null != m && _(m) ? (0, i.jsxs)(o.Zb, {
selected: a,
children: [
  (0, i.jsxs)(o.e$, {
    children: [
      (0, i.jsx)(o.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, i.jsx)(o.ll, {
        children: function(e) {
          return u.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          });
        }(t)
      }),
      (0, i.jsx)(r.Gk, {
        location: r.Gt.CARD,
        children: p.map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, i.jsx)(c.f, {
    src: l,
    size: 48,
    className: h.thumbnail
  })
]
  }) : null;
});