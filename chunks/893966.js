n(47120), n(724458), n(653041);
var r, i, a, o, s = n(442837), l = n(570140), u = n(314897), c = n(271383), d = n(430824), _ = n(594174), E = n(709054), f = n(752560), h = n(588215), p = n(44715), m = n(327999), I = n(981631);
let T = !1, g = {};
function S(e) {
    return null == g[e] && (g[e] = new f.P(e)), g[e];
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    S(e).reset(t);
}
function N() {
    return !1;
}
function v(e) {
    let t = !1, n = S(e.guildId);
    return 'GUILD_ROLE_DELETE' === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function O(e) {
    let {
        guildId: t,
        userId: n
    } = e;
    return S(t).updateMembersByMemberIds([n]);
}
function R(e) {
    let t = !1;
    return e.guilds.forEach(e => {
        let {
            id: n,
            members: r
        } = e;
        t = S(n).updateServerMembers(r) || t;
    }), t;
}
class C extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default, c.ZP, _.default);
    }
    isInitialized(e) {
        return S(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return S(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return S(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = S(e), n = t.searchChunkSize, r = t.countMembersByIndex(t.getSearchIndex()), i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = S(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = S(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return S(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return S(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return S(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return S(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return S(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return S(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return S(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return S(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return S(e).lastCursorTimestamp;
    }
}
o = 'MemberSafetyStore', (a = 'displayName') in (i = C) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o;
let y = new C(l.Z, {
    CONNECTION_OPEN: function (e) {
        return T ? T = !1 : !function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            for (let t in g)
                A(t, e);
        }(!0), R(e);
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        return R(e);
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        let {
            guildId: t,
            members: n
        } = e;
        if (null == t || null == d.Z.getGuild(t))
            return !1;
        T = !0;
        let r = S(t), i = [];
        for (let e of n)
            null == r.getMember(e.userId) && i.push(e);
        return i.length > 0 && r.updateClientMembers(i);
    },
    CACHE_LOADED: function (e) {
        let {guildMembers: t} = e, n = !1;
        return T = !0, E.default.entries(t).forEach(e => {
            let [t, r] = e;
            n = S(t).updateClientMembers(Object.values(r)) || n;
        }), n;
    },
    PASSIVE_UPDATE_V2: function (e) {
        let {
            members: t,
            guildId: n
        } = e;
        return !!(t.length > 0) && S(n).updateServerMembers(t);
    },
    GUILD_CREATE: function (e) {
        let {guild: t} = e, n = S(t.id);
        A(t.id, n.isInitialized);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: {id: t}
        } = e;
        A(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let {chunks: t} = e, n = !1;
        for (let e of t)
            n = S(e.guildId).updateServerMembers(e.members) || n;
        return n;
    },
    GUILD_MEMBER_ADD: N,
    GUILD_MEMBER_UPDATE: N,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let {guildId: t} = e, n = u.default.getId();
        return S(t).updateMembersByMemberIds([n]);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let {
            guildId: t,
            user: n
        } = e;
        return S(t).removeMember(n.id);
    },
    GUILD_ROLE_UPDATE: v,
    GUILD_ROLE_DELETE: v,
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let {
            guildId: t,
            guildMember: n
        } = e;
        return S(t).updateMembersByMemberIds([n.user.id]);
    },
    GUILD_ROLE_MEMBER_REMOVE: O,
    GUILD_ROLE_MEMBER_ADD: O,
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let {
            guildId: t,
            members: n
        } = e;
        if (null == n || 0 === n.length)
            return !1;
        let r = S(t), i = n.reduce((e, t) => {
                if (null != t.member) {
                    let n = t.member.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let {
            guildId: t,
            addedMembers: n
        } = e;
        if (null == n || 0 === n.length)
            return !1;
        let r = S(t), i = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let {
            guildId: t,
            members: n
        } = e;
        if (null == n || 0 === n.length)
            return !1;
        let r = S(t), i = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    LOAD_FORUM_POSTS: function (e) {
        let {
                guildId: t,
                threads: n
            } = e, r = Object.values(n);
        if (0 === r.length)
            return !1;
        let i = S(t), a = r.reduce((e, t) => {
                if (null != t.owner) {
                    let n = t.owner.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return i.updateMembersByMemberIds(a);
    },
    INITIALIZE_MEMBER_SAFETY_STORE: function (e) {
        let {guildId: t} = e;
        return S(t).initialize();
    },
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function (e) {
        let {guildId: t} = e;
        return S(t).refreshNewMembersAndSearchResults();
    },
    MEMBER_SAFETY_PAGINATION_UPDATE: function (e) {
        let {
                guildId: t,
                pagination: n
            } = e, [r] = S(t).updatePaginationState(n);
        return r;
    },
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function (e) {
        let {
            guildId: t,
            continuationToken: n
        } = e;
        return S(t).updatePaginationToken(n);
    },
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: function (e) {
        let {
            guildId: t,
            searchState: n
        } = e;
        return S(t).updateSearchState(n);
    },
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function (e) {
        let {
                guildId: t,
                memberSupplementals: n
            } = e, r = (0, p.Qu)(t, n);
        return r && S(t).updateMembersByMemberIds(n.map(e => e.userId)), r;
    },
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
        var t, n, r, i, a, o;
        let s, l;
        let {
                guildId: u,
                members: c,
                total_result_count: d
            } = e, _ = S(u), {
                memberIds: E,
                memberSupplementals: f
            } = c.reduce((e, t) => {
                let {
                        member: n,
                        source_invite_code: r,
                        join_source_type: i,
                        inviter_id: a
                    } = t, o = n.user;
                return e.memberIds.push(o.id), e.memberSupplementals.push({
                    userId: o.id,
                    sourceInviteCode: r,
                    joinSourceType: i,
                    inviterId: a
                }), e;
            }, {
                memberIds: [],
                memberSupplementals: []
            }), T = (0, p.Qu)(u, f);
        (0, m.nf)(u, E);
        let g = _.updateSearchedMembersByMemberIds(E);
        c.length > 0 && (s = c[0], l = c[c.length - 1]);
        let [A] = _.updatePaginationState({
            totalResultsCount: d,
            elasticSearchCursor: {
                before: (0, h.si)({
                    joinedAt: null == s ? void 0 : null === (t = s.member) || void 0 === t ? void 0 : t.joined_at,
                    userId: null !== (a = null == s ? void 0 : null === (n = s.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== a ? a : I.lds
                }),
                after: (0, h.si)({
                    joinedAt: null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.joined_at,
                    userId: null !== (o = null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.user.id) && void 0 !== o ? o : I.lds
                })
            }
        }, !1);
        return T || g || A;
    },
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function (e) {
        let {
            guildId: t,
            userIds: n
        } = e;
        return S(t).updateMembersByMemberIds(n);
    }
});
t.Z = y;
