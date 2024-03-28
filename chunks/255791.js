"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("650774"),
  c = n("430824"),
  f = n("496675"),
  E = n("981631");
let h = {
  MAX_MEMBER_COUNT: new Set
};
class _ extends(a = r.default.Store) {
  initialize() {
    var e;
    this.waitFor(f.default, c.default, d.default), this.syncWith([f.default, c.default, d.default], E.NOOP), o.Storage.remove(E.ChannelNoticeTypes.MAX_MEMBER_COUNT_100), o.Storage.remove(E.ChannelNoticeTypes.MAX_MEMBER_COUNT_250), e = new Set(o.Storage.get(E.ChannelNoticeTypes.MAX_MEMBER_COUNT)), h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) return !1;
    let n = null !== (t = d.default.getMemberCount(e.id)) && void 0 !== t ? t : 0,
      a = f.default.can(E.Permissions.ADMINISTRATOR, e);
    return !h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(e.id) && a && e.maxMembers > 0 && e.maxMembers - n <= 1e4
  }
}
i = "MaxMemberCountChannelNoticeStore", (l = "displayName") in(s = _) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new _(u.default, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(t)) return h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT].add(t), o.Storage.set(E.ChannelNoticeTypes.MAX_MEMBER_COUNT, h[E.ChannelNoticeTypes.MAX_MEMBER_COUNT]), !0
  }
})