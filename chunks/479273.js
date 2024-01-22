"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ex
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("474820"),
  o = s.n(i),
  u = s("16470"),
  d = s("974667"),
  c = s("942367"),
  m = s("482402"),
  h = s("446674"),
  f = s("151426"),
  g = s("77078"),
  x = s("264732"),
  C = s("731898"),
  T = s("206230"),
  _ = s("679653"),
  S = s("384997"),
  p = s("406043"),
  E = s("87635"),
  N = s("396856"),
  M = s("549077"),
  A = s("144491"),
  v = s("689275"),
  I = s("134947"),
  j = s("300322"),
  R = s("967241"),
  O = s("982108"),
  F = s("42203"),
  L = s("474643"),
  b = s("88093"),
  P = s("585722"),
  y = s("471671"),
  D = s("837899"),
  w = s("425190"),
  U = s("891152"),
  k = s("423487"),
  H = s("378765"),
  B = s("526812"),
  G = s("404607"),
  V = s("670902"),
  z = s("339792"),
  W = s("680986"),
  K = s("146290"),
  Y = s("250850"),
  X = s("867965"),
  Z = s("688169"),
  q = s("131600"),
  Q = s("912066"),
  J = s("657927"),
  $ = s("152637"),
  ee = s("578198"),
  et = s("530474"),
  es = s("592633"),
  ea = s("968462"),
  en = s("823968"),
  el = s("90625"),
  er = s("363622"),
  ei = s("193695"),
  eo = s("552683"),
  eu = s("589455"),
  ed = s("485055"),
  ec = s("219840"),
  em = s("49111"),
  eh = s("648564"),
  ef = s("782340"),
  eg = s("761953");

function ex(e) {
  let {
    channel: t,
    guild: s,
    sidebarState: n
  } = e;
  return (0, a.jsx)(ee.ForumPostComposerStoreProvider, {
    createStore: () => (0, ee.createForumPostComposerStore)(t),
    children: (0, a.jsx)(eM, {
      channel: t,
      guild: s,
      sidebarState: n
    })
  }, t.id)
}
let eC = new er.GridLayout({
  minWidth: 320,
  maxWidth: 450,
  gap: 16
});

function eT(e) {
  return "forum-grid-header-section-".concat(e)
}
let e_ = (e, t, s) => 0 === e ? 0 : (0, er.getGridPostHeight)(s);

function eS(e) {
  let {
    itemRole: t,
    coords: s,
    section: n
  } = e;
  return (0, a.jsx)("div", {
    className: r(eg.card, eg.archivedDividerRow, eg.columnsSpan),
    style: s,
    "data-item-role": t,
    children: (0, a.jsx)("div", {
      className: eg.emptyMainCard,
      children: (0, a.jsx)(g.Heading, {
        variant: "eyebrow",
        className: eg.archivedDivider,
        id: eT(n),
        children: ef.default.Messages.FORUM_SECTION_ARCHIVED
      })
    })
  }, "section-divider")
}

function ep(e) {
  let {
    section: t,
    coords: s,
    key: n,
    isShowingSearchResult: l,
    hasActiveThreads: r
  } = e;
  return () => 2 === t && !l && r ? (0, a.jsx)(eS, {
    section: t,
    coords: null == s ? void 0 : {
      ...s,
      position: "absolute"
    },
    itemRole: "section"
  }, n) : null
}

function eE(e, t) {
  return "card-".concat(e, "-").concat(t)
}

function eN(e) {
  if ("string" == typeof e) {
    let t = e.match(/card-{\d+}-({\d+})$/);
    return null == t ? null : t[1]
  }
  return null
}

