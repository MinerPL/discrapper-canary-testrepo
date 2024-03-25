"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionSystemMessageASTContent: function() {
    return a
  }
});
var s = n("782340");

function a(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: a,
    medium: l
  } = e;
  return null != t ? s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: n,
    applicationName: t.name,
    usernameOnClick: a,
    medium: l
  }) : s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: a,
    medium: l
  })
}