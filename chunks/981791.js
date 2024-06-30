n.d(t, {
    A: function () {
        return s;
    }
});
var i = n(981631), a = n(689938);
function s(e) {
    let {
        application: t,
        username: n,
        usernameHook: s = i.dG4
    } = e;
    return null != t ? a.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE.format({
        username: n,
        applicationName: t.name,
        usernameHook: s
    }) : a.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION.format({
        username: n,
        usernameHook: s
    });
}
