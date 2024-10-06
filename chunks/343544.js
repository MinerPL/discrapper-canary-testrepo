t.d(a, {
    Z: function () {
        return _;
    }
});
var s = t(735250),
    n = t(470079),
    o = t(481060),
    d = t(511010),
    r = t(126743),
    i = t(444812);
function _(e) {
    let { headerText: a, secondaryHeaderText: t, descriptionText: _, infoRows: l, onDismissAndStay: c, onDismissAndLeave: u, leaveButtonText: E, stayButtonText: m, transitionState: M } = e;
    return (0, s.jsxs)(o.ModalRoot, {
        transitionState: M,
        children: [
            (0, s.jsx)('img', {
                alt: '',
                className: r.headerImage,
                src: i
            }),
            (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: r.header,
                children: [
                    (0, s.jsxs)(o.Heading, {
                        variant: 'heading-lg/bold',
                        className: r.title,
                        children: [
                            a,
                            null != t &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)('br', {}), t]
                                })
                        ]
                    }),
                    null != _ &&
                        (0, s.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: _
                        })
                ]
            }),
            (0, s.jsxs)(o.ModalContent, {
                className: r.content,
                children: [
                    (0, s.jsx)('div', {
                        className: r.infoGroup,
                        children: l.map((e, a) =>
                            (0, s.jsxs)(
                                n.Fragment,
                                {
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: r.infoRow,
                                            children: [
                                                e.icon,
                                                (0, s.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    children: e.text
                                                })
                                            ]
                                        }),
                                        a < l.length - 1 && (0, s.jsx)(d.Z, {})
                                    ]
                                },
                                a
                            )
                        )
                    }),
                    (0, s.jsxs)('div', {
                        className: r.buttonGroup,
                        children: [
                            (0, s.jsx)(o.Button, {
                                type: 'submit',
                                color: o.Button.Colors.BRAND,
                                size: o.Button.Sizes.MEDIUM,
                                onClick: u,
                                children: E
                            }),
                            (0, s.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: c,
                                children: m
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
