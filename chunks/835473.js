n.d(t, {
    Z: function () {
        return d;
    },
    q: function () {
        return _;
    }
});
var r = n(470079),
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(902704),
    l = n(823379),
    u = n(728345),
    c = n(812206);
function d(e) {
    let t = r.useRef([]);
    return (
        r.useEffect(() => {
            !(0, o.E)(e, t.current) && (u.Z.fetchApplications(a()(e).filter(l.lm).uniq().value(), !1), (t.current = e));
        }, [e]),
        (0, s.Wu)([c.Z], () => e.map((e) => (null != e ? c.Z.getApplication(e) : void 0)))
    );
}
function _(e) {
    return d(null != e ? [e] : [])[0];
}
