n.d(t, {
    O: function () {
        return l;
    },
    w: function () {
        return s;
    }
});
var r, i, a = n(367907), o = n(981631);
function s() {
    a.ZP.trackWithMetadata(o.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !1
    });
}
function l() {
    a.ZP.trackWithMetadata(o.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !0
    });
}
(r || (r = {})).REMINDER_NOTIFICATION = 'Reminder Notification', (i || (i = {})).GUILD_INVITE = 'Guild Invite';
