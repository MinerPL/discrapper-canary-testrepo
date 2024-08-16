n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(470079),
    a = n(442837),
    s = n(594174),
    r = n(823162),
    l = n(355298);
let o = new Set(['GB']);
function c() {
    let e = (0, a.e7)([l.Z], () => l.Z.getUserCountryCode()),
        t =
            !1 ===
            (0, a.e7)([s.default], () => {
                var e;
                return null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed;
            });
    return (
        i.useEffect(() => {
            null == e && (0, r.hi)();
        }, [e]),
        (!!(null != e && o.has(e.alpha2)) && !!t) || !1
    );
}
