n.d(t, {
    Z: function () {
        return _;
    },
    q: function () {
        return f;
    }
});
var r = n(192379),
    i = n(442837),
    a = n(241159),
    s = n(496929),
    o = n(558381),
    l = n(171246),
    u = n(509545),
    c = n(238),
    d = n(55563);
function f(e) {
    r.useEffect(() => {
        _(e);
    }, [e]);
    let t = (0, i.Wu)(
            [c.Z, d.Z, u.Z],
            () => {
                let t = c.Z.getStoreLayout(e);
                return (0, l.Ej)(t.subscriptions, d.Z, u.Z);
            },
            [e]
        ),
        n = (0, i.Wu)([c.Z], () => c.Z.getStoreLayout(e).otps, [e]);
    return r.useMemo(
        () => ({
            subscriptions: t,
            otps: n
        }),
        [t, n]
    );
}
function _(e) {
    (0, a.k)(e), (0, o.oJ)(e), (0, s.yD)(e, !1);
}
