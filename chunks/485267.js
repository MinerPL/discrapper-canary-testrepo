t.d(n, {
    J: function () {
        return c;
    },
    l: function () {
        return s;
    }
});
var l = t(570140), a = t(944486), r = t(914010), o = t(626135), i = t(146282), u = t(981631);
let s = () => {
    l.Z.dispatch({ type: 'CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN' }), o.default.track(u.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
        channel_id: a.Z.getChannelId(),
        guild_id: r.Z.getGuildId(),
        hidden: i.Z.hidden
    });
};
function c() {
    l.Z.dispatch({ type: 'GAME_PROFILE_OPEN' });
}
