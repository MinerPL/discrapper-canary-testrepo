"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("808653"), n("424973"), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("880317"),
  i = n("77078"),
  r = n("404118"),
  o = n("819689"),
  u = n("378438"),
  d = n("419135"),
  c = n("206230"),
  f = n("679653"),
  h = n("619335"),
  p = n("70845"),
  m = n("95045"),
  E = n("393414"),
  C = n("144491"),
  S = n("845579"),
  g = n("42203"),
  _ = n("305961"),
  I = n("957255"),
  T = n("27618"),
  v = n("744983"),
  x = n("18494"),
  N = n("697218"),
  A = n("505684"),
  M = n("593195"),
  R = n("420861"),
  j = n("18061"),
  L = n("49111"),
  O = n("782340"),
  y = n("211631");

function P(e) {
  var t;
  let {
    search: n,
    searchId: f,
    renderEmbeds: h,
    scrollTo: p,
    searchResults: m,
    blockCount: C,
    onChangePage: S
  } = e, {
    offset: _,
    totalResults: I,
    isSearching: x,
    showBlockedResults: N
  } = n, A = l.useCallback(e => {
    if (x) return;
    let t = e - 1;
    null == S || S(t), u.changePage(f, t)
  }, [f, x, S]), M = l.useCallback(e => {
    if (e.blocked) r.default.show({
      title: O.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: O.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: e.author.username
      }),
      confirmText: O.default.Messages.OKAY
    });
    else {
      let t = g.default.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      o.default.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: v.default.getAnalyticsId(f)
      }), (0, E.transitionTo)(L.Routes.CHANNEL(n, e.channel_id, e.id))
    }
  }, [f]), j = l.useMemo(() => {
    let e;
    if (null == m) return [];
    let t = 0;
    return m.reduce((n, a) => {
      let l = a.find(e => e.isSearchHit);
      if (!N && null != l && T.default.isBlocked(l.author.id)) return n;
      let s = g.default.getChannel(a[0].channel_id);
      return null == s ? n : ((null == e || e !== s.id) && n.push({
        channel: s,
        results: [],
        startIndex: t
      }), t += 1, n[n.length - 1].results.push(a), e = null == s ? void 0 : s.id, n)
    }, [])
  }, [m, N]), P = l.useRef([]), D = j.reduce((e, t) => e + 1 + t.results.length, 0), U = l.useCallback((e, t) => {
    if (!c.default.keyboardModeEnabled) return;
    let n = P.current,
      a = null != t ? n[t] : void 0;
    if (null == a || null == a.hitRef.current) return;
    let l = a.hitRef.current.getClientRects()[0],
      s = l.top - .5 * l.height;
    p(s, !1, () => {
      var t;
      null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    })
  }, [p]), w = l.useCallback(e => {
    let t = P.current[e];
    null == t || t.jumpTo()
  }, []), F = (0, s.useListNavigator)({
    navId: "search-results",
    itemCount: D,
    focusedIndex: 0,
    setFocus: U,
    onSelect: w
  }), k = v.default.getQuery(f), V = v.default.getSearchType(f) === L.SearchTypes.FAVORITES, B = (0, d.createASTHighlighter)(null !== (t = null == k ? void 0 : k.content) && void 0 !== t ? t : ""), H = j.map(e => {
    let {
      channel: t,
      results: n,
      startIndex: l
    } = e;
    return (0, a.jsx)(b, {
      channel: t,
      results: n,
      highlighter: B,
      startIndex: l,
      resultRefs: P,
      totalResults: I,
      scrollTo: p,
      searchId: f,
      renderEmbeds: h,
      offset: _,
      jumpToMessage: M,
      listNavigator: F,
      favoriteSearch: V
    }, "".concat(t.id, "-").concat(l))
  });
  H.push();
  let G = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    null === (e = G.current) || void 0 === e || e.focus()
  }, [m]);
  let W = (0, i.useFocusJumpSection)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: G,
      ...F.getContainerProps(),
      ...W,
      "aria-busy": x,
      children: H
    }), C > 0 ? (0, a.jsxs)(i.Clickable, {
      tag: "div",
      className: y.resultsBlocked,
      onClick: () => u.setShowBlockedResults(f, !N),
      children: [(0, a.jsx)("div", {
        className: y.resultsBlockedImage
      }), (0, a.jsx)("div", {
        className: y.resultsBlockedText,
        children: N ? O.default.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
          count: C
        }) : O.default.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
          count: C
        })
      })]
    }) : null, !x && !V && (0, a.jsx)(R.default, {
      changePage: A,
      offset: _,
      totalResults: I,
      pageLength: L.SEARCH_PAGE_SIZE
    })]
  })
}

