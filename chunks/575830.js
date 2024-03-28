"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var l = s("470079"),
  a = s("149765"),
  n = s("442837"),
  i = s("430824"),
  r = s("973542"),
  o = s("790285"),
  d = s("14263"),
  u = s("981631");

function c(e, t) {
  let s = (0, n.useStateFromStores)([i.default], () => null != e ? i.default.getRoles(e.id) : void 0),
    c = (0, d.default)(null == e ? void 0 : e.id);
  return l.useMemo(() => {
    let l = null != e && null != s ? function(e, t, s) {
        let l = new Set;
        for (let e of Object.keys(s.permissionOverwrites)) {
          let a = t[e],
            n = s.permissionOverwrites[e];
          (0, r.isSubscriptionRole)(a) && (0, o.isChannelAccessGrantedBy)(s, n) && l.add(a)
        }
        let n = t[e.getEveryoneRoleId()],
          i = null != n && !a.has(n.permissions, u.Permissions.VIEW_CHANNEL),
          d = (0, o.isChannelAccessDeniedBy)(s, s.permissionOverwrites[e.id]);
        if (i && !d)
          for (let e of Object.values(t))(0, r.isSubscriptionRole)(e) && (0, o.isAllChannelsRole)(e) && l.add(e);
        return [...l]
      }(e, s, t) : [],
      n = 0;
    for (let e of l) {
      let t = e.id;
      if (null != t) {
        let e = null == c ? void 0 : c[t];
        null != e && (n += e)
      }
    }
    return n
  }, [c, e, t, s])
}