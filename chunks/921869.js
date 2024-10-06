n.d(t, {
    m: function () {
        return u;
    }
});
var a = n(735250);
n(470079);
var r = n(442837),
    s = n(481060),
    o = n(600164),
    l = n(553795),
    c = n(424071),
    i = n(689938),
    d = n(879137);
function u(e) {
    let { platformType: t, onContinue: n, onClose: u, img: x, headerConnect: N, headerReconnect: h, body: C, learnMoreLink: m, valueProps: j } = e,
        E = (0, r.e7)([l.Z], () => {
            let e = l.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, a.jsxs)(c.Z, {
        children: [
            (0, a.jsxs)(s.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, a.jsxs)('div', {
                        className: d.illustration,
                        children: [x, ' ']
                    }),
                    (0, a.jsx)(s.Heading, {
                        className: d.title,
                        variant: 'heading-xl/extrabold',
                        children: E && null != h ? h : N
                    }),
                    (0, a.jsx)(s.ModalCloseButton, {
                        className: d.closeButton,
                        onClick: u
                    })
                ]
            }),
            (0, a.jsxs)(s.ModalContent, {
                className: d.body,
                paddingFix: !1,
                children: [
                    (0, a.jsx)(s.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: C
                    }),
                    (0, a.jsx)('div', {
                        className: d.valueProps,
                        children: j
                    }),
                    null != m
                        ? (0, a.jsx)(s.Text, {
                              tag: 'p',
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: i.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({ helpCenterLink: m })
                          })
                        : null
                ]
            }),
            (0, a.jsx)(s.ModalFooter, {
                className: d.footer,
                children: (0, a.jsx)(s.Button, {
                    className: d.footerButton,
                    color: s.Button.Colors.BRAND,
                    onClick: n,
                    children: i.Z.Messages.CONTINUE
                })
            })
        ]
    });
}
