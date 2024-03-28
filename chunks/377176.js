"use strict";
s.r(t), s.d(t, {
  getCreatorMonetizationAcceptTermsCheckboxText: function() {
    return i
  }
});
var a = s("63063"),
  l = s("981631"),
  n = s("689938");

function i() {
  return n.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format({
    fullTermsUrl: a.default.getArticleURL(l.HelpdeskArticles.CREATOR_TERMS),
    creatorRevenuePolicyUrl: a.default.getArticleURL(l.HelpdeskArticles.CREATOR_POLICY)
  })
}