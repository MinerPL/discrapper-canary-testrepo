"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("446674"),
  i = n("76393");

function s() {
  return (0, r.useStateFromStores)([i.default], () => null != i.default.getRemoteSessionId() || null != i.default.getAwaitingRemoteSessionInfo())
}