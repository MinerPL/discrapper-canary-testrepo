"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("592125"),
  i = n("9156");

function r(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getPrivateChannelsVersion()),
    n = (0, l.useStateFromStores)([s.default], () => s.default.getMutableDMsByUserIds(), [t]),
    r = (0, l.useStateFromStores)([i.default], () => i.default.getMutedChannels(null)),
    o = a.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let a = n[t];
        null != a && r.has(a) && e.add(t)
      }
      return e
    }, [n, r]);
  return a.useMemo(() => null == e ? void 0 : e.filter(e => {
    for (let t of e.participants)
      if (o.has(t)) return !1;
    return !0
  }), [e, o])
}