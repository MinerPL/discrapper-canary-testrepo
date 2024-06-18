"use strict";
n.d(t, {
  O: function() {
    return l
  },
  w: function() {
    return a
  }
});
var i, r, s = n(367907),
  o = n(981631);

function a() {
  s.ZP.trackWithMetadata(o.rMx.NOTIFICATION_CTA_CLICKED, {
    notification_type: "Reminder Notification",
    action: "Guild Invite",
    dismissed: !1
  })
}

function l() {
  s.ZP.trackWithMetadata(o.rMx.NOTIFICATION_CTA_CLICKED, {
    notification_type: "Reminder Notification",
    action: "Guild Invite",
    dismissed: !0
  })
}(i || (i = {})).REMINDER_NOTIFICATION = "Reminder Notification", (r || (r = {})).GUILD_INVITE = "Guild Invite"