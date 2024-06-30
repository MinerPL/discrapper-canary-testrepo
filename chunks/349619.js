n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(153867), o = n(468026), s = n(740492), l = n(689938);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {
        }, n = () => {
            a.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), e();
        };
    s.ZP.disableEmbeddedActivityPopOutAlert ? e() : (0, i.openModal)(i => (0, r.jsx)(o.default, {
        confirmText: l.Z.Messages.EMBEDDED_ACTIVITIES_YEP,
        secondaryConfirmText: l.Z.Messages.DONT_ASK_AGAIN,
        title: l.Z.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
        cancelText: l.Z.Messages.EMBEDDED_ACTIVITIES_NVM,
        onConfirm: e,
        onConfirmSecondary: n,
        onCancel: t,
        body: l.Z.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
        ...i
    }));
}
