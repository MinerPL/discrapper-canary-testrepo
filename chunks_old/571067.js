"use strict";
l.r(t), l.d(t, {
  useRoleRows: function() {
    return i
  },
  default: function() {
    return r
  }
});
var a = l("37983");
l("884691");
var s = l("446674"),
  n = l("305961"),
  o = l("644583");

function i(e, t, l) {
  return (0, s.useStateFromStoresArray)([n.default], () => Object.values(n.default.getRoles(e)).filter(e => !t.has(e.id)).filter(t => !l || t.id !== e).map(e => (0, o.roleToPendingAddition)(e).row), [l, e, t])
}

function r(e) {
  let {
    guildId: t,
    selectedRoleIds: l,
    onChange: s,
    placeholder: n,
    disableEveryoneRole: r,
    helperText: d,
    className: u
  } = e, C = i(t, l, r);
  return (0, a.jsx)(o.default, {
    roleRows: C,
    guildId: t,
    selectedRoleIds: l,
    onChange: (e, t) => s(t),
    placeholder: n,
    helperText: d,
    className: u
  })
}