t.r(e), t.d(e, {
    IconVariant: function () {
        return a;
    },
    default: function () {
        return d;
    }
}), t(47120);
var a, o, r = t(735250), c = t(470079), i = t(481060), s = t(689938), l = t(358678);
(o = a || (a = {})).DANGER = 'danger', o.WARNING = 'warning';
function d(n) {
    let {
            transitionState: e,
            onClose: t,
            title: a,
            body: o,
            cta: d,
            closeLabel: u,
            onConfirm: h,
            iconVariant: x = 'warning'
        } = n, [_, g] = c.useState(!1), I = async () => {
            g(!0);
            try {
                await h(), t();
            } finally {
                g(!1);
            }
        }, m = null != a ? a : s.Z.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE;
    return (0, r.jsxs)(i.ModalRoot, {
        className: l.__invalid_container,
        size: i.ModalSize.DYNAMIC,
        transitionState: e,
        'aria-label': m,
        children: [
            (0, r.jsxs)(i.ModalContent, {
                className: l.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: l.header,
                        children: [
                            (0, r.jsx)(i.CircleExclamationPointIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: function (n) {
                                    switch (n) {
                                    case 'danger':
                                        return l.dangerIcon;
                                    case 'warning':
                                        return l.warningIcon;
                                    }
                                }(x)
                            }),
                            (0, r.jsx)(i.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, r.jsx)(i.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: m
                            })
                        ]
                    }),
                    (0, r.jsx)(i.Spacer, { size: 12 }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: l.__invalid_body,
                        children: o
                    })
                ]
            }),
            (0, r.jsxs)(i.ModalFooter, {
                children: [
                    (0, r.jsx)(i.Button, {
                        color: i.Button.Colors.BRAND,
                        onClick: I,
                        submitting: _,
                        children: d
                    }),
                    (0, r.jsx)(i.Spacer, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != u && (0, r.jsx)(i.Button, {
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.OUTLINED,
                        onClick: t,
                        children: u
                    })
                ]
            })
        ]
    });
}
