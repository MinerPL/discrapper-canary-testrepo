n.d(t, {
    K: function () {
        return c;
    },
    V: function () {
        return d;
    }
});
var i = n(470079),
    a = n(442837),
    s = n(355298),
    r = n(333984),
    l = n(899740),
    o = n(355350);
function c() {
    let e = (0, l.q)(),
        t = i.useRef(e),
        n = (0, a.e7)([s.Z], () => s.Z.isReady()),
        r = i.useRef(n);
    return (
        i.useEffect(() => {
            n && !r.current && ((r.current = !0), (t.current = e));
        }, [n, e]),
        t.current <= 1 && 1 === e
    );
}
function d() {
    let e = (0, o.w)(),
        t = i.useRef(e),
        n = (0, a.e7)([r.Z], () => r.Z.isReady()),
        s = i.useRef(n);
    return (
        i.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        t.current <= 1 && 1 === e
    );
}
