"use strict";
n.r(e), n.d(e, {
  getCreatorMonetizationAcceptTermsCheckboxText: function() {
    return r
  }
});
var i = n("701909"),
  a = n("49111"),
  o = n("782340");

function r() {
  return o.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format({
    fullTermsUrl: i.default.getArticleURL(a.HelpdeskArticles.CREATOR_TERMS),
    creatorRevenuePolicyUrl: i.default.getArticleURL(a.HelpdeskArticles.CREATOR_POLICY)
  })
}