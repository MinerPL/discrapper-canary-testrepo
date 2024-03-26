"use strict";
n.r(t), n.d(t, {
  useIsMessageRequest: function() {
    return i
  },
  useIsEitherTypeOfMessageRequest: function() {
    return r
  }
});
var s = n("446674"),
  a = n("288518"),
  l = n("486503");

function i(e) {
  return (0, s.useStateFromStores)([a.default], () => a.default.isMessageRequest(e), [e])
}

function r(e) {
  return (0, s.useStateFromStores)([a.default, l.default], () => null != e && (a.default.isMessageRequest(e) || l.default.isSpam(e)))
}