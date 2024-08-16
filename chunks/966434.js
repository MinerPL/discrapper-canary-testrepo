n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(668781),
    i = n(624138),
    a = n(689938);
function s(e, t, n, s) {
    var o;
    r.Z.show({
        title: a.Z.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
        cancelText: a.Z.Messages.CANCEL,
        confirmText: a.Z.Messages.CONFIRM,
        onConfirm: n,
        onCancel: s,
        body: a.Z.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
            currentApplicationName: null !== (o = null == e ? void 0 : e.name) && void 0 !== o ? o : a.Z.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
            currentApplicationChannelName: (0, i.Ew)(null == t ? void 0 : t.name) ? a.Z.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT : null == t ? void 0 : t.name
        })
    });
}
