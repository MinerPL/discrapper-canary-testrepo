"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("735250");
s("470079");
var a = s("353672"),
  r = s("850165"),
  o = s("134612"),
  i = s("689938"),
  u = s("358733"),
  l = s("190113");

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