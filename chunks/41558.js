t.d(n, {
    Z: function () {
        return d;
    }
});
var i,
    a,
    l = t(735250),
    o = t(470079),
    r = t(481060),
    s = t(689938),
    c = t(531951);
function d(e) {
    let { title: n, buttonType: t, onClickViewButton: i } = e;
    return (0, l.jsxs)('div', {
        className: c.header,
        children: [
            (0, l.jsx)(r.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: n
            }),
            null != t &&
                null != i &&
                (0, l.jsx)(r.Clickable, {
                    className: c.viewMore,
                    onClick: i,
                    'aria-label': s.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW_ARIA_LABEL.format({ title: n }),
                    children: (0, l.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: 0 === t ? s.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW : s.Z.Messages.APP_LAUNCHER_VIEW_LESS_ROW
                    })
                })
        ]
    });
}
((i = a || (a = {}))[(i.VIEW_MORE = 0)] = 'VIEW_MORE'),
    (i[(i.VIEW_LESS = 1)] = 'VIEW_LESS'),
    (d.buttonTypes = a),
    (d.Loading = function () {
        let e = o.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
        return (0, l.jsx)('div', {
            className: c.loadingHeader,
            style: e,
            children: (0, l.jsx)(r.Text, {
                className: c.hidden,
                variant: 'text-md/medium',
                color: 'header-primary',
                children: '_'
            })
        });
    });
