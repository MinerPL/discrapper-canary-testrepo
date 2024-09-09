var r = n(470079);
let i = 1000 / 24;
t.Z = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
        n = r.useRef(0),
        a = r.useRef(),
        s = r.useRef(!0),
        o = r.useCallback(() => {
            (s.current = !1), cancelAnimationFrame(n.current);
        }, []),
        l = r.useCallback(
            (r) => {
                null == a.current && (a.current = r);
                let i = r - a.current;
                i >= t && ((a.current = r), e(i)), s.current && (n.current = requestAnimationFrame(l));
            },
            [e, t]
        ),
        u = r.useCallback(() => {
            (s.current = !0), (a.current = void 0), (n.current = requestAnimationFrame(l));
        }, [l]);
    return (
        r.useEffect(() => ((n.current = requestAnimationFrame(l)), () => cancelAnimationFrame(n.current)), []),
        {
            stop: o,
            reset: u,
            ticking: s
        }
    );
};
