n.d(t, {
    Z: function () {
        return l;
    }
}), n(47120);
var i = n(470079), a = n(846519);
function l(e, t) {
    let [n, l] = i.useState(!1), s = i.useRef(new a.sW(t, () => l(!1))), r = i.useRef(new a.sW(e, () => l(!0))), o = i.useCallback(() => {
            s.current.cancel(), r.current.cancel();
        }, []);
    i.useEffect(() => o, [o]);
    let c = i.useCallback(() => {
        o(), s.current.delay();
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: l,
        onMouseEnter: i.useCallback(() => {
            o(), r.current.delay();
        }, [o]),
        onMouseLeave: c,
        cancelTimers: o
    };
}
