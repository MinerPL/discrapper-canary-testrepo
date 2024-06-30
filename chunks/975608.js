t(411104);
var l = t(470079), u = t(960048);
e.Z = (n, e, t, i, r) => {
    let a = (0, l.useRef)(!1);
    (0, l.useEffect)(() => {
        if (e && !a.current) {
            a.current = !0;
            let e = setTimeout(() => {
                let e = Error(''.concat(n, ' is taking too long to load.'));
                u.Z.setExtra({
                    loadingState: i,
                    loadingTimeSeconds: t
                }), u.Z.captureException(e, {
                    ...r,
                    tags: { ...null == r ? void 0 : r.tags }
                });
            }, 1000 * t);
            return () => {
                clearTimeout(e);
            };
        }
    }, [
        e,
        t
    ]);
};
