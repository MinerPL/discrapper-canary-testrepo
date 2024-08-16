t.d(s, {
    t: function () {
        return _;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(243778),
    o = t(921944),
    l = t(689938),
    c = t(643602);
let d = (e) => {
        let { markAsDismissed: s } = e;
        return (
            a.useEffect(() => s(o.L.UNKNOWN), [s]),
            (0, n.jsx)(i.TextBadge, {
                className: c.newBadge,
                text: l.Z.Messages.NEW
            })
        );
    },
    _ = (e) => {
        let { title: s, body: t, img: a, newIndicatorDismissibleContent: o, onClick: _ } = e;
        return (0, n.jsxs)('div', {
            className: c.container,
            children: [
                a,
                (0, n.jsxs)('div', {
                    className: c.textContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: c.headerText,
                            children: [
                                (0, n.jsx)(r.ZP, {
                                    contentTypes: [o],
                                    children: (e) => {
                                        let { visibleContent: s, markAsDismissed: t } = e;
                                        return s === o ? (0, n.jsx)(d, { markAsDismissed: t }) : null;
                                    }
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-md/semibold',
                                    children: s
                                })
                            ]
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            children: t
                        })
                    ]
                }),
                (0, n.jsx)(i.Button, {
                    size: i.ButtonSizes.MEDIUM,
                    onClick: _,
                    className: c.reconnectButton,
                    children: l.Z.Messages.RECONNECT
                })
            ]
        });
    };
