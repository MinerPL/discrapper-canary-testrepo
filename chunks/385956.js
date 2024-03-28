"use strict";
n.r(t), n.d(t, {
  useIsEitherTypeOfMessageRequest: function() {
    return r
  },
  useIsMessageRequest: function() {
    return i
  }
});
var a = n("442837"),
  l = n("355298"),
  s = n("333984");

function i(e) {
  return (0, a.useStateFromStores)([l.default], () => l.default.isMessageRequest(e), [e])
}

function r(e) {
  return (0, a.useStateFromStores)([l.default, s.default], () => null != e && (l.default.isMessageRequest(e) || s.default.isSpam(e)))
}