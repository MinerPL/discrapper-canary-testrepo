n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(470079),
    i = n(718922),
    o = n(55935),
    u = n(745735);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        n = arguments.length > 2 ? arguments[2] : void 0,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = (0, o.TD)(Date.now(), e),
        a = (0, i.Z)(),
        c = (0, r.useCallback)(() => {
            if ((0 !== s.days || 0 !== s.hours || 0 !== s.minutes || 0 !== s.seconds) && !l) a(), null == n || n();
        }, [s, l, a, n]);
    return (0, u.Z)(c, l ? null : t), s;
}
