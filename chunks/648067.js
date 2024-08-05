i.d(s, {
  Z: function() {
return d;
  }
});
var n = i(470079),
  l = i(442837),
  t = i(726542),
  o = i(122021),
  a = i(621853);
let r = [];

function d(e) {
  let s = (0, o.Xj)({
  forUserProfile: !0
}),
i = (0, l.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, n.useMemo)(() => (null == i ? void 0 : i.connectedAccounts) == null ? r : i.connectedAccounts.filter(e => {
let {
  type: i
} = e, n = t.Z.get(i);
return null != n && s(n);
  }), [
null == i ? void 0 : i.connectedAccounts,
s
  ]);
}