n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(835473),
    r = n(739566),
    l = n(942951),
    o = n(834129),
    c = n(689938),
    u = n(656334);
function d(e) {
    let { message: t, channel: n, compact: d } = e,
        _ = (0, r.ZP)(t),
        E = (0, l.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        })(_),
        I = (0, a.q)(t.applicationId);
    if (null == I) return null;
    let m = c.Z.Messages.SYSTEM_MESSAGE_CHANNEL_LINKED_TO_LOBBY.format({
        username: t.author.username,
        usernameHook: E,
        applicationName: I.name,
        helpdeskArticle: '#'
    });
    return (0, i.jsx)(o.Z, {
        iconNode: (0, i.jsx)(s.RefreshIcon, {
            size: 'sm',
            color: s.tokens.colors.STATUS_POSITIVE
        }),
        timestamp: t.timestamp,
        compact: d,
        contentClassName: u.systemMessage,
        children: m
    });
}
