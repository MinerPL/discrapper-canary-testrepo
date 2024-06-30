n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(846027), l = n(923928), u = n(468026), c = n(269647), d = n(981631), _ = n(689938);
function E() {
    let e = (0, a.e7)([c.Z], () => c.Z.shouldShowWarning(), []), t = i.useRef(null);
    function n() {
        null !== t.current && ((0, o.closeModal)(t.current), t.current = null);
    }
    function E() {
        l.Z.clearVADWarning();
    }
    return i.useEffect(() => (e ? t.current = (0, o.openModal)(e => (0, r.jsx)(u.default, {
        title: _.Z.Messages.VAD_PERMISSION_TITLE,
        body: _.Z.Messages.VAD_PERMISSION_BODY,
        onCancel: E,
        cancelText: _.Z.Messages.VAD_PERMISSION_OKAY,
        confirmText: _.Z.Messages.VAD_PERMISSION_ENABLE_PTT,
        onConfirm: () => {
            s.Z.setMode(d.pM4.PUSH_TO_TALK), E();
        },
        ...e
    })) : n(), () => {
        n();
    }), [e]), null;
}
