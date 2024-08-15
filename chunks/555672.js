n.d(t, {
  Hs: function() {
return _;
  },
  qy: function() {
return f;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(317261),
  s = n(561308),
  o = n(297781),
  l = n(443487),
  u = n(43205),
  c = n(797342),
  d = n(182022);
let _ = [o.E6],
  E = [a._.WEEK];

function f(e) {
  return null != e && E.includes(e);
}
t.ZP = i.memo(e => {
  let {
entry: t,
channel: n,
selected: i
  } = e, {
iconUrl: a
  } = (0, c.n)(t), E = (0, s.Nq)(t);
  return null != E && f(E) ? (0, r.jsxs)(l.Zb, {
selected: i,
children: [
  (0, r.jsxs)(l.e$, {
    children: [
      (0, r.jsx)(l.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, r.jsx)(l.ll, {
        children: t.extra.game_name
      }),
      (0, r.jsx)(o.Gk, {
        location: o.Gt.CARD,
        children: _.map((e, n) => (0, r.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, r.jsx)(u.f, {
    src: a,
    size: 48,
    className: d.thumbnail
  })
]
  }) : null;
});