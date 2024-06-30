n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(946314), l = n(921944), o = n(689938), c = n(738934);
function d(e) {
    let {
        onClick: t,
        onSecondaryClick: n,
        onComponentMount: d,
        markAsDismissed: u
    } = e;
    s.useEffect(() => {
        null == d || d();
    }, [d]);
    let _ = s.useCallback(e => {
            t(e), null == u || u(l.L.PRIMARY);
        }, [
            t,
            u
        ]), E = s.useCallback(() => {
            null == n || n(), null == u || u(l.L.SECONDARY);
        }, [
            n,
            u
        ]);
    return (0, i.jsxs)('div', {
        className: c.tooltipWrapper,
        children: [
            (0, i.jsx)(a.Heading, {
                className: c.tooltipHeader,
                variant: 'heading-md/semibold',
                children: o.Z.Messages.SERVER_DISCOVERY_TOOLTIP_TITLE
            }),
            (0, i.jsx)(a.Text, {
                className: c.tooltipText,
                variant: 'text-sm/normal',
                children: o.Z.Messages.SERVER_DISCOVERY_TOOLTIP_DESCRIPTION.format({ count: r.WZ })
            }),
            (0, i.jsxs)('div', {
                className: c.buttonsContainer,
                children: [
                    (0, i.jsx)(a.Button, {
                        fullWidth: !0,
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.BRAND,
                        onClick: _,
                        children: o.Z.Messages.LEARN_MORE
                    }),
                    (0, i.jsx)(a.Button, {
                        fullWidth: !0,
                        size: a.Button.Sizes.SMALL,
                        look: a.Button.Looks.BLANK,
                        onClick: E,
                        children: o.Z.Messages.NO_THANKS
                    })
                ]
            })
        ]
    });
}
