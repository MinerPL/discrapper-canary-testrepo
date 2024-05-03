"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eh
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("196434"),
  o = a.n(i),
  u = a("143927"),
  d = a("924826"),
  c = a("536895"),
  m = a("313361"),
  h = a("442837"),
  f = a("524437"),
  g = a("481060"),
  x = a("561472"),
  C = a("393238"),
  _ = a("607070"),
  p = a("933557"),
  T = a("243778"),
  S = a("71619"),
  E = a("898188"),
  N = a("256413"),
  M = a("292853"),
  A = a("359110"),
  v = a("344185"),
  I = a("235449"),
  j = a("665906"),
  O = a("488131"),
  R = a("433355"),
  b = a("592125"),
  L = a("703558"),
  F = a("607744"),
  P = a("117530"),
  y = a("451478"),
  D = a("86813"),
  w = a("826026"),
  U = a("135163"),
  k = a("759231"),
  H = a("459273"),
  B = a("961675"),
  G = a("883429"),
  V = a("238349"),
  z = a("109434"),
  W = a("456269"),
  K = a("90372"),
  Y = a("985518"),
  X = a("228392"),
  q = a("355589"),
  Z = a("542581"),
  Q = a("639184"),
  J = a("404616"),
  $ = a("470623"),
  ee = a("749913"),
  et = a("219664"),
  ea = a("895932"),
  es = a("479099"),
  en = a("510060"),
  el = a("276357"),
  er = a("81490"),
  ei = a("482062"),
  eo = a("260503"),
  eu = a("981631"),
  ed = a("124368"),
  ec = a("689938"),
  em = a("396057");

function eh(e) {
  let {
    channel: t,
    guild: a,
    sidebarState: n
  } = e;
  return (0, s.jsx)($.ForumPostComposerStoreProvider, {
    createStore: () => (0, $.createForumPostComposerStore)(t),
    children: (0, s.jsx)(eS, {
      channel: t,
      guild: a,
      sidebarState: n
    })
  }, t.id)
}
let ef = new en.GridLayout({
  minWidth: 320,
  maxWidth: 450,
  gap: 16
});

function eg(e) {
  return "forum-grid-header-section-".concat(e)
}
let ex = (e, t, a) => 0 === e ? 0 : (0, en.getGridPostHeight)(a);

function eC(e) {
  let {
    itemRole: t,
    coords: a,
    section: n
  } = e;
  return (0, s.jsx)("div", {
    className: r()(em.card, em.archivedDividerRow, em.columnsSpan),
    style: a,
    "data-item-role": t,
    children: (0, s.jsx)("div", {
      className: em.emptyMainCard,
      children: (0, s.jsx)(g.Heading, {
        variant: "eyebrow",
        className: em.archivedDivider,
        id: eg(n),
        children: ec.default.Messages.FORUM_SECTION_ARCHIVED
      })
    })
  }, "section-divider")
}

function e_(e) {
  let {
    section: t,
    coords: a,
    key: n,
    isShowingSearchResult: l,
    hasActiveThreads: r
  } = e;
  return () => 2 === t && !l && r ? (0, s.jsx)(eC, {
    section: t,
    coords: null == a ? void 0 : {
      ...a,
      position: "absolute"
    },
    itemRole: "section"
  }, n) : null
}

function ep(e, t) {
  return "card-".concat(e, "-").concat(t)
}

function eT(e) {
  if ("string" == typeof e) {
    let t = e.match(/card-{\d+}-({\d+})$/);
    return null == t ? null : t[1]
  }
  return null
}

