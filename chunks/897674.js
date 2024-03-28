"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("146282"),
  i = n("327220"),
  r = n("959580");

function o(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getFeed(e)),
    n = a.useMemo(() => null == t ? void 0 : t.entries.map(e => e.content), [t]);
  return n = (0, i.default)(n), n = (0, r.default)(n)
}