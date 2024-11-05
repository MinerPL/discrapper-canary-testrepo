n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(688465),
    r = n(690221),
    s = n(447564),
    o = n(388032),
    c = n(188090),
    d = n(495841);
function u(e) {
    let { channel: t } = e;
    return (0, i.jsxs)(l.Dialog, {
        className: c.bar,
        children: [
            (0, i.jsxs)('div', {
                className: c.header,
                children: [
                    (0, i.jsx)(l.Heading, {
                        color: 'text-muted',
                        variant: 'heading-md/semibold',
                        className: c.title,
                        children: o.intl.string(o.t.bVbBT0)
                    }),
                    (0, i.jsx)(a.Z, {})
                ]
            }),
            (0, i.jsx)(l.Clickable, {
                className: c.button,
                onClick: () => {
                    (0, l.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 447564));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    channel: t,
                                    ...n
                                });
                        },
                        { modalKey: s.HD_STREAMING_POTION_MODAL_KEY }
                    );
                },
                children: (0, i.jsxs)('div', {
                    className: c.buttonContent,
                    children: [
                        (0, i.jsx)('img', {
                            src: d,
                            alt: o.intl.string(o.t.htEhYm)
                        }),
                        (0, i.jsxs)(l.Text, {
                            variant: 'text-sm/medium',
                            children: [' ', o.intl.string(o.t.Qwq08P)]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: c.divider }),
            (0, i.jsx)(r.Z, {
                onClick: () => {},
                children: (0, i.jsx)(l.Text, {
                    color: 'text-link',
                    variant: 'text-xs/medium',
                    children: o.intl.string(o.t['1wV4qq'])
                })
            })
        ]
    });
}
