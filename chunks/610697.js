n.d(t, {
    Z: function () {
        return c;
    }
}), n(47120);
var i = n(470079), a = n(442837), s = n(594174), l = n(823162), r = n(355298);
let o = new Set(['GB']);
function c() {
    let e = (0, a.e7)([r.Z], () => r.Z.getUserCountryCode()), t = !1 === (0, a.e7)([s.default], () => {
            var e;
            return null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed;
        });
    return i.useEffect(() => {
        null == e && (0, l.hi)();
    }, [e]), !!(null != e && o.has(e.alpha2)) && !!t || !1;
}
