"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("37983");
s("884691");
var a = s("632758"),
  r = s("302577"),
  o = s("324252"),
  i = s("782340"),
  u = s("932379"),
  l = s("82480");

function c(e) {
  let {} = e, t = (0, o.getInappropriateConversationsSafetyTips)();
  return (0, n.jsx)(r.default, {
    heroImageSrc: l,
    heroImageAlt: i.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_ALT,
    header: i.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TIPS_HEADER,
    children: (0, n.jsx)("div", {
      className: u.safetyTips,
      children: (0, n.jsx)(a.default, {
        tips: t,
        headerText: i.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION
      })
    })
  })
}