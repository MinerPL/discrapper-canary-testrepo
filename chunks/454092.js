t.d(n, {
    _: function () {
        return c;
    },
    s: function () {
        return a;
    }
});
var i, a, s = t(668781), l = t(63063), o = t(981631), r = t(689938);
function c(e, n) {
    let t;
    0 === e ? t = r.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_SELF.format() : 1 === e ? t = r.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_ROLE.format({ name: n }) : 2 === e && (t = r.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_DENY_ROLE.format({ name: n })), s.Z.show({
        title: r.Z.Messages.SELF_DENY_PERMISSION_TITLE,
        body: t,
        cancelText: r.Z.Messages.HELP_DESK,
        onCancel() {
            window.open(l.Z.getArticleURL(o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
        }
    });
}
(i = a || (a = {}))[i.REMOVE_SELF = 0] = 'REMOVE_SELF', i[i.REMOVE_ROLE = 1] = 'REMOVE_ROLE', i[i.DENY_ROLE = 2] = 'DENY_ROLE';
