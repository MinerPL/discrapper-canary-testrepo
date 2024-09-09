n(47120), n(724458), n(653041);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(314897),
    c = n(271383),
    d = n(430824),
    _ = n(594174),
    E = n(823379),
    f = n(709054),
    h = n(752560),
    p = n(588215),
    m = n(44715),
    I = n(327999),
    T = n(981631);
let g = !1,
    S = {};
function A(e) {
    return null == S[e] && (S[e] = new h.P(e)), S[e];
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    A(e).reset(t);
}
function v() {
    return !1;
}
function O(e) {
    let t = !1,
        n = A(e.guildId);
    return 'GUILD_ROLE_DELETE' === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function R(e) {
    let { guildId: t, userId: n } = e;
    return A(t).updateMembersByMemberIds([n]);
}
class C extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default, c.ZP, _.default);
    }
    isInitialized(e) {
        return A(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return A(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return A(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = A(e),
            n = t.searchChunkSize,
            r = t.countMembersByIndex(t.getSearchIndex()),
            i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = A(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = A(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return A(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return A(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return A(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return A(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return A(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return A(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return A(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return A(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return A(e).lastCursorTimestamp;
    }
}
(s = 'MemberSafetyStore'),
    (a = 'displayName') in (i = C)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let y = new C(l.Z, {
    CONNECTION_OPEN: function (e) {
        let t;
        g
            ? (g = !1)
            : !(function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  for (let t in S) N(t, e);
              })(!0);
        return (
            (t = !1),
            e.guilds.forEach((e) => {
                let { id: n, members: r } = e;
                t = A(n).updateServerMembers(r) || t;
            }),
            t
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let t;
        return (
            (t = !1),
            e.guilds.forEach((e) => {
                let { id: n, activity_instances: r } = e,
                    i = A(n),
                    a = [];
                null == r ||
                    r.forEach((e) => {
                        var t;
                        null === (t = e.participants) ||
                            void 0 === t ||
                            t.forEach((e) => {
                                (0, E.lm)(e.member) && a.push(e.member);
                            });
                    }),
                    (t = i.updateServerMembers(a) || t);
            }),
            t
        );
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        let { guildId: t, members: n } = e;
        if (null == t || null == d.Z.getGuild(t)) return !1;
        g = !0;
        let r = A(t),
            i = [];
        for (let e of n) null == r.getMember(e.userId) && i.push(e);
        return i.length > 0 && r.updateClientMembers(i);
    },
    CACHE_LOADED: function (e) {
        let { guildMembers: t } = e,
            n = !1;
        return (
            (g = !0),
            f.default.entries(t).forEach((e) => {
                let [t, r] = e;
                n = A(t).updateClientMembers(Object.values(r)) || n;
            }),
            n
        );
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { members: t, guildId: n } = e;
        return !!(t.length > 0) && A(n).updateServerMembers(t);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e,
            n = A(t.id);
        N(t.id, n.isInitialized);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t }
        } = e;
        N(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t) n = A(e.guildId).updateServerMembers(e.members) || n;
        return n;
    },
    GUILD_MEMBER_ADD: v,
    GUILD_MEMBER_UPDATE: v,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t } = e,
            n = u.default.getId();
        return A(t).updateMembersByMemberIds([n]);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return A(t).removeMember(n.id);
    },
    GUILD_ROLE_UPDATE: O,
    GUILD_ROLE_DELETE: O,
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let { guildId: t, guildMember: n } = e;
        return A(t).updateMembersByMemberIds([n.user.id]);
    },
    GUILD_ROLE_MEMBER_REMOVE: R,
    GUILD_ROLE_MEMBER_ADD: R,
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        if (null == n || 0 === n.length) return !1;
        let r = A(t),
            i = n.reduce((e, t) => {
                if (null != t.member) {
                    let n = t.member.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        if (null == n || 0 === n.length) return !1;
        let r = A(t),
            i = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let { guildId: t, members: n } = e;
        if (null == n || 0 === n.length) return !1;
        let r = A(t),
            i = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { guildId: t, threads: n } = e,
            r = Object.values(n);
        if (0 === r.length) return !1;
        let i = A(t),
            a = r.reduce((e, t) => {
                if (null != t.owner) {
                    let n = t.owner.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return i.updateMembersByMemberIds(a);
    },
    INITIALIZE_MEMBER_SAFETY_STORE: function (e) {
        let { guildId: t } = e;
        return A(t).initialize();
    },
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function (e) {
        let { guildId: t } = e;
        return A(t).refreshNewMembersAndSearchResults();
    },
    MEMBER_SAFETY_PAGINATION_UPDATE: function (e) {
        let { guildId: t, pagination: n } = e,
            [r] = A(t).updatePaginationState(n);
        return r;
    },
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function (e) {
        let { guildId: t, continuationToken: n } = e;
        return A(t).updatePaginationToken(n);
    },
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: function (e) {
        let { guildId: t, searchState: n } = e;
        return A(t).updateSearchState(n);
    },
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function (e) {
        let { guildId: t, memberSupplementals: n } = e,
            r = (0, m.Qu)(t, n);
        return r && A(t).updateMembersByMemberIds(n.map((e) => e.userId)), r;
    },
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
        var t, n, r, i, a, s;
        let o, l;
        let { guildId: u, members: c, total_result_count: d } = e,
            _ = A(u),
            { memberIds: E, memberSupplementals: f } = c.reduce(
                (e, t) => {
                    let { member: n, source_invite_code: r, join_source_type: i, inviter_id: a } = t,
                        s = n.user;
                    return (
                        e.memberIds.push(s.id),
                        e.memberSupplementals.push({
                            userId: s.id,
                            sourceInviteCode: r,
                            joinSourceType: i,
                            inviterId: a
                        }),
                        e
                    );
                },
                {
                    memberIds: [],
                    memberSupplementals: []
                }
            ),
            h = (0, m.Qu)(u, f);
        (0, I.nf)(u, E);
        let g = _.updateSearchedMembersByMemberIds(E);
        c.length > 0 && ((o = c[0]), (l = c[c.length - 1]));
        let [S] = _.updatePaginationState(
            {
                totalResultsCount: d,
                elasticSearchCursor: {
                    before: (0, p.si)({
                        joinedAt: null == o ? void 0 : null === (t = o.member) || void 0 === t ? void 0 : t.joined_at,
                        userId: null !== (a = null == o ? void 0 : null === (n = o.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== a ? a : T.lds
                    }),
                    after: (0, p.si)({
                        joinedAt: null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.joined_at,
                        userId: null !== (s = null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.user.id) && void 0 !== s ? s : T.lds
                    })
                }
            },
            !1
        );
        return h || g || S;
    },
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function (e) {
        let { guildId: t, userIds: n } = e;
        return A(t).updateMembersByMemberIds(n);
    }
});
t.Z = y;
