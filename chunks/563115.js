"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  },
  useRoleRows: function() {
    return i
  }
});
var a = l("735250");
l("470079");
var s = l("442837"),
  n = l("430824"),
  o = l("512508");

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