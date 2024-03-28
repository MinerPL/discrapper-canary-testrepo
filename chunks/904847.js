"use strict";
n.r(t);
var a = n("442837"),
  l = n("186877"),
  s = n("375954"),
  i = n("981631");
t.default = (e, t) => {
  let n = (0, l.useShowConvoStarterInDM)(t),
    r = (0, a.useStateFromStores)([s.default], () => s.default.getMessages(t.id).length > 0, [t]);
  return null != e && e.hasFlag(i.UserFlags.QUARANTINED) && n && !r
}