"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var s = a("37983");
a("884691");
var n = a("77078"),
  i = a("559317"),
  l = a("701909"),
  r = a("49111"),
  u = a("782340");

function d(e) {
  let {
    listing: t,
    transitionState: a,
    onClose: d,
    ...o
  } = e;
  return (0, s.jsx)(i.default, {
    sku_id: t.id,
    sku_name: t.name,
    guild_id: t.guild_id,
    header: u.default.Messages.GUILD_SHOP_REPORT_MODAL_HEADER.format({
      listingName: t.name
    }),
    transitionState: a,
    onClose: d,
    ...o,
    children: (0, s.jsx)(n.Text, {
      variant: "text-md/normal",
      children: u.default.Messages.GUILD_SHOP_REPORT_MODAL_BODY.format({
        listingName: t.name,
        monetizationTermsUrl: l.default.getArticleURL(r.HelpdeskArticles.CREATOR_TERMS),
        communityGuidelinesUrl: r.MarketingURLs.GUIDELINES
      })
    })
  })
}