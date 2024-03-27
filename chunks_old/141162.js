"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("913144"),
  l = n("957255"),
  i = n("49111");

function r() {
  return !0
}
class o extends a.default.Store {
  initialize() {
    this.waitFor(l.default), this.syncWith([l.default], r)
  }
  channelNoticePredicate(e, t) {
    let n = Date.now() - t >= i.CHANNEL_NOTICE_SHOW_DELAY;
    return n && l.default.can(i.Permissions.ADMINISTRATOR, e)
  }
}
o.displayName = "InviteNoticeStore";
var u = new o(s.default)