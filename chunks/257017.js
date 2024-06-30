s.d(t, {
    X: function () {
        return r;
    }
});
var n = s(668781), l = s(63063), a = s(981631), i = s(689938);
function r(e) {
    n.Z.show({
        title: i.Z.Messages.SELF_DENY_PERMISSION_TITLE,
        body: i.Z.Messages.SELF_DENY_PERMISSION_BODY.format({ name: e }),
        cancelText: i.Z.Messages.HELP_DESK,
        onCancel() {
            window.open(l.Z.getArticleURL(a.BhN.PERMISSIONS_LOCKOUT));
        }
    });
}
