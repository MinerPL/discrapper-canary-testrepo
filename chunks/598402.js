s.r(e), s.d(e, {
    default: function () {
        return l;
    }
});
var n = s(735250);
s(470079);
var a = s(481060), o = s(689938), c = s(422182), i = s(134519);
function l(t) {
    let {
        transitionState: e,
        onClose: s
    } = t;
    return (0, n.jsxs)(a.ModalRoot, {
        transitionState: e,
        className: c.root,
        children: [
            (0, n.jsxs)(a.ModalHeader, {
                separator: !1,
                className: c.noScroll,
                children: [
                    (0, n.jsx)(a.ModalCloseButton, {
                        className: c.closeButton,
                        onClick: s
                    }),
                    (0, n.jsx)('div', {
                        className: c.imageContainer,
                        children: (0, n.jsx)('img', {
                            src: i,
                            className: c.image,
                            alt: ''
                        })
                    })
                ]
            }),
            (0, n.jsx)(a.ModalContent, {
                children: (0, n.jsxs)('div', {
                    className: c.content,
                    children: [
                        (0, n.jsx)(a.Heading, {
                            variant: 'heading-xl/semibold',
                            className: c.title,
                            children: o.Z.Messages.INVITE_PERMISSION_MODAL_TITLE
                        }),
                        (0, n.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: c.text,
                            children: o.Z.Messages.INVITE_PERMISSION_MODAL_TEXT
                        }),
                        (0, n.jsx)(a.Button, {
                            className: c.button,
                            onClick: s,
                            children: o.Z.Messages.GOT_IT
                        })
                    ]
                })
            })
        ]
    });
}