function eM(e) {
  let {
    channel: t,
    sidebarState: s
  } = e, {
    editorHeight: l,
    editorAdditionRowHeight: i,
    listViewCardHeights: o,
    formOpen: c
  } = (0, ee.useForumPostComposerStore)(e => {
    let {
      editorHeight: t,
      editorAdditionRowHeight: s,
      listViewCardHeights: a,
      formOpen: n,
      cardHeightVersion: l
    } = e;
    return {
      editorHeight: t,
      editorAdditionRowHeight: s,
      listViewCardHeights: a,
      formOpen: n,
      cardHeightVersion: l
    }
  }, u.default), {
    activeThreadIds: f,
    archivedThreadIds: C,
    searchResults: _,
    canLoadMore: S,
    loadMore: p,
    activeThreadsLoading: E,
    archivedThreadsLoading: j,
    loading: b,
    isSearchLoading: P,
    layoutType: y
  } = function(e) {
    let {
      sortOrder: t,
      tagFilter: s,
      layoutType: a
    } = (0, z.useForumChannelStore)(e.id), n = (0, W.useForumActiveThreadIds)({
      channel: e,
      sortOrder: t,
      tagFilter: s,
      shouldAutomaticallyAck: !0
    }), l = (0, h.useStateFromStores)([v.default], () => !v.default.hasLoaded(e.guild_id)), {
      threadIds: r,
      canLoadMore: i,
      loadMore: o,
      loading: u
    } = (0, I.useArchivedThreads)(e, t, s), {
      searchResults: d,
      isSearchLoading: c
    } = (0, W.useForumSearchState)({
      channelId: e.id
    });
    return (0, W.useLoadForumUnreadCounts)(e, t, s), {
      activeThreadIds: n,
      archivedThreadIds: r,
      searchResults: d,
      canLoadMore: i,
      loadMore: o,
      loading: l || u || c,
      archivedThreadsLoading: u,
      activeThreadsLoading: l,
      isSearchLoading: c,
      layoutType: a
    }
  }(t), D = f.length > 0, w = D || C.length > 0, U = (0, N.default)(t), {
    tagFilter: k
  } = (0, z.useForumChannelStore)(t.id);
  (0, W.useAutomaticForumSearch)(t, k, c);
  let H = (0, W.useCanSearchForumPosts)(t),
    V = (0, W.useCanViewArchivedPosts)(t),
    Q = n.useRef(null),
    {
      observePostVisibilityAnalytics: J
    } = function(e) {
      let {
        guildId: t,
        channelId: s,
        scrollerRef: a
      } = e;
      K.default.useForumChannelSeenManager({
        guildId: t,
        channelId: s
      });
      let l = n.useRef(null),
        r = n.useCallback((e, t) => {
          for (let s of t) {
            let t = s.target.dataset.itemId;
            if (null == t) return;
            let a = Date.now();
            s.intersectionRatio >= .5 ? (0, Y.markForumPostItemAsSeen)(e, t, a) : (0, Y.markForumPostItemAsUnseen)(e, t, a)
          }
        }, []);
      n.useEffect(() => {
        var e;
        let t = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerNode();
        if (null != t) return l.current = new IntersectionObserver(e => r(s, e), {
          root: t,
          rootMargin: "0px 100000px 0px 100000px",
          threshold: .5
        }), () => {
          var e;
          null === (e = l.current) || void 0 === e || e.disconnect(), l.current = null
        }
      }, [s, r, a]);
      let i = n.useCallback((e, t) => {
        var a;
        if (null == e) {
          (0, Y.markForumPostItemAsUnseen)(s, t, Date.now());
          return
        }
        null === (a = l.current) || void 0 === a || a.observe(e)
      }, [s]);
      return {
        observePostVisibilityAnalytics: i
      }
    }({
      scrollerRef: Q,
      channelId: t.id,
      guildId: t.guild_id
    }),
    et = y === m.ForumLayout.GRID,
    en = null != _,
    el = n.useRef(null),
    {
      containerRef: eo,
      containerWidth: ex
    } = (0, eu.default)();
  n.useEffect(() => () => {
    null != t.id && G.default.clearForumSearch(t.id)
  }, [t.id]);
  let {
    columns: eS
  } = n.useMemo(() => et ? eC.getRenderOptions(ex) : er.ForumListLayoutRenderOptions, [et, ex]), eM = n.useMemo(() => b ? Math.round((window.innerHeight - 200) / 118) : 0, [b]), ej = n.useMemo(() => {
    let e = window.innerHeight,
      t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eS;
    return E ? t : 0
  }, [ex, eS, E]), eO = n.useMemo(() => {
    let e = window.innerHeight,
      t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eS;
    return j ? t : 0
  }, [ex, eS, j]), eF = n.useMemo(() => {
    let e = window.innerHeight,
      t = Math.ceil(e / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eS;
    return P && en ? t : 0
  }, [ex, eS, P, en]), eL = n.useMemo(() => {
    if (et) {
      if (!H && en) return [1, 0];
      if (!V) return [1, f.length + ej, 0];
      else if (en) return [1, _.length + eF, 0];
      else return [1, f.length + ej, C.length + eO]
    }
    if (!H && en) return [1, 1];
    if (!V) return [1, f.length, 1];
    else if (en) return [1, _.length, 0, eM];
    else return [1, f.length, C.length, eM]
  }, [et, en, f.length, C.length, H, V, eM, _, ej, eO, eF]), eb = n.useMemo(() => {
    if (!H && en) return [
      [],
      []
    ];
    if (!V) return [
      [], f, []
    ];
    if (en) return [
      [], _, [],
      []
    ];
    else return [
      [], f, C, []
    ]
  }, [en, H, V, _, f, C]), eP = n.useCallback((e, s) => {
    (0, X.trackForumPostClicked)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: e.id,
      location: {
        page: em.AnalyticsPages.GUILD_CHANNEL,
        section: em.AnalyticsSections.FORUM_CHANNEL_POST
      }
    }), s ? (0, A.transitionToThread)(e, eh.OpenThreadAnalyticsLocations.BROWSER) : (el.current = e.id, (0, R.openThreadSidebarForViewing)(e))
  }, [t.guild_id, t.id, el]), [ey, eD] = n.useState(l + i - 24), ew = n.useCallback((e, s, n) => 0 === e ? (0, a.jsx)(eR, {
    channel: t,
    isEmpty: !D,
    isSearchLoading: P,
    numResults: null == _ ? void 0 : _.length,
    coords: s,
    onHeightChange: eD,
    children: !b && (0, a.jsx)(q.default, {
      channel: t,
      hasAnyThread: w
    }, t.id)
  }, "forum-channel-header") : 2 !== e || V ? 1 === e && en && !H ? (0, a.jsx)(ev, {
    channel: t,
    coords: s
  }, "archive-or-search-result") : n() : (0, a.jsx)(eA, {
    channel: t,
    coords: s
  }, "archived-missing-reading-history-perm"), [en, V, _, H, t, D, P, b, w]), eU = (0, h.useStateFromStores)([B.default], () => B.default.hasHidden(t.id));
  n.useEffect(() => {
    var e, t;
    let s = et ? eW : Q,
      a = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
    null != a && !eU && a.scrollTop > l && (null === (t = s.current) || void 0 === t || t.scrollTo({
      to: 0
    }))
  }, [eU]);
  let ek = (0, Z.useForumActivityExperiment)(t.guild_id),
    {
      updateListScrollerRef: eH,
      renderListSection: eB,
      renderListItem: eG,
      getListSectionHeight: eV,
      getListItemHeight: ez
    } = function(e) {
      let {
        listRef: t,
        isIncreasedActivityView: s,
        hasActiveThreads: l,
        threadIdsBySection: i,
        listViewCardHeights: o,
        editorHeight: u,
        editorAdditionRowHeight: d,
        renderSectionOrItem: c,
        goToThread: m,
        observePostVisibilityAnalytics: h,
        isShowingSearchResult: f
      } = e, x = n.useCallback(e => s => {
        var a;
        t.current = s, e.current = null !== (a = null == s ? void 0 : s.getScrollerNode()) && void 0 !== a ? a : null
      }, [t]), C = n.useCallback(e => ep({
        section: e.section,
        isShowingSearchResult: f,
        hasActiveThreads: l
      })(), [l, f]), T = n.useCallback(e => c(e.section, void 0, () => {
        if (3 === e.section) return __OVERLAY__ ? null : s ? (0, a.jsx)("div", {
          className: eg.placeholder,
          children: (0, a.jsx)(ea.default, {})
        }) : (0, a.jsx)("div", {
          "data-item-role": "item",
          className: r(eg.loadingCard, eg["loadingCard-".concat(e.row % 3)], {
            [eg.loadingCardWithIncreasedActivity]: s
          })
        }, "loading-".concat(e.row));
        let t = i[e.section][e.row];
        return (0, a.jsx)("li", {
          className: eg.card,
          "data-item-role": "item",
          children: (0, a.jsx)(g.HeadingLevel, {
            children: s ? (0, a.jsx)(ei.default, {
              className: eg.increasedActivityMainCard,
              threadId: t,
              goToThread: m,
              observePostVisibilityAnalytics: h
            }) : (0, a.jsx)($.default, {
              className: eg.mainCard,
              threadId: t,
              goToThread: m,
              observePostVisibilityAnalytics: h
            })
          })
        }, "".concat(e.section, "-").concat(t))
      }), [s, c, i, m, h]), _ = n.useCallback((e, t) => {
        if (0 === e) return u + d;
        let a = i[e][t],
          n = o[a],
          l = (s ? ei.DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT : 96) + 8;
        return null == n ? l : n + 8
      }, [i, o, u, d, s]), S = n.useCallback(e => 2 === e && l ? 40 : 0, [l]);
      return {
        updateListScrollerRef: x,
        renderListSection: C,
        renderListItem: T,
        getListSectionHeight: S,
        getListItemHeight: _
      }
    }({
      listRef: Q,
      hasActiveThreads: D,
      threadIdsBySection: eb,
      listViewCardHeights: o,
      editorHeight: l,
      editorAdditionRowHeight: i,
      renderSectionOrItem: ew,
      goToThread: eP,
      observePostVisibilityAnalytics: J,
      isShowingSearchResult: en,
      isIncreasedActivityView: ek
    }),
    eW = n.useRef(null),
    {
      updateMasonryListScrollerRef: eK,
      getItemKey: eY,
      renderGridSection: eX,
      renderGridItem: eZ,
      getGridSectionHeight: eq,
      getSectionProps: eQ,
      handleGridFocus: eJ
    } = function(e) {
      let {
        masonryListScrollerRef: t,
        threadIdsBySection: s,
        goToThread: l,
        renderSectionOrItem: i,
        hasActiveThreads: o,
        isShowingSearchResult: u,
        canSearchForumPosts: d,
        canViewArchivedPosts: c,
        observePostVisibilityAnalytics: m,
        focusedThreadId: h,
        headerHeight: f
      } = e, g = n.useRef(null), x = n.useCallback(e => {
        t.current = e, g.current = null == e ? void 0 : e.getScrollerNode()
      }, [t]), C = n.useCallback((e, s) => {
        let {
          current: a
        } = t;
        if (null == a) return;
        let n = document.querySelector(e);
        if (null == n) return;
        let l = a.getCoordsMap()[s],
          r = null != l ? l.height + 20 : 200;
        a.scrollIntoViewNode({
          node: n,
          padding: r,
          callback() {
            requestAnimationFrame(() => {
              var t;
              null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                preventScroll: !0
              })
            })
          }
        }), h.current = eN(s)
      }, [t, h]), T = n.useCallback(e => {
        let t = eN(e);
        if (null == t) return;
        let s = F.default.getChannel(t);
        null != s && l(s, !0)
      }, [l]), _ = n.useCallback(function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = s[e];
        if (0 === a.length) return "section-".concat(e, "-").concat(t);
        {
          let a = s[e][t];
          return null == a ? eE(e, t) : eE(e, a)
        }
      }, [s]), S = n.useCallback((e, t, s) => i(e, t, ep({
        section: e,
        coords: t,
        key: s,
        isShowingSearchResult: u,
        hasActiveThreads: o
      })), [i, o, u]), p = n.useCallback(e => 0 === e ? {} : {
        role: "grid",
        "aria-labelledby": "#".concat(eT(e))
      }, []), E = n.useCallback((e, t, n, i, o) => {
        if (0 === e) return null;
        let u = s[e][t];
        return null != u ? (0, a.jsx)(es.default, {
          id: "".concat(i),
          threadId: u,
          className: r(eg.card, eg.mainCard),
          goToThread: l,
          observePostVisibilityAnalytics: m,
          coords: n,
          gridCoords: o.coordinates[i],
          gridSectionBoundaries: o.boundaries
        }, i) : __OVERLAY__ ? null : (0, a.jsx)("div", {
          style: {
            ...n
          },
          "data-item-role": "item",
          className: r(eg.loadingCard, eg["loadingCard-".concat(t % 3)])
        }, i)
      }, [s, l, m]), N = n.useCallback(e => 0 === e ? f - 8 - 24 : 2 === e ? o || !c ? 40 : 0 : 1 === e && u && !d ? 40 : 0, [f, u, d, o, c]);
      return {
        updateMasonryListScrollerRef: x,
        masonryListContainerRef: g,
        focusedThreadId: h,
        handleGridFocus: C,
        handleGridSelect: T,
        getItemKey: _,
        renderGridSection: S,
        renderGridItem: E,
        getSectionProps: p,
        getGridSectionHeight: N
      }
    }({
      masonryListScrollerRef: eW,
      threadIdsBySection: eb,
      goToThread: eP,
      renderSectionOrItem: ew,
      hasActiveThreads: D,
      isShowingSearchResult: en,
      canSearchForumPosts: H,
      canViewArchivedPosts: V,
      observePostVisibilityAnalytics: J,
      focusedThreadId: el,
      headerHeight: ey
    });
  ! function(e) {
    let {
      masonryListScrollerRef: t,
      containerWidth: s,
      isGridLayout: a,
      threadIdsBySection: l,
      focusedThreadId: r,
      parentId: i
    } = e;
    n.useEffect(() => {
      if (a) {
        let e = setTimeout(() => {
          if (null == t.current || null == r.current) return;
          let e = r.current;
          if ("string" != typeof e) return;
          let s = O.default.getSidebarState(i);
          if (null == s) {
            r.current = null;
            return
          }
          let a = l.findIndex(t => t.find(t => t === e)),
            n = t.current.getCoordsMap(),
            o = "__section__".concat(a),
            u = n[o],
            d = n[eE(a, e)];
          null != u && null != d && t.current.scrollIntoViewRect({
            start: u.top + d.top - 100,
            end: u.top + d.top + d.height + 50
          })
        }, 500);
        return () => clearTimeout(e)
      }
    }, [i, s, a, l, r, t])
  }({
    masonryListScrollerRef: eW,
    containerWidth: ex,
    isGridLayout: et,
    threadIdsBySection: eb,
    parentId: t.id,
    focusedThreadId: el
  });
  let e$ = n.useCallback(() => {
      var e, s;
      if (en) return;
      let a = et ? null === (e = eW.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (s = Q.current) || void 0 === s ? void 0 : s.getScrollerState();
      if (null == a) return;
      (0, X.trackForumScrolled)({
        guildId: t.guild_id,
        channelId: t.id
      });
      let n = a.scrollTop + a.offsetHeight,
        l = a.scrollHeight - n,
        r = et ? Math.max(200, (0, er.getGridPostHeight)(ex)) : 200;
      l < r && p()
    }, [en, et, t.guild_id, t.id, ex, p]),
    e0 = (0, h.useStateFromStores)([T.default], () => T.default.keyboardModeEnabled),
    e1 = (0, ed.default)({
      id: "forum-grid-view",
      isEnabled: et && e0,
      setFocus: eJ
    }),
    e6 = (0, ec.default)({
      listRef: Q,
      padding: 96,
      isEnabled: !et && e0,
      channel: t
    }),
    {
      ref: e4,
      ...e2
    } = e1.containerProps,
    e8 = O.default.getSidebarState(t.id),
    e3 = null != e8 && (0, O.isViewChannelSidebar)(e8);
  return (0, a.jsx)("div", {
    className: eg.container,
    ref: eo,
    children: (0, a.jsx)(g.FocusJumpSection, {
      children: e => (0, a.jsxs)(a.Fragment, {
        children: [c && (0, a.jsx)(x.default, {
          channel: t,
          draftType: L.DraftType.FirstThreadMessage,
          className: eg.uploadArea,
          style: {
            right: e3 && (null == s ? void 0 : s.isThreadSidebarFloating) ? s.threadSidebarWidth : 0
          }
        }), (0, a.jsx)(eI, {
          channel: t
        }), (0, a.jsx)(g.HiddenVisually, {
          children: (0, a.jsx)(g.H, {
            children: ef.default.Messages.THREADS
          })
        }), U ? (0, a.jsx)("div", {
          className: eg.optInNotice,
          children: (0, a.jsx)(M.default, {
            channel: t
          })
        }) : null, et ? (0, a.jsx)(ed.GridNavigatorProvider, {
          navigator: e1,
          children: (0, a.jsx)(g.MasonryList, {
            ref: e => {
              var t;
              e4.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eK(e)
            },
            itemGutter: 16,
            padding: 24,
            className: eg.grid,
            columns: eS,
            sections: eL,
            getItemKey: eY,
            getSectionHeight: eq,
            getItemHeight: e_,
            renderSection: eX,
            renderItem: eZ,
            getSectionProps: eQ,
            onScroll: S ? e$ : void 0,
            chunkSize: 350,
            ...e2,
            ...e
          }, y)
        }) : (0, a.jsx)(d.ListNavigatorProvider, {
          navigator: e6,
          children: (0, a.jsx)(d.ListNavigatorContainer, {
            children: t => {
              let {
                ref: s,
                ...n
              } = t;
              return (0, a.jsx)(g.ListAuto, {
                ref: eH(s),
                className: eg.list,
                sections: eL,
                sectionHeight: eV,
                rowHeight: ez,
                renderRow: eG,
                renderSection: eB,
                chunkSize: 150,
                onScroll: S ? e$ : void 0,
                paddingBottom: 24,
                ...n,
                ...e,
                innerRole: "list"
              }, y)
            }
          })
        })]
      })
    })
  })
}

