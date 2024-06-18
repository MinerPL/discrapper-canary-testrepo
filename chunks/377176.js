"use strict";
t.d(s, {
  f: function() {
    return a
  }
});
var n = t(63063),
  i = t(981631),
  l = t(689938);

function a() {
  return l.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format({
    fullTermsUrl: n.Z.getArticleURL(i.BhN.CREATOR_TERMS),
    creatorRevenuePolicyUrl: n.Z.getArticleURL(i.BhN.CREATOR_POLICY)
  })
}