"use strict";
n.r(t), n.d(t, {
  useNotificationCenterItemAcked: function() {
    return i
  }
});
var s = n("442837"),
  a = n("774807"),
  l = n("178480");
let i = (e, t) => {
  let n = (0, s.useStateFromStores)([a.default], () => a.default.isLocalItemAcked(e));
  return !e.forceUnacked && (n || (0, l.isRemoteAcked)(e, t))
}