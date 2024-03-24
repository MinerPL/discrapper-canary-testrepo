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
  u = n("819689"),
  o = n("378438"),
  d = n("419135"),
  c = n("206230"),
  f = n("679653"),
  h = n("619335"),
  m = n("70845"),
  p = n("95045"),
  E = n("393414"),
  g = n("144491"),
  S = n("845579"),
  C = n("42203"),
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
  y = n("782340"),
  O = n("680221");

function P(e) {
  var t;
  let {
    search: n,
    searchId: f,
    renderEmbeds: h,
    scrollTo: m,
    searchResults: p,
    blockCount: g,
    onChangePage: S
  } = e, {
    offset: _,
    totalResults: I,
    isSearching: x,
    showBlockedResults: N
  } = n, A = l.useCallback(e => {
    if (x) return;
    let t = e - 1;
    null == S || S(t), o.changePage(f, t)
  }, [f, x, S]), M = l.useCallback(e => {
    if (e.blocked) r.default.show({
      title: y.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: y.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: e.author.username
      }),
      confirmText: y.default.Messages.OKAY
    });
    else {
      let t = C.default.getChannel(e.channel_id),
        n = null != t ? t.getGuildId() : null;
      u.default.trackJump(e.channel_id, e.id, "Search Results", {
        search_id: v.default.getAnalyticsId(f)
      }), (0, E.transitionTo)(L.Routes.CHANNEL(n, e.channel_id, e.id))
    }
  }, [f]), j = l.useMemo(() => {
    let e;
    if (null == p) return [];
    let t = 0;
    return p.reduce((n, a) => {
      let l = a.find(e => e.isSearchHit);
      if (!N && null != l && T.default.isBlocked(l.author.id)) return n;
      let s = C.default.getChannel(a[0].channel_id);
      return null == s ? n : ((null == e || e !== s.id) && n.push({
        channel: s,
        results: [],
        startIndex: t
      }), t += 1, n[n.length - 1].results.push(a), e = null == s ? void 0 : s.id, n)
    }, [])
  }, [p, N]), P = l.useRef([]), b = j.reduce((e, t) => e + 1 + t.results.length, 0), U = l.useCallback((e, t) => {
    if (!c.default.keyboardModeEnabled) return;
    let n = P.current,
      a = null != t ? n[t] : void 0;
    if (null == a || null == a.hitRef.current) return;
    let l = a.hitRef.current.getClientRects()[0],
      s = l.top - .5 * l.height;
    m(s, !1, () => {
      var t;
      null === (t = document.getElementById(e)) || void 0 === t || t.focus()
    })
  }, [m]), w = l.useCallback(e => {
    let t = P.current[e];
    null == t || t.jumpTo()
  }, []), F = (0, s.useListNavigator)({
    navId: "search-results",
    itemCount: b,
    focusedIndex: 0,
    setFocus: U,
    onSelect: w
  }), V = v.default.getQuery(f), k = v.default.getSearchType(f) === L.SearchTypes.FAVORITES, H = (0, d.createASTHighlighter)(null !== (t = null == V ? void 0 : V.content) && void 0 !== t ? t : ""), B = j.map(e => {
    let {
      channel: t,
      results: n,
      startIndex: l
    } = e;
    return (0, a.jsx)(D, {
      channel: t,
      results: n,
      highlighter: H,
      startIndex: l,
      resultRefs: P,
      totalResults: I,
      scrollTo: m,
      searchId: f,
      renderEmbeds: h,
      offset: _,
      jumpToMessage: M,
      listNavigator: F,
      favoriteSearch: k
    }, "".concat(t.id, "-").concat(l))
  });
  B.push();
  let G = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    null === (e = G.current) || void 0 === e || e.focus()
  }, [p]);
  let W = (0, i.useFocusJumpSection)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: G,
      ...F.getContainerProps(),
      ...W,
      "aria-busy": x,
      children: B
    }), g > 0 ? (0, a.jsxs)(i.Clickable, {
      tag: "div",
      className: O.resultsBlocked,
      onClick: () => o.setShowBlockedResults(f, !N),
      children: [(0, a.jsx)("div", {
        className: O.resultsBlockedImage
      }), (0, a.jsx)("div", {
        className: O.resultsBlockedText,
        children: N ? y.default.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
          count: g
        }) : y.default.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
          count: g
        })
      })]
    }) : null, !x && !k && (0, a.jsx)(R.default, {
      changePage: A,
      offset: _,
      totalResults: I,
      pageLength: L.SEARCH_PAGE_SIZE
    })]
  })
}

