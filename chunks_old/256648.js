"use strict";
n.r(t), n.d(t, {
  useThreadMemberListSections: function() {
    return f
  }
}), n("222007"), n("424973");
var a = n("884691"),
  l = n("917351"),
  s = n.n(l),
  i = n("446674"),
  r = n("305961"),
  u = n("593752"),
  o = n("843455"),
  d = n("782340");
let c = [];

function f(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => null != t ? r.default.getRoles(t.id) : void 0),
    {
      version: l,
      members: f
    } = (0, i.useStateFromStoresObject)([u.default], () => ({
      version: u.default.getMemberListVersion(e),
      members: u.default.getMemberListSections(e)
    })),
    h = a.useMemo(() => {
      if (null == t) return c;
      let e = s(n).values().filter(e => e.hoist).sortBy(e => e.position).reverse().map(e => e.id).value();
      return e.push(o.StatusTypes.ONLINE, o.StatusTypes.OFFLINE), e.map(e => {
        var t, a, l, s;
        let i = e === o.StatusTypes.ONLINE ? d.default.Messages.STATUS_ONLINE : e === o.StatusTypes.OFFLINE ? d.default.Messages.STATUS_OFFLINE : null !== (l = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : "",
          r = null !== (s = null == f ? void 0 : null === (a = f[e]) || void 0 === a ? void 0 : a.userIds) && void 0 !== s ? s : [];
        return {
          label: i,
          userIds: r,
          id: e,
          roleId: e
        }
      })
    }, [n, f, l]);
  return null != f ? h : c
}