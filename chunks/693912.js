"use strict";
n.r(t), n.d(t, {
  getPrivateChannelIntegrationAddedSystemMessageASTContent: function() {
    return o
  },
  getPrivateChannelIntegrationAddedSystemMessageContent: function() {
    return i
  },
  getPrivateChannelIntegrationRemovedSystemMessageASTContent: function() {
    return u
  },
  getPrivateChannelIntegrationRemovedSystemMessageContent: function() {
    return r
  }
});
var s = n("63063"),
  a = n("981631"),
  l = n("689938");

function i(e) {
  let {
    application: t,
    username: n,
    usernameHook: i = a.NOOP,
    applicationNameHook: r = a.NOOP
  } = e;
  return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
    username: n,
    otherUsername: t.name,
    usernameHook: i,
    otherUsernameHook: r,
    helpCenterLink: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format({
    username: n,
    usernameHook: i,
    helpCenterLink: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function r(e) {
  let {
    application: t,
    username: n,
    usernameHook: i = a.NOOP,
    applicationNameHook: r = a.NOOP
  } = e;
  return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
    username: n,
    otherUsername: t.name,
    usernameHook: i,
    otherUsernameHook: r,
    helpCenterLink: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format({
    username: n,
    usernameHook: i,
    helpCenterLink: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: i,
    applicationNameOnClick: r,
    medium: o
  } = e;
  return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
    username: n,
    otherUsername: t.name,
    usernameOnClick: i,
    otherUsernameOnClick: r,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function u(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: i,
    applicationNameOnClick: r,
    medium: o
  } = e;
  return null != t ? l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
    username: n,
    otherUsername: t.name,
    usernameOnClick: i,
    otherUsernameOnClick: r,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.default.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: s.default.getArticleURL(a.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}