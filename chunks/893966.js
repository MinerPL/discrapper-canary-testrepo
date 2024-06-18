"use strict";
n(47120), n(724458), n(653041);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(314897),
  _ = n(271383),
  d = n(430824),
  c = n(594174),
  E = n(709054),
  I = n(752560),
  T = n(588215),
  h = n(44715),
  S = n(327999),
  f = n(981631);
let N = !1,
  A = {};

function m(e) {
  return null == A[e] && (A[e] = new I.P(e)), A[e]
}

function O(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  m(e).reset(t)
}

function R() {
  return !1
}

function C(e) {
  let t = !1,
    n = m(e.guildId);
  return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t
}

function p(e) {
  let {
    guildId: t,
    userId: n
  } = e;
  return m(t).updateMembersByMemberIds([n])
}

function g(e) {
  let t = !1;
  return e.guilds.forEach(e => {
    let {
      id: n,
      members: i
    } = e;
    t = m(n).updateServerMembers(i) || t
  }), t
}
class L extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(u.default, _.ZP, c.default)
  }
  isInitialized(e) {
    return m(e).isInitialized
  }
  getMembersByGuildId(e, t) {
    return m(e).getMembersByIndex(t)
  }
  getMembersCountByGuildId(e, t) {
    return m(e).countMembersByIndex(t)
  }
  getEstimatedMemberSearchCountByGuildId(e) {
    let t = m(e),
      n = t.searchChunkSize,
      i = t.countMembersByIndex(t.getSearchIndex()),
      r = t.getTotalResultsCount();
    return null == r || r < n ? i : r
  }
  getKnownMemberSearchCountByGuildId(e) {
    let t = m(e);
    return t.countMembersByIndex(t.getSearchIndex())
  }
  getCurrentMemberSearchResultsByGuildId(e) {
    let t = m(e);
    return t.getMembersByIndex(t.getSearchIndex())
  }
  getSearchStateByGuildId(e) {
    return m(e).getSearchState()
  }
  hasDefaultSearchStateByGuildId(e) {
    return m(e).hasDefaultSearchState()
  }
  getPagedMembersByGuildId(e) {
    return m(e).getPaginatedMembers()
  }
  getPaginationStateByGuildId(e) {
    return m(e).getPaginationState()
  }
  getElasticSearchPaginationByGuildId(e) {
    return m(e).getElasticSearchPagination()
  }
  getEnhancedMember(e, t) {
    return m(e).getMember(t)
  }
  getNewMemberTimestamp(e) {
    return m(e).getNewMemberTimestamp()
  }
  getLastRefreshTimestamp(e) {
    return m(e).lastRefreshTimestamp
  }
  getLastCursorTimestamp(e) {
    return m(e).lastCursorTimestamp
  }
}
o = "MemberSafetyStore", (s = "displayName") in(r = L) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o;
let v = new L(l.Z, {
  CONNECTION_OPEN: function(e) {
    return N ? N = !1 : ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      for (let t in A) O(t, e)
    }(!0), g(e)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    return g(e)
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    if (null == t || null == d.Z.getGuild(t)) return !1;
    N = !0;
    let i = m(t),
      r = [];
    for (let e of n) null == i.getMember(e.userId) && r.push(e);
    return r.length > 0 && i.updateClientMembers(r)
  },
  CACHE_LOADED: function(e) {
    let {
      guildMembers: t
    } = e, n = !1;
    return N = !0, E.default.entries(t).forEach(e => {
      let [t, i] = e;
      n = m(t).updateClientMembers(Object.values(i)) || n
    }), n
  },
  PASSIVE_UPDATE_V2: function(e) {
    let {
      members: t,
      guildId: n
    } = e;
    return !!(t.length > 0) && m(n).updateServerMembers(t)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e, n = m(t.id);
    O(t.id, n.isInitialized)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    O(t)
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let {
      chunks: t
    } = e, n = !1;
    for (let e of t) n = m(e.guildId).updateServerMembers(e.members) || n;
    return n
  },
  GUILD_MEMBER_ADD: R,
  GUILD_MEMBER_UPDATE: R,
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    let {
      guildId: t
    } = e, n = u.default.getId();
    return m(t).updateMembersByMemberIds([n])
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return m(t).removeMember(n.id)
  },
  GUILD_ROLE_UPDATE: C,
  GUILD_ROLE_DELETE: C,
  GUILD_MEMBER_PROFILE_UPDATE: function(e) {
    let {
      guildId: t,
      guildMember: n
    } = e;
    return m(t).updateMembersByMemberIds([n.user.id])
  },
  GUILD_ROLE_MEMBER_REMOVE: p,
  GUILD_ROLE_MEMBER_ADD: p,
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    if (null == n || 0 === n.length) return !1;
    let i = m(t),
      r = n.reduce((e, t) => {
        if (null != t.member) {
          let n = t.member.user.id;
          e.push(n)
        }
        return e
      }, []);
    return i.updateMembersByMemberIds(r)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    if (null == n || 0 === n.length) return !1;
    let i = m(t),
      r = n.reduce((e, t) => {
        let n = t.userId;
        return e.push(n), e
      }, []);
    return i.updateMembersByMemberIds(r)
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    if (null == n || 0 === n.length) return !1;
    let i = m(t),
      r = n.reduce((e, t) => {
        let n = t.userId;
        return e.push(n), e
      }, []);
    return i.updateMembersByMemberIds(r)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      guildId: t,
      threads: n
    } = e, i = Object.values(n);
    if (0 === i.length) return !1;
    let r = m(t),
      s = i.reduce((e, t) => {
        if (null != t.owner) {
          let n = t.owner.user.id;
          e.push(n)
        }
        return e
      }, []);
    return r.updateMembersByMemberIds(s)
  },
  INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
    let {
      guildId: t
    } = e;
    return m(t).initialize()
  },
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
    let {
      guildId: t
    } = e;
    return m(t).refreshNewMembersAndSearchResults()
  },
  MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
    let {
      guildId: t,
      pagination: n
    } = e, [i] = m(t).updatePaginationState(n);
    return i
  },
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
    let {
      guildId: t,
      continuationToken: n
    } = e;
    return m(t).updatePaginationToken(n)
  },
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
    let {
      guildId: t,
      searchState: n
    } = e;
    return m(t).updateSearchState(n)
  },
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
    let {
      guildId: t,
      memberSupplementals: n
    } = e, i = (0, h.Qu)(t, n);
    return i && m(t).updateMembersByMemberIds(n.map(e => e.userId)), i
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    var t, n, i, r, s, o;
    let a, l;
    let {
      guildId: u,
      members: _,
      total_result_count: d
    } = e, c = m(u), {
      memberIds: E,
      memberSupplementals: I
    } = _.reduce((e, t) => {
      let {
        member: n,
        source_invite_code: i,
        join_source_type: r,
        inviter_id: s
      } = t, o = n.user;
      return e.memberIds.push(o.id), e.memberSupplementals.push({
        userId: o.id,
        sourceInviteCode: i,
        joinSourceType: r,
        inviterId: s
      }), e
    }, {
      memberIds: [],
      memberSupplementals: []
    }), N = (0, h.Qu)(u, I);
    (0, S.nf)(u, E);
    let A = c.updateSearchedMembersByMemberIds(E);
    _.length > 0 && (a = _[0], l = _[_.length - 1]);
    let [O] = c.updatePaginationState({
      totalResultsCount: d,
      elasticSearchCursor: {
        before: (0, T.si)({
          joinedAt: null == a ? void 0 : null === (t = a.member) || void 0 === t ? void 0 : t.joined_at,
          userId: null !== (s = null == a ? void 0 : null === (n = a.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== s ? s : f.lds
        }),
        after: (0, T.si)({
          joinedAt: null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.joined_at,
          userId: null !== (o = null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.user.id) && void 0 !== o ? o : f.lds
        })
      }
    }, !1);
    return N || A || O
  },
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
    let {
      guildId: t,
      userIds: n
    } = e;
    return m(t).updateMembersByMemberIds(n)
  }
});
t.Z = v