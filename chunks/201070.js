"use strict";
n.d(t, {
  $j: function() {
    return y
  },
  M3: function() {
    return U
  }
}), n(47120), n(411104);
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(392711),
  _ = n(652874),
  d = n(259443),
  c = n(379649),
  E = n(147913),
  I = n(823379),
  T = n(709054),
  h = n(823596),
  S = n(733026),
  f = n(588215),
  N = n(496135),
  A = n(893966);
let m = new d.Y("MemberSafetySearchManager");

function O(e) {
  return "guild_".concat(e)
}

function R(e) {
  return {
    requestState: e,
    abortController: null,
    lastUpdated: Date.now(),
    query: null,
    cursor: null,
    previousPagination: null,
    sort: null,
    elasticSearchCursor: null
  }
}(s = i || (i = {}))[s.FAILED = 0] = "FAILED", s[s.UNFETCHED = 1] = "UNFETCHED", s[s.PENDING = 2] = "PENDING", s[s.SUCCEEDED = 3] = "SUCCEEDED", s[s.STILL_INDEXING = 4] = "STILL_INDEXING";
let C = (0, _.Z)(e => ({}));

function p(e, t) {
  let n = C.getState()[e];
  return null == n && (n = R(1)), n = {
    ...n,
    ...t
  }, C.setState(t => ({
    ...t,
    [e]: n
  })), n
}

function g(e) {
  return C.getState()[e]
}

function L(e) {
  let t = g(e);
  return null == t && p(e, t = R(1)), t
}
async function v(e) {
  if (await (0, c._v)(200), null != g(e)) p(e, {
    requestState: 3,
    abortController: null,
    lastUpdated: Date.now()
  })
}

function D(e) {
  var t;
  t = O(e), C.setState(e => {
    let n = {
      ...e
    };
    return delete n[t], n
  })
}

