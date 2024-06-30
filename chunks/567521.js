i.d(n, {
    Z: function () {
        return d;
    }
});
var t = i(735250);
i(470079);
var l = i(442837), s = i(481060), a = i(471253), u = i(146085), o = i(496675), r = i(689938);
function d(e, n) {
    let i = (0, l.e7)([o.Z], () => o.Z.can(u.yP, e), [e]);
    return null != n && i ? (0, t.jsx)(s.MenuItem, {
        id: 'end-stage',
        label: r.Z.Messages.END_STAGE,
        color: 'danger',
        action: function () {
            (0, s.openModal)(n => (0, t.jsx)(s.ConfirmModal, {
                ...n,
                header: r.Z.Messages.END_STAGE_TITLE,
                confirmText: r.Z.Messages.END_STAGE,
                cancelText: r.Z.Messages.CANCEL,
                onConfirm: () => (0, a.NZ)(e),
                children: (0, t.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: r.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE
                })
            }));
        }
    }) : null;
}
