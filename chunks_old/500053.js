"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("986654"),
  i = s("542578"),
  r = s("918947"),
  o = s("316497");

function d(e) {
  let {
    setEditRoleId: t,
    guild: s,
    everyoneRole: d,
    otherRoles: u,
    setSelectedSection: c
  } = e, [E, _] = l.useState(""), [I, T] = l.useState(o.DEFAULT_HEADER_HEIGHT_PX), S = E.trim(), f = l.useMemo(() => u.filter(e => (0, n.filterRole)(e, S)), [u, S]), m = l.useCallback(() => (0, a.jsx)(r.default, {
    guild: s,
    everyoneRole: d,
    filteredRoles: f,
    setEditRoleId: t,
    query: E,
    setQuery: _,
    setHeaderHeight: T
  }, "header"), [s, d, f, t, E]);
  return (0, a.jsx)(i.default, {
    setEditRoleId: t,
    guild: s,
    everyoneRole: d,
    otherRoles: u,
    setSelectedSection: c,
    renderHeader: m,
    headerHeight: I,
    query: E
  })
}