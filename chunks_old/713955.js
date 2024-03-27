"use strict";
a.r(t), a.d(t, {
  getAllRolesRows: function() {
    return i
  },
  getAllExistingRolesWithPermission: function() {
    return o
  }
});
var s = a("316693"),
  n = a("454273"),
  l = a("991170");
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