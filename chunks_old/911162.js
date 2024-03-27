"use strict";
n.r(t), n.d(t, {
  isFirstMessageIdInMediaPost: function() {
    return l
  }
}), n("65597");
var s = n("42203"),
  a = n("299039");

function l(e, t) {
  if (e !== a.default.castChannelIdAsMessageId(t)) return !1;
  let n = s.default.getChannel(t);
  if (null == n || !n.isForumPost()) return !1;
  let l = s.default.getChannel(n.parent_id);
  return (null == l ? void 0 : l.isMediaChannel()) === !0
}