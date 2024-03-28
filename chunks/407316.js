"use strict";
l.r(t), l.d(t, {
  canAttachClipsToChannel: function() {
    return i
  }
});
var a = l("592125"),
  n = l("496675"),
  s = l("981631");

function i(e) {
  let t = a.default.getChannel(e),
    l = null == t ? void 0 : t.isPrivate(),
    i = null == t ? void 0 : t.isForumChannel();
  return l || n.default.can(s.Permissions.ATTACH_FILES, t) && n.default.can(s.Permissions.SEND_MESSAGES, t) && !i
}