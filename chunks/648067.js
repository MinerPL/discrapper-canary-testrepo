n.d(s, {
  Z: function() {
return d;
  }
});
var i = n(470079),
  t = n(442837),
  l = n(726542),
  o = n(122021),
  a = n(621853);
let r = [];

function d(e) {
  let s = (0, o.Xj)({
  forUserProfile: !0
}),
n = (0, t.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, i.useMemo)(() => (null == n ? void 0 : n.connectedAccounts) == null ? r : n.connectedAccounts.filter(e => {
let {
  type: n
} = e, i = l.Z.get(n);
return null != i && s(i);
  }), [
null == n ? void 0 : n.connectedAccounts,
s
  ]);
}