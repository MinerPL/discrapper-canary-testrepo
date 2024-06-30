n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(442837), i = n(41776), a = n(695346), o = n(314897), s = n(271383), l = n(699516);
function u(e, t) {
    let n = (0, r.e7)([o.default], () => o.default.getId() === e), u = (0, r.e7)([i.Z], () => null != t && i.Z.isLurking(t)), c = a.h2.useSetting();
    return (0, r.e7)([
        l.Z,
        s.ZP
    ], () => !n && !u && (l.Z.isFriend(e) || null != s.ZP.memberOf(e).find(e => !c.includes(e))));
}
