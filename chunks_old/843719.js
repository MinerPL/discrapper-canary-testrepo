"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("884691"),
  l = n("446674"),
  s = n("42203"),
  i = n("282109");

function r(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getPrivateChannelsVersion()),
    n = (0, l.useStateFromStores)([s.default], () => s.default.getMutableDMsByUserIds(), [t]),
    r = (0, l.useStateFromStores)([i.default], () => i.default.getMutedChannels(null)),
    u = a.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let a = n[t];
        null != a && r.has(a) && e.add(t)
      }
      return e
    }, [n, r]);
  return a.useMemo(() => null == e ? void 0 : e.filter(e => !u.has(e.author_id)), [e, u])
}