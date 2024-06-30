n.d(t, {
    Z: function () {
        return p;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(906467), c = n(857192), d = n(835225), _ = n(117795), E = n(153850), f = n(565384), h = n(762748);
function p() {
    let {
            debugTrackedData: e,
            impressions: t
        } = (0, f.Xo)(e => ({
            debugTrackedData: e.debugTrackedData,
            impressions: e.impressions
        })), n = (0, s.e7)([c.default], () => c.default.isAnalyticsDebuggerEnabled), a = (0, s.e7)([u.Z], () => u.Z.isDeveloper), [p, m] = i.useState(!1), {
            name: I,
            ...T
        } = null != e ? e : {}, g = null != I;
    return a && n ? (0, r.jsx)(E.ZP, {
        children: (0, r.jsxs)('div', {
            className: o()(h.container, {
                [h.containerMinimized]: p,
                [h.notTracked]: !g
            }),
            children: [
                (0, r.jsx)(l.Clickable, {
                    className: h.minimizeButton,
                    onClick: () => {
                        m(!p);
                    },
                    children: p ? (0, r.jsx)(d.Z, {}) : (0, r.jsx)(_.Z, {})
                }),
                (0, r.jsxs)('div', {
                    className: o()(h.content, { [h.contentMinimized]: p }),
                    children: [
                        (0, r.jsxs)(l.Text, {
                            className: o()(h.label, { [h.notTracked]: !g }),
                            variant: 'text-xxs/normal',
                            children: [
                                g ? (0, r.jsx)(l.CircleCheckIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: h.iconTracked
                                }) : (0, r.jsx)(l.CircleXIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: h.iconNotTracked
                                }),
                                null != I ? I : '(untracked)'
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: h.current,
                            children: JSON.stringify(T, void 0, 2)
                        }),
                        (0, r.jsx)(l.Text, {
                            className: o()(h.label, { [h.notTracked]: !g }),
                            variant: 'text-xxs/normal',
                            children: 'impressions stack'
                        }),
                        (0, r.jsx)('div', {
                            className: h.stack,
                            children: JSON.stringify(t, void 0, 2)
                        })
                    ]
                })
            ]
        })
    }) : null;
}