function b(e) {
  var t, n;
  let {
    channel: s,
    results: r,
    highlighter: o,
    startIndex: u,
    resultRefs: d,
    totalResults: c,
    scrollTo: E,
    searchId: v,
    renderEmbeds: R,
    offset: O,
    jumpToMessage: P,
    listNavigator: b,
    favoriteSearch: D
  } = e, U = S.RenderSpoilers.useSetting(), w = l.useCallback(e => {
    if (e === x.default.getChannelId()) return;
    let t = g.default.getChannel(e);
    if (null != t) I.default.can(L.Permissions.VIEW_CHANNEL, t) && (0, C.transitionToChannel)(t.id)
  }, []), F = null != s ? (0, f.computeChannelName)(s, N.default, T.default, !1) : "???", k = D && null != s.guild_id ? null === (t = _.default.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name : null, V = (null == s ? void 0 : s.parent_id) != null ? g.default.getChannel(s.parent_id) : null, B = null != V ? V.name : null, H = null !== (n = (0, h.default)(s)) && void 0 !== n ? n : M.default, G = null != V ? (0, h.default)(V) : null, W = I.default.can(L.Permissions.MANAGE_MESSAGES, s), {
    content: Y
  } = (0, m.default)({
    content: F,
    embeds: []
  }, {
    postProcessor: o
  }), z = l.useRef(null), [K, Z] = l.useState(!1);
  l.useEffect(() => {
    let e = z.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && Z(e.offsetWidth < e.scrollWidth)
  }, []);
  let X = [F, B, k].filter(e => null != e).join(", ");
  return (0, a.jsx)(A.ObscuredDisplayContext.Provider, {
    value: (0, p.default)(U, W),
    children: (0, a.jsxs)("ul", {
      role: "group",
      className: y.searchResultGroup,
      "aria-label": X,
      children: [(0, a.jsx)(i.Clickable, {
        onClick: () => w(s.id),
        children: (0, a.jsxs)("div", {
          className: y.channelNameContainer,
          children: [(0, a.jsx)(H, {
            className: y.channelNameIcon,
            width: 16,
            height: 16
          }), (0, a.jsx)(i.Tooltip, {
            text: F,
            shouldShow: K,
            children: e => (0, a.jsxs)("span", {
              ...e,
              ref: z,
              className: y.channelNameText,
              children: [D && null !== k && "".concat(k, " : "), Y]
            })
          }), null != V && null != B && null != G ? (0, a.jsxs)(i.Clickable, {
            className: y.parentChannelNameClickable,
            onClick: e => {
              e.stopPropagation(), w(V.id)
            },
            children: [(0, a.jsx)(G, {
              className: y.parentChannelNameIcon,
              width: 12,
              height: 12
            }), (0, a.jsx)(i.Text, {
              className: y.parentChannelNameText,
              variant: "text-xs/medium",
              color: "header-secondary",
              children: B
            })]
          }) : null]
        })
      }), r.map((e, t) => {
        let n = u + t;
        return (0, a.jsx)(j.default, {
          ref: e => d.current[n] = e,
          totalResults: c,
          scrollTo: E,
          searchId: v,
          renderEmbeds: R,
          searchOffset: O,
          pageResultsLength: r.length,
          result: e,
          index: n,
          onJump: P,
          listItemProps: b.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}