n.d(t, {
    a: function () {
        return a;
    },
    g: function () {
        return l;
    }
});
var i = n(570140);
function a(e, t) {
    i.Z.dispatch({
        guildId: e,
        channelId: t,
        type: 'UNREAD_SETTING_NOTICE_CHANNEL_VISIT'
    });
}
function l(e, t) {
    i.Z.dispatch({
        guildId: e,
        channelId: t,
        type: 'UNREAD_SETTING_NOTICE_RENDERED'
    });
}
