var i = n(544891),
    a = n(570140),
    s = n(981631);
t.Z = {
    setGuildFilter(e) {
        let { guildFilter: t, roleFilter: n, everyoneFilter: i } = e;
        a.Z.dispatch({
            type: 'SET_RECENT_MENTIONS_FILTER',
            guildFilter: t,
            roleFilter: n,
            everyoneFilter: i
        });
    },
    clearMentions() {
        a.Z.dispatch({ type: 'CLEAR_MENTIONS' });
    },
    truncateMentions(e) {
        a.Z.dispatch({
            type: 'TRUNCATE_MENTIONS',
            size: e
        });
    },
    fetchRecentMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.DJj,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        a.Z.dispatch({
            type: 'LOAD_RECENT_MENTIONS',
            guildId: n
        }),
            i.tn
                .get({
                    url: s.ANM.MENTIONS,
                    query: {
                        before: e,
                        limit: t,
                        guild_id: n,
                        roles: r,
                        everyone: l
                    },
                    retries: 2,
                    oldFormErrors: !0
                })
                .then(
                    (t) => {
                        let { body: n } = t;
                        a.Z.dispatch({
                            type: 'LOAD_RECENT_MENTIONS_SUCCESS',
                            messages: n,
                            isAfter: null != e,
                            hasMoreAfter: n.length >= s.DJj
                        });
                    },
                    () => {
                        a.Z.dispatch({ type: 'LOAD_RECENT_MENTIONS_FAILURE' });
                    }
                );
    },
    deleteRecentMention(e) {
        i.tn.del({
            url: s.ANM.MENTIONS_MESSAGE_ID(e),
            retries: 2,
            oldFormErrors: !0
        }),
            a.Z.dispatch({
                type: 'RECENT_MENTION_DELETE',
                id: e
            });
    },
    setRecentMentionsStale() {
        a.Z.dispatch({ type: 'SET_RECENT_MENTIONS_STALE' });
    }
};
