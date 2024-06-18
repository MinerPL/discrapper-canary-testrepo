"use strict";
t.d(s, {
  Z: function() {
    return c
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(130341),
  a = t(34112),
  r = t(623691),
  o = t(494831);

function c(e) {
  let {
    setEditRoleId: s,
    guild: t,
    everyoneRole: c,
    otherRoles: d,
    setSelectedSection: u
  } = e, [E, _] = i.useState(""), [I, T] = i.useState(o.Cl), N = E.trim(), m = i.useMemo(() => d.filter(e => (0, l.uo)(e, N)), [d, N]), S = i.useCallback(() => (0, n.jsx)(r.Z, {
    guild: t,
    everyoneRole: c,
    filteredRoles: m,
    setEditRoleId: s,
    query: E,
    setQuery: _,
    setHeaderHeight: T
  }, "header"), [t, c, m, s, E]);
  return (0, n.jsx)(a.Z, {
    setEditRoleId: s,
    guild: t,
    everyoneRole: c,
    otherRoles: d,
    setSelectedSection: u,
    renderHeader: S,
    headerHeight: I,
    query: E
  })
}