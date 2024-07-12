r.d(t, {
  Z: function() {
return h;
  }
});
var a = r(735250);
r(470079);
var n = r(442837),
  i = r(481060),
  o = r(814443),
  l = r(594174),
  c = r(681619),
  s = r(86864),
  d = r(979756);
let u = [{
key: 'user',
cellClassName: s.userCell,
render(e) {
  var t;
  let {
    user: r,
    key: a
  } = e;
  return null !== (t = null == r ? void 0 : r.username) && void 0 !== t ? t : a;
}
  },
  {
key: 'affinity',
cellClassName: s.affinityCell,
render(e) {
  let {
    affinity: t
  } = e;
  return ''.concat(t);
}
  }
];

function h() {
  let e = (0, n.Wu)([
o.Z,
l.default
  ], () => o.Z.getUserAffinities().map(e => {
let {
  user_id: t,
  affinity: r
} = e;
return {
  user: l.default.getUser(t),
  affinity: r,
  key: t
};
  }));
  return 0 === e.length ? null : (0, a.jsx)(i.ScrollerThin, {
children: (0, a.jsx)(c.Z, {
  className: d.panel,
  columns: u,
  rowClassName: s.row,
  data: e
})
  });
}