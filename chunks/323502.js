n.d(t, {
    S: function () {
        return r;
    }
});
var s = n(544891), a = n(570140), i = n(981631);
function r(e) {
    return s.tn.get({
        url: i.ANM.GUILD_TOP_READ_CHANNELS(e),
        oldFormErrors: !0
    }).then(t => {
        let {body: n} = t;
        a.Z.dispatch({
            type: 'GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS',
            guildId: e,
            topChannelIds: n
        });
    });
}
