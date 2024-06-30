n.d(t, {
    b: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(846027), l = n(468026), r = n(689938);
let o = null;
function c() {
    null !== o && (0, a.closeModal)(o), o = null;
}
function d() {
    s.Z.setSilenceWarning(!1), c();
}
function u() {
    o = (0, a.openModal)(e => (0, i.jsx)(l.default, {
        title: r.Z.Messages.CONFIRM_DISABLE_SILENCE_TITLE,
        body: r.Z.Messages.CONFIRM_DISABLE_SILENCE_BODY,
        secondaryConfirmText: r.Z.Messages.CONFIRM_DISABLE_SILENCE_DONT_SHOW,
        onConfirmSecondary: d,
        onConfirm: c,
        confirmText: r.Z.Messages.OKAY,
        ...e
    }));
}
