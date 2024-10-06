n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(470079),
    i = n(846519),
    a = n(864106),
    s = n(215023);
function o(e) {
    let [t, n] = r.useState(!1),
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = () => {
                if (null == e || !('expiresAt' in e) || null == e.expiresAt) {
                    n(!1);
                    return;
                }
                let r = (0, a.fO)(e);
                n(r);
                let l = (null == e ? void 0 : e.skuId) === '1251324401459265537' || (null == e ? void 0 : e.skuId) === '1252353273256480818' ? 950400000 : s.Cm,
                    u = 1000 * e.expiresAt + l - Date.now();
                if (!r && u > 0) {
                    let e = new i.V7();
                    e.start(Math.min(2147483647, u), () => t()), (o.current = e);
                }
            };
            return (
                t(),
                () => {
                    var e;
                    return null === (e = o.current) || void 0 === e ? void 0 : e.stop();
                }
            );
        }, [e]),
        r.useEffect(() => {
            if (t) {
                var e;
                null === (e = o.current) || void 0 === e || e.stop();
            }
        }, [t]),
        t ? void 0 : e
    );
}
