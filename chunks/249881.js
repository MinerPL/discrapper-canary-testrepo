s.d(t, {
    t: function () {
        return _;
    }
});
var n = s(735250), a = s(470079), i = s(481060), r = s(243778), o = s(921944), l = s(689938), c = s(487099);
let d = e => {
        let {markAsDismissed: t} = e;
        return a.useEffect(() => t(o.L.UNKNOWN), [t]), (0, n.jsx)(i.TextBadge, {
            className: c.newBadge,
            text: l.Z.Messages.NEW
        });
    }, _ = e => {
        let {
            title: t,
            body: s,
            img: a,
            newIndicatorDismissibleContent: o,
            onClick: _
        } = e;
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
                                (0, n.jsx)(r.Z, {
                                    contentTypes: [o],
                                    children: e => {
                                        let {
                                            visibleContent: t,
                                            markAsDismissed: s
                                        } = e;
                                        return t === o ? (0, n.jsx)(d, { markAsDismissed: s }) : null;
                                    }
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-md/semibold',
                                    children: t
                                })
                            ]
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            children: s
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
