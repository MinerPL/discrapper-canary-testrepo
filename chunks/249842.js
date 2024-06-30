s.d(l, {
    P: function () {
        return t;
    }
});
var a = s(544891), i = s(570140), n = s(981631);
async function t(e) {
    i.Z.dispatch({
        type: 'GUILD_POPOUT_FETCH_START',
        guildId: e
    });
    try {
        let l = await a.tn.get({
            url: n.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0
        });
        i.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_SUCCESS',
            guildId: e,
            guild: l.body
        });
    } catch (l) {
        i.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_FAILURE',
            guildId: e
        });
    }
}
