s.d(n, {
    Z: function () {
        return r;
    }
});
var t = s(470079),
    i = s(442837),
    o = s(621853);
let l = [];
function r(e) {
    let n = (0, i.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, t.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}
