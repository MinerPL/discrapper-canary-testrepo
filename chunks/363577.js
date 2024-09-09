s.d(t, {
    M: function () {
        return c;
    }
});
var n = s(470079),
    i = s(392711),
    a = s(399606),
    r = s(986197),
    o = s(654344),
    l = s(135200),
    u = s(346585);
let c = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, a.e7)([l.Z], () => l.Z.validate(e), [e]),
        E = (0, a.e7)([l.Z], () => l.Z.isRateLimited()),
        _ = (0, o.c)(),
        g = n.useMemo(() => (0, i.debounce)((e) => r.Z.attemptPomelo(e, s ? 'registration' : 'modal', s, c), _), [_, s, c]);
    return (
        n.useEffect(() => {
            t && !E && null == d && '' !== e && g(e);
        }, [t, E, d, e, g]),
        n.useMemo(() => (null != d ? (0, u.ti)(d) : void 0), [d])
    );
};
