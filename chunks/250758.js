"use strict";
n.r(t), n("653041"), n("724458");
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("999650"),
  d = n("279779"),
  c = n("57132"),
  f = n("483360"),
  E = n("892880"),
  _ = n("405656"),
  T = n("51144"),
  m = n("271383"),
  I = n("768119"),
  p = n("246946"),
  h = n("594174"),
  N = n("981631");
let S = {},
  C = {};

function A(e) {
  let {
    searchId: t,
    query: n,
    mode: s,
    tokens: a,
    cursorScope: l,
    autocompletes: i
  } = e, r = C[t];
  return null == r && (r = {
    results: [],
    context: d.default.getSearchContext(g.bind(null, t))
  }, C[t] = r), {
    query: null != n ? n : "",
    mode: null != s ? s : {
      type: N.SearchPopoutModes.EMPTY,
      filter: null,
      token: null
    },
    tokens: null != a ? a : [],
    cursorScope: null != l ? l : null,
    autocompletes: null != i ? i : []
  }
}

function g(e, t) {
  let {
    results: n
  } = t, s = C[e], a = S[e];
  if (null == s || null == a) return;
  let {
    type: l,
    filter: i
  } = a.mode;
  if (l === N.SearchPopoutModes.EMPTY || l === N.SearchPopoutModes.FILTER && i !== N.SearchTokenTypes.FILTER_FROM && i !== N.SearchTokenTypes.FILTER_MENTIONS) return;
  let r = 3;
  a.mode.type === N.SearchPopoutModes.FILTER && (r = 10), s.results = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
    return (e = e.reduce((e, t) => {
      let n = h.default.getUser(t.id);
      return null == n ? e : (e.push({
        id: n.id,
        text: T.default.getUserTag(n),
        user: n
      }), e)
    }, [])).length > t && (e.length = t), e
  }(n, r);
  let {
    query: o,
    mode: u,
    tokens: d,
    cursorScope: c
  } = a, {
    autocompletes: f
  } = a;
  f = O(e, u), S[e] = A({
    searchId: e,
    query: o,
    mode: u,
    tokens: d,
    cursorScope: c,
    autocompletes: f
  }), P.emitChange()
}

function M(e, t, n) {
  let s, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
  if (null == e || "" === e) return null;
  if (I.default.getSearchType(n) === N.SearchTypes.GUILD && (e === N.SearchTokenTypes.FILTER_FROM || e === N.SearchTokenTypes.FILTER_MENTIONS)) {
    let e = C[n];
    null == e ? s = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = f.default.getRecentlyTalked(n, 10).map(e => {
      let {
        record: t
      } = e;
      return {
        user: t,
        text: T.default.getUserTag(t)
      }
    })), s = e.results)
  } else {
    var l;
    let i = null === (l = u.default[e]) || void 0 === l ? void 0 : l.getAutocompletions,
      r = (null != t ? t.getFullMatch() : "").trim();
    s = null != i ? i(r, n, null != a ? a : 10) : []
  }
  return null == s || 0 === s.length ? null : {
    group: e,
    results: s
  }
}

function R(e) {
  let t = (null != e ? e.getFullMatch() : "").trim(),
    n = function() {
      let e = (0, c.isInMainTabsExperiment)() && !1;
      return {
        [N.SearchTokenTypes.FILTER_FROM]: !p.default.hidePersonalInformation,
        [N.SearchTokenTypes.FILTER_MENTIONS]: !p.default.hidePersonalInformation,
        [N.SearchTokenTypes.FILTER_HAS]: !0,
        [N.SearchTokenTypes.FILTER_BEFORE]: !0,
        [N.SearchTokenTypes.FILTER_AFTER]: !0,
        [N.SearchTokenTypes.FILTER_ON]: !0,
        [N.SearchTokenTypes.FILTER_IN]: I.default.getSearchType() === N.SearchTypes.GUILD,
        [N.SearchTokenTypes.FILTER_PINNED]: !e
      }
    }(),
    s = (0, u.getFilterAutocompletions)(t).filter(e => n[e.token]);
  return {
    group: N.SearchAutocompleteGroups.SEARCH_OPTIONS,
    results: s
  }
}

