r.d(t, {
    Z: function () {
        return u;
    }
}), r(47120);
var a = r(735250), n = r(470079), i = r(120356), o = r.n(i), l = r(481060), c = r(246992), s = r(719556), d = r(24822);
function u() {
    let e = {
            BOGOAnnouncementModal: async () => {
                let {default: e} = await r.e('34049').then(r.bind(r, 868508));
                return t => (0, a.jsx)(e, { renderModalProps: t });
            },
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
                let {default: e} = await r.e('18327').then(r.bind(r, 731433));
                return t => (0, a.jsx)(e, { ...t });
            }
        }, t = Object.keys(e).map(e => ({
            label: e,
            value: e
        })), [i, u] = n.useState(t[0].value);
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
                                options: t,
                                isSelected: e => i === e,
                                placeholder: 'Trial ID',
                                serialize: e => String(e),
                                select: e => u(e),
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
