"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("884691"),
  u = n("316693"),
  i = n("446674"),
  r = n("305961"),
  d = n("828674"),
  a = n("866595"),
  s = n("795228"),
  o = n("49111");

function E(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => null != e ? r.default.getRoles(e.id) : void 0),
    E = (0, s.default)(null == e ? void 0 : e.id);
  return l.useMemo(() => {
    let l = null != e && null != n ? function(e, t, n) {
        let l = new Set;
        for (let e of Object.keys(n.permissionOverwrites)) {
          let u = t[e],
            i = n.permissionOverwrites[e];
          (0, d.isSubscriptionRole)(u) && (0, a.isChannelAccessGrantedBy)(n, i) && l.add(u)
        }
        let i = t[e.getEveryoneRoleId()],
          r = null != i && !u.has(i.permissions, o.Permissions.VIEW_CHANNEL),
          s = (0, a.isChannelAccessDeniedBy)(n, n.permissionOverwrites[e.id]);
        if (r && !s)
          for (let e of Object.values(t))(0, d.isSubscriptionRole)(e) && (0, a.isAllChannelsRole)(e) && l.add(e);
        return [...l]
      }(e, n, t) : [],
      i = 0;
    for (let e of l) {
      let t = e.id;
      if (null != t) {
        let e = null == E ? void 0 : E[t];
        null != e && (i += e)
      }
    }
    return i
  }, [E, e, t, n])
}