n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(921944),
    s = n(689938),
    o = n(46403),
    l = n(905287);
function u(e) {
    let { onDismissClick: t, onCheckItOutClick: n } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)('img', {
                src: l.Z,
                className: o.image,
                alt: 'Nitroween Gift Box'
            }),
            (0, r.jsx)(i.ModalCloseButton, {
                onClick: t,
                withCircleBackground: !0,
                className: o.closeButton,
                innerClassName: o.popoutCloseButton
            }),
            (0, r.jsxs)('div', {
                className: o.body,
                children: [
                    (0, r.jsx)(i.Heading, {
                        className: o.text,
                        variant: 'heading-sm/semibold',
                        children: s.Z.Messages.NITROWEEN_GIFT_UPSELL_TITLE
                    }),
                    (0, r.jsx)(i.Text, {
                        className: o.text,
                        variant: 'text-sm/normal',
                        children: s.Z.Messages.NITROWEEN_GIFT_UPSELL_DESCRIPTION
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: o.buttonContainer,
                children: (0, r.jsx)(i.Button, {
                    className: o.ctaButton,
                    color: i.Button.Colors.BRAND_INVERTED,
                    onClick: () => n(),
                    children: s.Z.Messages.CHECK_IT_OUT
                })
            }),
            (0, r.jsx)('div', { className: o.pointer })
        ]
    });
}
function c(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: s } = e;
    return (0, r.jsx)(i.Popout, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(u, {
                ...e,
                onDismissClick: () => {
                    t(), s(a.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    n(), t(), s(a.L.TAKE_ACTION);
                }
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, r.jsx)('div', { className: o.popoutTarget })
    });
}
