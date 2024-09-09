n.d(t, {
    L: function () {
        return o;
    },
    e: function () {
        return s;
    }
}),
    n(47120);
var l = n(626135),
    a = n(162461),
    i = n(206583),
    r = n(981631);
let s = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        let { trackingEnabled: r } = (0, a.nP)('trackSampledContentEntryAnalytics:'.concat(e));
        return r ? l.default.track(e, ...n) : Promise.resolve();
    },
    o = (e, t) => {
        s(r.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: i.Kd.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName
        });
    };
