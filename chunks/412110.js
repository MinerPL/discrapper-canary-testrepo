"use strict";
A.r(t), A.d(t, {
  showPublishErrorDialog: function() {
    return o
  }
});
var a = A("735250");
A("470079");
var l = A("952265"),
  s = A("776045"),
  n = A("871388"),
  r = A("981631"),
  i = A("689938");

function o(e, t, o) {
  var d, u, c;
  switch (e.code) {
    case r.AbortCodes.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
      (0, n.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY, s.IconVariant.DANGER);
      break;
    case r.AbortCodes.TWO_FA_NOT_ENABLED:
      (0, n.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case r.AbortCodes.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
      (0, n.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE, i.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY, s.IconVariant.WARNING);
      break;
    case r.AbortCodes.MONETIZATION_TERMS_NOT_ACCEPTED:
      ;
      d = t, (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([A.e("99387"), A.e("31835")]).then(A.bind(A, "393809"));
        return t => (0, a.jsx)(e, {
          guildId: d,
          ...t
        })
      });
      break;
    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
      (0, n.openErrorDialog)(i.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE, i.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY, s.IconVariant.WARNING);
      break;
    case r.AbortCodes.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
      let f, g;
      null != o ? (f = i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK, g = {
        url: r.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(o)
      }) : f = i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY, (0, n.openErrorDialog)(i.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE, f, s.IconVariant.WARNING, g);
      break;
    default:
      ;
      let C = null !== (c = e.getFirstFieldErrorMessage(["published"])) && void 0 !== c ? c : (null === (u = e.hasFieldErrors) || void 0 === u ? void 0 : u.call(e)) ? void 0 : e.message;
      if (null != C)(0, n.openErrorDialog)(i.default.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, C, s.IconVariant.WARNING)
  }
}