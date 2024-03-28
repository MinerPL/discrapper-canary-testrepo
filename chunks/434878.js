"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ex
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("803997"),
  r = a.n(l),
  i = a("196434"),
  o = a.n(i),
  d = a("143927"),
  u = a("924826"),
  c = a("536895"),
  m = a("313361"),
  h = a("442837"),
  f = a("524437"),
  g = a("481060"),
  x = a("561472"),
  C = a("393238"),
  _ = a("607070"),
  S = a("933557"),
  T = a("243778"),
  p = a("71619"),
  E = a("898188"),
  N = a("256413"),
  M = a("292853"),
  v = a("359110"),
  A = a("344185"),
  I = a("235449"),
  j = a("665906"),
  R = a("488131"),
  O = a("433355"),
  b = a("592125"),
  F = a("703558"),
  L = a("607744"),
  P = a("117530"),
  y = a("451478"),
  D = a("86813"),
  U = a("826026"),
  w = a("135163"),
  k = a("759231"),
  H = a("459273"),
  B = a("961675"),
  G = a("883429"),
  V = a("238349"),
  W = a("109434"),
  z = a("456269"),
  K = a("90372"),
  Y = a("985518"),
  X = a("228392"),
  Z = a("281301"),
  q = a("355589"),
  Q = a("542581"),
  J = a("639184"),
  $ = a("404616"),
  ee = a("470623"),
  et = a("749913"),
  ea = a("219664"),
  es = a("889753"),
  en = a("895932"),
  el = a("479099"),
  er = a("510060"),
  ei = a("858051"),
  eo = a("276357"),
  ed = a("81490"),
  eu = a("482062"),
  ec = a("260503"),
  em = a("981631"),
  eh = a("124368"),
  ef = a("689938"),
  eg = a("258148");

function ex(e) {
  let {
    channel: t,
    guild: a,
    sidebarState: n
  } = e;
  return (0, s.jsx)(ee.ForumPostComposerStoreProvider, {
    createStore: () => (0, ee.createForumPostComposerStore)(t),
    children: (0, s.jsx)(eM, {
      channel: t,
      guild: a,
      sidebarState: n
    })
  }, t.id)
}
let eC = new er.GridLayout({
  minWidth: 320,
  maxWidth: 450,
  gap: 16
});

function e_(e) {
  return "forum-grid-header-section-".concat(e)
}
let eS = (e, t, a) => 0 === e ? 0 : (0, er.getGridPostHeight)(a);

function eT(e) {
  let {
    itemRole: t,
    coords: a,
    section: n
  } = e;
  return (0, s.jsx)("div", {
    className: r()(eg.card, eg.archivedDividerRow, eg.columnsSpan),
    style: a,
    "data-item-role": t,
    children: (0, s.jsx)("div", {
      className: eg.emptyMainCard,
      children: (0, s.jsx)(g.Heading, {
        variant: "eyebrow",
        className: eg.archivedDivider,
        id: e_(n),
        children: ef.default.Messages.FORUM_SECTION_ARCHIVED
      })
    })
  }, "section-divider")
}

