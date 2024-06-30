n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), l = n(153867), s = n(468026), r = n(740492), o = n(689938);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {
        }, n = t => {
            l.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), t(), e();
        };
    r.ZP.disableEmbeddedActivityPopOutAlert ? e() : (0, a.openModal)(a => (0, i.jsx)(s.default, {
        confirmText: o.Z.Messages.EMBEDDED_ACTIVITIES_YEP,
        secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
        title: o.Z.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
        cancelText: o.Z.Messages.EMBEDDED_ACTIVITIES_NVM,
        onConfirm: () => {
            a.onClose(), e();
        },
        onCancel: t,
        onConfirmSecondary: () => n(a.onClose),
        body: o.Z.Messages.EMBEDDED_ACTIVITIES_POP_IN_WARNING,
        ...a
    }), {}, a.POPOUT_MODAL_CONTEXT);
}
