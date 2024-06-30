n.r(t), n.d(t, {
    default: function () {
        return s;
    }
}), n(411104);
var r = n(592125), i = n(19780), a = n(981631), o = n(176505);
function s(e, t) {
    let n;
    switch (e) {
    case a.rMx.CHANNEL_OPENED_CLICKSTREAM:
        var s, l;
        let u = (n = t).channelId;
        switch (u) {
        case o.oC.CHANNEL_BROWSER:
        case o.oC.GUILD_HOME:
        case o.oC.GUILD_SHOP:
        case o.oC.MEMBER_APPLICATIONS:
        case o.oC.ROLE_SUBSCRIPTIONS:
        case o.oC.CUSTOMIZE_COMMUNITY:
        case o.oC.MEMBER_SAFETY:
        case o.oC.GUILD_ONBOARDING:
            return;
        }
        let c = null !== (l = null === (s = r.Z.getChannel(u)) || void 0 === s ? void 0 : s.type) && void 0 !== l ? l : a.d4z.UNKNOWN;
        return {
            timestamp: new Date(),
            rtc_state: i.Z.getState(),
            channelId: u,
            channelType: c
        };
    case a.rMx.GUILD_VIEWED_CLICKSTREAM:
        let d = (n = t).guildId;
        return {
            timestamp: new Date(),
            rtc_state: i.Z.getState(),
            guildId: d
        };
    case a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
        return n = t, {
            timestamp: new Date(),
            rtc_state: i.Z.getState(),
            tab_opened: n.tab_opened,
            num_friends: n.num_friends,
            now_playing_visible: n.now_playing_visible,
            now_playing_num_cards: n.now_playing_num_cards
        };
    default:
        throw Error('getClickstreamTrackEvent: Unknown event: '.concat(e));
    }
}
