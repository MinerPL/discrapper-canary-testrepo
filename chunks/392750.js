t.d(r, {
  Z: function() {
return h;
  }
});
var a = t(735250);
t(470079);
var n = t(442837),
  i = t(481060),
  o = t(814443),
  l = t(594174),
  c = t(681619),
  s = t(914121),
  d = t(535271);
let u = [{
key: 'user',
cellClassName: s.userCell,
render(e) {
  var r;
  let {
    user: t,
    key: a
  } = e;
  return null !== (r = null == t ? void 0 : t.username) && void 0 !== r ? r : a;
}
  },
  {
key: 'affinity',
cellClassName: s.affinityCell,
render(e) {
  let {
    affinity: r
  } = e;
  return ''.concat(r);
}
  }
];

function h() {
  let e = (0, n.Wu)([
o.Z,
l.default
  ], () => o.Z.getUserAffinities().map(e => {
let {
  user_id: r,
  affinity: t
} = e;
return {
  user: l.default.getUser(r),
  affinity: t,
  key: r
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