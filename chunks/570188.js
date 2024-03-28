"use strict";
n.r(t), n.d(t, {
  useCanSendStageStartNotification: function() {
    return r
  },
  useDefaultSendStartStageNotificationToggle: function() {
    return d
  }
});
var a = n("442837"),
  s = n("650774"),
  l = n("496675"),
  i = n("231338");

function r(e) {
  return (0, a.useStateFromStores)([l.default], () => null != e && l.default.can(i.Permissions.MENTION_EVERYONE, e), [e])
}

function d(e) {
  let t = null == e ? void 0 : e.guild_id,
    n = (0, a.useStateFromStores)([s.default], () => s.default.getMemberCount(t), [t]);
  return null == e || null != n && !(n > 5e4) && !0
}