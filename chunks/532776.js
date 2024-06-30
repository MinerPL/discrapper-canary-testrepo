i.d(n, {
    Z: function () {
        return a;
    }
});
var t = i(470079), o = i(442837), s = i(621853);
let l = [];
function a(e) {
    let n = (0, o.e7)([s.Z], () => s.Z.getUserProfile(e));
    return (0, t.useMemo)(() => (null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections, [null == n ? void 0 : n.applicationRoleConnections]);
}
