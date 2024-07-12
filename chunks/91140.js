t.d(n, {
  W: function() {
return E;
  }
});
var l = t(735250),
  r = t(470079),
  a = t(561308),
  o = t(297781),
  i = t(443487),
  u = t(43205),
  s = t(265048),
  c = t(689938),
  d = t(827418);
let E = [
  o.OV,
  o.EE,
  o.Af,
  o.U9,
  o.gj,
  o.f,
  o.n8,
  o.v1,
  o.pQ
];
n.Z = r.memo(e => {
  let {
entry: n,
channel: t,
selected: r,
hovered: _
  } = e, {
iconUrl: f,
iconTitle: T
  } = (0, s.F)(n);
  return (0, l.jsxs)(i.Zb, {
selected: r,
children: [
  (0, l.jsxs)(i.e$, {
    children: [
      (0, l.jsx)(i.F9, {
        entry: n,
        channelId: t.id,
        guildId: t.guild_id
      }),
      (0, l.jsx)(i.ll, {
        children: function(e) {
          return (0, a.kr)(e) ? c.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
            gameName: e.extra.game_name
          }) : c.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({
            gameName: e.extra.game_name
          });
        }(n)
      }),
      (0, l.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: E.map((e, t) => (0, l.jsx)(e, {
          entry: n,
          hovered: _
        }, t))
      })
    ]
  }),
  (0, l.jsx)(u.f, {
    alt: T,
    src: f,
    size: 48,
    className: d.thumbnail
  })
]
  });
});