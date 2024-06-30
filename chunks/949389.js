n.d(t, {
    GO: function () {
        return s;
    },
    K7: function () {
        return a;
    },
    xm: function () {
        return r;
    }
});
var i = n(570140);
function s(e) {
    i.Z.dispatch({
        type: 'BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS',
        guildId: e
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'PUBLIC_UPSELL_NOTICE_DISMISS',
        guildId: e
    });
}
function r(e) {
    i.Z.dispatch({
        type: 'MAX_MEMBER_COUNT_NOTICE_DISMISS',
        guildId: e
    });
}
