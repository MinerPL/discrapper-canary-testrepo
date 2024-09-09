_.d(E, {
    B2: function () {
        return S;
    },
    DS: function () {
        return a;
    },
    hj: function () {
        return r;
    },
    nh: function () {
        return M;
    }
});
var s = _(63063),
    t = _(981631),
    n = _(689938);
function a(e) {
    let { application: E, username: _, usernameHook: a = t.dG4, applicationNameHook: M = t.dG4 } = e;
    return null != E
        ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
              username: _,
              usernameHook: a,
              helpCenterLink: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function M(e) {
    let { application: E, username: _, usernameHook: a = t.dG4, applicationNameHook: M = t.dG4 } = e;
    return null != E
        ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          })
        : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
              username: _,
              usernameHook: a,
              helpCenterLink: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
          });
}
function S(e) {
    let { application: E, username: _, usernameOnClick: a, applicationNameOnClick: M, medium: S } = e;
    return null != E
        ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: S,
              helpCenterLink: { url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
              username: _,
              usernameOnClick: a,
              medium: S,
              helpCenterLink: { url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
function r(e) {
    let { application: E, username: _, usernameOnClick: a, applicationNameOnClick: M, medium: S } = e;
    return null != E
        ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: S,
              helpCenterLink: { url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          })
        : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
              username: _,
              usernameOnClick: a,
              medium: S,
              helpCenterLink: { url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS) }
          });
}
