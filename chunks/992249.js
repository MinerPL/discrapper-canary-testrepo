n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(481060), o = n(717251), c = n(27566);
function d(e) {
    let {
            action: t,
            children: n,
            className: i,
            onExpandChange: d,
            loading: u,
            ..._
        } = e, [E, I] = a.useState(!1), T = e => {
            I(e), null == d || d(e);
        };
    return (0, s.jsx)(l.Collapsible, {
        className: r()(c.groupContainer, i),
        isExpanded: E,
        collapsibleContent: (0, s.jsxs)('div', {
            className: c.groupCollapsedContainer,
            children: [
                E && (0, s.jsx)('div', { className: c.pointer }),
                n
            ]
        }),
        children: e => {
            let {onClick: n} = e;
            return (0, s.jsx)(o.Z, {
                ..._,
                className: c.groupHeaderRow,
                action: u ? (0, s.jsx)(l.Spinner, { type: l.Spinner.Type.PULSING_ELLIPSIS }) : t,
                onClick: e => {
                    T(!E), n(e);
                }
            });
        }
    });
}
