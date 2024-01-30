"use strict";
r.r(t), r.d(t, {
  default: function() {
    return T
  }
}), r("808653"), r("424973"), r("222007");
var i = r("446674"),
  n = r("913144"),
  s = r("271938"),
  u = r("26989"),
  a = r("305961"),
  l = r("697218"),
  d = r("637240"),
  h = r("490931"),
  o = r("159132"),
  m = r("835257");
let _ = !1,
  c = {};

function M(e) {
  return null == c[e] && (c[e] = new d.GuildMemberSafetyPageStore(e)), c[e]
}

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = M(e);
  r.reset(t)
}

function I() {
  return !1
}

function f(e) {
  let t = !1,
    r = M(e.guildId);
  return "GUILD_ROLE_DELETE" === e.type && (t = r.removeRoleFromSearchState(e.roleId)), r.rebuildAllMembers() || t
}

function E(e) {
  let {
    guildId: t,
    userId: r
  } = e, i = M(t);
  return i.updateMembersByMemberIds([r])
}

function g(e) {
  let t = !1;
  return e.guilds.forEach(e => {
    let {
      id: r,
      members: i
    } = e, n = M(r);
    t = n.updateServerMembers(i) || t
  }), t
}
class b extends i.default.Store {
  initialize() {
    this.waitFor(s.default, u.default, l.default)
  }
  isInitialized(e) {
    let t = M(e);
    return t.isInitialized
  }
  getMembersByGuildId(e, t) {
    let r = M(e);
    return r.getMembersByIndex(t)
  }
  getMembersCountByGuildId(e, t) {
    let r = M(e);
    return r.countMembersByIndex(t)
  }
  getEstimatedMemberSearchCountByGuildId(e) {
    let t = M(e),
      r = t.searchChunkSize,
      i = t.countMembersByIndex(t.getSearchIndex()),
      n = t.getTotalResultsCount();
    return null == n || n < r ? i : n
  }
  getKnownMemberSearchCountByGuildId(e) {
    let t = M(e);
    return t.countMembersByIndex(t.getSearchIndex())
  }
  getCurrentMemberSearchResultsByGuildId(e) {
    let t = M(e);
    return t.getMembersByIndex(t.getSearchIndex())
  }
  getSearchStateByGuildId(e) {
    let t = M(e);
    return t.getSearchState()
  }
  hasDefaultSearchStateByGuildId(e) {
    let t = M(e);
    return t.hasDefaultSearchState()
  }
  getPagedMembersByGuildId(e) {
    let t = M(e);
    return t.getPaginatedMembers()
  }
  getPaginationStateByGuildId(e) {
    let t = M(e);
    return t.getPaginationState()
  }
  getElasticSearchPaginationByGuildId(e) {
    let t = M(e);
    return t.getElasticSearchPagination()
  }
  getEnhancedMember(e, t) {
    let r = M(e);
    return r.getMember(t)
  }
  getNewMemberTimestamp(e) {
    let t = M(e);
    return t.getNewMemberTimestamp()
  }
  getLastRefreshTimestamp(e) {
    let t = M(e);
    return t.lastRefreshTimestamp
  }
  getLastCursorTimestamp(e) {
    let t = M(e);
    return t.lastCursorTimestamp
  }
}
b.displayName = "MemberSafetyStore";
let p = new b(n.default, {
  CONNECTION_OPEN: function(e) {
    return _ ? _ = !1 : ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      for (let t in c) S(t, e)
    }(!0), g(e)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    return g(e)
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    let {
      guildId: t,
      members: r
    } = e;
    if (null == t || null == a.default.getGuild(t)) return !1;
    _ = !0;
    let i = M(t),
      n = [];
    for (let e of r) {
      let t = i.getMember(e.userId);
      null == t && n.push(e)
    }
    return n.length > 0 && i.updateClientMembers(n)
  },
  CACHE_LOADED: function(e) {
    let {
      guildMembers: t
    } = e, r = !1;
    return _ = !0, Object.entries(t).forEach(e => {
      let [t, i] = e, n = M(t);
      r = n.updateClientMembers(Object.values(i)) || r
    }), r
  },
  PASSIVE_UPDATE_V1: function(e) {
    let {
      members: t,
      guildId: r
    } = e;
    if (null != t) {
      let e = M(r);
      return e.updateServerMembers(t)
    }
    return !1
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e, r = M(t.id);
    S(t.id, r.isInitialized)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    S(t)
  },
  GUILD_MEMBERS_CHUNK: function(e) {
    let {
      guildId: t,
      members: r
    } = e, i = M(t);
    return i.updateServerMembers(r)
  },
  GUILD_MEMBER_ADD: I,
  GUILD_MEMBER_UPDATE: I,
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    let {
      guildId: t
    } = e, r = s.default.getId(), i = M(t);
    return i.updateMembersByMemberIds([r])
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: r
    } = e, i = M(t);
    return i.removeMember(r.id)
  },
  GUILD_ROLE_UPDATE: f,
  GUILD_ROLE_DELETE: f,
  GUILD_MEMBER_PROFILE_UPDATE: function(e) {
    let {
      guildId: t,
      guildMember: r
    } = e, i = M(t);
    return i.updateMembersByMemberIds([r.user.id])
  },
  GUILD_ROLE_MEMBER_REMOVE: E,
  GUILD_ROLE_MEMBER_ADD: E,
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: r
    } = e;
    if (null == r || 0 === r.length) return !1;
    let i = M(t),
      n = r.reduce((e, t) => {
        if (null != t.member) {
          let r = t.member.user.id;
          e.push(r)
        }
        return e
      }, []);
    return i.updateMembersByMemberIds(n)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: r
    } = e;
    if (null == r || 0 === r.length) return !1;
    let i = M(t),
      n = r.reduce((e, t) => {
        let r = t.userId;
        return e.push(r), e
      }, []);
    return i.updateMembersByMemberIds(n)
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    let {
      guildId: t,
      members: r
    } = e;
    if (null == r || 0 === r.length) return !1;
    let i = M(t),
      n = r.reduce((e, t) => {
        let r = t.userId;
        return e.push(r), e
      }, []);
    return i.updateMembersByMemberIds(n)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      guildId: t,
      threads: r
    } = e, i = Object.values(r);
    if (0 === i.length) return !1;
    let n = M(t),
      s = i.reduce((e, t) => {
        if (null != t.owner) {
          let r = t.owner.user.id;
          e.push(r)
        }
        return e
      }, []);
    return n.updateMembersByMemberIds(s)
  },
  INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
    let {
      guildId: t
    } = e, r = M(t);
    return r.initialize()
  },
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
    let {
      guildId: t
    } = e, r = M(t);
    return r.refreshNewMembersAndSearchResults()
  },
  MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
    let {
      guildId: t,
      pagination: r
    } = e, i = M(t), [n] = i.updatePaginationState(r);
    return n
  },
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
    let {
      guildId: t,
      continuationToken: r
    } = e, i = M(t);
    return i.updatePaginationToken(r)
  },
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
    let {
      guildId: t,
      searchState: r
    } = e, i = M(t);
    return i.updateSearchState(r)
  },
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
    let {
      guildId: t,
      memberSupplementals: r
    } = e, i = (0, o.syncMemberSupplemental)(t, r);
    if (i) {
      let e = M(t);
      e.updateMembersByMemberIds(r.map(e => e.userId))
    }
    return i
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    var t, r, i, n, s, u;
    let a, l;
    let {
      guildId: d,
      members: _,
      total_result_count: c
    } = e, S = M(d), {
      memberIds: I,
      memberSupplementals: f
    } = _.reduce((e, t) => {
      let {
        member: r,
        source_invite_code: i,
        join_source_type: n,
        inviter_id: s
      } = t, u = r.user;
      return e.memberIds.push(u.id), e.memberSupplementals.push({
        userId: u.id,
        sourceInviteCode: i,
        joinSourceType: n,
        inviterId: s
      }), e
    }, {
      memberIds: [],
      memberSupplementals: []
    }), E = (0, o.syncMemberSupplemental)(d, f);
    (0, m.registerFetchedSupplementals)(d, I);
    let g = S.updateSearchedMembersByMemberIds(I);
    _.length > 0 && (a = _[0], l = _[_.length - 1]);
    let [b] = S.updatePaginationState({
      totalResultsCount: c,
      elasticSearchCursor: {
        before: (0, h.createMemberSearchCursor)({
          joinedAt: null == a ? void 0 : null === (t = a.member) || void 0 === t ? void 0 : t.joined_at,
          userId: null !== (s = null == a ? void 0 : null === (r = a.member) || void 0 === r ? void 0 : r.user.id) && void 0 !== s ? s : ""
        }),
        after: (0, h.createMemberSearchCursor)({
          joinedAt: null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.joined_at,
          userId: null !== (u = null == l ? void 0 : null === (n = l.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== u ? u : ""
        })
      }
    }, !1);
    return E || g || b
  },
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
    let {
      guildId: t,
      userIds: r
    } = e, i = M(t);
    return i.updateMembersByMemberIds(r)
  }
});
var T = p