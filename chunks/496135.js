n.d(t, {
    D: function () {
        return s;
    }
});
var r = n(570140),
    i = n(576007),
    a = n(672458);
async function s(e, t, n) {
    let s = await (0, i.g)(e, t, n);
    if (s.type === a.d.ERROR) throw s.body;
    let { body: o } = s;
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS',
        guildId: e,
        members: o.members,
        page_result_count: o.page_result_count,
        total_result_count: o.total_result_count
    });
}
