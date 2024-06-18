"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eg
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(196434),
  o = n.n(r),
  c = n(143927),
  d = n(91192),
  u = n(924826),
  h = n(536895),
  m = n(313361),
  g = n(442837),
  x = n(704215),
  _ = n(481060),
  f = n(561472),
  E = n(393238),
  N = n(607070),
  T = n(933557),
  C = n(243778),
  p = n(71619),
  v = n(898188),
  M = n(256413),
  S = n(292853),
  I = n(359110),
  j = n(344185),
  A = n(235449),
  R = n(665906),
  Z = n(488131),
  O = n(433355),
  b = n(592125),
  L = n(703558),
  P = n(607744),
  D = n(117530),
  y = n(451478),
  H = n(86813),
  w = n(826026),
  F = n(135163),
  U = n(759231),
  k = n(459273),
  B = n(961675),
  G = n(883429),
  V = n(238349),
  z = n(109434),
  W = n(456269),
  q = n(90372),
  K = n(985518),
  Y = n(228392),
  X = n(355589),
  J = n(542581),
  Q = n(639184),
  $ = n(404616),
  ee = n(470623),
  et = n(749913),
  en = n(219664),
  es = n(895932),
  el = n(479099),
  ea = n(510060),
  ei = n(276357),
  er = n(81490),
  eo = n(482062),
  ec = n(260503),
  ed = n(981631),
  eu = n(124368),
  eh = n(689938),
  em = n(993772);

function eg(e) {
  let {
    channel: t,
    guild: n,
    sidebarState: l
  } = e;
  return (0, s.jsx)(ee.oL, {
    createStore: () => (0, ee.NU)(t),
    children: (0, s.jsx)(ep, {
      channel: t,
      guild: n,
      sidebarState: l
    })
  }, t.id)
}
let ex = new ea.Me({
  minWidth: 320,
  maxWidth: 450,
  gap: 16
});

function e_(e) {
  return "forum-grid-header-section-".concat(e)
}
let ef = (e, t, n) => 0 === e ? 0 : (0, ea.KW)(n);

function eE(e) {
  let {
    itemRole: t,
    coords: n,
    section: l
  } = e;
  return (0, s.jsx)("div", {
    className: i()(em.card, em.archivedDividerRow, em.columnsSpan),
    style: n,
    "data-item-role": t,
    children: (0, s.jsx)("div", {
      className: em.emptyMainCard,
      children: (0, s.jsx)(_.Heading, {
        variant: "eyebrow",
        className: em.archivedDivider,
        id: e_(l),
        children: eh.Z.Messages.FORUM_SECTION_ARCHIVED
      })
    })
  }, "section-divider")
}

function eN(e) {
  let {
    section: t,
    coords: n,
    key: l,
    isShowingSearchResult: a,
    hasActiveThreads: i
  } = e;
  return () => 2 === t && !a && i ? (0, s.jsx)(eE, {
    section: t,
    coords: null == n ? void 0 : {
      ...n,
      position: "absolute"
    },
    itemRole: "section"
  }, l) : null
}

function eT(e, t) {
  return "card-".concat(e, "-").concat(t)
}

function eC(e) {
  if ("string" == typeof e) {
    let t = e.match(/card-{\d+}-({\d+})$/);
    return null == t ? null : t[1]
  }
  return null
}

