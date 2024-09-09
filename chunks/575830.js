n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var l = n(470079),
    r = n(442837),
    i = n(430824),
    u = n(637565),
    d = n(14263);
function s(e, t) {
    let n = (0, r.e7)([i.Z], () => (null != e ? i.Z.getRoles(e.id) : void 0)),
        s = (0, d.Z)(null == e ? void 0 : e.id);
    return l.useMemo(() => {
        let l = null != e && null != n ? (0, u.T)(e, n, t) : [],
            r = 0;
        for (let e of l) {
            let t = e.id;
            if (null != t) {
                let e = null == s ? void 0 : s[t];
                null != e && (r += e);
            }
        }
        return r;
    }, [s, e, t, n]);
}
