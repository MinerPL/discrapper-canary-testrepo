"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var l = a("884691"),
  n = a("446674"),
  r = a("42203"),
  s = a("697218"),
  i = a("194051"),
  d = a("754493");

function o(e) {
  var t;
  let a = (0, n.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    o = (0, n.useStateFromStores)([r.default], () => r.default.getChannel(e)),
    u = (0, n.useStateFromStores)([i.default], () => null != e ? i.default.getBroadcastByChannel(e) : null),
    c = (0, d.default)(),
    S = l.useMemo(() => {
      var e, t;
      return null !== (t = null == o ? void 0 : null === (e = o.recipients) || void 0 === e ? void 0 : e.map(e => s.default.getUser(e)).filter(e => null != e && e.id !== (null == u ? void 0 : u.userId))) && void 0 !== t ? t : []
    }, [null == u ? void 0 : u.userId, null == o ? void 0 : o.recipients]);
  return null == a ? [] : c ? S : null !== (t = S.length > 0 ? [a].concat(S) : null == u ? void 0 : u.viewers) && void 0 !== t ? t : []
}