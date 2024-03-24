"use strict";
n.r(t), n.d(t, {
  HAS_NO_COUNT: function() {
    return h
  },
  SearchKeyType: function() {
    return a
  },
  getSearchQueryForUser: function() {
    return C
  },
  useServerMessageHistoryForUser: function() {
    return _
  },
  useServerActivityCountsForUser: function() {
    return T
  }
}), n("222007");
var a, l, s = n("884691"),
  i = n("308503"),
  r = n("16470"),
  u = n("913144"),
  o = n("84339"),
  d = n("390933"),
  c = n("25932"),
  f = n("49111");
let h = -1;
(l = a || (a = {})).MESSAGES = "messages", l.LINKS = "links", l.MEDIA = "media", l.ALL_COUNTS = "all_counts";

function m(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    s = JSON.stringify(a);
  return l ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(s)
}
let p = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: h,
    lastMessage: null
  },
  E = (0, i.default)(() => new Map),
  g = (e, t) => {
    E.setState(n => {
      let a = n.get(e);
      return null == a ? n.set(e, {
        ...p,
        ...t
      }) : n.set(e, {
        ...a,
        ...t
      }), n
    })
  },
  S = e => E(t => t.get(e), r.default);

function C(e, t, n) {
  let a = null != n ? n : {};
  switch (t) {
    case "links":
      return {
        author_id: e, has: ["link"], ...a
      };
    case "media":
      return {
        author_id: e, attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg"], ...a
      };
    case "all_counts":
      return {
        author_id: [e], limit: 1, cursor: null, ...a
      };
    default:
      return {
        author_id: e, ...a
      }
  }
}

function _(e, t, n) {
  return function(e, t, n, a) {
    let {
      addtionalQuery: l,
      shouldDispatch: i = !1
    } = a, r = s.useMemo(() => m(e, t, n, l), [e, t, n, l]), E = S(r), _ = (0, o.default)(r), [I, T] = s.useState({});
    return s.useEffect(() => {
      if (_ !== r) {
        let a = C(e, n, l),
          s = new d.default(t, f.SearchTypes.GUILD, a);
        g(r, {
          searchFetcher: s,
          messageCount: h,
          lastMessage: null
        }), setTimeout(() => {
          s.fetch(e => {
            let n = e.body,
              a = n.messages[0];
            if (g(r, {
                searchFetcher: s,
                result: n,
                messageCount: n.total_results,
                lastMessage: a
              }), T({}), i) {
              var l, o;
              u.default.dispatch({
                type: "MOD_VIEW_SEARCH_FINISH",
                searchId: t,
                guildId: t,
                analyticsId: n.analytics_id,
                totalResults: n.total_results,
                channels: n.channels,
                messages: n.messages,
                threads: null !== (l = n.threads) && void 0 !== l ? l : [],
                members: (null !== (o = n.members) && void 0 !== o ? o : []).map(e => (0, c.default)(e)),
                hasError: !1,
                doingHistoricalIndex: n.doing_deep_historical_index,
                documentsIndexed: n.documents_indexed
              })
            }
          }, e => {}, e => {
            g(r, {
              messageCount: 0,
              lastMessage: null
            }), T({})
          })
        })
      }
      return () => {}
    }, [e, t, E, r, n, l]), null != E ? E : p
  }(e, t, "messages", n)
}

function I(e, t, n, a) {
  let l = s.useMemo(() => m(e, t, n, a, !0), [e, t, n, a]),
    i = S(l),
    r = (0, o.default)(l);
  return {
    key: l,
    previousKey: r,
    state: i
  }
}

function T(e, t, n) {
  var a, l, i;
  let {
    key: r,
    state: u
  } = I(e, t, "messages", n), {
    key: o,
    state: c
  } = I(e, t, "links", n), {
    key: m,
    state: p
  } = I(e, t, "media", n), E = s.useMemo(() => C(e, "all_counts", n), [e, n]), S = s.useMemo(() => ({
    tabs: {
      messages: C(e, "messages", E),
      links: C(e, "links", E),
      media: C(e, "media", E)
    },
    track_exact_total_hits: !0
  }), [e, E]), _ = s.useCallback(e => {
    let t = e.messages,
      n = e.links,
      a = e.media;
    g(r, t), g(o, n), g(m, a)
  }, [o, m, r]), T = s.useCallback(e => {
    _({
      messages: e,
      links: e,
      media: e
    })
  }, [_]);
  s.useEffect(() => {
    let e = new d.SearchTabFetcherImpl(t, f.SearchTypes.GUILD, E, S);
    T({
      searchTabFetcher: e,
      messageCount: h,
      lastMessage: null
    });
    let n = setTimeout(async () => {
      let t = null;
      try {
        let n = await e.makeRequest();
        t = null == n ? void 0 : n.body
      } catch (e) {
        t = null
      }
      if (null == t) T({
        messageCount: 0,
        lastMessage: null
      });
      else {
        var n, a, l, s, i, r;
        let e = t.tabs.messages,
          u = t.tabs.links,
          o = t.tabs.media;
        _({
          messages: {
            messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
            lastMessage: null !== (a = null == e ? void 0 : e.messages[0]) && void 0 !== a ? a : null
          },
          links: {
            messageCount: null !== (l = null == u ? void 0 : u.total_results) && void 0 !== l ? l : 0,
            lastMessage: null !== (s = null == u ? void 0 : u.messages[0]) && void 0 !== s ? s : null
          },
          media: {
            messageCount: null !== (i = null == o ? void 0 : o.total_results) && void 0 !== i ? i : 0,
            lastMessage: null !== (r = null == o ? void 0 : o.messages[0]) && void 0 !== r ? r : null
          }
        })
      }
      x({})
    });
    return () => {
      e.cancel(), clearTimeout(n)
    }
  }, [e, t, E, S, T, _]);
  let [v, x] = s.useState({});
  return {
    messagesCount: null !== (a = null == u ? void 0 : u.messageCount) && void 0 !== a ? a : h,
    linksCount: null !== (l = null == c ? void 0 : c.messageCount) && void 0 !== l ? l : h,
    mediaCount: null !== (i = null == p ? void 0 : p.messageCount) && void 0 !== i ? i : h
  }
}