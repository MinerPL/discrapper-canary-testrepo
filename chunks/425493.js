var r, i, a = n(735250);
n(470079);
var o = n(120356), s = n.n(o), l = n(873546), u = n(481060), c = n(689938), d = n(375515);
(r = i || (i = {})).DEFAULT = '', r.BOLD = 'Bold', r.SOLID = 'Solid';
let _ = e => {
    let {
        closeAction: t,
        variant: n,
        keybind: r,
        className: i
    } = e;
    return (0, a.jsxs)('div', {
        className: s()(d.container, i),
        children: [
            (0, a.jsx)(u.Clickable, {
                className: s()(d.closeButton, {
                    [d.closeButtonBold]: 'Bold' === n,
                    [d.closeButtonSolid]: 'Solid' === n
                }),
                onClick: t,
                'aria-label': c.Z.Messages.CLOSE,
                children: 'Solid' === n ? (0, a.jsx)(u.CircleXIcon, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                }) : (0, a.jsx)(u.CloseSmallIcon, {
                    size: 'sm',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            }),
            l.tq ? null : (0, a.jsx)('div', {
                className: s()(d.keybind),
                'aria-hidden': !0,
                children: r
            })
        ]
    });
};
_.defaultProps = { variant: '' }, _.Variants = i, t.Z = _;
