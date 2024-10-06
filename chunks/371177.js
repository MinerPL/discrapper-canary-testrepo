n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var l = n(470079),
    a = n(442837),
    i = n(902704),
    r = n(158776),
    s = n(561308),
    o = n(231338);
function u(e) {
    let t = l.useRef(new Set()),
        n = l.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return !(0, i.E)([...t.current], [...n]) && (t.current = n), t.current;
        }, [e]),
        u = (0, a.Wu)([r.Z], () =>
            Array.from(n).filter((e) => {
                let t = r.Z.getStatus(e);
                return null !== t && [o.Sk.OFFLINE, o.Sk.INVISIBLE].includes(t);
            })
        );
    return l.useMemo(() => {
        let t = new Set(u);
        return null == e ? void 0 : e.filter((e) => !(0, s.kr)(e) || !t.has(e.author_id));
    }, [e, u]);
}