function M(e, t) {
  return Math.floor(Math.max(e - 1, 0) / t)
}(o = r || (r = {}))[o.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", o[o.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", o[o.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", o[o.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
async function P(e) {
  var t, n, i, r, s;
  let o = A.Z.getSearchStateByGuildId(e),
    a = A.Z.getPaginationStateByGuildId(e),
    _ = O(e),
    d = L(_),
    [c, E] = function(e, t, n) {
      var i, r, s, o, a, l;
      let u = function(e, t) {
          var n;
          let {
            currentPageChunkNumber: i,
            previousPageChunkNumber: r,
            nextPageChunkNumber: s
          } = function(e) {
            let t = (0, h.t3)(e),
              n = e.pageSize * (e.currentPage - 1),
              i = e.pageSize * e.currentPage,
              r = e.pageSize * (e.currentPage + 1);
            return {
              previousPageChunkNumber: M(n, t),
              currentPageChunkNumber: M(i, t),
              nextPageChunkNumber: M(r, t)
            }
          }(t), {
            previousPagination: o
          } = L(O(e)), a = t.currentPage, l = null !== (n = null == o ? void 0 : o.currentPage) && void 0 !== n ? n : 0, u = A.Z.getElasticSearchPaginationByGuildId(e);
          switch (!0) {
            case null == u:
            case i === s && 0 === i:
              return 0;
            case i === s && i === r:
              return 1;
            case l < a && i < s:
              return 2;
            case l > a && i >= r:
              if (0 < i) return 3;
              return 0;
            default:
              return 1
          }
        }(e, n),
        _ = A.Z.getElasticSearchPaginationByGuildId(e),
        d = (0, h.t3)(n);
      switch (u) {
        case 0:
          return [null, {
            limit: d
          }];
        case 1:
          return [null !== (i = t.cursor) && void 0 !== i ? i : null, {
            limit: d,
            after: null !== (r = t.cursor) && void 0 !== r ? r : void 0
          }];
        case 2:
          return [null !== (s = null == _ ? void 0 : _.after) && void 0 !== s ? s : null, {
            limit: d,
            after: null !== (o = null == _ ? void 0 : _.after) && void 0 !== o ? o : void 0
          }];
        case 3:
          return [null !== (a = null == _ ? void 0 : _.before) && void 0 !== a ? a : null, {
            limit: d,
            before: null !== (l = null == _ ? void 0 : _.before) && void 0 !== l ? l : void 0
          }];
        default:
          (0, I.vE)(u)
      }
    }(e, d, a);
  let R = (r = function(e) {
      var t, n;
      let i = {},
        r = {},
        {
          query: s
        } = e;
      if (null != (t = s) && t.length > 1) {
        let [e, t] = (0, S.C)(s);
        e.length > 0 && (i.usernames = {
          or_query: e
        }), t.length > 0 && (i.user_id = {
          or_query: t
        })
      }
      let {
        requireUnusualDmActivity: o,
        requireCommunicationDisabled: a,
        requireUnusualAccountActivity: l,
        requireUsernameQuarantined: u
      } = e, _ = {};
      o && (_.unusual_dm_activity_until = {
        range: {
          gte: Date.now() - f.rL
        }
      }), a && (_.communication_disabled_until = {
        range: {
          gte: Date.now()
        }
      }), l && (_.unusual_account_activity = l), u && (_.automod_quarantined_username = u), Object.keys(_).length > 0 && (r.safety_signals = _);
      let {
        selectedRoleIds: d
      } = e;
      d.size > 0 && (i.role_ids = {
        and_query: Array.from(d)
      });
      let {
        selectedJoinDateOption: c
      } = e;
      if (null != c.afterDate) {
        ;
        i.guild_joined_at = {
          range: {
            gte: c.afterDate,
            lte: null !== (n = c.beforeDate) && void 0 !== n ? n : void 0
          }
        }
      }
      let {
        selectedAccountAgeOption: E
      } = e;
      if (null != E.afterDate) {
        let e = i.user_id;
        i.user_id = {
          ...e,
          range: {
            gte: T.default.fromTimestamp(E.afterDate),
            lte: null != E.beforeDate ? T.default.fromTimestamp(E.beforeDate) : void 0
          }
        }
      }
      let {
        selectedSourceInviteCode: I
      } = e;
      null != I && (i.source_invite_code = {
        or_query: [I]
      });
      let {
        selectedJoinSourceType: h
      } = e;
      null != h && (i.join_source_type = {
        or_query: [h]
      });
      let N = {
          or_query: r,
          and_query: i
        },
        {
          selectedSort: A
        } = e;
      return null != A && (N.sort = A), N
    }(o), null == (s = E) ? r : {
      ...r,
      ...s
    }),
    C = null !== (t = o.selectedSort) && void 0 !== t ? t : f.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
  if (function(e, t) {
      let n = L(e);
      return l()(n.query, t)
    }(_, R) && (0, u.isEqual)(c, d.cursor)) return;
  let D = function(e, t, n, i, r) {
    let s = g(e);
    if ((null == s ? void 0 : s.requestState) === 2) {
      var o;
      null === (o = s.abortController) || void 0 === o || o.abort()
    }
    return p(e, {
      requestState: 2,
      abortController: new AbortController,
      lastUpdated: Date.now(),
      query: t,
      cursor: n,
      previousPagination: i,
      sort: r
    })
  }(_, R, c, a, C);
  try {
    if (m.info("Making member search request", {
        query: D.query,
        guildId: e
      }), null == D.query) throw Error("Query is null");
    await (0, N.D)(e, D.query, {
      signal: null !== (i = null === (n = D.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== i ? i : void 0
    })
  } catch (e) {
    if (-1 === e.code) return;
    ! function(e) {
      if (null != g(e)) p(e, {
        requestState: 0,
        abortController: null,
        lastUpdated: Date.now()
      })
    }(_);
    return
  }
  await v(_)
}

function y(e) {
  return C(t => {
    var n;
    return (null === (n = t[O(e)]) || void 0 === n ? void 0 : n.requestState) === 2
  })
}

function U(e) {
  return C(t => {
    var n;
    return (null === (n = t[O(e)]) || void 0 === n ? void 0 : n.requestState) === 4
  })
}
class b extends E.Z {
  handleInitialize(e) {
    let {
      guildId: t
    } = e;
    return D(t), P(t)
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e;
    return D(t.id)
  }
  handleSearchStateUpdate(e) {
    let {
      guildId: t
    } = e;
    return P(t)
  }
  handlePaginationUpdate(e) {
    let {
      guildId: t
    } = e;
    return P(t)
  }
  handleGuildMemberSearchSuccess(e) {
    let {
      guildId: t
    } = e;
    return v(O(t))
  }
  handleGuildMemberSearchStillIndexing(e) {
    let {
      guildId: t
    } = e;
    p(O(t), {
      requestState: 4,
      abortController: null,
      lastUpdated: Date.now()
    })
  }
  handleNewMemberTimestampRefresh(e) {
    let {
      guildId: t
    } = e;
    return P(t)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      INITIALIZE_MEMBER_SAFETY_STORE: e => this.handleInitialize(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      MEMBER_SAFETY_SEARCH_STATE_UPDATE: e => this.handleSearchStateUpdate(e),
      MEMBER_SAFETY_PAGINATION_UPDATE: e => this.handlePaginationUpdate(e),
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e),
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: e => this.handleGuildMemberSearchStillIndexing(e),
      MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: e => this.handleNewMemberTimestampRefresh(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.ZP = new b