i.d(n, {
  Z: function() {
return r;
  }
});
var s = i(470079),
  l = i(442837),
  o = i(621853);
let t = [];

function r(e) {
  let n = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
  return (0, s.useMemo)(() => (null == n ? void 0 : n.applicationRoleConnections) == null ? t : n.applicationRoleConnections, [null == n ? void 0 : n.applicationRoleConnections]);
}