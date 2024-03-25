"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("446674"),
  s = n("913144"),
  l = n("957255"),
  i = n("49111");
class r extends a.default.Store {
  initialize() {
    this.waitFor(l.default), this.syncWith([l.default], i.NOOP)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= i.CHANNEL_NOTICE_SHOW_DELAY && l.default.can(i.Permissions.MANAGE_GUILD, e)
  }
}
r.displayName = "GuildBoostingNoticeStore";
var o = new r(s.default)