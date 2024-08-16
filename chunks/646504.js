n.d(t, {
    O: function () {
        return l;
    },
    w: function () {
        return o;
    }
});
var r,
    i,
    a = n(367907),
    s = n(981631);
function o() {
    a.ZP.trackWithMetadata(s.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !1
    });
}
function l() {
    a.ZP.trackWithMetadata(s.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !0
    });
}
((r || (r = {})).REMINDER_NOTIFICATION = 'Reminder Notification'), ((i || (i = {})).GUILD_INVITE = 'Guild Invite');
