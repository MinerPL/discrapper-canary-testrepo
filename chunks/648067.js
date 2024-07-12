i.d(n, {
  Z: function() {
return d;
  }
});
var s = i(470079),
  l = i(442837),
  o = i(726542),
  t = i(122021),
  r = i(621853);
let a = [];

function d(e) {
  let n = (0, t.Xj)({
  forUserProfile: !0
}),
i = (0, l.e7)([r.Z], () => r.Z.getUserProfile(e));
  return (0, s.useMemo)(() => (null == i ? void 0 : i.connectedAccounts) == null ? a : i.connectedAccounts.filter(e => {
let {
  type: i
} = e, s = o.Z.get(i);
return null != s && n(s);
  }), [
null == i ? void 0 : i.connectedAccounts,
n
  ]);
}