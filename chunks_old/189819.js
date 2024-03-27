"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("884691"),
  l = n("446674"),
  s = n("265596"),
  i = n("843719"),
  r = n("626346");

function u(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getFeed(e)),
    n = a.useMemo(() => null == t ? void 0 : t.entries.map(e => e.content), [t]);
  return n = (0, i.default)(n), n = (0, r.default)(n)
}