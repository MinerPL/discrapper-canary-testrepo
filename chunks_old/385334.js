"use strict";
s.r(t), s.d(t, {
  isRolePowerful: function() {
    return i
  },
  getPowerfulPermissionTitles: function() {
    return r
  }
}), s("424973"), s("222007");
var a = s("316693"),
  l = s("465305"),
  n = s("49111");

function i(e) {
  return a.hasAny(e.permissions, n.ElevatedPermissions)
}

function r(e, t) {
  let s = [],
    i = l.default.getGuildPermissionSpecMap(e);
  for (let e of n.ElevatedPermissionsList) a.has(t.permissions, e) && s.push(i[e.toString()].title);
  return s
}