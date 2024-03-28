"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionSystemMessageContent: function() {
    return l
  }
});
var s = n("981631"),
  a = n("689938");

function l(e) {
  let {
    application: t,
    username: n,
    usernameHook: l = s.NOOP
  } = e;
  return null != t ? a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE.format({
    username: n,
    applicationName: t.name,
    usernameHook: l
  }) : a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION.format({
    username: n,
    usernameHook: l
  })
}