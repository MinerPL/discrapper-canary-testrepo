"use strict";
n.r(t);
var a, s, l, i, r = n("442837"),
  o = n("570140"),
  u = n("496675"),
  d = n("981631");
class c extends(i = r.default.Store) {
  initialize() {
    this.waitFor(u.default), this.syncWith([u.default], d.NOOP)
  }
  channelNoticePredicate(e, t) {
    return Date.now() - t >= d.CHANNEL_NOTICE_SHOW_DELAY && u.default.can(d.Permissions.MANAGE_GUILD, e)
  }
}
l = "GuildBoostingNoticeStore", (s = "displayName") in(a = c) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = new c(o.default)