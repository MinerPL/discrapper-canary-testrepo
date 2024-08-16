var s = n(735250);
n(470079);
var r = n(3570),
    i = n(685311),
    a = n(186901);
t.Z = function (e) {
    let { match: t, location: n } = e,
        l = async (e, t) => {
            await (0, r.s)(a.jE.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search
            });
        };
    return (0, s.jsx)(i.Z, {
        match: t,
        location: n,
        attemptDeepLink: l
    });
};
