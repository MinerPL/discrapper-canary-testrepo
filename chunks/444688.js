n.r(t);
var s = n(735250);
n(470079);
var i = n(442837), o = n(481060), a = n(418632), r = n(594174), l = n(285952), c = n(689938), d = n(214521);
function u(e) {
    let {onClose: t} = e, l = (0, i.e7)([r.default], () => r.default.getCurrentUser());
    function d() {
        null == t || t();
    }
    function u() {
        d(), (0, o.openModalLazy)(async () => {
            let {default: e} = await Promise.all([
                n.e('9343'),
                n.e('3760')
            ]).then(n.bind(n, 642298));
            return t => (0, s.jsx)(e, { ...t });
        });
    }
    return (null == l ? void 0 : l.email) == null ? (0, s.jsx)(o.Button, {
        onClick: u,
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        children: c.Z.Messages.ADD_EMAIL_SHORT
    }) : (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.Button, {
                onClick: u,
                color: o.Button.Colors.PRIMARY,
                look: o.Button.Looks.LINK,
                children: c.Z.Messages.CHANGE_EMAIL_SHORT
            }),
            (0, s.jsx)(a.Z, {
                color: o.Button.Colors.BRAND,
                onClick: d
            })
        ]
    });
}
t.default = function (e) {
    let {
        onClose: t,
        transitionState: n
    } = e;
    return (0, s.jsxs)(o.ModalRoot, {
        transitionState: n,
        children: [
            (0, s.jsx)(o.ModalHeader, {
                children: (0, s.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H4,
                    children: c.Z.Messages.PREMIUM_NOT_VERIFIED
                })
            }),
            (0, s.jsxs)(o.ModalContent, {
                children: [
                    (0, s.jsx)('div', { className: d.imageUnverified }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: d.message,
                        children: c.Z.Messages.PREMIUM_NOT_VERIFIED_BODY
                    })
                ]
            }),
            (0, s.jsx)(o.ModalFooter, {
                children: (0, s.jsx)(l.Z, {
                    justify: l.Z.Justify.END,
                    children: (0, s.jsx)(u, { onClose: t })
                })
            })
        ]
    });
};
