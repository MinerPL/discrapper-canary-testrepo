t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250), l = t(470079), a = t(481060), r = t(689938), s = t(365155);
function o(e) {
    let {
        title: n,
        onClickViewMore: t
    } = e;
    return (0, i.jsxs)('div', {
        className: s.header,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: n
            }),
            null != t && (0, i.jsx)(a.Clickable, {
                className: s.viewMore,
                onClick: t,
                'aria-label': r.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW_ARIA_LABEL.format({ title: n }),
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-brand',
                    children: r.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW
                })
            })
        ]
    });
}
o.Loading = function () {
    let e = l.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
    return (0, i.jsx)('div', {
        className: s.loadingHeader,
        style: e,
        children: (0, i.jsx)(a.Text, {
            className: s.hidden,
            variant: 'text-md/medium',
            color: 'header-primary',
            children: '_'
        })
    });
};
