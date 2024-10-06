t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(470079),
    a = t(434650);
function l(e) {
    let { onVisible: n, threshold: t, minTimeVisibleMs: l } = e,
        o = i.useRef(!1),
        r = i.useRef(null);
    return (
        i.useEffect(
            () => () => {
                null != r.current && (clearTimeout(r.current), (r.current = null));
            },
            []
        ),
        (0, a.O)((e) => {
            if ((null != r.current && !e && !1 === o.current && (clearTimeout(r.current), (r.current = null)), !e || !0 === o.current)) return;
            let t = () => {
                n(), (o.current = !0), (r.current = null);
            };
            null != l ? (r.current = setTimeout(t, l)) : t();
        }, t)
    );
}