function eS(e) {
  let {
    channel: t,
    sidebarState: a
  } = e, {
    editorHeight: l,
    editorAdditionRowHeight: i,
    listViewCardHeights: o,
    formOpen: c
  } = (0, $.useForumPostComposerStore)(e => {
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
  }, u.default), {
    activeThreadIds: f,
    archivedThreadIds: C,
    searchResults: p,
    canLoadMore: T,
    loadMore: S,
    activeThreadsLoading: E,
    archivedThreadsLoading: j,
    loading: F,
    isSearchLoading: P,
    layoutType: y
  } = function(e) {
    let {
      sortOrder: t,
      tagFilter: a,
      layoutType: s
    } = (0, z.useForumChannelStore)(e.id), n = (0, W.useForumActiveThreadIds)({
      channel: e,
      sortOrder: t,
      tagFilter: a,
      shouldAutomaticallyAck: !0
    }), l = (0, h.useStateFromStores)([v.default], () => !v.default.hasLoaded(e.guild_id)), {
      threadIds: r,
      canLoadMore: i,
      loadMore: o,
      loading: u
    } = (0, I.useArchivedThreads)(e, t, a), {
      searchResults: d,
      isSearchLoading: c
    } = (0, W.useForumSearchState)({
      channelId: e.id
    });
    return (0, W.useLoadForumUnreadCounts)(e, t, a), {
      activeThreadIds: n,
      archivedThreadIds: r,
      searchResults: d,
      canLoadMore: i,
      loadMore: o,
      loading: l || u || c,
      archivedThreadsLoading: u,
      activeThreadsLoading: l,
      isSearchLoading: c,
      layoutType: s
    }
  }(t), D = f.length > 0, w = D || C.length > 0, U = (0, N.default)(t), {
    tagFilter: k
  } = (0, z.useForumChannelStore)(t.id);
  (0, W.useAutomaticForumSearch)(t, k, c);
  let H = (0, W.useCanSearchForumPosts)(t),
    V = (0, W.useCanViewArchivedPosts)(t),
    Z = n.useRef(null),
    {
      observePostVisibilityAnalytics: Q
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
      scrollerRef: Z,
      channelId: t.id,
      guildId: t.guild_id
    }),
    ee = y === m.ForumLayout.GRID,
    ea = null != p,
    es = n.useRef(null),
    {
      containerRef: el,
      containerWidth: eh
    } = (0, er.default)();
  n.useEffect(() => () => {
    null != t.id && G.default.clearForumSearch(t.id)
  }, [t.id]);
  let {
    columns: eC
  } = n.useMemo(() => ee ? ef.getRenderOptions(eh) : en.ForumListLayoutRenderOptions, [ee, eh]), eS = n.useMemo(() => F ? Math.round((window.innerHeight - 200) / 118) : 0, [F]), eA = n.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, en.getGridPostHeight)(ef.getWidth(eh))) * eC;
    return E ? e : 0
  }, [eh, eC, E]), eI = n.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, en.getGridPostHeight)(ef.getWidth(eh))) * eC;
    return j ? e : 0
  }, [eh, eC, j]), ej = n.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, en.getGridPostHeight)(ef.getWidth(eh))) * eC;
    return P && ea ? e : 0
  }, [eh, eC, P, ea]), eO = n.useMemo(() => {
    if (ee) {
      if (!H && ea) return [1, 0];
      if (!V) return [1, f.length + eA, 0];
      else if (ea) return [1, p.length + ej, 0];
      else return [1, f.length + eA, C.length + eI]
    }
    if (!H && ea) return [1, 1];
    if (!V) return [1, f.length, 1];
    else if (ea) return [1, p.length, 0, eS];
    else return [1, f.length, C.length, eS]
  }, [ee, ea, f.length, C.length, H, V, eS, p, eA, eI, ej]), eR = n.useMemo(() => {
    if (!H && ea) return [
      [],
      []
    ];
    if (!V) return [
      [], f, []
    ];
    if (ea) return [
      [], p, [],
      []
    ];
    else return [
      [], f, C, []
    ]
  }, [ea, H, V, p, f, C]), eb = n.useCallback((e, a) => {
    (0, X.trackForumPostClicked)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: e.id,
      location: {
        page: eu.AnalyticsPages.GUILD_CHANNEL,
        section: eu.AnalyticsSections.FORUM_CHANNEL_POST
      }
    }), a ? (0, A.transitionToThread)(e, ed.OpenThreadAnalyticsLocations.BROWSER) : (es.current = e.id, (0, O.openThreadSidebarForViewing)(e))
  }, [t.guild_id, t.id, es]), [eL, eF] = n.useState(l + i - 24), eP = n.useCallback((e, a, n) => 0 === e ? (0, s.jsx)(ev, {
    channel: t,
    isEmpty: !D,
    isSearchLoading: P,
    numResults: null == p ? void 0 : p.length,
    coords: a,
    onHeightChange: eF,
    children: !F && (0, s.jsx)(q.default, {
      channel: t,
      hasAnyThread: w
    }, t.id)
  }, "forum-channel-header") : 2 !== e || V ? 1 === e && ea && !H ? (0, s.jsx)(eN, {
    channel: t,
    coords: a
  }, "archive-or-search-result") : n() : (0, s.jsx)(eE, {
    channel: t,
    coords: a
  }, "archived-missing-reading-history-perm"), [ea, V, p, H, t, D, P, F, w]), ey = (0, h.useStateFromStores)([B.default], () => B.default.hasHidden(t.id));
  n.useEffect(() => {
    var e, t;
    let a = ee ? eB : Z,
      s = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerState();
    null != s && !ey && s.scrollTop > l && (null === (t = a.current) || void 0 === t || t.scrollTo({
      to: 0
    }))
  }, [ey]);
  let {
    updateListScrollerRef: eD,
    renderListSection: ew,
    renderListItem: eU,
    getListSectionHeight: ek,
    getListItemHeight: eH
  } = function(e) {
    let {
      listRef: t,
      hasActiveThreads: a,
      threadIdsBySection: l,
      listViewCardHeights: i,
      editorHeight: o,
      editorAdditionRowHeight: u,
      renderSectionOrItem: d,
      goToThread: c,
      observePostVisibilityAnalytics: m,
      isShowingSearchResult: h
    } = e, f = n.useCallback(e => a => {
      var s;
      t.current = a, e.current = null !== (s = null == a ? void 0 : a.getScrollerNode()) && void 0 !== s ? s : null
    }, [t]), x = n.useCallback(e => e_({
      section: e.section,
      isShowingSearchResult: h,
      hasActiveThreads: a
    })(), [a, h]), C = n.useCallback(e => d(e.section, void 0, () => {
      if (3 === e.section) return __OVERLAY__ ? null : (0, s.jsx)("div", {
        "data-item-role": "item",
        className: r()(em.loadingCard, em["loadingCard-".concat(e.row % 3)])
      }, "loading-".concat(e.row));
      let t = l[e.section][e.row];
      return (0, s.jsx)("li", {
        className: em.card,
        "data-item-role": "item",
        children: (0, s.jsx)(g.HeadingLevel, {
          children: (0, s.jsx)(J.default, {
            className: em.mainCard,
            threadId: t,
            goToThread: c,
            observePostVisibilityAnalytics: m
          })
        })
      }, "".concat(e.section, "-").concat(t))
    }), [d, l, c, m]), _ = n.useCallback((e, t) => {
      if (0 === e) return o + u;
      let a = i[l[e][t]];
      return null == a ? 104 : a + 8
    }, [l, i, o, u]);
    return {
      updateListScrollerRef: f,
      renderListSection: x,
      renderListItem: C,
      getListSectionHeight: n.useCallback(e => 2 === e && a ? 40 : 0, [a]),
      getListItemHeight: _
    }
  }({
    listRef: Z,
    hasActiveThreads: D,
    threadIdsBySection: eR,
    listViewCardHeights: o,
    editorHeight: l,
    editorAdditionRowHeight: i,
    renderSectionOrItem: eP,
    goToThread: eb,
    observePostVisibilityAnalytics: Q,
    isShowingSearchResult: ea
  }), eB = n.useRef(null), {
    updateMasonryListScrollerRef: eG,
    getItemKey: eV,
    renderGridSection: ez,
    renderGridItem: eW,
    getGridSectionHeight: eK,
    getSectionProps: eY,
    handleGridFocus: eX
  } = function(e) {
    let {
      masonryListScrollerRef: t,
      threadIdsBySection: a,
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
      }), h.current = eT(a)
    }, [t, h]), _ = n.useCallback(e => {
      let t = eT(e);
      if (null == t) return;
      let a = b.default.getChannel(t);
      null != a && l(a, !0)
    }, [l]), p = n.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (0 === a[e].length) return "section-".concat(e, "-").concat(t);
      {
        let s = a[e][t];
        return null == s ? ep(e, t) : ep(e, s)
      }
    }, [a]), T = n.useCallback((e, t, a) => i(e, t, e_({
      section: e,
      coords: t,
      key: a,
      isShowingSearchResult: u,
      hasActiveThreads: o
    })), [i, o, u]), S = n.useCallback(e => 0 === e ? {} : {
      role: "grid",
      "aria-labelledby": "#".concat(eg(e))
    }, []), E = n.useCallback((e, t, n, i, o) => {
      if (0 === e) return null;
      let u = a[e][t];
      return null != u ? (0, s.jsx)(et.default, {
        id: "".concat(i),
        threadId: u,
        className: r()(em.card, em.mainCard),
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
        className: r()(em.loadingCard, em["loadingCard-".concat(t % 3)])
      }, i)
    }, [a, l, m]);
    return {
      updateMasonryListScrollerRef: x,
      masonryListContainerRef: g,
      focusedThreadId: h,
      handleGridFocus: C,
      handleGridSelect: _,
      getItemKey: p,
      renderGridSection: T,
      renderGridItem: E,
      getSectionProps: S,
      getGridSectionHeight: n.useCallback(e => 0 === e ? f - 8 - 24 : 2 === e ? o || !c ? 40 : 0 : 1 === e && u && !d ? 40 : 0, [f, u, d, o, c])
    }
  }({
    masonryListScrollerRef: eB,
    threadIdsBySection: eR,
    goToThread: eb,
    renderSectionOrItem: eP,
    hasActiveThreads: D,
    isShowingSearchResult: ea,
    canSearchForumPosts: H,
    canViewArchivedPosts: V,
    observePostVisibilityAnalytics: Q,
    focusedThreadId: es,
    headerHeight: eL
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
          if (null == R.default.getSidebarState(i)) {
            r.current = null;
            return
          }
          let a = l.findIndex(t => t.find(t => t === e)),
            s = t.current.getCoordsMap(),
            n = s["__section__".concat(a)],
            o = s[ep(a, e)];
          null != n && null != o && t.current.scrollIntoViewRect({
            start: n.top + o.top - 100,
            end: n.top + o.top + o.height + 50
          })
        }, 500);
        return () => clearTimeout(e)
      }
    }, [i, a, s, l, r, t])
  }({
    masonryListScrollerRef: eB,
    containerWidth: eh,
    isGridLayout: ee,
    threadIdsBySection: eR,
    parentId: t.id,
    focusedThreadId: es
  });
  let eq = n.useCallback(() => {
      var e, a;
      if (ea) return;
      let s = ee ? null === (e = eB.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (a = Z.current) || void 0 === a ? void 0 : a.getScrollerState();
      if (null == s) return;
      (0, X.trackForumScrolled)({
        guildId: t.guild_id,
        channelId: t.id
      });
      let n = s.scrollTop + s.offsetHeight,
        l = s.scrollHeight - n;
      l < (ee ? Math.max(200, (0, en.getGridPostHeight)(eh)) : 200) && S()
    }, [ea, ee, t.guild_id, t.id, eh, S]),
    eZ = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
    eQ = (0, ei.default)({
      id: "forum-grid-view",
      isEnabled: ee && eZ,
      setFocus: eX
    }),
    eJ = (0, eo.default)({
      listRef: Z,
      padding: 96,
      isEnabled: !ee && eZ,
      channel: t
    }),
    {
      ref: e$,
      ...e0
    } = eQ.containerProps,
    e1 = R.default.getSidebarState(t.id),
    e4 = null != e1 && (0, R.isViewChannelSidebar)(e1);
  return (0, s.jsx)("div", {
    className: em.container,
    ref: el,
    children: (0, s.jsx)(g.FocusJumpSection, {
      children: e => (0, s.jsxs)(s.Fragment, {
        children: [c && (0, s.jsx)(x.default, {
          channel: t,
          draftType: L.DraftType.FirstThreadMessage,
          className: em.uploadArea,
          style: {
            right: e4 && (null == a ? void 0 : a.isThreadSidebarFloating) ? a.threadSidebarWidth : 0
          }
        }), (0, s.jsx)(eM, {
          channel: t
        }), (0, s.jsx)(g.HiddenVisually, {
          children: (0, s.jsx)(g.H, {
            children: ec.default.Messages.THREADS
          })
        }), U ? (0, s.jsx)("div", {
          className: em.optInNotice,
          children: (0, s.jsx)(M.default, {
            channel: t
          })
        }) : null, ee ? (0, s.jsx)(ei.GridNavigatorProvider, {
          navigator: eQ,
          children: (0, s.jsx)(g.MasonryList, {
            ref: e => {
              var t;
              e$.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eG(e)
            },
            itemGutter: 16,
            padding: 24,
            className: em.grid,
            columns: eC,
            sections: eO,
            getItemKey: eV,
            getSectionHeight: eK,
            getItemHeight: ex,
            renderSection: ez,
            renderItem: eW,
            getSectionProps: eY,
            onScroll: T ? eq : void 0,
            chunkSize: 350,
            ...e0,
            ...e
          }, y)
        }) : (0, s.jsx)(d.ListNavigatorProvider, {
          navigator: eJ,
          children: (0, s.jsx)(d.ListNavigatorContainer, {
            children: t => {
              let {
                ref: a,
                ...n
              } = t;
              return (0, s.jsx)(g.ListAuto, {
                ref: eD(a),
                className: em.list,
                sections: eO,
                sectionHeight: ek,
                rowHeight: eH,
                renderRow: eU,
                renderSection: ew,
                chunkSize: 150,
                onScroll: T ? eq : void 0,
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

function eE(e) {
  let {
    channel: t,
    coords: a
  } = e, n = (0, p.default)(t);
  return (0, s.jsx)("div", {
    className: r()(em.missingReadHistoryPermission, em.columnsSpan),
    style: a,
    children: (0, s.jsx)(g.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: ec.default.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
        channelName: n
      })
    })
  })
}

function eN(e) {
  let {
    channel: t,
    coords: a
  } = e, n = (0, p.default)(t);
  return (0, s.jsx)("div", {
    className: r()(em.missingReadHistoryPermission, em.columnsSpan),
    style: a,
    children: (0, s.jsx)(g.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: ec.default.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
        channelName: n
      })
    })
  })
}

function eM(e) {
  let {
    channel: t
  } = e, a = n.useCallback(() => {
    G.default.resort(t.id)
  }, [t]), l = (0, h.useStateFromStores)([V.default], () => V.default.getNewThreadCount());
  return 0 === l ? null : (0, s.jsx)(g.Clickable, {
    className: em.newPostsButton,
    onClick: a,
    children: (0, s.jsx)(g.Text, {
      color: "text-brand",
      variant: "text-md/medium",
      children: ec.default.Messages.NEW_FORUM_POST_COUNT.format({
        count: l
      })
    })
  })
}

function eA() {
  return Promise.resolve()
}

function ev(e) {
  var t, a, l;
  let {
    channel: i,
    isEmpty: x,
    isSearchLoading: p,
    numResults: N,
    children: M,
    coords: A,
    onHeightChange: v
  } = e, {
    name: I,
    formOpen: O,
    titleFocused: R,
    hasClickedForm: b,
    textAreaState: U,
    onboardingExpanded: B,
    setEditorAdditionRowHeight: V
  } = (0, $.useForumPostComposerStore)(e => {
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
  }, u.default), {
    tagFilter: K,
    layoutType: Y
  } = (0, z.useForumChannelStore)(i.id), q = (0, $.useForumPostComposerStoreApi)(), J = (0, z.useForumChannelStoreApi)(), et = (0, h.useStateFromStores)([F.default], () => F.default.canChatInGuild(i.guild_id)), ea = (0, W.useCanManageChannel)(i), en = (0, j.useCanStartThread)(i), [er, ei] = n.useState(en), [, eo] = (0, S.useCurrentUserCommunicationDisabled)(null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0), ed = et && (en || er && eo), eh = i.isMediaChannel();
  n.useEffect(() => {
    en && ei(!0)
  }, [en]);
  let {
    ref: ef,
    height: eg
  } = (0, C.default)();
  n.useEffect(() => {
    null != eg && v(eg)
  }, [v, eg]);
  let ex = n.useCallback(() => {
    o()(() => {
      null != ef.current && q.getState().setEditorHeight(ef.current.offsetHeight)
    })
  }, [ef, q]);
  n.useLayoutEffect(ex, [ex, x, ed, B]), (0, H.useComponentAction)({
    event: eu.ComponentActions.REMEASURE_TARGET,
    handler: ex
  });
  let eC = (0, h.useStateFromStores)([P.default], () => P.default.getUploads(i.id, L.DraftType.FirstThreadMessage)),
    e_ = (0, W.useChannelTemplate)(i),
    ep = n.useRef(null),
    eT = n.useRef(null),
    [eS, eE] = n.useState(0),
    {
      width: eN
    } = (0, h.useStateFromStores)([y.default], () => y.default.windowSize()),
    eM = null === (a = ep.current) || void 0 === a ? void 0 : null === (t = a.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
    ev = n.useRef(null);
  n.useLayoutEffect(() => {
    var e;
    let t = eT.current,
      a = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
    if (null != ep.current && null != a && null != a.children) {
      let {
        left: e,
        top: t
      } = ep.current.getBoundingClientRect(), s = 0;
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
  let ej = I.length > 0 && !O && (p || null != N),
    eO = !__OVERLAY__ && !b && !O && R && (0 === U.textValue.trim().length || U.textValue.trim() === e_) && 0 === eC.length;
  n.useLayoutEffect(() => {
    let e = ej || eO;
    if (!e) return V(0);
    null != ev.current && V(e ? ev.current.clientHeight : 0)
  }, [V, ej, eO, ev]);
  let eR = e => {
      (0, X.trackForumTagFilterClicked)({
        guildId: i.guild_id,
        channelId: i.id,
        tagId: e,
        filterTagIds: Array.from(K),
        added: !K.has(e),
        location: {
          page: eu.AnalyticsPages.GUILD_CHANNEL,
          section: eu.AnalyticsSections.FORUM_CHANNEL_HEADER,
          object: eu.AnalyticsObjects.CHANNEL_TAG
        }
      }), J.getState().toggleTagFilter(i.id, e)
    },
    eb = (0, d.default)({
      id: "".concat(i.id, "-tags-navigator"),
      isEnabled: !0,
      wrap: !0,
      scrollToStart: eA,
      scrollToEnd: eA,
      orientation: c.Orientations.HORIZONTAL
    }),
    {
      role: eL,
      onFocus: eF,
      ...eP
    } = (0, d.useListItem)("forum-channel-header"),
    ey = n.useRef(null),
    eD = function() {
      let e = n.useRef(!1),
        t = (0, h.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled),
        a = n.useCallback(t => {
          e.current = t.shiftKey
        }, [e]);
      return n.useLayoutEffect(() => (t ? window.addEventListener("keydown", a) : window.removeEventListener("keydown", a), () => window.removeEventListener("keydown", a)), [t, a]), e
    }(),
    ew = n.useCallback(e => {
      if (eF(e), e.target === ef.current && !eD.current) {
        var t;
        null === (t = ey.current) || void 0 === t || t.focus()
      }
    }, [eF, ef, eD]);
  return (0, s.jsx)("div", {
    className: r()(em.card, em.headerRow, em.columnsSpan),
    ref: ef,
    onFocus: ew,
    ...eP,
    style: {
      ...A,
      position: "static",
      height: "auto"
    },
    children: (0, s.jsxs)(H.ComponentDispatchGroupProvider, {
      children: [null != i.guild_id ? (0, s.jsx)(E.default, {
        className: r()(em.newMemberBanner, {
          [em.gridViewBanner]: Y === m.ForumLayout.GRID
        }),
        guildId: i.guild_id,
        channel: i
      }) : null, (0, s.jsx)("div", {
        className: r()(em.mainCard, em.header, {
          [em.headerWithMatchingPosts]: ej || eO
        }),
        children: (0, s.jsx)(ee.default, {
          parentChannel: i,
          onChange: ex,
          isSearchLoading: p,
          canCreatePost: ed,
          inputRef: ey
        })
      }), (ej || eO) && (0, s.jsxs)("div", {
        className: em.matchingPostsRow,
        ref: ev,
        children: [ej && (0, s.jsxs)("div", {
          className: em.matchingPosts,
          children: [(0, s.jsx)(g.Heading, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: p ? ec.default.Messages.FORUM_SEARCHING : 0 === N ? ec.default.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : ec.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
              numPosts: N,
              query: I
            })
          }), !p && (0, s.jsx)(g.Clickable, {
            onClick: () => {
              (0, X.trackForumSearchCleared)({
                guildId: i.guild_id,
                channelId: i.id
              }), G.default.clearForumSearch(i.id), q.getState().setName("")
            },
            children: (0, s.jsx)(g.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              className: em.clear,
              children: ec.default.Messages.CLEAR
            })
          })]
        }), (0, s.jsx)("div", {
          className: em.tagsSpacer
        }), eO ? ed ? (0, s.jsxs)("div", {
          className: em.startPostHelp,
          children: [(0, s.jsx)(g.KeyCombo, {
            shortcut: "SHIFT",
            className: em.keyboardShortcut
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: "+"
          }), (0, s.jsx)(g.KeyCombo, {
            shortcut: "ENTER",
            className: em.keyboardShortcut
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: ec.default.Messages.FORUM_ENTER_TO_START_POST
          })]
        }) : (0, s.jsxs)("div", {
          className: em.startPostHelp,
          children: [(0, s.jsx)(k.default, {
            height: 14,
            width: 14,
            className: em.warnIcon
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: ec.default.Messages.FORUM_NO_POST_PERMISSION_HELP
          })]
        }) : null]
      }), (0, s.jsx)(Z.default, {
        channel: i,
        onChange: ex
      }), (0, s.jsxs)("div", {
        className: em.tagsContainer,
        ref: ep,
        children: [(0, s.jsx)(eI, {
          channel: i
        }), i.availableTags.length > 0 ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: em.divider
          }), (0, s.jsx)("div", {
            className: em.tagList,
            ref: eT,
            children: (0, s.jsx)(d.ListNavigatorProvider, {
              navigator: eb,
              children: (0, s.jsx)(d.ListNavigatorContainer, {
                children: e => {
                  let {
                    ref: t,
                    ...a
                  } = e;
                  return (0, s.jsx)("div", {
                    className: em.tagListInner,
                    ref: t,
                    ...a,
                    children: i.availableTags.map(e => (0, s.jsx)(es.default, {
                      className: em.tag,
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
              return (0, s.jsx)(el.default, {
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
                className: r()(em.tagsButton, {
                  [em.tagsButtonWithCount]: K.size > 0
                }),
                style: {
                  left: eS
                },
                innerClassName: em.tagsButtonInner,
                "aria-label": K.size > 0 ? ec.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : ec.default.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                children: [K.size > 0 ? (0, s.jsx)("div", {
                  className: em.countContainer,
                  children: (0, s.jsx)(g.Text, {
                    className: em.countText,
                    color: "none",
                    variant: "text-xs/medium",
                    children: K.size
                  })
                }) : ec.default.Messages.FORUM_TAG_ALL, a ? (0, s.jsx)(w.default, {
                  width: 20
                }) : (0, s.jsx)(D.default, {
                  width: 20
                })]
              })
            }
          }), (0, s.jsxs)(g.Button, {
            size: g.Button.Sizes.MIN,
            color: g.Button.Colors.CUSTOM,
            className: r()(em.tagsButton, em.tagsButtonPlaceholder),
            innerClassName: em.tagsButtonInner,
            "aria-label": ec.default.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
            children: [K.size > 0 ? (0, s.jsx)("div", {
              className: em.countContainer,
              children: (0, s.jsx)(g.Text, {
                className: em.countText,
                color: "none",
                variant: "text-xs/medium",
                children: K.size
              })
            }) : null, (0, s.jsx)(w.default, {
              width: 24
            })]
          })]
        }) : null]
      }), M, ea && !eh && (0, s.jsx)(T.default, {
        contentTypes: [f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD],
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: a
          } = e;
          return t === f.DismissibleContent.FORUM_CHANNEL_HELPER_CARD ? (0, s.jsx)(Q.default, {
            onDismiss: a
          }) : null
        }
      })]
    })
  }, "create-form")
}

function eI(e) {
  let {
    channel: t
  } = e, a = t.isMediaChannel();
  return (0, s.jsx)(g.Popout, {
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, s.jsx)(ea.default, {
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
        className: em.sortDropdown,
        innerClassName: em.sortDropdownInner,
        "aria-label": a ? ec.default.Messages.MEDIA_CHANNEL_SORT : ec.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
        children: [(0, s.jsx)(U.default, {}), (0, s.jsx)(g.Text, {
          className: em.sortDropdownText,
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: a ? ec.default.Messages.MEDIA_CHANNEL_SORT : ec.default.Messages.FORUM_CHANNEL_SORT_AND_VIEW
        }), n ? (0, s.jsx)(w.default, {
          width: 20
        }) : (0, s.jsx)(D.default, {
          width: 20
        })]
      })
    }
  })
}