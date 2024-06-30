n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(739566), l = n(942951), r = n(702346), o = n(981791), c = n(221207);
function d(e) {
    let {
            message: t,
            channel: n,
            compact: d
        } = e, u = (0, s.ZP)(t), _ = t.application, E = (0, l.l)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id
        });
    return (0, i.jsx)(r.Z, {
        iconNode: (0, i.jsx)(a.TicketIcon, {
            size: 'md',
            color: 'currentColor',
            className: c.ticketIcon
        }),
        timestamp: t.timestamp,
        compact: d,
        children: (0, o.A)({
            application: _,
            username: u.nick,
            usernameHook: E(u)
        })
    });
}
