"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("470079"),
  s = n("442837"),
  l = n("592125"),
  i = n("594174"),
  r = n("292584"),
  o = n("158631");

function u(e) {
  var t;
  let n = (0, s.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
    u = (0, s.useStateFromStores)([l.default], () => l.default.getChannel(e)),
    d = (0, s.useStateFromStores)([r.default], () => null != e ? r.default.getBroadcastByChannel(e) : null),
    c = (0, o.default)(),
    f = a.useMemo(() => {
      var e, t;
      return null !== (t = null == u ? void 0 : null === (e = u.recipients) || void 0 === e ? void 0 : e.map(e => i.default.getUser(e)).filter(e => null != e && e.id !== (null == d ? void 0 : d.userId))) && void 0 !== t ? t : []
    }, [null == d ? void 0 : d.userId, null == u ? void 0 : u.recipients]);
  return null == n ? [] : c ? f : null !== (t = f.length > 0 ? [n].concat(f) : null == d ? void 0 : d.viewers) && void 0 !== t ? t : []
}