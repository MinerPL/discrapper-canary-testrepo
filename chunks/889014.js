"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("446674"),
  a = n("76393");

function l() {
  return (0, i.useStateFromStores)([a.default], () => null != a.default.getRemoteSessionId() || null != a.default.getAwaitingRemoteSessionInfo())
}