n.d(t, {
    h: function () {
        return c;
    }
}),
    n(47120);
var i = n(470079),
    a = n(442837),
    s = n(592125),
    l = n(700785),
    r = n(471253),
    o = n(981631);
function c(e) {
    let t = (0, a.e7)([s.Z], () => s.Z.getChannel(e), [e]),
        n = l.Uu(o.Plq.REQUEST_TO_SPEAK, t),
        [c, u] = i.useState(n);
    return (
        i.useEffect(() => {
            n !== c && u(n);
        }, [n]),
        [
            c,
            (e) => {
                null != t && (u(e), (0, r.Pq)(t, o.Plq.REQUEST_TO_SPEAK, e));
            }
        ]
    );
}
