t.d(n, {
    Z: function () {
        return _;
    }
});
var s = t(735250);
t(470079);
var i = t(399606),
    a = t(481060),
    r = t(668781),
    u = t(594174),
    l = t(626135),
    d = t(981631),
    o = t(689938);
function _(e) {
    let { header: n, children: t, sku_id: _, sku_name: R, guild_id: c, cancelLabel: m, confirmLabel: E, transitionState: O, onClose: T, ...f } = e,
        M = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return (0, s.jsx)(a.ConfirmModal, {
        header: null != n ? n : o.Z.Messages.REPORT,
        cancelText: null != m ? m : o.Z.Messages.CANCEL,
        confirmText: null != E ? E : o.Z.Messages.REPORT,
        onConfirm: () => {
            l.default.track(d.rMx.TNS_SKU_REPORT_SUBMITTED, {
                sku_id: _,
                guild_id: c,
                user_id: null == M ? void 0 : M.id
            }),
                r.Z.show({
                    title: o.Z.Messages.SKU_REPORT_CONFIRMATION_HEADER,
                    body: o.Z.Messages.SKU_REPORT_CONFIRMATION_BODY.format({ skuName: R })
                });
        },
        transitionState: O,
        onClose: T,
        ...f,
        children: t
    });
}