function eA(e) {
  let {
    channel: t,
    coords: s
  } = e, n = (0, _.default)(t);
  return (0, a.jsx)("div", {
    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
    style: s,
    children: (0, a.jsx)(g.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: ef.default.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
        channelName: n
      })
    })
  })
}

function ev(e) {
  let {
    channel: t,
    coords: s
  } = e, n = (0, _.default)(t);
  return (0, a.jsx)("div", {
    className: r(eg.missingReadHistoryPermission, eg.columnsSpan),
    style: s,
    children: (0, a.jsx)(g.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: ef.default.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
        channelName: n
      })
    })
  })
}

function eI(e) {
  let {
    channel: t
  } = e, s = n.useCallback(() => {
    G.default.resort(t.id)
  }, [t]), l = (0, h.useStateFromStores)([V.default], () => V.default.getNewThreadCount());
  return 0 === l ? null : (0, a.jsx)(g.Clickable, {
    className: eg.newPostsButton,
    onClick: s,
    children: (0, a.jsx)(g.Text, {
      color: "text-brand",
      variant: "text-md/medium",
      children: ef.default.Messages.NEW_FORUM_POST_COUNT.format({
        count: l
      })
    })
  })
}

function ej() {
  return Promise.resolve()
}

function eR(e) {
  var t, s, l;
  let {
    channel: i,
    isEmpty: x,
    isSearchLoading: _,
    numResults: N,
    children: M,
    coords: A,
    onHeightChange: v
  } = e, {
    name: I,
    formOpen: R,
    titleFocused: O,
    hasClickedForm: F,
    textAreaState: U,
    onboardingExpanded: B,
    setEditorAdditionRowHeight: V
  } = (0, ee.useForumPostComposerStore)(e => {
    let {
      name: t,
      formOpen: s,
      titleFocused: a,
      hasClickedForm: n,
      textAreaState: l,
      onboardingExpanded: r,
      setEditorAdditionRowHeight: i
    } = e;
    return {
      name: t,
      formOpen: s,
      titleFocused: a,
      hasClickedForm: n,
      textAreaState: l,
      onboardingExpanded: r,
      setEditorAdditionRowHeight: i
    }
  }, u.default), {
    tagFilter: K,
    layoutType: Y
  } = (0, z.useForumChannelStore)(i.id), Z = (0, ee.useForumPostComposerStoreApi)(), q = (0, z.useForumChannelStoreApi)(), $ = (0, h.useStateFromStores)([b.default], () => b.default.canChatInGuild(i.guild_id)), es = (0, W.useCanManageChannel)(i), ea = (0, j.useCanStartThread)(i), [en, er] = n.useState(ea), [, ei] = (0, p.useCurrentUserCommunicationDisabled)(null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0), eu = $ && (ea || en && ei), ed = i.isMediaChannel();
  n.useEffect(() => {
    ea && er(!0)
  }, [ea]);
  let {
    ref: ec,
    height: eh
  } = (0, C.default)();
  n.useEffect(() => {
    null != eh && v(eh)
  }, [v, eh]);
  let ex = n.useCallback(() => {
    o(() => {
      null != ec.current && Z.getState().setEditorHeight(ec.current.offsetHeight)
    })
  }, [ec, Z]);
  n.useLayoutEffect(ex, [ex, x, eu, B]), (0, H.useComponentAction)({
    event: em.ComponentActions.REMEASURE_TARGET,
    handler: ex
  });
  let eC = (0, h.useStateFromStores)([P.default], () => P.default.getUploads(i.id, L.DraftType.FirstThreadMessage)),
    eT = (0, W.useChannelTemplate)(i),
    e_ = n.useRef(null),
    eS = n.useRef(null),
    [ep, eE] = n.useState(0),
    {
      width: eN
    } = (0, h.useStateFromStores)([y.default], () => y.default.windowSize()),
    eM = null === (s = e_.current) || void 0 === s ? void 0 : null === (t = s.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
    eA = n.useRef(null);
  n.useLayoutEffect(() => {
    var e;
    let t = eS.current,
      s = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
    if (null != e_.current && null != s && null != s.children) {
      let {
        left: e,
        top: t
      } = e_.current.getBoundingClientRect(), a = 0;
      for (let n of s.children) {
        let {
          right: s,
          top: l,
          height: r
        } = n.getBoundingClientRect();
        if (l - t > r) break;
        s - e > a && (a = s - e)
      }
      eE(a)
    }
  }, [i.availableTags, eN, eM, K]);
  let ev = I.length > 0 && !R && (_ || null != N),
    eI = !__OVERLAY__ && !F && !R && O && (0 === U.textValue.trim().length || U.textValue.trim() === eT) && 0 === eC.length;
  n.useLayoutEffect(() => {
    let e = ev || eI;
    if (!e) return V(0);
    null != eA.current && V(e ? eA.current.clientHeight : 0)
  }, [V, ev, eI, eA]);
  let eR = e => {
      (0, X.trackForumTagFilterClicked)({
        guildId: i.guild_id,
        channelId: i.id,
        tagId: e,
        filterTagIds: Array.from(K),
        added: !K.has(e),
        location: {
          page: em.AnalyticsPages.GUILD_CHANNEL,
          section: em.AnalyticsSections.FORUM_CHANNEL_HEADER,
          object: em.AnalyticsObjects.CHANNEL_TAG
        }
      }), q.getState().toggleTagFilter(i.id, e)
    },
    eF = (0, d.default)({
      id: "".concat(i.id, "-tags-navigator"),
      isEnabled: !0,
      wrap: !0,
      scrollToStart: ej,
      scrollToEnd: ej,
      orientation: c.Orientations.HORIZONTAL
    }),
    {
      role: eL,
      onFocus: eb,
      ...eP
    } = (0, d.useListItem)("forum-channel-header"),
    ey = n.useRef(null),
    eD = function() {
      let e = n.useRef(!1),
        t = (0, h.useStateFromStores)([T.default], () => T.default.keyboardModeEnabled),
        s = n.useCallback(t => {
          e.current = t.shiftKey
        }, [e]);
      return n.useLayoutEffect(() => (t ? window.addEventListener("keydown", s) : window.removeEventListener("keydown", s), () => window.removeEventListener("keydown", s)), [t, s]), e
    }(),
    ew = n.useCallback(e => {
      if (eb(e), e.target === ec.current && !eD.current) {
        var t;
        null === (t = ey.current) || void 0 === t || t.focus()
      }
    }, [eb, ec, eD]);
  return (0, a.jsx)("div", {
    className: r(eg.card, eg.headerRow, eg.columnsSpan),
    ref: ec,
    onFocus: ew,
    ...eP,
    style: {
      ...A,
      position: "static",
      height: "auto"
    },
    children: (0, a.jsxs)(H.ComponentDispatchGroupProvider, {
      children: [null != i.guild_id ? (0, a.jsx)(E.default, {
        className: r(eg.newMemberBanner, {
          [eg.gridViewBanner]: Y === m.ForumLayout.GRID
        }),
        guildId: i.guild_id,
        channel: i
      }) : null, (0, a.jsx)("div", {
        className: r(eg.mainCard, eg.header, {
          [eg.headerWithMatchingPosts]: ev || eI
        }),
        children: (0, a.jsx)(et.default, {
          parentChannel: i,
          onChange: ex,
          isSearchLoading: _,
          canCreatePost: eu,
          inputRef: ey
        })
      }), (ev || eI) && (0, a.jsxs)("div", {
        className: eg.matchingPostsRow,
        ref: eA,
        children: [ev && (0, a.jsxs)("div", {
          className: eg.matchingPosts,
          children: [(0, a.jsx)(g.Heading, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: _ ? ef.default.Messages.FORUM_SEARCHING : 0 === N ? ef.default.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : ef.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
              numPosts: N,
              query: I
            })
          }), !_ && (0, a.jsx)(g.Clickable, {
            onClick: () => {
              (0, X.trackForumSearchCleared)({
                guildId: i.guild_id,
                channelId: i.id
              }), G.default.clearForumSearch(i.id), Z.getState().setName("")
            },
            children: (0, a.jsx)(g.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              className: eg.clear,
              children: ef.default.Messages.CLEAR
            })
          })]
        }), (0, a.jsx)("div", {
          className: eg.tagsSpacer
        }), eI ? eu ? (0, a.jsxs)("div", {
          className: eg.startPostHelp,
          children: [(0, a.jsx)(g.KeyCombo, {
            shortcut: "SHIFT",
            className: eg.keyboardShortcut
          }), (0, a.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: "+"
          }), (0, a.jsx)(g.KeyCombo, {
            shortcut: "ENTER",
            className: eg.keyboardShortcut
          }), (0, a.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: ef.default.Messages.FORUM_ENTER_TO_START_POST
          })]
        }) : (0, a.jsxs)("div", {
          className: eg.startPostHelp,
          children: [(0, a.jsx)(k.default, {
            height: 14,
            width: 14,
            className: eg.warnIcon
          }), (0, a.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: ef.default.Messages.FORUM_NO_POST_PERMISSION_HELP
          })]
        }) : null]
      }), (0, a.jsx)(Q.default, {
        channel: i,
        onChange: ex
      }), (0, a.jsxs)("div", {
        className: eg.tagsContainer,
        ref: e_,
        children: [(0, a.jsx)(eO, {
          channel: i
        }), i.availableTags.length > 0 ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: eg.divider
          }), (0, a.jsx)("div", {
            className: eg.tagList,
            ref: eS,
            children: (0, a.jsx)(d.ListNavigatorProvider, {
              navigator: eF,
              children: (0, a.jsx)(d.ListNavigatorContainer, {
                children: e => {
                  let {
                    ref: t,
                    ...s
                  } = e;
                  return (0, a.jsx)("div", {
                    className: eg.tagListInner,
                    ref: t,
                    ...s,
                    children: i.availableTags.map(e => (0, a.jsx)(el.default, {
                      className: eg.tag,
                      tag: e,
                      onClick: () => eR(e.id),
                      selected: K.has(e.id)
                    }, e.id))
                  })
                }
              })
            })
          }), (0, a.jsx)(g.Popout, {
            renderPopout: e => {
              let {
                closePopout: t,
                setPopoutRef: s
              } = e;
              return (0, a.jsx)(eo.default, {
                channel: i,
                closePopout: t,
                setPopoutRef: s
              })
            },
            position: "bottom",
            align: "right",
            children: (e, t) => {
              let {
                isShown: s
              } = t;
              return (0, a.jsxs)(g.Button, {
                ...e,
                size: g.Button.Sizes.MIN,
                color: g.Button.Colors.CUSTOM,
                className: r(eg.tagsButton, {
                  [eg.tagsButtonWithCount]: K.size > 0
                }),
                style: {
                  left: ep
                },
                innerClassName: eg.tagsButtonInner,
                "aria-label": K.size > 0 ? ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : ef.default.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                children: [K.size > 0 ? (0, a.jsx)("div", {
                  className: eg.countContainer,
                  children: (0, a.jsx)(g.Text, {
                    className: eg.countText,
                    color: "none",
                    variant: "text-xs/medium",
                    children: K.size
                  })
                }) : ef.default.Messages.FORUM_TAG_ALL, s ? (0, a.jsx)(w.default, {
                  width: 20
                }) : (0, a.jsx)(D.default, {
                  width: 20
                })]
              })
            }
          }), (0, a.jsxs)(g.Button, {
            size: g.Button.Sizes.MIN,
            color: g.Button.Colors.CUSTOM,
            className: r(eg.tagsButton, eg.tagsButtonPlaceholder),
            innerClassName: eg.tagsButtonInner,
            "aria-label": ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
            children: [K.size > 0 ? (0, a.jsx)("div", {
              className: eg.countContainer,
              children: (0, a.jsx)(g.Text, {
                className: eg.countText,
                color: "none",
                variant: "text-xs/medium",
                children: K.size
              })
            }) : null, (0, a.jsx)(w.default, {
              width: 24
            })]
          })]
        }) : null]
      }), M, es && !ed && (0, a.jsx)(S.default, {
        contentTypes: [f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD],
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: s
          } = e;
          return t === f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD ? (0, a.jsx)(J.default, {
            onDismiss: s
          }) : null
        }
      })]
    })
  }, "create-form")
}

function eO(e) {
  let {
    channel: t
  } = e, s = t.isMediaChannel();
  return (0, a.jsx)(g.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, a.jsx)(en.default, {
        channel: t,
        closePopout: s
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.jsxs)(g.Button, {
        ...e,
        size: g.Button.Sizes.MIN,
        color: g.Button.Colors.CUSTOM,
        className: eg.sortDropdown,
        innerClassName: eg.sortDropdownInner,
        "aria-label": s ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
        children: [(0, a.jsx)(U.default, {}), (0, a.jsx)(g.Text, {
          className: eg.sortDropdownText,
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: s ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW
        }), n ? (0, a.jsx)(w.default, {
          width: 20
        }) : (0, a.jsx)(D.default, {
          width: 20
        })]
      })
    }
  })
}