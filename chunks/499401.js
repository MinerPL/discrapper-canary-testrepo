t.d(n, {
    Y: function () {
        return _;
    }
});
var E = t(689938);
function _(e) {
    let {
        application: n,
        username: t,
        usernameOnClick: _,
        medium: s
    } = e;
    return null != n ? E.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
        username: t,
        applicationName: n.name,
        usernameOnClick: _,
        medium: s
    }) : E.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
        username: t,
        usernameOnClick: _,
        medium: s
    });
}
