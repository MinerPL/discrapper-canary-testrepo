a.r(t),
    a.d(t, {
        default: function () {
            return o;
        }
    });
var n = a(735250);
a(470079);
var s = a(481060),
    r = a(239091),
    u = a(324701),
    d = a(898150),
    i = a(689938);
function o(e) {
    let { message: t } = e,
        a = (0, d.useMessageReminderDurationSuggestions)({
            createReminder: (e) =>
                (0, u.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, n.jsx)(s.Menu, {
        navId: 'message-reminder-snooze',
        onClose: r.Zy,
        'aria-label': i.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: () => {},
        children: a
    });
}
