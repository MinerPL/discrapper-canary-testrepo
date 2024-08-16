n.d(t, {
    L: function () {
        return l;
    }
});
var i = n(626135),
    a = n(206583),
    s = n(981631);
let l = (e, t) => {
    i.default.track(s.rMx.RANKING_ITEM_INTERACTED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: a.Kd.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName
    });
};
