var i,
    a,
    s = n(442837),
    r = n(570140),
    l = n(749210);
((i = a || (a = {}))[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED');
let o = {},
    c = 0;
function d(e) {
    var t, n;
    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.fetchState) && void 0 !== n ? n : 0;
}
function u() {
    o = {};
}
class _ extends s.ZP.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === d(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === d(e) &&
            ((o[e] = {
                fetchState: 1,
                foundMembers: 0,
                notFoundMembers: 0
            }),
            (c = t.length),
            l.Z.requestMembersById(e, t, !1));
    }
}
t.Z = new _(r.Z, {
    CONNECTION_OPEN: u,
    LOGOUT: u,
    RELATIONSHIP_ADD: u,
    RELATIONSHIP_REMOVE: u,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        var t, n;
        let i = e.chunks[0],
            { guildId: a } = i;
        1 === d(a) && ((o[a].foundMembers += i.members.length), (o[a].notFoundMembers += null !== (n = null === (t = i.notFound) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0), o[a].foundMembers + o[a].notFoundMembers >= c && (o[a].fetchState = 2));
    }
});
