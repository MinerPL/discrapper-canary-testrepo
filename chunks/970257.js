"use strict";
s.r(t), s.d(t, {
  canDeleteAndReportMessage: function() {
    return u
  },
  canReportMessage: function() {
    return r
  }
});
var a = s("592125"),
  n = s("650774"),
  l = s("496675"),
  i = s("594174"),
  d = s("981631");

function r(e) {
  return null != e && function(e) {
    if (null == e) return !1;
    let t = e.id,
      s = i.default.getCurrentUser();
    return null != s && s.id !== t && !0 !== e.system && !0
  }(e.author)
}

function u(e) {
  return null != e && r(e) && function(e) {
    let t = a.default.getChannel(e);
    if (null == t) return !1;
    if (t.type === d.ChannelTypes.DM || t.type === d.ChannelTypes.GROUP_DM) return !0;
    if (l.default.canWithPartialContext(d.Permissions.MANAGE_MESSAGES, {
        channelId: e
      })) {
      let e = n.default.getMemberCount(t.getGuildId());
      return null != e && e >= 50
    }
    return !1
  }(e.getChannelId())
}