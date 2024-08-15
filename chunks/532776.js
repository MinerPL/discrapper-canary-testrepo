n.d(s, {
  Z: function() {
return a;
  }
});
var i = n(470079),
  t = n(442837),
  l = n(621853);
let o = [];

function a(e) {
  let s = (0, t.e7)([l.Z], () => l.Z.getUserProfile(e));
  return (0, i.useMemo)(() => (null == s ? void 0 : s.applicationRoleConnections) == null ? o : s.applicationRoleConnections, [null == s ? void 0 : s.applicationRoleConnections]);
}