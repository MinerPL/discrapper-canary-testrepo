n.d(t, {
  D: function() {
return h;
  }
}), n(47120), n(653041);
var i = n(470079),
  a = n(392711),
  s = n.n(a),
  l = n(442837),
  r = n(430824),
  o = n(159299),
  c = n(231338),
  u = n(689938);
let d = [];

function h(e, t) {
  let n = (0, l.e7)([r.Z], () => null != t ? r.Z.getRoles(t.id) : void 0),
{
  version: a,
  members: h
} = (0, l.cj)([o.Z], () => ({
  version: o.Z.getMemberListVersion(e),
  members: o.Z.getMemberListSections(e)
})),
p = i.useMemo(() => {
  if (null == t)
    return d;
  let e = s()(n).values().filter(e => e.hoist).sortBy(e => e.position).reverse().map(e => e.id).value();
  return e.push(c.Sk.ONLINE, c.Sk.OFFLINE), e.map(e => {
    var t, i, a, s;
    let l = e === c.Sk.ONLINE ? u.Z.Messages.STATUS_ONLINE : e === c.Sk.OFFLINE ? u.Z.Messages.STATUS_OFFLINE : null !== (a = null == n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.name) && void 0 !== a ? a : '';
    return {
      label: l,
      userIds: null !== (s = null == h ? void 0 : null === (i = h[e]) || void 0 === i ? void 0 : i.userIds) && void 0 !== s ? s : [],
      id: e,
      roleId: e
    };
  });
}, [
  n,
  h,
  a
]);
  return null != h ? p : d;
}