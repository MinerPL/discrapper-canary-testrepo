n.d(t, {
    Z: function () {
        return o;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(481060), a = n(689938), s = n(995794);
function o(e) {
    let {
            header: t,
            body: n,
            onSubmit: o,
            ...c
        } = e, [u, d] = l.useState(!1);
    return (0, i.jsxs)(r.ConfirmModal, {
        header: t,
        confirmText: a.Z.Messages.LEAVE_GROUP_DM,
        cancelText: a.Z.Messages.CANCEL,
        onConfirm: () => {
            o(null, u);
        },
        ...c,
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: n
            }),
            (0, i.jsx)(r.Checkbox, {
                type: r.Checkbox.Types.INVERTED,
                value: u,
                onChange: () => d(e => !e),
                className: s.checkbox,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: a.Z.Messages.LEAVE_GROUP_DM_SILENTLY
                })
            })
        ]
    });
}
