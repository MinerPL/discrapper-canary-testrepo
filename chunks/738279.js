n.d(t, {
    R: function () {
        return o;
    }
});
var r = n(661763),
    i = n(662845),
    a = n(192379),
    s = n(726983);
function o(e, t) {
    let { role: n = 'dialog' } = e,
        o = (0, r.mp)();
    o = e['aria-label'] ? void 0 : o;
    let l = (0, a.useRef)(!1);
    return (
        (0, a.useEffect)(() => {
            if (t.current && !t.current.contains(document.activeElement)) {
                (0, i.ex)(t.current);
                let e = setTimeout(() => {
                    document.activeElement === t.current && ((l.current = !0), t.current && (t.current.blur(), (0, i.ex)(t.current)), (l.current = !1));
                }, 500);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [t]),
        (0, s.Bq)(),
        {
            dialogProps: {
                ...(0, r.zL)(e, { labelable: !0 }),
                role: n,
                tabIndex: -1,
                'aria-labelledby': e['aria-labelledby'] || o,
                onBlur: (e) => {
                    l.current && e.stopPropagation();
                }
            },
            titleProps: { id: o }
        }
    );
}
