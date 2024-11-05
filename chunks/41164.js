t.r(i);
var n = t(200651);
t(192379);
var a = t(481060),
    l = t(230711),
    o = t(187819),
    s = t(181211),
    r = t(188879),
    c = t(981631),
    d = t(726985),
    m = t(388032),
    u = t(105548),
    h = t(170143);
i.default = (e) => {
    let { transitionState: i, onClose: t, classificationId: p, source: x } = e,
        f = (0, s.Z)(),
        g = (0, o._p)({ location: 'classification-detail-modal' }),
        v = () => {
            t(), g ? l.Z.open(c.oAB.ACCOUNT, d.s6.PRIVACY_AND_SAFETY_STANDING) : l.Z.open(c.oAB.PRIVACY_AND_SAFETY, d.s6.PRIVACY_ACCOUNT_STANDING);
        };
    return (0, n.jsxs)(a.ModalRoot, {
        className: u.modalRoot,
        transitionState: i,
        children: [
            (0, n.jsxs)('div', {
                className: u.modalHeader,
                children: [
                    (0, n.jsx)('img', {
                        className: u.image,
                        src: h,
                        alt: ''
                    }),
                    (0, n.jsx)(a.ModalCloseButton, {
                        className: u.modalClose,
                        onClick: t
                    })
                ]
            }),
            (0, n.jsx)(a.ModalContent, {
                className: u.modalContent,
                children: f
                    ? (0, n.jsx)(a.Spinner, {})
                    : (0, n.jsx)(r.Z, {
                          classificationId: p,
                          source: x,
                          onError: v
                      })
            }),
            (0, n.jsx)(a.ModalFooter, {
                children: (0, n.jsx)(a.Button, {
                    className: u.__invalid_button,
                    type: 'button',
                    color: a.Button.Colors.BRAND,
                    onClick: v,
                    children: m.intl.string(m.t.elrEjI)
                })
            })
        ]
    });
};
