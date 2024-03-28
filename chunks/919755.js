"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120"), n("724458");
var l = n("442837"),
  a = n("592125"),
  s = n("496675"),
  i = n("306680"),
  r = n("9156"),
  o = n("709054"),
  u = n("231338");

function d(e) {
  return (0, l.useStateFromStoresObject)([a.default, i.default, r.default, s.default], () => {
    let t = o.default.keys(e);
    return t.reduce((e, t) => {
      let n = a.default.getChannel(t),
        l = null == n ? void 0 : n.isGuildVocal();
      return e.badge = e.badge + i.default.getMentionCount(t), e.unread = e.unread || !l && s.default.can(u.Permissions.VIEW_CHANNEL, n) && i.default.hasUnread(t) && !r.default.isChannelMuted(null == n ? void 0 : n.getGuildId(), t), e
    }, {
      badge: 0,
      unread: !1
    })
  })
}