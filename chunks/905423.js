var a = r(266067), n = r(652874), i = r(981631);
function o(e) {
    let t = (0, a.LX)(null != e ? e : '', { path: i.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?') });
    if (null != t) {
        let {
            guildId: e,
            channelId: r
        } = t.params;
        return {
            guildId: e === i.ME ? null : e,
            channelId: null != r ? r : null
        };
    }
    let r = (0, a.LX)(null != e ? e : '', { path: i.Z5c.GUILD_BOOSTING_MARKETING(':guildId') });
    return null != r ? {
        guildId: r.params.guildId,
        channelId: null
    } : {
        guildId: null,
        channelId: null
    };
}
t.Z = (0, n.Z)(e => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let {
            guildId: r,
            channelId: a
        } = o(t);
        e({
            path: t,
            guildId: r,
            channelId: a
        });
    },
    resetPath(t) {
        let {
            guildId: r,
            channelId: a
        } = o(t);
        e({
            path: null,
            guildId: r,
            channelId: a,
            basePath: t
        });
    }
}));
