"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n("65597"),
  o = n("77078"),
  d = n("419135"),
  c = n("574933"),
  f = n("692038"),
  h = n("95045"),
  m = n("549206"),
  p = n("982108"),
  E = n("26989"),
  g = n("697218"),
  S = n("994906"),
  C = n("180968"),
  _ = n("473073"),
  I = n("763225"),
  T = n("789150"),
  v = n("865331"),
  x = n("714605");

function N(e) {
  var t, n;
  let {
    userId: s,
    guildId: N,
    location: A,
    className: M,
    onNavigate: R
  } = e, j = l.useRef(null), L = (0, u.useStateFromStores)([p.default], () => p.default.getGuildSidebarState(N), [N]), y = l.useRef(0), [O, P] = l.useState(null !== (t = null == L ? void 0 : L.details.additionalSearchQuery) && void 0 !== t ? t : {}), D = (0, C.useServerMessageHistoryForUser)(s, N, {
    addtionalQuery: O,
    shouldDispatch: !0
  }), b = (0, u.useStateFromStores)([g.default], () => g.default.getUser(s), [s]), U = (0, u.useStateFromStores)([E.default], () => E.default.getMember(N, s), [N, s]), w = (0, I.useProfileThemedPanelBackground)(s, N);
  l.useLayoutEffect(() => {
    let e = null == L ? void 0 : L.details.scrollOffset;
    if (null != e) {
      var t;
      null === (t = j.current) || void 0 === t || t.scrollTo({
        to: e,
        animate: !1
      })
    }
  }, []);
  let F = l.useCallback(e => {
      if (null == L) return;
      let t = e.target.scrollTop;
      y.current = t, (0, S.openGuildMemberModViewSidebar)(N, s, L.baseChannelId, {
        modViewPanel: T.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: O,
        scrollOffset: y.current
      })
    }, [N, s, L, O]),
    V = (0, r.throttle)(F, 300),
    k = l.useCallback(e => {
      if (null == L) return;
      let t = {
        ...O,
        offset: 25 * e
      };
      P(t), (0, S.openGuildMemberModViewSidebar)(N, s, L.baseChannelId, {
        modViewPanel: T.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: t,
        scrollOffset: y.current
      })
    }, [N, s, L, O]),
    H = null !== (n = null == O ? void 0 : O.offset) && void 0 !== n ? n : 0,
    B = (0, u.useStateFromStores)([c.default], () => {
      if (null == D.result) return [];
      let e = D.result.messages,
        t = (0, d.createASTHighlighter)("");
      return e.map(e => e.map(e => {
        let n = c.default.getMessage(e.id, e.channel_id),
          a = (0, f.createMessageRecord)(e);
        return null != n && (a = a.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), a.isSearchHit ? a.set("customRenderedContent", (0, h.default)(a, {
          postProcessor: t,
          allowHeading: !0,
          allowList: !0
        })) : a
      }))
    }, [D.result]),
    G = l.useMemo(() => {
      var e, t, n, a;
      return null == D.result ? {
        documentsIndexed: 0,
        isSearching: !0,
        isIndexing: !1,
        isHistoricalIndexing: !1,
        offset: H,
        totalResults: 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      } : {
        documentsIndexed: null !== (e = D.result.documents_indexed) && void 0 !== e ? e : 0,
        isSearching: !1,
        isIndexing: null !== (t = D.result.doing_deep_historical_index) && void 0 !== t && t,
        isHistoricalIndexing: null !== (n = D.result.doing_deep_historical_index) && void 0 !== n && n,
        offset: H,
        totalResults: null !== (a = D.result.total_results) && void 0 !== a ? a : 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      }
    }, [D.result, H]);
  return null == b || null == U || null == G ? null : (0, a.jsxs)("div", {
    className: i(v.container, M),
    style: {
      backgroundColor: w
    },
    children: [(0, a.jsx)(_.default, {
      guildId: N,
      userId: s,
      onNavigate: R
    }), (0, a.jsx)(o.AdvancedScroller, {
      className: i(x.innerContainer),
      ref: j,
      onScroll: V,
      children: (0, a.jsx)(m.default, {
        searchResults: B,
        search: G,
        searchId: s,
        renderEmbeds: !0,
        blockCount: 0,
        scrollTo: () => {},
        onChangePage: k
      })
    })]
  })
}