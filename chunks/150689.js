n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(130341),
  r = n(34112),
  l = n(623691),
  o = n(494831);

function c(e) {
  let {
setEditRoleId: t,
guild: n,
everyoneRole: c,
otherRoles: d,
setSelectedSection: u
  } = e, [_, I] = a.useState(''), [E, T] = a.useState(o.Cl), m = _.trim(), N = a.useMemo(() => d.filter(e => (0, i.uo)(e, m)), [
d,
m
  ]), S = a.useCallback(() => (0, s.jsx)(l.Z, {
guild: n,
everyoneRole: c,
filteredRoles: N,
setEditRoleId: t,
query: _,
setQuery: I,
setHeaderHeight: T
  }, 'header'), [
n,
c,
N,
t,
_
  ]);
  return (0, s.jsx)(r.Z, {
setEditRoleId: t,
guild: n,
everyoneRole: c,
otherRoles: d,
setSelectedSection: u,
renderHeader: S,
headerHeight: E,
query: _
  });
}