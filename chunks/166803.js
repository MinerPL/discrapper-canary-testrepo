"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("149765"),
  l = s("700785"),
  n = s("981631");

function i(e, t) {
  let s = {
    [t.id]: t
  };
  return e.filter(e => {
    let t = l.computePermissionsForRoles({
        forceRoles: s,
        context: e
      }),
      i = n.Permissions.VIEW_CHANNEL;
    return e.isGuildVocal() && (i = a.add(i, n.Permissions.CONNECT)), a.has(t, i) && !l.canEveryoneRole(i, e)
  })
}