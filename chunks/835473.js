n.d(t, {
    Z: function () {
        return d;
    },
    q: function () {
        return f;
    }
});
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(902704),
    l = n(823379),
    u = n(728345),
    c = n(812206);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = r.useRef([]);
    return (
        r.useEffect(() => {
            t && !(0, o.E)(e, n.current) && (u.ZP.fetchApplications(a()(e).filter(l.lm).uniq().value(), !1), (n.current = e));
        }, [e, t]),
        (0, s.Wu)([c.Z], () => e.map((e) => (null != e ? c.Z.getApplication(e) : void 0)))
    );
}
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d(null != e ? [e] : [], t)[0];
}
