"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("446674"),
  s = n("95410"),
  l = n("913144"),
  i = n("525065"),
  r = n("305961"),
  o = n("957255"),
  u = n("49111");
let d = {
  MAX_MEMBER_COUNT: new Set
};
class c extends a.default.Store {
  initialize() {
    var e;
    this.waitFor(o.default, r.default, i.default), this.syncWith([o.default, r.default, i.default], u.NOOP), s.Storage.remove(u.ChannelNoticeTypes.MAX_MEMBER_COUNT_100), s.Storage.remove(u.ChannelNoticeTypes.MAX_MEMBER_COUNT_250), e = new Set(s.Storage.get(u.ChannelNoticeTypes.MAX_MEMBER_COUNT)), d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) return !1;
    let n = null !== (t = i.default.getMemberCount(e.id)) && void 0 !== t ? t : 0,
      a = o.default.can(u.Permissions.ADMINISTRATOR, e);
    return !d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(e.id) && a && e.maxMembers > 0 && e.maxMembers - n <= 1e4
  }
}
c.displayName = "MaxMemberCountChannelNoticeStore";
var f = new c(l.default, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT].has(t)) return d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT].add(t), s.Storage.set(u.ChannelNoticeTypes.MAX_MEMBER_COUNT, d[u.ChannelNoticeTypes.MAX_MEMBER_COUNT]), !0
  }
})