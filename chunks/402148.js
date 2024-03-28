"use strict";
s.r(t), s.d(t, {
  getPowerfulPermissionTitles: function() {
    return r
  },
  isRolePowerful: function() {
    return i
  }
}), s("653041"), s("47120");
var a = s("149765"),
  l = s("233608"),
  n = s("981631");

function i(e) {
  return a.hasAny(e.permissions, n.ElevatedPermissions)
}

function r(e, t) {
  let s = [],
    i = l.default.getGuildPermissionSpecMap(e);
  for (let e of n.ElevatedPermissionsList) a.has(t.permissions, e) && s.push(i[e.toString()].title);
  return s
}