n.d(t, {
    Z: function () {
        return d;
    }
});
var a = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(511010),
    o = n(126743),
    l = n(444812);
function d(e) {
    let { headerText: t, secondaryHeaderText: n, descriptionText: d, infoRows: c, onDismissAndStay: u, onDismissAndLeave: x, leaveButtonText: _, stayButtonText: m, transitionState: h, impression: f } = e;
    return (0, a.jsxs)(s.ModalRoot, {
        transitionState: h,
        impression: f,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: o.headerImage,
                src: l
            }),
            (0, a.jsxs)(s.ModalHeader, {
                separator: !1,
                className: o.header,
                children: [
                    (0, a.jsxs)(s.Heading, {
                        variant: 'heading-lg/bold',
                        className: o.title,
                        children: [
                            t,
                            null != n &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)('br', {}), n]
                                })
                        ]
                    }),
                    null != d &&
                        (0, a.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: d
                        })
                ]
            }),
            (0, a.jsxs)(s.ModalContent, {
                className: o.content,
                children: [
                    (0, a.jsx)('div', {
                        className: o.infoGroup,
                        children: c.map((e, t) =>
                            (0, a.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: o.infoRow,
                                            children: [
                                                e.icon,
                                                (0, a.jsx)(s.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        t < c.length - 1 && (0, a.jsx)(r.Z, {})
                                    ]
                                },
                                t
                            )
                        )
                    }),
                    (0, a.jsxs)('div', {
                        className: o.buttonGroup,
                        children: [
                            (0, a.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                onClick: u,
                                children: m
                            }),
                            (0, a.jsx)(s.Button, {
                                color: s.Button.Colors.BRAND,
                                size: s.Button.Sizes.MEDIUM,
                                onClick: x,
                                className: o.leave,
                                children: _
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
