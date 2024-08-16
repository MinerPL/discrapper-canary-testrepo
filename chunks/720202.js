n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(601635),
    _ = n(592125),
    E = n(271383);
let f = new d.Z(E.ZP.isMember, (e, t) => {
    c.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: t
    });
});
function h() {
    f.reset();
}
function p(e, t) {
    return f.request(e, t), !1;
}
function m(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            null != n && p(e, n.id), null == r || r.forEach((t) => p(e, t.id));
        }),
        !1
    );
}
function I(e) {
    let { channelId: t, messages: n } = e,
        r = _.Z.getChannel(t);
    return null != r && null != r.guild_id && m(r.guild_id, n);
}
function T(e) {
    let { guildId: t, messages: n } = e;
    return null != t && m(t, l().flatten(n));
}
class g extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, E.ZP);
    }
    requestMember(e, t) {
        p(e, t);
    }
}
(s = 'GuildMemberRequesterStore'),
    (a = 'displayName') in (i = g)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new g(c.Z, {
        CONNECTION_CLOSED: h,
        CONNECTION_OPEN: h,
        CONNECTION_RESUMED: function () {
            return f.requestUnacknowledged(), !1;
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e;
            for (let e of t)
                e.members.forEach((t) => {
                    f.acknowledge(e.guildId, t.user.id);
                }),
                    null != e.notFound && e.notFound.forEach((t) => f.acknowledge(e.guildId, t));
            return !1;
        },
        SEARCH_FINISH: T,
        MOD_VIEW_SEARCH_FINISH: T,
        LOCAL_MESSAGES_LOADED: I,
        LOAD_MESSAGES_SUCCESS: I,
        LOAD_MESSAGES_AROUND_SUCCESS: I,
        LOAD_PINNED_MESSAGES_SUCCESS: I,
        LOAD_RECENT_MENTIONS_SUCCESS: I
    }));
