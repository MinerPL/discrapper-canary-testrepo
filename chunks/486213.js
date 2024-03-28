"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("353672"),
  T = s("993750"),
  n = s("134612"),
  o = s("689938");
t.default = function() {
  let e = (0, n.getInappropriateConversationsSafetyTips)();
  return (0, a.jsx)(T.default, {
    children: (0, a.jsx)(l.default, {
      tips: e,
      headerText: o.default.Messages.INAPPROPRIATE_CONVERSATION_TIPS_DESCRIPTION
    })
  })
}