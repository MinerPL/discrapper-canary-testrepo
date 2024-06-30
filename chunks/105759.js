t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(470079), r = t(442837), o = t(598077), a = t(699516), s = t(295226), l = t(786397), d = t(474936);
function c() {
    let e = (0, l.w)(d.a7), n = (0, r.e7)([s.Z], () => s.Z.getReferrer(null == e ? void 0 : e.trial_id)), t = (0, r.e7)([a.Z], () => null == n || a.Z.isBlocked(n.id));
    return i.useMemo(() => t || null == n ? null : new o.Z(n), [
        n,
        t
    ]);
}
