"use strict";
s.r(t), s.d(t, {
  getAllRolesRows: function() {
    return i
  },
  getAllExistingRolesWithPermission: function() {
    return o
  }
});
var a = s("316693"),
  n = s("454273"),
  l = s("991170");
let r = (e, t, s) => {
    if (null == e.id) return !1;
    let n = l.default.computePermissionsForRoles({
      forceRoles: {
        [e.id]: e
      },
      context: s
    });
    return a.default.has(n, t)
  },
  i = e => null == e.roles ? [] : Object.values(e.roles).sort(n.sortRoles).map(e => (0, n.getRoleRowData)(e)),
  o = (e, t, s) => Object.values(e.roles).filter(e => (0, n.isAdmin)(e) || r(e, s, t))