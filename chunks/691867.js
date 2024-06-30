r.d(t, {
    Z: function () {
        return d;
    }
}), r(47120);
var a = r(735250), n = r(470079), i = r(442837), o = r(481060), l = r(581612), c = r(91311), s = r(133982);
function d() {
    let e = (0, i.e7)([c.Z], () => c.Z.allWithDescriptions(), [], i.pF), t = n.useMemo(() => e.map(e => {
            let [t, r, n] = e;
            return (0, a.jsx)(o.FormItem, {
                children: (0, a.jsx)(o.FormSwitch, {
                    value: r,
                    note: t,
                    onChange: e => (0, l.Z)(t, e),
                    hideBorder: !0,
                    children: n
                })
            }, t);
        }), [e]);
    return (0, a.jsxs)('div', {
        className: s.container,
        children: [
            (0, a.jsx)(o.Button, {
                onClick: l.q,
                className: s.button,
                fullWidth: !0,
                children: 'Clear all'
            }),
            (0, a.jsx)('div', {
                className: s.rowsContainer,
                children: t
            })
        ]
    });
}
