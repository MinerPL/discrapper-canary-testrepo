var r = n(544891),
    i = n(570140),
    a = n(668781),
    s = n(287734),
    o = n(970606),
    l = n(131704),
    u = n(826581),
    c = n(246364),
    d = n(937111),
    _ = n(981631),
    E = n(689938);
let f = async (e) => {
        let t = await r.tn.get({ url: _.ANM.GUILD_JOIN_REQUEST_BY_ID(e) }),
            n = (0, d.j)(t.body);
        return (
            i.Z.dispatch({
                type: 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS',
                joinRequest: n
            }),
            t
        );
    },
    h = async (e) => {
        let { guildId: t, status: n = c.wB.SUBMITTED, before: a, after: s, limit: o = c.tB, force: l = !1 } = e,
            E = l || !u.Z.hasFetched(t);
        if (!u.Z.isFetching() && E) {
            i.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_START' });
            try {
                var f;
                let e = await r.tn.get({
                        url: _.ANM.GUILD_JOIN_REQUESTS(t),
                        query: {
                            status: n,
                            limit: o,
                            before: a,
                            after: s
                        }
                    }),
                    l = e.body.total,
                    u = (null !== (f = e.body.guild_join_requests) && void 0 !== f ? f : []).map(d.j);
                return (
                    i.Z.dispatch({
                        type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
                        status: n,
                        requests: u,
                        total: l,
                        limit: o,
                        guildId: t
                    }),
                    e
                );
            } catch (e) {
                throw (i.Z.dispatch({ type: 'GUILD_JOIN_REQUESTS_FETCH_FAILURE' }), e);
            }
        }
    },
    p = async (e) => {
        try {
            let t = await r.tn.del({ url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e) });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: null
                }),
                t
            );
        } catch (e) {
            throw e;
        }
    },
    I = async (e, t) => {
        try {
            return await r.tn.post({ url: _.ANM.GUILD_JOIN_REQUEST_ACK(e, t) });
        } catch (e) {
        } finally {
            i.Z.dispatch({
                type: 'ACK_APPROVED_GUILD_JOIN_REQUEST',
                id: t,
                guildId: e
            });
        }
    },
    m = async function (e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.wB.APPROVED,
            l = arguments.length > 4 ? arguments[4] : void 0;
        (0, o.r2)({
            guildId: e,
            actionType: s,
            applicationUserId: t
        });
        let u = await r.tn
            .patch({
                url: _.ANM.GUILD_JOIN_REQUEST_ID(e, n),
                body: {
                    action: s,
                    rejection_reason: l
                }
            })
            .catch(
                (e) => (
                    e &&
                        e.body &&
                        e.body.code === _.evJ.REQUEST_TO_JOIN_USER_INELIGIBLE &&
                        a.Z.show({
                            title: E.Z.Messages.GUILD_JOIN_REQUEST_USER_NOT_ELIGIBLE_TITLE,
                            body: E.Z.Messages.GUILD_JOIN_REQUEST_USER_NOT_ELIGIBLE_DESCRIPTION
                        }),
                    Promise.reject(e)
                )
            );
        i.Z.dispatch({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            guildId: e,
            status: u.body.application_status,
            request: u.body
        });
    },
    T = async (e, t) => {
        let n = await r.tn.patch({
            url: _.ANM.GUILD_JOIN_REQUESTS(e),
            body: { action: t }
        });
        return (
            i.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_BULK_ACTION',
                guildId: e,
                action: t
            }),
            n.body
        );
    },
    S = async (e) => {
        try {
            let { body: t } = await r.tn.post({ url: _.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e) });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: t
                }),
                t
            );
        } catch (e) {
            throw e;
        }
    },
    g = async () => {
        let e = await r.tn.get({ url: _.ANM.USER_JOIN_REQUEST_GUILDS });
        i.Z.dispatch({
            type: 'USER_JOIN_REQUEST_GUILDS_FETCH',
            guilds: e.body
        });
    },
    A = async function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await r.tn.post({ url: _.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e) }),
            a = (0, l.q_)(n.body);
        return (
            i.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: a
            }),
            t && s.default.selectPrivateChannel(a.id),
            a.id
        );
    },
    N = async (e) => {
        try {
            let t = await r.tn.get({ url: _.ANM.GUILD_MEMBER_JOIN_REQUEST_COOLDOWN(e) });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: t.body.cooldown
                }),
                t
            );
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH',
                    guildId: e,
                    cooldown: null
                }),
                t)
            );
        }
    };
t.Z = {
    fetchGuildJoinRequest: f,
    fetchGuildJoinRequests: h,
    ackUserGuildJoinRequest: I,
    removeGuildJoinRequest: p,
    updateGuildJoinRequest: m,
    actionAllPendingJoinRequests: T,
    resetGuildJoinRequest: S,
    fetchRequestToJoinGuilds: g,
    setSelectedApplicationTab: (e, t) => {
        i.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB',
            guildId: e,
            applicationTab: t
        });
    },
    setSelectedSortOrder: (e, t) => {
        i.Z.dispatch({
            type: 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER',
            guildId: e,
            sortOrder: t
        });
    },
    setSelectedGuildJoinRequest: (e, t) => {
        null != t &&
            (0, o.bH)({
                guildId: e,
                applicationStatus: t.applicationStatus,
                applicationUserId: t.userId
            }),
            i.Z.dispatch({
                type: 'GUILD_JOIN_REQUESTS_SET_SELECTED',
                guildId: e,
                request: t
            });
    },
    createOrEnterJoinRequestInterview: A,
    fetchJoinRequestCooldown: N
};
