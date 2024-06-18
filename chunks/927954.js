"use strict";
t.d(s, {
  Z: function() {
    return l
  }
}), t(47120);
var n = t(470079),
  i = t(689938);

function l(e) {
  let [s, t] = n.useState(i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMAGE_CTA_DEFAULT_FILENAME), l = null == e ? i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT;
  return {
    imageCTA: l,
    imageAriaLabel: null == e ? i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT_A11Y.format({
      filename: s
    }),
    setFilename: t
  }
}