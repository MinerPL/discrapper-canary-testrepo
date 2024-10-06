n.d(t, {
    Vy: function () {
        return s;
    },
    Z2: function () {
        return o;
    },
    x8: function () {
        return l;
    }
}),
    n(47120);
var r = n(470079),
    i = n(223143);
let a = '1157412779335090267',
    s = 'a_f979ba5f9c2ba83db3149cc02f489f7c';
function o() {
    let { purchases: e } = (0, i.c)();
    return e.get(a);
}
function l() {
    let [e, t] = r.useState(),
        { purchases: n, hasPreviouslyFetched: s } = (0, i.c)(),
        o = r.useRef(!1);
    return (
        r.useEffect(() => {
            s && !o.current && (t(null != n.get(a)), (o.current = !0));
        }, [n, s]),
        e
    );
}
