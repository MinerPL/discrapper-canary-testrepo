"use strict";
n.r(t), n.d(t, {
  useRequestToSpeakPermission: function() {
    return u
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("592125"),
  i = n("700785"),
  r = n("471253"),
  o = n("981631");

function u(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
    n = i.canEveryoneRole(o.Permissions.REQUEST_TO_SPEAK, t),
    [u, d] = a.useState(n);
  return a.useEffect(() => {
    n !== u && d(n)
  }, [n]), [u, e => {
    null != t && (d(e), (0, r.setEveryoneRolePermissionAllowed)(t, o.Permissions.REQUEST_TO_SPEAK, e))
  }]
}