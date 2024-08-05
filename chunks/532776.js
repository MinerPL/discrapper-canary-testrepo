i.d(s, {
  Z: function() {
return a;
  }
});
var n = i(470079),
  l = i(442837),
  t = i(621853);
let o = [];

function a(e) {
  let s = (0, l.e7)([t.Z], () => t.Z.getUserProfile(e));
  return (0, n.useMemo)(() => (null == s ? void 0 : s.applicationRoleConnections) == null ? o : s.applicationRoleConnections, [null == s ? void 0 : s.applicationRoleConnections]);
}