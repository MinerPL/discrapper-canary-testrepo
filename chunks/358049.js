n.d(t, {
    R: function () {
        return s;
    }
});
var r = n(182823), i = n(706682), a = n(470079), o = n(795250);
function s(e, t) {
    let {
            role: n = 'dialog'
        } = e, s = (0, r.mp)();
    s = e['aria-label'] ? void 0 : s;
    let l = (0, a.useRef)(!1);
    return (0, a.useEffect)(() => {
        if (t.current && !t.current.contains(document.activeElement)) {
            (0, i.ex)(t.current);
            let e = setTimeout(() => {
                document.activeElement === t.current && (l.current = !0, t.current && (t.current.blur(), (0, i.ex)(t.current)), l.current = !1);
            }, 500);
            return () => {
                clearTimeout(e);
            };
        }
    }, [t]), (0, o.Bq)(), {
        dialogProps: {
            ...(0, r.zL)(e, { labelable: !0 }),
            role: n,
            tabIndex: -1,
            'aria-labelledby': e['aria-labelledby'] || s,
            onBlur: e => {
                l.current && e.stopPropagation();
            }
        },
        titleProps: { id: s }
    };
}
