"use strict";
n.r(t), n.d(t, {
  getRelativeTimestamp: function() {
    return u
  },
  isRemoteAcked: function() {
    return d
  },
  incomingFriendRequestLocalItem: function() {
    return c
  },
  isMentionItem: function() {
    return f
  },
  inNotificationCenterEnabled: function() {
    return _
  }
});
var i = n("249654"),
  s = n("845579"),
  r = n("913796"),
  a = n("360191"),
  o = n("581091"),
  l = n("782340");
let u = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, o.default)({
      since: e,
      getFormatter: t ? o.getAbbreviatedFormatter : o.getFullFormatter
    })
  },
  d = (e, t) => e.acked || t !== s.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && i.default.compare(t, e.id) >= 0;

function c(e, t) {
  var n;
  let s = i.default.fromTimestamp(new Date(t).getTime());
  return {
    acked: !1,
    forceUnacked: !0,
    other_user: e,
    kind: "notification-center-item",
    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(s),
    deeplink: "https://discord.com/users/".concat(e.id),
    type: a.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
    id: s,
    body: l.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
      username: "**".concat(null !== (n = e.globalName) && void 0 !== n ? n : e.username, "**")
    })
  }
}
let f = e => e.type === a.NotificationCenterItems.RECENT_MENTION || e.type === a.NotificationCenterItems.REPLY_MENTION;

function _() {
  return (0, r.inDesktopNotificationCenterExperiment)()
}