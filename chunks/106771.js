t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250), l = t(470079), a = t(481060), r = t(783097), s = t(753972), o = t(451684);
function c(e) {
    var n;
    let {
            command: t,
            application: c,
            onClick: u
        } = e, {
            iconURL: d,
            name: m,
            description: p
        } = l.useMemo(() => (0, r.sl)(c, { botIconFirst: !0 }), [c]);
    return (0, i.jsxs)(a.Clickable, {
        className: o.container,
        onClick: u,
        children: [
            null != d && (0, i.jsx)(s.Z, {
                src: d,
                className: o.icon,
                'aria-hidden': !0
            }),
            (0, i.jsxs)('div', {
                className: o.cmdDetails,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : m
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        lineClamp: 1,
                        children: p
                    })
                ]
            }),
            null != t ? (0, i.jsx)(a.Text, {
                className: o.cmdAppName,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: m
            }) : null,
            (0, i.jsx)('div', { className: o.underline })
        ]
    });
}
