t.d(n, {
    Z: function () {
        return s;
    },
    t: function () {
        return o;
    }
});
var l = t(442837),
    a = t(430824),
    i = t(938475),
    r = t(981631);
function s(e) {
    return (0, l.cj)(
        [i.ZP, a.Z],
        () => {
            let n = i.ZP.countVoiceStatesForChannel(e.id),
                t = a.Z.getGuild(e.getGuildId());
            return null == t
                ? {
                      reachedLimit: !1,
                      limit: -1
                  }
                : e.type === r.d4z.GUILD_STAGE_VOICE
                  ? {
                        reachedLimit: n > t.maxStageVideoChannelUsers,
                        limit: t.maxStageVideoChannelUsers
                    }
                  : {
                        reachedLimit: t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                        limit: t.maxVideoChannelUsers
                    };
        },
        [e]
    );
}
function o(e) {
    let n = i.ZP.countVoiceStatesForChannel(e.id),
        t = a.Z.getGuild(e.getGuildId());
    return null == t
        ? {
              reachedLimit: !1,
              limit: -1
          }
        : e.type === r.d4z.GUILD_STAGE_VOICE
          ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers
            }
          : {
                reachedLimit: t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers
            };
}
