"use strict";
n.r(t), n.d(t, {
  useThreadMemberListSections: function() {
    return f
  }
}), n("47120"), n("653041");
var a = n("470079"),
  l = n("392711"),
  s = n.n(l),
  i = n("442837"),
  r = n("430824"),
  o = n("159299"),
  u = n("231338"),
  d = n("689938");
let c = [];

function f(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => null != t ? r.default.getRoles(t.id) : void 0),
    {
      version: l,
      members: f
    } = (0, i.useStateFromStoresObject)([o.default], () => ({
      version: o.default.getMemberListVersion(e),
      members: o.default.getMemberListSections(e)
    })),
    h = a.useMemo(() => {
      if (null == t) return c;
      let e = s()(n).values().filter(e => e.hoist).sortBy(e => e.position).reverse().map(e => e.id).value();
      return e.push(u.StatusTypes.ONLINE, u.StatusTypes.OFFLINE), e.map(e => {
        var t, a, l, s;
        let i = e === u.StatusTypes.ONLINE ? d.default.Messages.STATUS_ONLINE : e === u.StatusTypes.OFFLINE ? d.default.Messages.STATUS_OFFLINE : null !== (l = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : "";
        return {
          label: i,
          userIds: null !== (s = null == f ? void 0 : null === (a = f[e]) || void 0 === a ? void 0 : a.userIds) && void 0 !== s ? s : [],
          id: e,
          roleId: e
        }
      })
    }, [n, f, l]);
  return null != f ? h : c
}