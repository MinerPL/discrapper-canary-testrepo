"use strict";
n.r(t), n.d(t, {
  isFirstMessageIdInMediaPost: function() {
    return s
  }
}), n("399606");
var a = n("592125"),
  l = n("709054");

function s(e, t) {
  if (e !== l.default.castChannelIdAsMessageId(t)) return !1;
  let n = a.default.getChannel(t);
  if (null == n || !n.isForumPost()) return !1;
  let s = a.default.getChannel(n.parent_id);
  return (null == s ? void 0 : s.isMediaChannel()) === !0
}