function D(e) {
  var t, n;
  let {
    channel: s,
    results: r,
    highlighter: u,
    startIndex: o,
    resultRefs: d,
    totalResults: c,
    scrollTo: E,
    searchId: v,
    renderEmbeds: R,
    offset: y,
    jumpToMessage: P,
    listNavigator: D,
    favoriteSearch: b
  } = e, U = S.RenderSpoilers.useSetting(), w = l.useCallback(e => {
    if (e === x.default.getChannelId()) return;
    let t = C.default.getChannel(e);
    if (null != t) I.default.can(L.Permissions.VIEW_CHANNEL, t) && (0, g.transitionToChannel)(t.id)
  }, []), F = null != s ? (0, f.computeChannelName)(s, N.default, T.default, !1) : "???", V = b && null != s.guild_id ? null === (t = _.default.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name : null, k = (null == s ? void 0 : s.parent_id) != null ? C.default.getChannel(s.parent_id) : null, H = null != k ? k.name : null, B = null !== (n = (0, h.default)(s)) && void 0 !== n ? n : M.default, G = null != k ? (0, h.default)(k) : null, W = I.default.can(L.Permissions.MANAGE_MESSAGES, s), {
    content: Y
  } = (0, p.default)({
    content: F,
    embeds: []
  }, {
    postProcessor: u
  }), z = l.useRef(null), [K, Z] = l.useState(!1);
  l.useEffect(() => {
    let e = z.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && Z(e.offsetWidth < e.scrollWidth)
  }, []);
  let X = [F, H, V].filter(e => null != e).join(", ");
  return (0, a.jsx)(A.ObscuredDisplayContext.Provider, {
    value: (0, m.default)(U, W),
    children: (0, a.jsxs)("ul", {
      role: "group",
      className: O.searchResultGroup,
      "aria-label": X,
      children: [(0, a.jsx)(i.Clickable, {
        onClick: () => w(s.id),
        children: (0, a.jsxs)("div", {
          className: O.channelNameContainer,
          children: [(0, a.jsx)(B, {
            className: O.channelNameIcon,
            width: 16,
            height: 16
          }), (0, a.jsx)(i.Tooltip, {
            text: F,
            shouldShow: K,
            children: e => (0, a.jsxs)("span", {
              ...e,
              ref: z,
              className: O.channelNameText,
              children: [b && null !== V && "".concat(V, " : "), Y]
            })
          }), null != k && null != H && null != G ? (0, a.jsxs)(i.Clickable, {
            className: O.parentChannelNameClickable,
            onClick: e => {
              e.stopPropagation(), w(k.id)
            },
            children: [(0, a.jsx)(G, {
              className: O.parentChannelNameIcon,
              width: 12,
              height: 12
            }), (0, a.jsx)(i.Text, {
              className: O.parentChannelNameText,
              variant: "text-xs/medium",
              color: "header-secondary",
              children: H
            })]
          }) : null]
        })
      }), r.map((e, t) => {
        let n = o + t;
        return (0, a.jsx)(j.default, {
          ref: e => d.current[n] = e,
          totalResults: c,
          scrollTo: E,
          searchId: v,
          renderEmbeds: R,
          searchOffset: y,
          pageResultsLength: r.length,
          result: e,
          index: n,
          onJump: P,
          listItemProps: D.getItemProps({
            index: n
          })
        }, "search-result-".concat(n))
      })]
    })
  })
}