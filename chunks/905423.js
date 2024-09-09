var i = n(266067),
    r = n(652874),
    l = n(731965),
    a = n(981631);
function u(e) {
    let t = (0, i.LX)(null != e ? e : '', { path: a.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, i.LX)(null != e ? e : '', { path: a.Z5c.GUILD_BOOSTING_MARKETING(':guildId') });
    return null != n
        ? {
              guildId: n.params.guildId,
              channelId: null
          }
        : {
              guildId: null,
              channelId: null
          };
}
t.Z = (0, r.Z)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: i } = u(t);
        (0, l.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: i
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: i } = u(t);
        (0, l.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: i,
                basePath: t
            })
        );
    }
}));
