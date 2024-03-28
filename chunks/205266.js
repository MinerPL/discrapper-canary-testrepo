"use strict";
s.r(t), s.d(t, {
  PlayStationTwoWayLinkUpsell: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("524437"),
  l = s("231757"),
  i = s("63063"),
  r = s("249881"),
  o = s("981631"),
  d = s("689938"),
  u = s("359734");
let c = () => {
  let e = i.default.getArticleURL(o.HelpdeskArticles.PS_CONNECTION);
  return (0, a.jsx)(r.OneWayToTwoWayLinkUpsell, {
    title: d.default.Messages.PS_TWO_WAY_UPSELL_TITLE,
    body: d.default.Messages.PS_TWO_WAY_UPSELL_BODY.format({
      help_article: e
    }),
    img: (0, a.jsx)("img", {
      src: u,
      width: "82",
      height: "auto",
      alt: ""
    }),
    newIndicatorDismissibleContent: n.DismissibleContent.PS_ONE_WAY_RECONNECT,
    onClick: () => (0, l.default)({
      platformType: o.PlatformTypes.PLAYSTATION,
      location: "PS two way upsell"
    })
  })
}