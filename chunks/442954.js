t.d(r, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(481060),
    c = t(246992),
    s = t(535271),
    d = t(384712);
function u() {
    let e = {
            BOGOAnnouncementModal: async () => {
                let { default: e } = await t.e('34049').then(t.bind(t, 868508));
                return (r) => (0, a.jsx)(e, { renderModalProps: r });
            },
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
                let { default: e } = await t.e('18327').then(t.bind(t, 731433));
                return (r) => (0, a.jsx)(e, { ...r });
            }
        },
        r = Object.keys(e).map((e) => ({
            label: e,
            value: e
        })),
        [i, u] = n.useState(r[0].value);
    return (0, a.jsx)(l.ScrollerThin, {
        className: o()(s.panel),
        children: (0, a.jsx)('div', {
            className: d.panelInner,
            children: (0, a.jsxs)('section', {
                className: d.section,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        children: 'Open a Modal'
                    }),
                    (0, a.jsxs)('div', {
                        className: d.inputRow,
                        children: [
                            (0, a.jsx)(l.Select, {
                                className: d.input,
                                options: r,
                                isSelected: (e) => i === e,
                                placeholder: 'Trial ID',
                                serialize: (e) => String(e),
                                select: (e) => u(e),
                                popoutLayerContext: c.O$
                            }),
                            (0, a.jsx)(l.Button, {
                                onClick: () => {
                                    (0, l.openModalLazy)(e[i]);
                                },
                                children: 'Open'
                            })
                        ]
                    })
                ]
            })
        })
    });
}
