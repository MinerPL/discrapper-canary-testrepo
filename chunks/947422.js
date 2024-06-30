a.r(t), a.d(t, {
    default: function () {
        return c;
    }
});
var n = a(735250);
a(470079);
var s = a(481060), o = a(153124), l = a(689938), i = a(615714), d = a(298860);
let r = e => {
    let {
        text: t,
        icon: a,
        foreground: o
    } = e;
    return (0, n.jsxs)('div', {
        className: i.bulletContainer,
        children: [
            (0, n.jsx)('div', {
                className: i.iconContainer,
                children: (0, n.jsx)(a, {
                    color: null != o ? o : 'currentColor',
                    className: i.bulletIcon,
                    size: 'custom',
                    height: 40,
                    width: 40
                })
            }),
            (0, n.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: i.bulletText,
                children: t
            })
        ]
    });
};
function c(e) {
    let {
            transitionState: t,
            onClose: a,
            ...c
        } = e, _ = (0, o.Dt)();
    return (0, n.jsx)(s.ModalRoot, {
        transitionState: t,
        'aria-labelledby': _,
        ...c,
        size: s.ModalSize.SMALL,
        children: (0, n.jsxs)('div', {
            className: i.content,
            children: [
                (0, n.jsx)('img', {
                    src: d,
                    alt: l.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ALT_TEXT,
                    className: i.illustration
                }),
                (0, n.jsx)(s.Heading, {
                    id: _,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    className: i.headerTitle,
                    children: l.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_TITLE
                }),
                (0, n.jsx)(r, {
                    text: l.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_1,
                    icon: s.MicrophoneSlashIcon,
                    foreground: i.red
                }),
                (0, n.jsx)(r, {
                    text: l.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_2,
                    icon: s.PhoneHangUpIcon
                }),
                (0, n.jsx)(r, {
                    text: l.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_3,
                    icon: s.HandRequestSpeakIcon
                }),
                (0, n.jsx)(s.Button, {
                    color: s.Button.Colors.BRAND,
                    className: i.button,
                    onClick: a,
                    children: l.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ACTION
                })
            ]
        })
    });
}
