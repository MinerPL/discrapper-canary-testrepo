"use strict";
n.r(t), n.d(t, {
  useMessageRequestRelativeTimestampText: function() {
    return o
  }
}), n("866227");
var a = n("446674"),
  s = n("487269"),
  l = n("660478"),
  i = n("299039"),
  r = n("389495");

function o(e) {
  let t = (0, r.useMessageRequestPreview)(e),
    n = (0, a.useStateFromStores)([l.default], () => l.default.lastMessageId(e.id)),
    o = function(e) {
      let {
        lastMessageId: t,
        message: n,
        loaded: a
      } = e;
      return a && null != n ? i.default.extractTimestamp(n.id) : null != t ? i.default.extractTimestamp(t) : null
    }({
      lastMessageId: n,
      ...t
    });
  return null == o ? "" : (0, s.getTimestampString)(o)
}