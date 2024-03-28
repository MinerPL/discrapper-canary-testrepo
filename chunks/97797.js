"use strict";
n.r(t), n.d(t, {
  getGuildProductPurchaseSystemMessageContentMobile: function() {
    return a
  }
});
var s = n("689938");

function a(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    productName: a
  } = e;
  return s.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
    username: t,
    usernameHook: n,
    productName: a
  })
}