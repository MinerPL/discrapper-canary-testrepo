t.d(n, {
  H: function() {
return l;
  }
});
var r, l, i = t(735250);
t(470079);
var s = t(120356),
  a = t.n(s),
  o = t(768581),
  u = t(73346),
  c = t(890825);
(r = l || (l = {}))[r.SMALL = 40] = 'SMALL', r[r.MEDIUM = 66] = 'MEDIUM';
let d = {
  40: c.small,
  66: c.medium
};
n.Z = e => {
  let n, {
application: t,
size: r,
asset: l,
className: s
  } = e;
  return n = null != l ? (0, u._W)(t.id, l, r) : o.ZP.getApplicationIconURL({
id: t.id,
icon: t.icon,
size: r
  }), (0, i.jsx)('img', {
alt: '',
src: n,
className: a()(c.icon, d[r], s)
  });
};