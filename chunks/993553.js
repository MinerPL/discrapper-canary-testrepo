n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(692547),
    l = n(531057),
    a = n(865824),
    o = n(481060),
    c = n(388032),
    d = n(287744);
function u(e) {
    let { children: t, lineClamp: n = 2, ...u } = e,
        [m, h] = s.useState(!1),
        [g, p] = s.useState(null),
        x =
            null != g &&
            (0, i.jsx)('button', {
                className: d.button,
                onClick: () => h((e) => !e),
                children: (0, i.jsxs)(o.Text, {
                    className: d.seeMore,
                    variant: 'text-sm/medium',
                    color: 'text-brand',
                    children: [
                        m ? c.intl.string(c.t['JQX/PT']) : c.intl.string(c.t.Fbrd8P),
                        m
                            ? (0, i.jsx)(a.u, {
                                  color: r.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, i.jsx)(l.C, {
                                  color: r.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                    ]
                })
            }),
        [S, T] = s.useState(null),
        C = s.useCallback(() => {
            if (null == S) return;
            let { scrollHeight: e, clientHeight: t } = S;
            e > t &&
                p({
                    truncatedHeight: t,
                    expandedHeight: e
                });
        }, [S]);
    s.useEffect(() => {
        requestAnimationFrame(C);
    }, [C, t, n]);
    let _ = 'auto';
    return (
        null != g && (_ = m ? ''.concat(g.expandedHeight, 'px') : ''.concat(g.truncatedHeight, 'px')),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(o.Text, {
                    ...u,
                    className: d.content,
                    lineClamp: m ? void 0 : n,
                    ref: T,
                    style: { height: _ },
                    children: t
                }),
                x
            ]
        })
    );
}