function ep(e) {
  let {
    section: t,
    coords: a,
    key: n,
    isShowingSearchResult: l,
    hasActiveThreads: r
  } = e;
  return () => 2 === t && !l && r ? (0, s.jsx)(eT, {
    section: t,
    coords: null == a ? void 0 : {
      ...a,
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
    sidebarState: a
  } = e, {
    editorHeight: l,
    editorAdditionRowHeight: i,
    listViewCardHeights: o,
    formOpen: c
  } = (0, ee.useForumPostComposerStore)(e => {
    let {
      editorHeight: t,
      editorAdditionRowHeight: a,
      listViewCardHeights: s,
      formOpen: n,
      cardHeightVersion: l
    } = e;
    return {
      editorHeight: t,
      editorAdditionRowHeight: a,
      listViewCardHeights: s,
      formOpen: n,
      cardHeightVersion: l
    }
  }, d.default), {
    activeThreadIds: f,
    archivedThreadIds: C,
    searchResults: S,
    canLoadMore: T,
    loadMore: p,
    activeThreadsLoading: E,
    archivedThreadsLoading: j,
    loading: L,
    isSearchLoading: P,
    layoutType: y
  } = function(e) {
    let {
      sortOrder: t,
      tagFilter: a,
      layoutType: s
    } = (0, W.useForumChannelStore)(e.id), n = (0, z.useForumActiveThreadIds)({
      channel: e,
      sortOrder: t,
      tagFilter: a,
      shouldAutomaticallyAck: !0
    }), l = (0, h.useStateFromStores)([A.default], () => !A.default.hasLoaded(e.guild_id)), {
      threadIds: r,
      canLoadMore: i,
      loadMore: o,
      loading: d
    } = (0, I.useArchivedThreads)(e, t, a), {
      searchResults: u,
      isSearchLoading: c
    } = (0, z.useForumSearchState)({
      channelId: e.id
    });
    return (0, z.useLoadForumUnreadCounts)(e, t, a), {
      activeThreadIds: n,
      archivedThreadIds: r,
      searchResults: u,
      canLoadMore: i,
      loadMore: o,
      loading: l || d || c,
      archivedThreadsLoading: d,
      activeThreadsLoading: l,
      isSearchLoading: c,
      layoutType: s
    }
  }(t), D = f.length > 0, U = D || C.length > 0, w = (0, N.default)(t), {
    tagFilter: k
  } = (0, W.useForumChannelStore)(t.id);
  (0, z.useAutomaticForumSearch)(t, k, c);
  let H = (0, z.useCanSearchForumPosts)(t),
    V = (0, z.useCanViewArchivedPosts)(t),
    Q = n.useRef(null),
    {
      observePostVisibilityAnalytics: J
    } = function(e) {
      let {
        guildId: t,
        channelId: a,
        scrollerRef: s
      } = e;
      K.default.useForumChannelSeenManager({
        guildId: t,
        channelId: a
      });
      let l = n.useRef(null),
        r = n.useCallback((e, t) => {
          for (let a of t) {
            let t = a.target.dataset.itemId;
            if (null == t) return;
            let s = Date.now();
            a.intersectionRatio >= .5 ? (0, Y.markForumPostItemAsSeen)(e, t, s) : (0, Y.markForumPostItemAsUnseen)(e, t, s)
          }
        }, []);
      return n.useEffect(() => {
        var e;
        let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerNode();
        if (null != t) return l.current = new IntersectionObserver(e => r(a, e), {
          root: t,
          rootMargin: "0px 100000px 0px 100000px",
          threshold: .5
        }), () => {
          var e;
          null === (e = l.current) || void 0 === e || e.disconnect(), l.current = null
        }
      }, [a, r, s]), {
        observePostVisibilityAnalytics: n.useCallback((e, t) => {
          var s;
          if (null == e) {
            (0, Y.markForumPostItemAsUnseen)(a, t, Date.now());
            return
          }
          null === (s = l.current) || void 0 === s || s.observe(e)
        }, [a])
      }
    }({
      scrollerRef: Q,
      channelId: t.id,
      guildId: t.guild_id
    }),
    et = y === m.ForumLayout.GRID,
    en = null != S,
    el = n.useRef(null),
    {
      containerRef: eo,
      containerWidth: ex
    } = (0, ed.default)();
  n.useEffect(() => () => {
    null != t.id && G.default.clearForumSearch(t.id)
  }, [t.id]);
  let {
    columns: eT
  } = n.useMemo(() => et ? eC.getRenderOptions(ex) : er.ForumListLayoutRenderOptions, [et, ex]), eM = n.useMemo(() => L ? Math.round((window.innerHeight - 200) / 118) : 0, [L]), ej = n.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
    return E ? e : 0
  }, [ex, eT, E]), eO = n.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
    return j ? e : 0
  }, [ex, eT, j]), eb = n.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, er.getGridPostHeight)(eC.getWidth(ex))) * eT;
    return P && en ? e : 0
  }, [ex, eT, P, en]), eF = n.useMemo(() => {
    if (et) {
      if (!H && en) return [1, 0];
      if (!V) return [1, f.length + ej, 0];
      else if (en) return [1, S.length + eb, 0];
      else return [1, f.length + ej, C.length + eO]
    }
    if (!H && en) return [1, 1];
    if (!V) return [1, f.length, 1];
    else if (en) return [1, S.length, 0, eM];
    else return [1, f.length, C.length, eM]
  }, [et, en, f.length, C.length, H, V, eM, S, ej, eO, eb]), eL = n.useMemo(() => {
    if (!H && en) return [
      [],
      []
    ];
    if (!V) return [
      [], f, []
    ];
    if (en) return [
      [], S, [],
      []
    ];
    else return [
      [], f, C, []
    ]
  }, [en, H, V, S, f, C]), eP = n.useCallback((e, a) => {
    (0, X.trackForumPostClicked)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: e.id,
      location: {
        page: em.AnalyticsPages.GUILD_CHANNEL,
        section: em.AnalyticsSections.FORUM_CHANNEL_POST
      }
    }), a ? (0, v.transitionToThread)(e, eh.OpenThreadAnalyticsLocations.BROWSER) : (el.current = e.id, (0, R.openThreadSidebarForViewing)(e))
  }, [t.guild_id, t.id, el]), [ey, eD] = n.useState(l + i - 24), eU = n.useCallback((e, a, n) => 0 === e ? (0, s.jsx)(eR, {
    channel: t,
    isEmpty: !D,
    isSearchLoading: P,
    numResults: null == S ? void 0 : S.length,
    coords: a,
    onHeightChange: eD,
    children: !L && (0, s.jsx)(q.default, {
      channel: t,
      hasAnyThread: U
    }, t.id)
  }, "forum-channel-header") : 2 !== e || V ? 1 === e && en && !H ? (0, s.jsx)(eA, {
    channel: t,
    coords: a
  }, "archive-or-search-result") : n() : (0, s.jsx)(ev, {
    channel: t,
    coords: a
  }, "archived-missing-reading-history-perm"), [en, V, S, H, t, D, P, L, U]), ew = (0, h.useStateFromStores)([B.default], () => B.default.hasHidden(t.id));
  n.useEffect(() => {
    var e, t;
    let a = et ? eW : Q,
      s = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerState();
    null != s && !ew && s.scrollTop > l && (null === (t = a.current) || void 0 === t || t.scrollTo({
      to: 0
    }))
  }, [ew]);
  let {
    updateListScrollerRef: ek,
    renderListSection: eH,
    renderListItem: eB,
    getListSectionHeight: eG,
    getListItemHeight: eV
  } = function(e) {
    let {
      listRef: t,
      isIncreasedActivityView: a,
      hasActiveThreads: l,
      threadIdsBySection: i,
      listViewCardHeights: o,
      editorHeight: d,
      editorAdditionRowHeight: u,
      renderSectionOrItem: c,
      goToThread: m,
      observePostVisibilityAnalytics: h,
      isShowingSearchResult: f
    } = e, x = n.useCallback(e => a => {
      var s;
      t.current = a, e.current = null !== (s = null == a ? void 0 : a.getScrollerNode()) && void 0 !== s ? s : null
    }, [t]), C = n.useCallback(e => ep({
      section: e.section,
      isShowingSearchResult: f,
      hasActiveThreads: l
    })(), [l, f]), _ = n.useCallback(e => c(e.section, void 0, () => {
      if (3 === e.section) return __OVERLAY__ ? null : a ? (0, s.jsx)("div", {
        className: eg.placeholder,
        children: (0, s.jsx)(es.default, {})
      }) : (0, s.jsx)("div", {
        "data-item-role": "item",
        className: r()(eg.loadingCard, eg["loadingCard-".concat(e.row % 3)], {
          [eg.loadingCardWithIncreasedActivity]: a
        })
      }, "loading-".concat(e.row));
      let t = i[e.section][e.row];
      return (0, s.jsx)("li", {
        className: eg.card,
        "data-item-role": "item",
        children: (0, s.jsx)(g.HeadingLevel, {
          children: a ? (0, s.jsx)(ei.default, {
            className: eg.increasedActivityMainCard,
            threadId: t,
            goToThread: m,
            observePostVisibilityAnalytics: h
          }) : (0, s.jsx)($.default, {
            className: eg.mainCard,
            threadId: t,
            goToThread: m,
            observePostVisibilityAnalytics: h
          })
        })
      }, "".concat(e.section, "-").concat(t))
    }), [a, c, i, m, h]), S = n.useCallback((e, t) => {
      if (0 === e) return d + u;
      let s = o[i[e][t]],
        n = (a ? ei.DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT : 96) + 8;
      return null == s ? n : s + 8
    }, [i, o, d, u, a]);
    return {
      updateListScrollerRef: x,
      renderListSection: C,
      renderListItem: _,
      getListSectionHeight: n.useCallback(e => 2 === e && l ? 40 : 0, [l]),
      getListItemHeight: S
    }
  }({
    listRef: Q,
    hasActiveThreads: D,
    threadIdsBySection: eL,
    listViewCardHeights: o,
    editorHeight: l,
    editorAdditionRowHeight: i,
    renderSectionOrItem: eU,
    goToThread: eP,
    observePostVisibilityAnalytics: J,
    isShowingSearchResult: en,
    isIncreasedActivityView: (0, Z.useForumActivityExperiment)(t.guild_id)
  }), eW = n.useRef(null), {
    updateMasonryListScrollerRef: ez,
    getItemKey: eK,
    renderGridSection: eY,
    renderGridItem: eX,
    getGridSectionHeight: eZ,
    getSectionProps: eq,
    handleGridFocus: eQ
  } = function(e) {
    let {
      masonryListScrollerRef: t,
      threadIdsBySection: a,
      goToThread: l,
      renderSectionOrItem: i,
      hasActiveThreads: o,
      isShowingSearchResult: d,
      canSearchForumPosts: u,
      canViewArchivedPosts: c,
      observePostVisibilityAnalytics: m,
      focusedThreadId: h,
      headerHeight: f
    } = e, g = n.useRef(null), x = n.useCallback(e => {
      t.current = e, g.current = null == e ? void 0 : e.getScrollerNode()
    }, [t]), C = n.useCallback((e, a) => {
      let {
        current: s
      } = t;
      if (null == s) return;
      let n = document.querySelector(e);
      if (null == n) return;
      let l = s.getCoordsMap()[a],
        r = null != l ? l.height + 20 : 200;
      s.scrollIntoViewNode({
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
      }), h.current = eN(a)
    }, [t, h]), _ = n.useCallback(e => {
      let t = eN(e);
      if (null == t) return;
      let a = b.default.getChannel(t);
      null != a && l(a, !0)
    }, [l]), S = n.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (0 === a[e].length) return "section-".concat(e, "-").concat(t);
      {
        let s = a[e][t];
        return null == s ? eE(e, t) : eE(e, s)
      }
    }, [a]), T = n.useCallback((e, t, a) => i(e, t, ep({
      section: e,
      coords: t,
      key: a,
      isShowingSearchResult: d,
      hasActiveThreads: o
    })), [i, o, d]), p = n.useCallback(e => 0 === e ? {} : {
      role: "grid",
      "aria-labelledby": "#".concat(e_(e))
    }, []), E = n.useCallback((e, t, n, i, o) => {
      if (0 === e) return null;
      let d = a[e][t];
      return null != d ? (0, s.jsx)(ea.default, {
        id: "".concat(i),
        threadId: d,
        className: r()(eg.card, eg.mainCard),
        goToThread: l,
        observePostVisibilityAnalytics: m,
        coords: n,
        gridCoords: o.coordinates[i],
        gridSectionBoundaries: o.boundaries
      }, i) : __OVERLAY__ ? null : (0, s.jsx)("div", {
        style: {
          ...n
        },
        "data-item-role": "item",
        className: r()(eg.loadingCard, eg["loadingCard-".concat(t % 3)])
      }, i)
    }, [a, l, m]);
    return {
      updateMasonryListScrollerRef: x,
      masonryListContainerRef: g,
      focusedThreadId: h,
      handleGridFocus: C,
      handleGridSelect: _,
      getItemKey: S,
      renderGridSection: T,
      renderGridItem: E,
      getSectionProps: p,
      getGridSectionHeight: n.useCallback(e => 0 === e ? f - 8 - 24 : 2 === e ? o || !c ? 40 : 0 : 1 === e && d && !u ? 40 : 0, [f, d, u, o, c])
    }
  }({
    masonryListScrollerRef: eW,
    threadIdsBySection: eL,
    goToThread: eP,
    renderSectionOrItem: eU,
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
      containerWidth: a,
      isGridLayout: s,
      threadIdsBySection: l,
      focusedThreadId: r,
      parentId: i
    } = e;
    n.useEffect(() => {
      if (s) {
        let e = setTimeout(() => {
          if (null == t.current || null == r.current) return;
          let e = r.current;
          if ("string" != typeof e) return;
          if (null == O.default.getSidebarState(i)) {
            r.current = null;
            return
          }
          let a = l.findIndex(t => t.find(t => t === e)),
            s = t.current.getCoordsMap(),
            n = s["__section__".concat(a)],
            o = s[eE(a, e)];
          null != n && null != o && t.current.scrollIntoViewRect({
            start: n.top + o.top - 100,
            end: n.top + o.top + o.height + 50
          })
        }, 500);
        return () => clearTimeout(e)
      }
    }, [i, a, s, l, r, t])
  }({
    masonryListScrollerRef: eW,
    containerWidth: ex,
    isGridLayout: et,
    threadIdsBySection: eL,
    parentId: t.id,
    focusedThreadId: el
  });
  let eJ = n.useCallback(() => {
      var e, a;
      if (en) return;
      let s = et ? null === (e = eW.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (a = Q.current) || void 0 === a ? void 0 : a.getScrollerState();
      if (null == s) return;
      (0, X.trackForumScrolled)({
        guildId: t.guild_id,
        channelId: t.id
      });
      let n = s.scrollTop + s.offsetHeight,
        l = s.scrollHeight - n;
      l < (et ? Math.max(200, (0, er.getGridPostHeight)(ex)) : 200) && p()
    }, [en, et, t.guild_id, t.id, ex, p]),
    e$ = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
    e0 = (0, eu.default)({
      id: "forum-grid-view",
      isEnabled: et && e$,
      setFocus: eQ
    }),
    e1 = (0, ec.default)({
      listRef: Q,
      padding: 96,
      isEnabled: !et && e$,
      channel: t
    }),
    {
      ref: e2,
      ...e4
    } = e0.containerProps,
    e6 = O.default.getSidebarState(t.id),
    e3 = null != e6 && (0, O.isViewChannelSidebar)(e6);
  return (0, s.jsx)("div", {
    className: eg.container,
    ref: eo,
    children: (0, s.jsx)(g.FocusJumpSection, {
      children: e => (0, s.jsxs)(s.Fragment, {
        children: [c && (0, s.jsx)(x.default, {
          channel: t,
          draftType: F.DraftType.FirstThreadMessage,
          className: eg.uploadArea,
          style: {
            right: e3 && (null == a ? void 0 : a.isThreadSidebarFloating) ? a.threadSidebarWidth : 0
          }
        }), (0, s.jsx)(eI, {
          channel: t
        }), (0, s.jsx)(g.HiddenVisually, {
          children: (0, s.jsx)(g.H, {
            children: ef.default.Messages.THREADS
          })
        }), w ? (0, s.jsx)("div", {
          className: eg.optInNotice,
          children: (0, s.jsx)(M.default, {
            channel: t
          })
        }) : null, et ? (0, s.jsx)(eu.GridNavigatorProvider, {
          navigator: e0,
          children: (0, s.jsx)(g.MasonryList, {
            ref: e => {
              var t;
              e2.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, ez(e)
            },
            itemGutter: 16,
            padding: 24,
            className: eg.grid,
            columns: eT,
            sections: eF,
            getItemKey: eK,
            getSectionHeight: eZ,
            getItemHeight: eS,
            renderSection: eY,
            renderItem: eX,
            getSectionProps: eq,
            onScroll: T ? eJ : void 0,
            chunkSize: 350,
            ...e4,
            ...e
          }, y)
        }) : (0, s.jsx)(u.ListNavigatorProvider, {
          navigator: e1,
          children: (0, s.jsx)(u.ListNavigatorContainer, {
            children: t => {
              let {
                ref: a,
                ...n
              } = t;
              return (0, s.jsx)(g.ListAuto, {
                ref: ek(a),
                className: eg.list,
                sections: eF,
                sectionHeight: eG,
                rowHeight: eV,
                renderRow: eB,
                renderSection: eH,
                chunkSize: 150,
                onScroll: T ? eJ : void 0,
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

function ev(e) {
  let {
    channel: t,
    coords: a
  } = e, n = (0, S.default)(t);
  return (0, s.jsx)("div", {
    className: r()(eg.missingReadHistoryPermission, eg.columnsSpan),
    style: a,
    children: (0, s.jsx)(g.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: ef.default.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
        channelName: n
      })
    })
  })
}

function eA(e) {
  let {
    channel: t,
    coords: a
  } = e, n = (0, S.default)(t);
  return (0, s.jsx)("div", {
    className: r()(eg.missingReadHistoryPermission, eg.columnsSpan),
    style: a,
    children: (0, s.jsx)(g.Text, {
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
  } = e, a = n.useCallback(() => {
    G.default.resort(t.id)
  }, [t]), l = (0, h.useStateFromStores)([V.default], () => V.default.getNewThreadCount());
  return 0 === l ? null : (0, s.jsx)(g.Clickable, {
    className: eg.newPostsButton,
    onClick: a,
    children: (0, s.jsx)(g.Text, {
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
  var t, a, l;
  let {
    channel: i,
    isEmpty: x,
    isSearchLoading: S,
    numResults: N,
    children: M,
    coords: v,
    onHeightChange: A
  } = e, {
    name: I,
    formOpen: R,
    titleFocused: O,
    hasClickedForm: b,
    textAreaState: w,
    onboardingExpanded: B,
    setEditorAdditionRowHeight: V
  } = (0, ee.useForumPostComposerStore)(e => {
    let {
      name: t,
      formOpen: a,
      titleFocused: s,
      hasClickedForm: n,
      textAreaState: l,
      onboardingExpanded: r,
      setEditorAdditionRowHeight: i
    } = e;
    return {
      name: t,
      formOpen: a,
      titleFocused: s,
      hasClickedForm: n,
      textAreaState: l,
      onboardingExpanded: r,
      setEditorAdditionRowHeight: i
    }
  }, d.default), {
    tagFilter: K,
    layoutType: Y
  } = (0, W.useForumChannelStore)(i.id), Z = (0, ee.useForumPostComposerStoreApi)(), q = (0, W.useForumChannelStoreApi)(), $ = (0, h.useStateFromStores)([L.default], () => L.default.canChatInGuild(i.guild_id)), ea = (0, z.useCanManageChannel)(i), es = (0, j.useCanStartThread)(i), [en, er] = n.useState(es), [, ei] = (0, p.useCurrentUserCommunicationDisabled)(null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0), ed = $ && (es || en && ei), eu = i.isMediaChannel();
  n.useEffect(() => {
    es && er(!0)
  }, [es]);
  let {
    ref: ec,
    height: eh
  } = (0, C.default)();
  n.useEffect(() => {
    null != eh && A(eh)
  }, [A, eh]);
  let ex = n.useCallback(() => {
    o()(() => {
      null != ec.current && Z.getState().setEditorHeight(ec.current.offsetHeight)
    })
  }, [ec, Z]);
  n.useLayoutEffect(ex, [ex, x, ed, B]), (0, H.useComponentAction)({
    event: em.ComponentActions.REMEASURE_TARGET,
    handler: ex
  });
  let eC = (0, h.useStateFromStores)([P.default], () => P.default.getUploads(i.id, F.DraftType.FirstThreadMessage)),
    e_ = (0, z.useChannelTemplate)(i),
    eS = n.useRef(null),
    eT = n.useRef(null),
    [ep, eE] = n.useState(0),
    {
      width: eN
    } = (0, h.useStateFromStores)([y.default], () => y.default.windowSize()),
    eM = null === (a = eS.current) || void 0 === a ? void 0 : null === (t = a.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
    ev = n.useRef(null);
  n.useLayoutEffect(() => {
    var e;
    let t = eT.current,
      a = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
    if (null != eS.current && null != a && null != a.children) {
      let {
        left: e,
        top: t
      } = eS.current.getBoundingClientRect(), s = 0;
      for (let n of a.children) {
        let {
          right: a,
          top: l,
          height: r
        } = n.getBoundingClientRect();
        if (l - t > r) break;
        a - e > s && (s = a - e)
      }
      eE(s)
    }
  }, [i.availableTags, eN, eM, K]);
  let eA = I.length > 0 && !R && (S || null != N),
    eI = !__OVERLAY__ && !b && !R && O && (0 === w.textValue.trim().length || w.textValue.trim() === e_) && 0 === eC.length;
  n.useLayoutEffect(() => {
    let e = eA || eI;
    if (!e) return V(0);
    null != ev.current && V(e ? ev.current.clientHeight : 0)
  }, [V, eA, eI, ev]);
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
    eb = (0, u.default)({
      id: "".concat(i.id, "-tags-navigator"),
      isEnabled: !0,
      wrap: !0,
      scrollToStart: ej,
      scrollToEnd: ej,
      orientation: c.Orientations.HORIZONTAL
    }),
    {
      role: eF,
      onFocus: eL,
      ...eP
    } = (0, u.useListItem)("forum-channel-header"),
    ey = n.useRef(null),
    eD = function() {
      let e = n.useRef(!1),
        t = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
        a = n.useCallback(t => {
          e.current = t.shiftKey
        }, [e]);
      return n.useLayoutEffect(() => (t ? window.addEventListener("keydown", a) : window.removeEventListener("keydown", a), () => window.removeEventListener("keydown", a)), [t, a]), e
    }(),
    eU = n.useCallback(e => {
      if (eL(e), e.target === ec.current && !eD.current) {
        var t;
        null === (t = ey.current) || void 0 === t || t.focus()
      }
    }, [eL, ec, eD]);
  return (0, s.jsx)("div", {
    className: r()(eg.card, eg.headerRow, eg.columnsSpan),
    ref: ec,
    onFocus: eU,
    ...eP,
    style: {
      ...v,
      position: "static",
      height: "auto"
    },
    children: (0, s.jsxs)(H.ComponentDispatchGroupProvider, {
      children: [null != i.guild_id ? (0, s.jsx)(E.default, {
        className: r()(eg.newMemberBanner, {
          [eg.gridViewBanner]: Y === m.ForumLayout.GRID
        }),
        guildId: i.guild_id,
        channel: i
      }) : null, (0, s.jsx)("div", {
        className: r()(eg.mainCard, eg.header, {
          [eg.headerWithMatchingPosts]: eA || eI
        }),
        children: (0, s.jsx)(et.default, {
          parentChannel: i,
          onChange: ex,
          isSearchLoading: S,
          canCreatePost: ed,
          inputRef: ey
        })
      }), (eA || eI) && (0, s.jsxs)("div", {
        className: eg.matchingPostsRow,
        ref: ev,
        children: [eA && (0, s.jsxs)("div", {
          className: eg.matchingPosts,
          children: [(0, s.jsx)(g.Heading, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: S ? ef.default.Messages.FORUM_SEARCHING : 0 === N ? ef.default.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : ef.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
              numPosts: N,
              query: I
            })
          }), !S && (0, s.jsx)(g.Clickable, {
            onClick: () => {
              (0, X.trackForumSearchCleared)({
                guildId: i.guild_id,
                channelId: i.id
              }), G.default.clearForumSearch(i.id), Z.getState().setName("")
            },
            children: (0, s.jsx)(g.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              className: eg.clear,
              children: ef.default.Messages.CLEAR
            })
          })]
        }), (0, s.jsx)("div", {
          className: eg.tagsSpacer
        }), eI ? ed ? (0, s.jsxs)("div", {
          className: eg.startPostHelp,
          children: [(0, s.jsx)(g.KeyCombo, {
            shortcut: "SHIFT",
            className: eg.keyboardShortcut
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: "+"
          }), (0, s.jsx)(g.KeyCombo, {
            shortcut: "ENTER",
            className: eg.keyboardShortcut
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: ef.default.Messages.FORUM_ENTER_TO_START_POST
          })]
        }) : (0, s.jsxs)("div", {
          className: eg.startPostHelp,
          children: [(0, s.jsx)(k.default, {
            height: 14,
            width: 14,
            className: eg.warnIcon
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: ef.default.Messages.FORUM_NO_POST_PERMISSION_HELP
          })]
        }) : null]
      }), (0, s.jsx)(Q.default, {
        channel: i,
        onChange: ex
      }), (0, s.jsxs)("div", {
        className: eg.tagsContainer,
        ref: eS,
        children: [(0, s.jsx)(eO, {
          channel: i
        }), i.availableTags.length > 0 ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: eg.divider
          }), (0, s.jsx)("div", {
            className: eg.tagList,
            ref: eT,
            children: (0, s.jsx)(u.ListNavigatorProvider, {
              navigator: eb,
              children: (0, s.jsx)(u.ListNavigatorContainer, {
                children: e => {
                  let {
                    ref: t,
                    ...a
                  } = e;
                  return (0, s.jsx)("div", {
                    className: eg.tagListInner,
                    ref: t,
                    ...a,
                    children: i.availableTags.map(e => (0, s.jsx)(el.default, {
                      className: eg.tag,
                      tag: e,
                      onClick: () => eR(e.id),
                      selected: K.has(e.id)
                    }, e.id))
                  })
                }
              })
            })
          }), (0, s.jsx)(g.Popout, {
            renderPopout: e => {
              let {
                closePopout: t,
                setPopoutRef: a
              } = e;
              return (0, s.jsx)(eo.default, {
                channel: i,
                closePopout: t,
                setPopoutRef: a
              })
            },
            position: "bottom",
            align: "right",
            children: (e, t) => {
              let {
                isShown: a
              } = t;
              return (0, s.jsxs)(g.Button, {
                ...e,
                size: g.Button.Sizes.MIN,
                color: g.Button.Colors.CUSTOM,
                className: r()(eg.tagsButton, {
                  [eg.tagsButtonWithCount]: K.size > 0
                }),
                style: {
                  left: ep
                },
                innerClassName: eg.tagsButtonInner,
                "aria-label": K.size > 0 ? ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : ef.default.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                children: [K.size > 0 ? (0, s.jsx)("div", {
                  className: eg.countContainer,
                  children: (0, s.jsx)(g.Text, {
                    className: eg.countText,
                    color: "none",
                    variant: "text-xs/medium",
                    children: K.size
                  })
                }) : ef.default.Messages.FORUM_TAG_ALL, a ? (0, s.jsx)(U.default, {
                  width: 20
                }) : (0, s.jsx)(D.default, {
                  width: 20
                })]
              })
            }
          }), (0, s.jsxs)(g.Button, {
            size: g.Button.Sizes.MIN,
            color: g.Button.Colors.CUSTOM,
            className: r()(eg.tagsButton, eg.tagsButtonPlaceholder),
            innerClassName: eg.tagsButtonInner,
            "aria-label": ef.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
            children: [K.size > 0 ? (0, s.jsx)("div", {
              className: eg.countContainer,
              children: (0, s.jsx)(g.Text, {
                className: eg.countText,
                color: "none",
                variant: "text-xs/medium",
                children: K.size
              })
            }) : null, (0, s.jsx)(U.default, {
              width: 24
            })]
          })]
        }) : null]
      }), M, ea && !eu && (0, s.jsx)(T.default, {
        contentTypes: [f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD],
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: a
          } = e;
          return t === f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD ? (0, s.jsx)(J.default, {
            onDismiss: a
          }) : null
        }
      })]
    })
  }, "create-form")
}

function eO(e) {
  let {
    channel: t
  } = e, a = t.isMediaChannel();
  return (0, s.jsx)(g.Popout, {
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, s.jsx)(en.default, {
        channel: t,
        closePopout: a
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, s.jsxs)(g.Button, {
        ...e,
        size: g.Button.Sizes.MIN,
        color: g.Button.Colors.CUSTOM,
        className: eg.sortDropdown,
        innerClassName: eg.sortDropdownInner,
        "aria-label": a ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
        children: [(0, s.jsx)(w.default, {}), (0, s.jsx)(g.Text, {
          className: eg.sortDropdownText,
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: a ? ef.default.Messages.MEDIA_CHANNEL_SORT : ef.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW
        }), n ? (0, s.jsx)(U.default, {
          width: 20
        }) : (0, s.jsx)(D.default, {
          width: 20
        })]
      })
    }
  })
}