function O(e, t) {
  let n = [];
  return t.type === N.SearchPopoutModes.FILTER ? n.push(M(t.filter, t.token, e, 10)) : t.type === N.SearchPopoutModes.FILTER_ALL ? n = function(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
      s = [];
    return null != n && "" !== n && ((function(e) {
      let t = I.default.getSearchType(e),
        n = [N.SearchTokenTypes.FILTER_HAS];
      return !p.default.hidePersonalInformation && (n.push(N.SearchTokenTypes.FILTER_FROM), n.push(N.SearchTokenTypes.FILTER_MENTIONS)), t === N.SearchTypes.GUILD && n.push(N.SearchTokenTypes.FILTER_IN), n
    })(t).forEach(n => {
      if (null == n) return;
      let a = M(n, e, t, 3);
      null != a && s.push(a)
    }), s.push(function(e, t) {
      let n = (null != e ? e.getFullMatch() : "").trim();
      if (null != n && "" !== n) {
        var s, a, l;
        let e = null === (s = u.default[N.SearchTokenTypes.FILTER_BEFORE]) || void 0 === s ? void 0 : s.getAutocompletions(n, t, 1)[0],
          i = null === (a = u.default[N.SearchTokenTypes.FILTER_ON]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0],
          r = null === (l = u.default[N.SearchTokenTypes.FILTER_AFTER]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0];
        return null == e ? null : {
          group: N.SearchAutocompleteGroups.DATES,
          results: [e, i, r]
        }
      }
    }(e, t))), 5 > (0, _.getTotalResults)(s) && s.push(R(e)), s
  }(t.token, e) : t.type === N.SearchPopoutModes.EMPTY && (n.push(R(t.token)), (0, c.isInMainTabsExperiment)(), n.push(function(e) {
    if (p.default.hidePersonalInformation) return null;
    let t = I.default.getHistory(e);
    return null == t ? null : {
      group: N.SearchAutocompleteGroups.HISTORY,
      results: t.map(e => ({
        text: e
      }))
    }
  }(e))), n
}

function v() {
  (0, _.clearTokenCache)()
}

function L(e) {
  let t = S[e];
  if (null == t) return;
  let {
    query: n,
    mode: s,
    tokens: a,
    cursorScope: l,
    autocompletes: i
  } = t;
  S[e] = A({
    searchId: e,
    query: n,
    mode: s,
    tokens: a,
    cursorScope: l,
    autocompletes: i.map(e => (null == e ? void 0 : e.group) === N.SearchAutocompleteGroups.HISTORY ? null : e)
  })
}

function x() {
  let e = I.default.getCurrentSearchId();
  if (null == e || null == S[e]) return;
  let {
    query: t,
    mode: n,
    tokens: s,
    cursorScope: a
  } = S[e];
  S[e] = A({
    searchId: e,
    query: t,
    mode: n,
    tokens: s,
    cursorScope: a,
    autocompletes: O(e, n)
  })
}
class D extends(s = r.default.Store) {
  initialize() {
    this.waitFor(m.default, p.default)
  }
  getState(e) {
    var t;
    return null !== (t = S[e]) && void 0 !== t ? t : A({
      searchId: e
    })
  }
}
i = "SearchAutocompleteStore", (l = "displayName") in(a = D) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i;
let P = new D(o.default, {
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
    var t;
    let n, {
        searchId: s,
        tokens: a,
        cursorScope: l
      } = e,
      i = (0, _.getQueryFromTokens)(a),
      r = (0, _.getAutocompleteMode)(l, a),
      o = null !== (t = S[s]) && void 0 !== t ? t : {},
      u = C[s],
      d = !0;
    if (i === o.query && (null == o.mode || o.mode.filter === r.filter)) n = o.autocompletes, d = !1;
    else if (r.type === N.SearchPopoutModes.EMPTY || r.type === N.SearchPopoutModes.FILTER && r.filter !== N.SearchTokenTypes.FILTER_FROM && r.filter !== N.SearchTokenTypes.FILTER_MENTIONS) null != u && (u.context.clearQuery(), u.results = []), n = O(s, r);
    else if (null != u) {
      let {
        token: e
      } = r;
      null != e && e.getFullMatch().trim().length > 0 ? (E.default.requestMembers(s, e.getFullMatch().trim(), 10), u.context.setQuery(e.getFullMatch().trim(), {
        guild: s
      }), n = o.autocompletes, d = !1) : (u.context.clearQuery(), n = O(s, r))
    }
    return S[s] = A({
      searchId: s,
      query: i,
      mode: r,
      tokens: a,
      cursorScope: l,
      autocompletes: n
    }), d
  },
  SEARCH_EDITOR_STATE_CLEAR: function(e) {
    let {
      searchId: t
    } = e, n = C[t];
    null != n && (n.context.destroy(), n.results = [], delete C[t]), delete S[t]
  },
  CHANNEL_CREATE: v,
  CHANNEL_DELETE: v,
  STREAMER_MODE_UPDATE: x,
  SEARCH_MODAL_OPEN: x,
  SEARCH_SCREEN_OPEN: x,
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null != t ? L(t) : Object.keys(S).forEach(L)
  },
  LOGOUT: function() {
    Object.keys(S).forEach(L)
  }
});
t.default = P