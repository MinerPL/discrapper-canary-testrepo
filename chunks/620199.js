"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var a = s("884691"),
  l = s("782340");

function n(e) {
  let [t, s] = a.useState(l.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMAGE_CTA_DEFAULT_FILENAME), n = null == e ? l.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : l.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT, i = null == e ? l.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : l.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT_A11Y.format({
    filename: t
  });
  return {
    imageCTA: n,
    imageAriaLabel: i,
    setFilename: s
  }
}