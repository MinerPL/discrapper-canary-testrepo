n.d(t, {
    Z: function () {
        return f;
    },
    j: function () {
        return d;
    }
});
var r = n(200651);
n(192379);
var i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(925329),
    l = n(388032),
    u = n(901613);
function c(e) {
    let { application: t, timestamp: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.Z, {
                size: o.Z.Sizes.LARGE,
                game: t
            }),
            (0, r.jsxs)('div', {
                className: u.textContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: u.timestamp,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: a()(n).format('LLLL')
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'interactive-active',
                        children: l.intl.format(l.t.J3s8JC, { applicationName: t.name })
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { application: t, timestamp: n, children: i } = e;
    return (0, r.jsx)(s.Tooltip, {
        hideOnClick: !0,
        position: 'top',
        'aria-label': l.intl.string(l.t['5nMcv7']),
        tooltipClassName: u.gameMessageTooltip,
        tooltipContentClassName: u.gameMessageTooltipContent,
        text: (0, r.jsx)(c, {
            application: t,
            timestamp: n
        }),
        children: (e) =>
            (0, r.jsx)(s.Clickable, {
                tag: 'span',
                ...e,
                children: i
            })
    });
}
function f(e) {
    let { application: t, timestamp: n, compact: i, children: a } = e;
    return (0, r.jsxs)(d, {
        application: t,
        timestamp: n,
        children: [
            i
                ? null
                : (0, r.jsx)(s.GameControllerIcon, {
                      className: u.gameIcon,
                      size: 'custom',
                      width: 14,
                      height: 14
                  }),
            a
        ]
    });
}