function ep(e) {
  let {
    channel: t,
    sidebarState: n
  } = e, {
    editorHeight: a,
    editorAdditionRowHeight: r,
    listViewCardHeights: o,
    formOpen: u
  } = (0, ee.xH)(e => {
    let {
      editorHeight: t,
      editorAdditionRowHeight: n,
      listViewCardHeights: s,
      formOpen: l,
      cardHeightVersion: a
    } = e;
    return {
      editorHeight: t,
      editorAdditionRowHeight: n,
      listViewCardHeights: s,
      formOpen: l,
      cardHeightVersion: a
    }
  }, c.Z), {
    activeThreadIds: h,
    archivedThreadIds: x,
    searchResults: E,
    canLoadMore: T,
    loadMore: C,
    activeThreadsLoading: p,
    archivedThreadsLoading: v,
    loading: R,
    isSearchLoading: P,
    layoutType: D
  } = function(e) {
    let {
      sortOrder: t,
      tagFilter: n,
      layoutType: s
    } = (0, z.H)(e.id), l = (0, W.vP)({
      channel: e,
      sortOrder: t,
      tagFilter: n,
      shouldAutomaticallyAck: !0
    }), a = (0, g.e7)([j.Z], () => !j.Z.hasLoaded(e.guild_id)), {
      threadIds: i,
      canLoadMore: r,
      loadMore: o,
      loading: c
    } = (0, A.qQ)(e, t, n), {
      searchResults: d,
      isSearchLoading: u
    } = (0, W.XZ)({
      channelId: e.id
    });
    return (0, W.ES)(e, t, n), {
      activeThreadIds: l,
      archivedThreadIds: i,
      searchResults: d,
      canLoadMore: r,
      loadMore: o,
      loading: a || c || u,
      archivedThreadsLoading: c,
      activeThreadsLoading: a,
      isSearchLoading: u,
      layoutType: s
    }
  }(t), y = h.length > 0, H = y || x.length > 0, w = (0, M.Z)(t), {
    tagFilter: F
  } = (0, z.H)(t.id);
  (0, W.ku)(t, F, u);
  let U = (0, W.jR)(t),
    k = (0, W.eZ)(t),
    V = l.useRef(null),
    {
      observePostVisibilityAnalytics: J
    } = function(e) {
      let {
        guildId: t,
        channelId: n,
        scrollerRef: s
      } = e;
      q.Z.useForumChannelSeenManager({
        guildId: t,
        channelId: n
      });
      let a = l.useRef(null),
        i = l.useCallback((e, t) => {
          for (let n of t) {
            let t = n.target.dataset.itemId;
            if (null == t) return;
            let s = Date.now();
            n.intersectionRatio >= .5 ? (0, K.rj)(e, t, s) : (0, K.Ct)(e, t, s)
          }
        }, []);
      return l.useEffect(() => {
        var e;
        let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerNode();
        if (null != t) return a.current = new IntersectionObserver(e => i(n, e), {
          root: t,
          rootMargin: "0px 100000px 0px 100000px",
          threshold: .5
        }), () => {
          var e;
          null === (e = a.current) || void 0 === e || e.disconnect(), a.current = null
        }
      }, [n, i, s]), {
        observePostVisibilityAnalytics: l.useCallback((e, t) => {
          var s;
          if (null == e) {
            (0, K.Ct)(n, t, Date.now());
            return
          }
          null === (s = a.current) || void 0 === s || s.observe(e)
        }, [n])
      }
    }({
      scrollerRef: V,
      channelId: t.id,
      guildId: t.guild_id
    }),
    Q = D === m.X.GRID,
    et = null != E,
    es = l.useRef(null),
    {
      containerRef: el,
      containerWidth: ei
    } = (0, er.Z)();
  l.useEffect(() => () => {
    null != t.id && G.Z.clearForumSearch(t.id)
  }, [t.id]);
  let {
    columns: eg
  } = l.useMemo(() => Q ? ex.getRenderOptions(ei) : ea.eU, [Q, ei]), eE = l.useMemo(() => R ? Math.round((window.innerHeight - 200) / 118) : 0, [R]), ep = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, ea.KW)(ex.getWidth(ei))) * eg;
    return p ? e : 0
  }, [ei, eg, p]), eI = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, ea.KW)(ex.getWidth(ei))) * eg;
    return v ? e : 0
  }, [ei, eg, v]), eA = l.useMemo(() => {
    let e = Math.ceil(window.innerHeight / (0, ea.KW)(ex.getWidth(ei))) * eg;
    return P && et ? e : 0
  }, [ei, eg, P, et]), eR = l.useMemo(() => {
    if (Q) {
      if (!U && et) return [1, 0];
      if (!k) return [1, h.length + ep, 0];
      else if (et) return [1, E.length + eA, 0];
      else return [1, h.length + ep, x.length + eI]
    }
    if (!U && et) return [1, 1];
    if (!k) return [1, h.length, 1];
    else if (et) return [1, E.length, 0, eE];
    else return [1, h.length, x.length, eE]
  }, [Q, et, h.length, x.length, U, k, eE, E, ep, eI, eA]), eZ = l.useMemo(() => {
    if (!U && et) return [
      [],
      []
    ];
    if (!k) return [
      [], h, []
    ];
    if (et) return [
      [], E, [],
      []
    ];
    else return [
      [], h, x, []
    ]
  }, [et, U, k, E, h, x]), eO = l.useCallback((e, n) => {
    (0, Y.B5)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: e.id,
      location: {
        page: ed.ZY5.GUILD_CHANNEL,
        section: ed.jXE.FORUM_CHANNEL_POST
      }
    }), n ? (0, I.ad)(e, eu.on.BROWSER) : (es.current = e.id, (0, Z.ok)(e))
  }, [t.guild_id, t.id, es]), [eb, eL] = l.useState(a + r - 24), eP = l.useCallback((e, n, l) => 0 === e ? (0, s.jsx)(ej, {
    channel: t,
    isEmpty: !y,
    isSearchLoading: P,
    numResults: null == E ? void 0 : E.length,
    coords: n,
    onHeightChange: eL,
    children: !R && (0, s.jsx)(X.Z, {
      channel: t,
      hasAnyThread: H
    }, t.id)
  }, "forum-channel-header") : 2 !== e || k ? 1 === e && et && !U ? (0, s.jsx)(eM, {
    channel: t,
    coords: n
  }, "archive-or-search-result") : l() : (0, s.jsx)(ev, {
    channel: t,
    coords: n
  }, "archived-missing-reading-history-perm"), [et, k, E, U, t, y, P, R, H]), eD = (0, g.e7)([B.Z], () => B.Z.hasHidden(t.id));
  l.useEffect(() => {
    var e, t;
    let n = Q ? ek : V,
      s = null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState();
    null != s && !eD && s.scrollTop > a && (null === (t = n.current) || void 0 === t || t.scrollTo({
      to: 0
    }))
  }, [eD]);
  let {
    updateListScrollerRef: ey,
    renderListSection: eH,
    renderListItem: ew,
    getListSectionHeight: eF,
    getListItemHeight: eU
  } = function(e) {
    let {
      listRef: t,
      hasActiveThreads: n,
      threadIdsBySection: a,
      listViewCardHeights: r,
      editorHeight: o,
      editorAdditionRowHeight: c,
      renderSectionOrItem: d,
      goToThread: u,
      observePostVisibilityAnalytics: h,
      isShowingSearchResult: m
    } = e, g = l.useCallback(e => n => {
      var s;
      t.current = n, e.current = null !== (s = null == n ? void 0 : n.getScrollerNode()) && void 0 !== s ? s : null
    }, [t]), x = l.useCallback(e => eN({
      section: e.section,
      isShowingSearchResult: m,
      hasActiveThreads: n
    })(), [n, m]), f = l.useCallback(e => d(e.section, void 0, () => {
      if (3 === e.section) return __OVERLAY__ ? null : (0, s.jsx)("div", {
        "data-item-role": "item",
        className: i()(em.loadingCard, em["loadingCard-".concat(e.row % 3)])
      }, "loading-".concat(e.row));
      let t = a[e.section][e.row];
      return (0, s.jsx)("li", {
        className: em.card,
        "data-item-role": "item",
        children: (0, s.jsx)(_.HeadingLevel, {
          children: (0, s.jsx)($.ZP, {
            className: em.mainCard,
            threadId: t,
            goToThread: u,
            observePostVisibilityAnalytics: h
          })
        })
      }, "".concat(e.section, "-").concat(t))
    }), [d, a, u, h]), E = l.useCallback((e, t) => {
      if (0 === e) return o + c;
      let n = r[a[e][t]];
      return null == n ? 104 : n + 8
    }, [a, r, o, c]);
    return {
      updateListScrollerRef: g,
      renderListSection: x,
      renderListItem: f,
      getListSectionHeight: l.useCallback(e => 2 === e && n ? 40 : 0, [n]),
      getListItemHeight: E
    }
  }({
    listRef: V,
    hasActiveThreads: y,
    threadIdsBySection: eZ,
    listViewCardHeights: o,
    editorHeight: a,
    editorAdditionRowHeight: r,
    renderSectionOrItem: eP,
    goToThread: eO,
    observePostVisibilityAnalytics: J,
    isShowingSearchResult: et
  }), ek = l.useRef(null), {
    updateMasonryListScrollerRef: eB,
    getItemKey: eG,
    renderGridSection: eV,
    renderGridItem: ez,
    getGridSectionHeight: eW,
    getSectionProps: eq,
    handleGridFocus: eK
  } = function(e) {
    let {
      masonryListScrollerRef: t,
      threadIdsBySection: n,
      goToThread: a,
      renderSectionOrItem: r,
      hasActiveThreads: o,
      isShowingSearchResult: c,
      canSearchForumPosts: d,
      canViewArchivedPosts: u,
      observePostVisibilityAnalytics: h,
      focusedThreadId: m,
      headerHeight: g
    } = e, x = l.useRef(null), _ = l.useCallback(e => {
      t.current = e, x.current = null == e ? void 0 : e.getScrollerNode()
    }, [t]), f = l.useCallback((e, n) => {
      let {
        current: s
      } = t;
      if (null == s) return;
      let l = document.querySelector(e);
      if (null == l) return;
      let a = s.getCoordsMap()[n],
        i = null != a ? a.height + 20 : 200;
      s.scrollIntoViewNode({
        node: l,
        padding: i,
        callback() {
          requestAnimationFrame(() => {
            var t;
            null === (t = document.querySelector(e)) || void 0 === t || t.focus({
              preventScroll: !0
            })
          })
        }
      }), m.current = eC(n)
    }, [t, m]), E = l.useCallback(e => {
      let t = eC(e);
      if (null == t) return;
      let n = b.Z.getChannel(t);
      null != n && a(n, !0)
    }, [a]), N = l.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
      {
        let s = n[e][t];
        return null == s ? eT(e, t) : eT(e, s)
      }
    }, [n]), T = l.useCallback((e, t, n) => r(e, t, eN({
      section: e,
      coords: t,
      key: n,
      isShowingSearchResult: c,
      hasActiveThreads: o
    })), [r, o, c]), C = l.useCallback(e => 0 === e ? {} : {
      role: "grid",
      "aria-labelledby": "#".concat(e_(e))
    }, []), p = l.useCallback((e, t, l, r, o) => {
      if (0 === e) return null;
      let c = n[e][t];
      return null != c ? (0, s.jsx)(en.Z, {
        id: "".concat(r),
        threadId: c,
        className: i()(em.card, em.mainCard),
        goToThread: a,
        observePostVisibilityAnalytics: h,
        coords: l,
        gridCoords: o.coordinates[r],
        gridSectionBoundaries: o.boundaries
      }, r) : __OVERLAY__ ? null : (0, s.jsx)("div", {
        style: {
          ...l
        },
        "data-item-role": "item",
        className: i()(em.loadingCard, em["loadingCard-".concat(t % 3)])
      }, r)
    }, [n, a, h]);
    return {
      updateMasonryListScrollerRef: _,
      masonryListContainerRef: x,
      focusedThreadId: m,
      handleGridFocus: f,
      handleGridSelect: E,
      getItemKey: N,
      renderGridSection: T,
      renderGridItem: p,
      getSectionProps: C,
      getGridSectionHeight: l.useCallback(e => 0 === e ? g - 8 - 24 : 2 === e ? o || !u ? 40 : 0 : 1 === e && c && !d ? 40 : 0, [g, c, d, o, u])
    }
  }({
    masonryListScrollerRef: ek,
    threadIdsBySection: eZ,
    goToThread: eO,
    renderSectionOrItem: eP,
    hasActiveThreads: y,
    isShowingSearchResult: et,
    canSearchForumPosts: U,
    canViewArchivedPosts: k,
    observePostVisibilityAnalytics: J,
    focusedThreadId: es,
    headerHeight: eb
  });
  ! function(e) {
    let {
      masonryListScrollerRef: t,
      containerWidth: n,
      isGridLayout: s,
      threadIdsBySection: a,
      focusedThreadId: i,
      parentId: r
    } = e;
    l.useEffect(() => {
      if (s) {
        let e = setTimeout(() => {
          if (null == t.current || null == i.current) return;
          let e = i.current;
          if ("string" != typeof e) return;
          if (null == O.ZP.getSidebarState(r)) {
            i.current = null;
            return
          }
          let n = a.findIndex(t => t.find(t => t === e)),
            s = t.current.getCoordsMap(),
            l = s["__section__".concat(n)],
            o = s[eT(n, e)];
          null != l && null != o && t.current.scrollIntoViewRect({
            start: l.top + o.top - 100,
            end: l.top + o.top + o.height + 50
          })
        }, 500);
        return () => clearTimeout(e)
      }
    }, [r, n, s, a, i, t])
  }({
    masonryListScrollerRef: ek,
    containerWidth: ei,
    isGridLayout: Q,
    threadIdsBySection: eZ,
    parentId: t.id,
    focusedThreadId: es
  });
  let eY = l.useCallback(() => {
      var e, n;
      if (et) return;
      let s = Q ? null === (e = ek.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (n = V.current) || void 0 === n ? void 0 : n.getScrollerState();
      if (null == s) return;
      (0, Y.ab)({
        guildId: t.guild_id,
        channelId: t.id
      });
      let l = s.scrollTop + s.offsetHeight,
        a = s.scrollHeight - l;
      a < (Q ? Math.max(200, (0, ea.KW)(ei)) : 200) && C()
    }, [et, Q, t.guild_id, t.id, ei, C]),
    eX = (0, g.e7)([N.Z], () => N.Z.keyboardModeEnabled),
    eJ = (0, eo.ZP)({
      id: "forum-grid-view",
      isEnabled: Q && eX,
      setFocus: eK
    }),
    eQ = (0, ec.Z)({
      listRef: V,
      padding: 96,
      isEnabled: !Q && eX,
      channel: t
    }),
    {
      ref: e$,
      ...e0
    } = eJ.containerProps,
    e1 = O.ZP.getSidebarState(t.id),
    e2 = null != e1 && (0, O.D5)(e1);
  return (0, s.jsx)("div", {
    className: em.container,
    ref: el,
    children: (0, s.jsx)(_.FocusJumpSection, {
      children: e => (0, s.jsxs)(s.Fragment, {
        children: [u && (0, s.jsx)(f.Z, {
          channel: t,
          draftType: L.d.FirstThreadMessage,
          className: em.uploadArea,
          style: {
            right: e2 && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0
          }
        }), (0, s.jsx)(eS, {
          channel: t
        }), (0, s.jsx)(_.HiddenVisually, {
          children: (0, s.jsx)(_.H, {
            children: eh.Z.Messages.THREADS
          })
        }), w ? (0, s.jsx)("div", {
          className: em.optInNotice,
          children: (0, s.jsx)(S.Z, {
            channel: t
          })
        }) : null, Q ? (0, s.jsx)(eo.KT, {
          navigator: eJ,
          children: (0, s.jsx)(_.MasonryList, {
            ref: e => {
              var t;
              e$.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eB(e)
            },
            itemGutter: 16,
            padding: 24,
            className: em.grid,
            columns: eg,
            sections: eR,
            getItemKey: eG,
            getSectionHeight: eW,
            getItemHeight: ef,
            renderSection: eV,
            renderItem: ez,
            getSectionProps: eq,
            onScroll: T ? eY : void 0,
            chunkSize: 350,
            ...e0,
            ...e
          }, D)
        }) : (0, s.jsx)(d.bG, {
          navigator: eQ,
          children: (0, s.jsx)(d.SJ, {
            children: t => {
              let {
                ref: n,
                ...l
              } = t;
              return (0, s.jsx)(_.ListAuto, {
                ref: ey(n),
                className: em.list,
                sections: eR,
                sectionHeight: eF,
                rowHeight: eU,
                renderRow: ew,
                renderSection: eH,
                chunkSize: 150,
                onScroll: T ? eY : void 0,
                paddingBottom: 24,
                ...l,
                ...e,
                innerRole: "list"
              }, D)
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
    coords: n
  } = e, l = (0, T.ZP)(t);
  return (0, s.jsx)("div", {
    className: i()(em.missingReadHistoryPermission, em.columnsSpan),
    style: n,
    children: (0, s.jsx)(_.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: eh.Z.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
        channelName: l
      })
    })
  })
}

function eM(e) {
  let {
    channel: t,
    coords: n
  } = e, l = (0, T.ZP)(t);
  return (0, s.jsx)("div", {
    className: i()(em.missingReadHistoryPermission, em.columnsSpan),
    style: n,
    children: (0, s.jsx)(_.Text, {
      color: "text-muted",
      variant: "text-md/normal",
      children: eh.Z.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
        channelName: l
      })
    })
  })
}

function eS(e) {
  let {
    channel: t
  } = e, n = l.useCallback(() => {
    G.Z.resort(t.id)
  }, [t]), a = (0, g.e7)([V.Z], () => V.Z.getNewThreadCount());
  return 0 === a ? null : (0, s.jsx)(_.Clickable, {
    className: em.newPostsButton,
    onClick: n,
    children: (0, s.jsx)(_.Text, {
      color: "text-brand",
      variant: "text-md/medium",
      children: eh.Z.Messages.NEW_FORUM_POST_COUNT.format({
        count: a
      })
    })
  })
}

function eI() {
  return Promise.resolve()
}

function ej(e) {
  var t, n, a;
  let {
    channel: r,
    isEmpty: f,
    isSearchLoading: T,
    numResults: M,
    children: S,
    coords: I,
    onHeightChange: j
  } = e, {
    name: A,
    formOpen: Z,
    titleFocused: O,
    hasClickedForm: b,
    textAreaState: F,
    onboardingExpanded: B,
    setEditorAdditionRowHeight: V
  } = (0, ee.xH)(e => {
    let {
      name: t,
      formOpen: n,
      titleFocused: s,
      hasClickedForm: l,
      textAreaState: a,
      onboardingExpanded: i,
      setEditorAdditionRowHeight: r
    } = e;
    return {
      name: t,
      formOpen: n,
      titleFocused: s,
      hasClickedForm: l,
      textAreaState: a,
      onboardingExpanded: i,
      setEditorAdditionRowHeight: r
    }
  }, c.Z), {
    tagFilter: q,
    layoutType: K
  } = (0, z.H)(r.id), X = (0, ee.AF)(), $ = (0, z.v)(), en = (0, g.e7)([P.Z], () => P.Z.canChatInGuild(r.guild_id)), es = (0, W.r_)(r), ea = (0, R.cD)(r), [er, eo] = l.useState(ea), [, ec] = (0, p.AB)(null !== (a = r.getGuildId()) && void 0 !== a ? a : void 0), eu = en && (ea || er && ec), eg = r.isMediaChannel();
  l.useEffect(() => {
    ea && eo(!0)
  }, [ea]);
  let {
    ref: ex,
    height: e_
  } = (0, E.Z)();
  l.useEffect(() => {
    null != e_ && j(e_)
  }, [j, e_]);
  let ef = l.useCallback(() => {
    o()(() => {
      null != ex.current && X.getState().setEditorHeight(ex.current.offsetHeight)
    })
  }, [ex, X]);
  l.useLayoutEffect(ef, [ef, f, eu, B]), (0, k.yp)({
    event: ed.CkL.REMEASURE_TARGET,
    handler: ef
  });
  let eE = (0, g.e7)([D.Z], () => D.Z.getUploads(r.id, L.d.FirstThreadMessage)),
    eN = (0, W.ql)(r),
    eT = l.useRef(null),
    eC = l.useRef(null),
    [ep, ev] = l.useState(0),
    {
      width: eM
    } = (0, g.e7)([y.Z], () => y.Z.windowSize()),
    eS = null === (n = eT.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
    ej = l.useRef(null);
  l.useLayoutEffect(() => {
    var e;
    let t = eC.current,
      n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
    if (null != eT.current && null != n && null != n.children) {
      let {
        left: e,
        top: t
      } = eT.current.getBoundingClientRect(), s = 0;
      for (let l of n.children) {
        let {
          right: n,
          top: a,
          height: i
        } = l.getBoundingClientRect();
        if (a - t > i) break;
        n - e > s && (s = n - e)
      }
      ev(s)
    }
  }, [r.availableTags, eM, eS, q]);
  let eR = A.length > 0 && !Z && (T || null != M),
    eZ = !__OVERLAY__ && !b && !Z && O && (0 === F.textValue.trim().length || F.textValue.trim() === eN) && 0 === eE.length;
  l.useLayoutEffect(() => {
    let e = eR || eZ;
    if (!e) return V(0);
    null != ej.current && V(e ? ej.current.clientHeight : 0)
  }, [V, eR, eZ, ej]);
  let eO = e => {
      (0, Y.e7)({
        guildId: r.guild_id,
        channelId: r.id,
        tagId: e,
        filterTagIds: Array.from(q),
        added: !q.has(e),
        location: {
          page: ed.ZY5.GUILD_CHANNEL,
          section: ed.jXE.FORUM_CHANNEL_HEADER,
          object: ed.qAy.CHANNEL_TAG
        }
      }), $.getState().toggleTagFilter(r.id, e)
    },
    eb = (0, u.ZP)({
      id: "".concat(r.id, "-tags-navigator"),
      isEnabled: !0,
      wrap: !0,
      scrollToStart: eI,
      scrollToEnd: eI,
      orientation: h.hy.HORIZONTAL
    }),
    {
      role: eL,
      onFocus: eP,
      ...eD
    } = (0, d.JA)("forum-channel-header"),
    ey = l.useRef(null),
    eH = function() {
      let e = l.useRef(!1),
        t = (0, g.e7)([N.Z], () => N.Z.keyboardModeEnabled),
        n = l.useCallback(t => {
          e.current = t.shiftKey
        }, [e]);
      return l.useLayoutEffect(() => (t ? window.addEventListener("keydown", n) : window.removeEventListener("keydown", n), () => window.removeEventListener("keydown", n)), [t, n]), e
    }(),
    ew = l.useCallback(e => {
      if (eP(e), e.target === ex.current && !eH.current) {
        var t;
        null === (t = ey.current) || void 0 === t || t.focus()
      }
    }, [eP, ex, eH]);
  return (0, s.jsx)("div", {
    className: i()(em.card, em.headerRow, em.columnsSpan),
    ref: ex,
    onFocus: ew,
    ...eD,
    style: {
      ...I,
      position: K === m.X.GRID ? "absolute" : "static",
      height: "auto"
    },
    children: (0, s.jsxs)(k.I3, {
      children: [null != r.guild_id ? (0, s.jsx)(v.Z, {
        className: i()(em.newMemberBanner, {
          [em.gridViewBanner]: K === m.X.GRID
        }),
        guildId: r.guild_id,
        channel: r
      }) : null, (0, s.jsx)("div", {
        className: i()(em.mainCard, em.header, {
          [em.headerWithMatchingPosts]: eR || eZ
        }),
        children: (0, s.jsx)(et.Z, {
          parentChannel: r,
          onChange: ef,
          isSearchLoading: T,
          canCreatePost: eu,
          inputRef: ey
        })
      }), (eR || eZ) && (0, s.jsxs)("div", {
        className: em.matchingPostsRow,
        ref: ej,
        children: [eR && (0, s.jsxs)("div", {
          className: em.matchingPosts,
          children: [(0, s.jsx)(_.Heading, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: T ? eh.Z.Messages.FORUM_SEARCHING : 0 === M ? eh.Z.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : eh.Z.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
              numPosts: M,
              query: A
            })
          }), !T && (0, s.jsx)(_.Clickable, {
            onClick: () => {
              (0, Y.zI)({
                guildId: r.guild_id,
                channelId: r.id
              }), G.Z.clearForumSearch(r.id), X.getState().setName("")
            },
            children: (0, s.jsx)(_.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              className: em.clear,
              children: eh.Z.Messages.CLEAR
            })
          })]
        }), (0, s.jsx)("div", {
          className: em.tagsSpacer
        }), eZ ? eu ? (0, s.jsxs)("div", {
          className: em.startPostHelp,
          children: [(0, s.jsx)(_.KeyCombo, {
            shortcut: "SHIFT",
            className: em.keyboardShortcut
          }), (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: "+"
          }), (0, s.jsx)(_.KeyCombo, {
            shortcut: "ENTER",
            className: em.keyboardShortcut
          }), (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: eh.Z.Messages.FORUM_ENTER_TO_START_POST
          })]
        }) : (0, s.jsxs)("div", {
          className: em.startPostHelp,
          children: [(0, s.jsx)(U.Z, {
            height: 14,
            width: 14,
            className: em.warnIcon
          }), (0, s.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            children: eh.Z.Messages.FORUM_NO_POST_PERMISSION_HELP
          })]
        }) : null]
      }), (0, s.jsx)(J.Z, {
        channel: r,
        onChange: ef
      }), (0, s.jsxs)("div", {
        className: em.tagsContainer,
        ref: eT,
        children: [(0, s.jsx)(eA, {
          channel: r
        }), r.availableTags.length > 0 ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: em.divider
          }), (0, s.jsx)("div", {
            className: em.tagList,
            ref: eC,
            children: (0, s.jsx)(d.bG, {
              navigator: eb,
              children: (0, s.jsx)(d.SJ, {
                children: e => {
                  let {
                    ref: t,
                    ...n
                  } = e;
                  return (0, s.jsx)("div", {
                    className: em.tagListInner,
                    ref: t,
                    ...n,
                    children: r.availableTags.map(e => (0, s.jsx)(el.Z, {
                      className: em.tag,
                      tag: e,
                      onClick: () => eO(e.id),
                      selected: q.has(e.id)
                    }, e.id))
                  })
                }
              })
            })
          }), (0, s.jsx)(_.Popout, {
            renderPopout: e => {
              let {
                closePopout: t,
                setPopoutRef: n
              } = e;
              return (0, s.jsx)(ei.Z, {
                channel: r,
                closePopout: t,
                setPopoutRef: n
              })
            },
            position: "bottom",
            align: "right",
            children: (e, t) => {
              let {
                isShown: n
              } = t;
              return (0, s.jsxs)(_.Button, {
                ...e,
                size: _.Button.Sizes.MIN,
                color: _.Button.Colors.CUSTOM,
                className: i()(em.tagsButton, {
                  [em.tagsButtonWithCount]: q.size > 0
                }),
                style: {
                  left: ep
                },
                innerClassName: em.tagsButtonInner,
                "aria-label": q.size > 0 ? eh.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : eh.Z.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                children: [q.size > 0 ? (0, s.jsx)("div", {
                  className: em.countContainer,
                  children: (0, s.jsx)(_.Text, {
                    className: em.countText,
                    color: "none",
                    variant: "text-xs/medium",
                    children: q.size
                  })
                }) : eh.Z.Messages.FORUM_TAG_ALL, n ? (0, s.jsx)(w.Z, {
                  width: 20
                }) : (0, s.jsx)(H.Z, {
                  width: 20
                })]
              })
            }
          }), (0, s.jsxs)(_.Button, {
            size: _.Button.Sizes.MIN,
            color: _.Button.Colors.CUSTOM,
            className: i()(em.tagsButton, em.tagsButtonPlaceholder),
            innerClassName: em.tagsButtonInner,
            "aria-label": eh.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
            children: [q.size > 0 ? (0, s.jsx)("div", {
              className: em.countContainer,
              children: (0, s.jsx)(_.Text, {
                className: em.countText,
                color: "none",
                variant: "text-xs/medium",
                children: q.size
              })
            }) : null, (0, s.jsx)(w.Z, {
              width: 24
            })]
          })]
        }) : null]
      }), S, es && !eg && (0, s.jsx)(C.Z, {
        contentTypes: [x.z.FORUM_CHANNEL_HELPER_CARD],
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          return t === x.z.FORUM_CHANNEL_HELPER_CARD ? (0, s.jsx)(Q.Z, {
            onDismiss: n
          }) : null
        }
      })]
    })
  }, "create-form")
}

function eA(e) {
  let {
    channel: t
  } = e, n = t.isMediaChannel();
  return (0, s.jsx)(_.Popout, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, s.jsx)(es.Z, {
        channel: t,
        closePopout: n
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, s.jsxs)(_.Button, {
        ...e,
        size: _.Button.Sizes.MIN,
        color: _.Button.Colors.CUSTOM,
        className: em.sortDropdown,
        innerClassName: em.sortDropdownInner,
        "aria-label": n ? eh.Z.Messages.MEDIA_CHANNEL_SORT : eh.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
        children: [(0, s.jsx)(F.Z, {}), (0, s.jsx)(_.Text, {
          className: em.sortDropdownText,
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: n ? eh.Z.Messages.MEDIA_CHANNEL_SORT : eh.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW
        }), l ? (0, s.jsx)(w.Z, {
          width: 20
        }) : (0, s.jsx)(H.Z, {
          width: 20
        })]
      })
    }
  })
}