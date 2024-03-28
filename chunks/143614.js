"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("442837"),
  a = n("885110"),
  s = n("292584");

function i() {
  let e = (0, l.useStateFromStores)([a.default], () => a.default.getBroadcast()),
    t = (0, l.useStateFromStores)([s.default], () => s.default.getBroadcasts());
  return null != e ? [e].concat(t) : t
}