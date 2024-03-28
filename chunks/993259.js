"use strict";
a.r(t), a.d(t, {
  getAllExistingRolesWithPermission: function() {
    return o
  },
  getAllRolesRows: function() {
    return i
  }
});
var s = a("149765"),
  n = a("605436"),
  l = a("700785");
let r = (e, t, a) => {
  if (null == e.id) return !1;
  let n = l.computePermissionsForRoles({
    forceRoles: {
      [e.id]: e
    },
    context: a
  });
  return s.has(n, t)
};

function i(e, t) {
  return Object.values(t).sort(n.sortRoles).map(e => (0, n.getRoleRowData)(e))
}

function o(e, t, a, s) {
  return Object.values(t).filter(e => (0, n.isAdmin)(e) || r(e, s, a))
}