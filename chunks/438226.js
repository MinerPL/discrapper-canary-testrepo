t.d(n, {
    HV: function () {
        return u;
    },
    IS: function () {
        return o;
    },
    VY: function () {
        return s;
    }
}), t(627494), t(757143), t(201133);
var l = t(5192), a = t(561308), r = t(689938);
let o = (e, n) => r.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
        username: n.username,
        activity: e.extra.game_name
    }), i = e => {
        let n = (0, a.kr)(e);
        return (0, a.Ol)(e) ? n ? r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : n ? r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : r.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
    }, u = (e, n, t) => {
        let a = i(e), r = l.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t), o = e.extra.game_name;
        return a.plainFormat({
            gameName: o,
            userName: r
        }).replaceAll('*', '');
    }, s = e => {
        let {
            entry: n,
            channel: t,
            users: o,
            countOthers: i
        } = e;
        return ((0, a.kr)(n) ? r.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : r.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED).plainFormat({
            gameName: n.extra.game_name,
            user1: l.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, o[0]),
            user2: l.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, o[1]),
            countOthers: i
        }).replaceAll('*', '');
    };
