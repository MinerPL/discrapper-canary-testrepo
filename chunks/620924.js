"use strict";
n.r(t), n.d(t, {
  useMessageRequestRelativeTimestampText: function() {
    return o
  }
}), n("913527");
var a = n("442837"),
  s = n("91159"),
  l = n("306680"),
  i = n("709054"),
  r = n("868807");

function o(e) {
  let t = (0, r.useMessageRequestPreview)(e),
    n = function(e) {
      let {
        lastMessageId: t,
        message: n,
        loaded: a
      } = e;
      return a && null != n ? i.default.extractTimestamp(n.id) : null != t ? i.default.extractTimestamp(t) : null
    }({
      lastMessageId: (0, a.useStateFromStores)([l.default], () => l.default.lastMessageId(e.id)),
      ...t
    });
  return null == n ? "" : (0, s.getTimestampString)(n)
}