t.d(s, {
    l: function () {
        return l;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(557533),
    r = t.n(i),
    o = t(329363);
function l(e) {
    let { className: s, header: t, children: i } = e,
        l = a.useMemo(() => {
            let e = !1;
            return (
                a.Children.forEach(i, (s) => {
                    null != s && (e = !0);
                }),
                e
            );
        }, [i]);
    return (0, n.jsxs)('div', {
        className: r()(o.wrapper, s),
        children: [
            (0, n.jsx)('div', {
                className: o.header,
                children: t
            }),
            l &&
                (0, n.jsx)('div', {
                    className: o.content,
                    children: i
                })
        ]
    });
}
