n.d(t, {
    D: function () {
        return l;
    },
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(67212), o = n(689938);
function s(e) {
    (0, i.openModal)(t => (0, r.jsx)(i.ConfirmModal, {
        header: o.Z.Messages.STOP_STREAMING,
        confirmText: o.Z.Messages.STOP_STREAMING,
        cancelText: o.Z.Messages.CANCEL,
        onConfirm: () => {
            (0, a.b_)(), e();
        },
        ...t,
        children: (0, r.jsx)(i.Text, {
            variant: 'text-md/normal',
            children: o.Z.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
        })
    }));
}
function l(e) {
    (0, i.openModal)(t => (0, r.jsx)(i.ConfirmModal, {
        header: o.Z.Messages.START_STREAMING,
        confirmText: o.Z.Messages.START_STREAMING,
        cancelText: o.Z.Messages.CANCEL,
        onConfirm: e,
        confirmButtonColor: i.Button.Colors.BRAND,
        ...t,
        children: (0, r.jsx)(i.Text, {
            variant: 'text-md/normal',
            children: o.Z.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
        })
    }));
}
