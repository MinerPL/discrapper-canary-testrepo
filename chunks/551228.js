n.d(t, {
  pi: function() {
return p;
  },
  te: function() {
return h;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(512722),
  s = n.n(a),
  o = n(442837),
  l = n(276852),
  u = n(594174),
  c = n(719247),
  d = n(297781),
  _ = n(443487),
  E = n(43205),
  f = n(182022);
let h = [d.XF];

function p(e) {
  var t, n, r, i, a, s, d;
  let _ = (0, o.e7)([c.Z], () => c.Z.getMatchingActivity(e)),
E = (0, o.e7)([u.default], () => u.default.getUser(e.author_id));
  if (null == _ || null == E)
return {};
  let f = e.extra.entries[0],
h = null !== (i = null !== (r = (0, l.Z)(_)) && void 0 !== r ? r : null === (t = _.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== i ? i : f.media.image_url,
p = null !== (s = null !== (a = _.state) && void 0 !== a ? a : null === (n = f.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== s ? s : f.media.title,
m = null !== (d = _.details) && void 0 !== d ? d : f.media.title;
  return {
activity: _,
artist: p,
currentEntry: f,
imageUrl: h,
title: m,
user: E
  };
}
t.ZP = i.memo(function(e) {
  let {
entry: t,
channel: n,
selected: i
  } = e, {
activity: a,
artist: o,
imageUrl: l
  } = p(t);
  return s()(null != a, 'There must be a matching live Activity for LISTENED_SESSION'), (0, r.jsxs)(_.Zb, {
selected: i,
children: [
  (0, r.jsxs)(_.e$, {
    children: [
      (0, r.jsx)(_.F9, {
        entry: t,
        channelId: n.id,
        guildId: n.guild_id
      }),
      (0, r.jsx)(_.ll, {
        children: o
      }),
      (0, r.jsx)(d.Gk, {
        location: d.Gt.CARD,
        children: h.map((e, n) => (0, r.jsx)(e, {
          entry: t
        }, n))
      })
    ]
  }),
  (0, r.jsx)(E.f, {
    src: l,
    size: 48,
    className: f.thumbnail
  })
]
  });
});