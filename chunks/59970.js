n.d(t, {
    k: function () {
        return r;
    }
});
var s = n(544891), a = n(570140), i = n(981631);
async function r(e) {
    a.Z.dispatch({
        type: 'DISCOVER_CHECKLIST_FETCH_START',
        guildId: e
    });
    try {
        let t = await s.tn.get({
            url: i.ANM.GUILD_DISCOVERY_REQUIREMENTS(e),
            oldFormErrors: !0
        });
        a.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_SUCCESS',
            guildId: e,
            checklist: t.body
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_FAILURE',
            guildId: e
        });
    }
}
