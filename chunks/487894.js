t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(735250);
t(470079);
var s = t(481060), l = t(499033), r = t(665906), i = t(689938), o = t(435042);
function c(e) {
    let {
            channel: n,
            header: t,
            startThread: c
        } = e, d = (0, r.NE)(n), u = (0, r.Xu)(n);
    return (0, a.jsxs)('div', {
        className: o.container,
        children: [
            (0, a.jsxs)('div', {
                className: o.iconContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: o.icon,
                        children: (0, a.jsx)(s.ThreadIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 36,
                            height: 36
                        })
                    }),
                    (0, a.jsx)(l.Z, { className: o.stars })
                ]
            }),
            (0, a.jsx)(s.Heading, {
                className: o.header,
                variant: 'heading-xl/semibold',
                children: t
            }),
            (0, a.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-md/normal',
                children: i.Z.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT_REDESIGN
            }),
            d || u ? (0, a.jsx)(s.Button, {
                className: o.cta,
                onClick: c,
                children: i.Z.Messages.CREATE_THREAD
            }) : null
        ]
    });
}
