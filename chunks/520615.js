n.r(t), n.d(t, {
    default: function () {
        return d;
    }
});
var s = n(735250);
n(470079);
var r = n(481060), a = n(338690), o = n(689938), i = n(557569);
function d(e) {
    let {
        transitionState: t,
        onClose: n
    } = e;
    return (0, s.jsxs)(r.ModalRoot, {
        transitionState: t,
        children: [
            (0, s.jsx)(r.ModalHeader, {
                separator: !1,
                children: (0, s.jsx)(r.Heading, {
                    variant: 'heading-lg/semibold',
                    children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_HEADER
                })
            }),
            (0, s.jsxs)(r.ModalContent, {
                children: [
                    (0, s.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: o.Z.Messages.SYSTEM_DM_URGENT_MESSAGE_MODAL_BODY
                    }),
                    (0, s.jsx)('div', { className: i.art })
                ]
            }),
            (0, s.jsx)(r.ModalFooter, {
                children: (0, s.jsx)(r.Button, {
                    type: 'submit',
                    color: r.Button.Colors.BRAND,
                    onClick: () => {
                        (0, a.Z)(), n();
                    },
                    children: o.Z.Messages.OKAY
                })
            })
        ]
    });
}
