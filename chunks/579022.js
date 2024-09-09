var i = n(735250);
n(470079);
var a = n(481060),
    s = n(689938),
    r = n(173645);
let l = Math.ceil(2 * Math.PI * 20);
t.Z = (e) => {
    let { total: t, used: n } = e,
        o = Math.max(0, Math.min(1, n / t)),
        c = ''.concat(Math.floor(100 * o), '%');
    return (0, i.jsx)(a.Tooltip, {
        text: s.Z.Messages.APPLICATION_INSTALLATION_SPACE_USED.format({ used: c }),
        children: (e) =>
            (0, i.jsxs)('div', {
                className: r.wrapper,
                role: 'progressbar',
                'aria-label': s.Z.Messages.APPLICATION_INSTALLATION_SPACE_USED.format({ used: c }),
                ...e,
                children: [
                    (0, i.jsxs)('svg', {
                        viewBox: '25 25 50 50',
                        className: r.svg,
                        'aria-hidden': !0,
                        children: [
                            (0, i.jsx)('circle', {
                                className: r.background,
                                cx: '50',
                                cy: '50',
                                r: 20
                            }),
                            (0, i.jsx)('circle', {
                                className: r.foreground,
                                cx: '50',
                                cy: '50',
                                r: 20,
                                stroke: (function (e) {
                                    let t = Math.round(-85 * e + 199),
                                        n = Math.round(-71 * e + 208),
                                        i = Math.round(-22 * e + 240);
                                    return 'rgb('.concat(t, ', ').concat(n, ', ').concat(i, ')');
                                })(o),
                                strokeDasharray: (function (e) {
                                    let t = Math.floor(l * e);
                                    return ''.concat(t, ', ').concat(l);
                                })(o)
                            })
                        ]
                    }),
                    (0, i.jsx)('aside', {
                        className: r.usageInfo,
                        'aria-hidden': !0,
                        children: c
                    })
                ]
            })
    });
};
