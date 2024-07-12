n.d(t, {
  Z: function() {
return E;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(399606),
  o = n(243778),
  c = n(914010),
  d = n(566840),
  u = n(921944),
  _ = n(805953);
let h = s.memo(function(e) {
  var t, n, a;
  let {
state: l,
markAsDismissed: o
  } = e, {
name: c,
guildId: d,
boundingRect: u
  } = l, h = s.useMemo(() => function(e, t, n) {
return null;
  }(c, 0, 0), [
c,
d,
o
  ]);
  if (null == h)
return null;
  return (0, i.jsx)('div', {
className: r()(_.upsell, !(null != (t = u) && !(t.y < 0)) && _.hidden),
style: (n = c, null == (a = u) ? {} : {
  top: a.top,
  left: a.right - a.x
}),
children: h
  });
});

function E() {
  let e = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
t = (0, d.Eg)(e),
[n, s] = (0, o.U)(Object.values(t).filter(e => {
  let {
    disabled: t
  } = e;
  return !t;
}).map(e => {
  let {
    name: t
  } = e;
  return t;
}), u.R.SIDEBAR);
  if (null == n)
return null;
  let a = t[n];
  return null == a ? null : (0, i.jsx)('div', {
className: _.container,
children: (0, i.jsx)(h, {
  state: a,
  markAsDismissed: s
})
  });
}