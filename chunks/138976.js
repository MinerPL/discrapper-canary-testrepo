"use strict";
n.r(t), n.d(t, {
  JUMP_TO_FIRST_UNREAD: function() {
    return u
  }
});
var i = n("904245"),
  o = n("306680"),
  l = n("944486");
let u = {
  binds: ["shift+pageup"],
  comboKeysBindGlobal: !0,
  action() {
    let e = l.default.getChannelId();
    if (null != e) {
      let t = o.default.ackMessageId(e);
      null != t && o.default.getOldestUnreadTimestamp(e) > 0 && i.default.jumpToMessage({
        channelId: e,
        messageId: t,
        offset: 1,
        context: "Keyboard Shortcut"
      })
    }
    return !1
  }
}