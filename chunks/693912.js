t.d(n, {
    B2: function () {
        return a;
    },
    DS: function () {
        return u;
    },
    hj: function () {
        return i;
    },
    nh: function () {
        return r;
    }
});
var E = t(63063), _ = t(981631), s = t(689938);
function u(e) {
    let {
        application: n,
        username: t,
        usernameHook: u = _.dG4,
        applicationNameHook: r = _.dG4
    } = e;
    return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
        username: t,
        otherUsername: n.name,
        usernameHook: u,
        otherUsernameHook: r,
        helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
        username: t,
        usernameHook: u,
        helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    });
}
function r(e) {
    let {
        application: n,
        username: t,
        usernameHook: u = _.dG4,
        applicationNameHook: r = _.dG4
    } = e;
    return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
        username: t,
        otherUsername: n.name,
        usernameHook: u,
        otherUsernameHook: r,
        helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
        username: t,
        usernameHook: u,
        helpCenterLink: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    });
}
function a(e) {
    let {
        application: n,
        username: t,
        usernameOnClick: u,
        applicationNameOnClick: r,
        medium: a
    } = e;
    return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
        username: t,
        otherUsername: n.name,
        usernameOnClick: u,
        otherUsernameOnClick: r,
        medium: a,
        helpCenterLink: { url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
    }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
        username: t,
        usernameOnClick: u,
        medium: a,
        helpCenterLink: { url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
    });
}
function i(e) {
    let {
        application: n,
        username: t,
        usernameOnClick: u,
        applicationNameOnClick: r,
        medium: a
    } = e;
    return null != n ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
        username: t,
        otherUsername: n.name,
        usernameOnClick: u,
        otherUsernameOnClick: r,
        medium: a,
        helpCenterLink: { url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
    }) : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
        username: t,
        usernameOnClick: u,
        medium: a,
        helpCenterLink: { url: E.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
    });
}
