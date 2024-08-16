n.d(t, {
    $: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(481060),
    r = n(170671),
    o = n(738672),
    c = n(689938),
    u = n(487365),
    d = n(946790);
function h(e) {
    let { hidden: t, onDismiss: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(u.demoCta, { [u.hidden]: t }),
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)('div', {
                        className: u.wumpusContainer,
                        children: (0, i.jsx)(l.Image, {
                            src: d,
                            width: 72,
                            height: 52,
                            zoomable: !1
                        })
                    }),
                    (0, i.jsx)(l.Button, {
                        'aria-label': c.Z.Messages.CLOSE,
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.NONE,
                        onClick: () => n(),
                        className: u.closeButton,
                        children: (0, i.jsx)(l.XSmallIcon, {
                            size: 'md',
                            className: u.closeIcon,
                            color: 'white'
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: u.textContainer,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/semibold',
                    color: 'always-white',
                    children: c.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_UPSELL_TOOLTIP
                })
            }),
            (0, i.jsxs)('div', {
                className: u.nitroTextAndBadge,
                children: [
                    (0, i.jsx)(r.Z, { isSelected: !0 }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'always-white',
                        children: c.Z.Messages.POWERED_BY_NITRO
                    })
                ]
            })
        ]
    });
}
function m(e) {
    return (0, i.jsx)(o.h, {
        ...e,
        renderComponent: (e) => (0, i.jsx)(h, { ...e })
    });
}
