n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(246992),
    c = n(535271),
    u = n(384712);
function d() {
    let e = {
            BOGOAnnouncementModal: async () => {
                let { default: e } = await n.e('34049').then(n.bind(n, 868508));
                return (t) => (0, r.jsx)(e, { renderModalProps: t });
            },
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
                let { default: e } = await n.e('18327').then(n.bind(n, 731433));
                return (t) => (0, r.jsx)(e, { ...t });
            },
            CollectiblesExpiryModal: async () => {
                let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                return (t) => (0, r.jsx)(e, { ...t });
            }
        },
        t = Object.keys(e).map((e) => ({
            label: e,
            value: e
        })),
        [l, d] = a.useState(t[0].value);
    return (0, r.jsx)(o.ScrollerThin, {
        className: i()(c.panel),
        children: (0, r.jsx)('div', {
            className: u.panelInner,
            children: (0, r.jsxs)('section', {
                className: u.section,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-md/semibold',
                        children: 'Open a Modal'
                    }),
                    (0, r.jsxs)('div', {
                        className: u.inputRow,
                        children: [
                            (0, r.jsx)(o.Select, {
                                className: u.input,
                                options: t,
                                isSelected: (e) => l === e,
                                placeholder: 'Trial ID',
                                serialize: (e) => String(e),
                                select: (e) => d(e),
                                popoutLayerContext: s.O$
                            }),
                            (0, r.jsx)(o.Button, {
                                onClick: () => {
                                    (0, o.openModalLazy)(e[l]);
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
