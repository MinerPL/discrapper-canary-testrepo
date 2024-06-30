n.d(t, {
    $j: function () {
        return M;
    },
    M3: function () {
        return P;
    }
}), n(47120), n(411104);
var r, i, a, o, s = n(348327), l = n.n(s), u = n(392711), c = n(652874), d = n(259443), _ = n(379649), E = n(147913), f = n(823379), h = n(709054), p = n(823596), m = n(733026), I = n(588215), T = n(496135), g = n(893966);
let S = new d.Y('MemberSafetySearchManager');
function A(e) {
    return 'guild_'.concat(e);
}
function N(e) {
    return {
        requestState: e,
        abortController: null,
        lastUpdated: Date.now(),
        query: null,
        cursor: null,
        previousPagination: null,
        sort: null,
        elasticSearchCursor: null
    };
}
(a = r || (r = {}))[a.FAILED = 0] = 'FAILED', a[a.UNFETCHED = 1] = 'UNFETCHED', a[a.PENDING = 2] = 'PENDING', a[a.SUCCEEDED = 3] = 'SUCCEEDED', a[a.STILL_INDEXING = 4] = 'STILL_INDEXING';
let v = (0, c.Z)(e => ({}));
function O(e, t) {
    let n = v.getState()[e];
    return null == n && (n = N(1)), n = {
        ...n,
        ...t
    }, v.setState(t => ({
        ...t,
        [e]: n
    })), n;
}
function R(e) {
    return v.getState()[e];
}
function C(e) {
    let t = R(e);
    return null == t && O(e, t = N(1)), t;
}
async function y(e) {
    if (await (0, _._v)(200), null != R(e))
        O(e, {
            requestState: 3,
            abortController: null,
            lastUpdated: Date.now()
        });
}
function D(e) {
    var t;
    t = A(e), v.setState(e => {
        let n = { ...e };
        return delete n[t], n;
    });
}
function L(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
(o = i || (i = {}))[o.FIRST_PAGE_CHUNK = 0] = 'FIRST_PAGE_CHUNK', o[o.CURRENT_SEARCH_CHUNK = 1] = 'CURRENT_SEARCH_CHUNK', o[o.NEXT_SEARCH_CHUNK = 2] = 'NEXT_SEARCH_CHUNK', o[o.PREVIOUS_SEARCH_CHUNK = 3] = 'PREVIOUS_SEARCH_CHUNK';
async function b(e) {
    var t, n, r, i, a;
    let o = g.Z.getSearchStateByGuildId(e), s = g.Z.getPaginationStateByGuildId(e), c = A(e), d = C(c), [_, E] = function (e, t, n) {
            var r, i, a, o, s, l;
            let u = function (e, t) {
                    var n;
                    let {
                            currentPageChunkNumber: r,
                            previousPageChunkNumber: i,
                            nextPageChunkNumber: a
                        } = function (e) {
                            let t = (0, p.t3)(e), n = e.pageSize * (e.currentPage - 1), r = e.pageSize * e.currentPage, i = e.pageSize * (e.currentPage + 1);
                            return {
                                previousPageChunkNumber: L(n, t),
                                currentPageChunkNumber: L(r, t),
                                nextPageChunkNumber: L(i, t)
                            };
                        }(t), {previousPagination: o} = C(A(e)), s = t.currentPage, l = null !== (n = null == o ? void 0 : o.currentPage) && void 0 !== n ? n : 0, u = g.Z.getElasticSearchPaginationByGuildId(e);
                    switch (!0) {
                    case null == u:
                    case r === a && 0 === r:
                        return 0;
                    case r === a && r === i:
                        return 1;
                    case l < s && r < a:
                        return 2;
                    case l > s && r >= i:
                        if (0 < r)
                            return 3;
                        return 0;
                    default:
                        return 1;
                    }
                }(e, n), c = g.Z.getElasticSearchPaginationByGuildId(e), d = (0, p.t3)(n);
            switch (u) {
            case 0:
                return [
                    null,
                    { limit: d }
                ];
            case 1:
                return [
                    null !== (r = t.cursor) && void 0 !== r ? r : null,
                    {
                        limit: d,
                        after: null !== (i = t.cursor) && void 0 !== i ? i : void 0
                    }
                ];
            case 2:
                return [
                    null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : null,
                    {
                        limit: d,
                        after: null !== (o = null == c ? void 0 : c.after) && void 0 !== o ? o : void 0
                    }
                ];
            case 3:
                return [
                    null !== (s = null == c ? void 0 : c.before) && void 0 !== s ? s : null,
                    {
                        limit: d,
                        before: null !== (l = null == c ? void 0 : c.before) && void 0 !== l ? l : void 0
                    }
                ];
            default:
                (0, f.vE)(u);
            }
        }(e, d, s);
    let N = (i = function (e) {
            var t, n;
            let r = {}, i = {}, {query: a} = e;
            if (null != (t = a) && t.length > 1) {
                let [e, t] = (0, m.C)(a);
                e.length > 0 && (r.usernames = { or_query: e }), t.length > 0 && (r.user_id = { or_query: t });
            }
            let {
                    requireUnusualDmActivity: o,
                    requireCommunicationDisabled: s,
                    requireUnusualAccountActivity: l,
                    requireUsernameQuarantined: u
                } = e, c = {};
            o && (c.unusual_dm_activity_until = { range: { gte: Date.now() - I.rL } }), s && (c.communication_disabled_until = { range: { gte: Date.now() } }), l && (c.unusual_account_activity = l), u && (c.automod_quarantined_username = u), Object.keys(c).length > 0 && (i.safety_signals = c);
            let {selectedRoleIds: d} = e;
            d.size > 0 && (r.role_ids = { and_query: Array.from(d) });
            let {selectedJoinDateOption: _} = e;
            if (null != _.afterDate) {
                ;
                r.guild_joined_at = {
                    range: {
                        gte: _.afterDate,
                        lte: null !== (n = _.beforeDate) && void 0 !== n ? n : void 0
                    }
                };
            }
            let {selectedAccountAgeOption: E} = e;
            if (null != E.afterDate) {
                let e = r.user_id;
                r.user_id = {
                    ...e,
                    range: {
                        gte: h.default.fromTimestamp(E.afterDate),
                        lte: null != E.beforeDate ? h.default.fromTimestamp(E.beforeDate) : void 0
                    }
                };
            }
            let {selectedSourceInviteCode: f} = e;
            null != f && (r.source_invite_code = { or_query: [f] });
            let {selectedJoinSourceType: p} = e;
            null != p && (r.join_source_type = { or_query: [p] });
            let T = {
                    or_query: i,
                    and_query: r
                }, {selectedSort: g} = e;
            return null != g && (T.sort = g), T;
        }(o), null == (a = E) ? i : {
            ...i,
            ...a
        }), v = null !== (t = o.selectedSort) && void 0 !== t ? t : I.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (function (e, t) {
            let n = C(e);
            return l()(n.query, t);
        }(c, N) && (0, u.isEqual)(_, d.cursor))
        return;
    let D = function (e, t, n, r, i) {
        let a = R(e);
        if ((null == a ? void 0 : a.requestState) === 2) {
            var o;
            null === (o = a.abortController) || void 0 === o || o.abort();
        }
        return O(e, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: t,
            cursor: n,
            previousPagination: r,
            sort: i
        });
    }(c, N, _, s, v);
    try {
        if (S.info('Making member search request', {
                query: D.query,
                guildId: e
            }), null == D.query)
            throw Error('Query is null');
        await (0, T.D)(e, D.query, { signal: null !== (r = null === (n = D.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== r ? r : void 0 });
    } catch (e) {
        if (-1 === e.code)
            return;
        !function (e) {
            if (null != R(e))
                O(e, {
                    requestState: 0,
                    abortController: null,
                    lastUpdated: Date.now()
                });
        }(c);
        return;
    }
    await y(c);
}
function M(e) {
    return v(t => {
        var n;
        return (null === (n = t[A(e)]) || void 0 === n ? void 0 : n.requestState) === 2;
    });
}
function P(e) {
    return v(t => {
        var n;
        return (null === (n = t[A(e)]) || void 0 === n ? void 0 : n.requestState) === 4;
    });
}
class U extends E.Z {
    handleInitialize(e) {
        let {guildId: t} = e;
        return D(t), b(t);
    }
    handleGuildDelete(e) {
        let {guild: t} = e;
        return D(t.id);
    }
    handleSearchStateUpdate(e) {
        let {guildId: t} = e;
        return b(t);
    }
    handlePaginationUpdate(e) {
        let {guildId: t} = e;
        return b(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let {guildId: t} = e;
        return y(A(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let {guildId: t} = e;
        O(A(t), {
            requestState: 4,
            abortController: null,
            lastUpdated: Date.now()
        });
    }
    handleNewMemberTimestampRefresh(e) {
        let {guildId: t} = e;
        return b(t);
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            INITIALIZE_MEMBER_SAFETY_STORE: e => this.handleInitialize(e),
            GUILD_DELETE: e => this.handleGuildDelete(e),
            MEMBER_SAFETY_SEARCH_STATE_UPDATE: e => this.handleSearchStateUpdate(e),
            MEMBER_SAFETY_PAGINATION_UPDATE: e => this.handlePaginationUpdate(e),
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e),
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: e => this.handleGuildMemberSearchStillIndexing(e),
            MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: e => this.handleNewMemberTimestampRefresh(e)
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.ZP = new U();
