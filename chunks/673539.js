n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(481060), s = n(979696), r = n(963876), o = n(689938);
function c(e) {
    let t = (0, a.e7)([s.Z], () => s.Z.getToastsEnabled(e));
    return (0, i.jsx)(l.MenuCheckboxItem, {
        id: 'show-call-chat-toasts',
        label: o.Z.Messages.SHOW_NEW_MESSAGE_PREVIEWS,
        checked: t,
        action: () => r.Z.setCallChatToastsEnabled(e, !t)
    });
}
