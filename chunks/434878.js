n.r(t), n.d(t, {
  default: function() {
return ed;
  }
}), n(47120);
var a = n(735250),
  s = n(470079),
  r = n(120356),
  l = n.n(r),
  i = n(196434),
  o = n.n(i),
  c = n(143927),
  d = n(91192),
  u = n(924826),
  m = n(536895),
  h = n(313361),
  _ = n(442837),
  g = n(704215),
  x = n(481060),
  f = n(561472),
  C = n(393238),
  p = n(607070),
  T = n(933557),
  I = n(243778),
  E = n(71619),
  N = n(898188),
  b = n(256413),
  v = n(292853),
  S = n(359110),
  M = n(344185),
  A = n(235449),
  j = n(665906),
  R = n(488131),
  O = n(433355),
  Z = n(592125),
  L = n(703558),
  P = n(607744),
  w = n(117530),
  y = n(451478),
  D = n(459273),
  F = n(961675),
  U = n(883429),
  k = n(238349),
  H = n(109434),
  B = n(456269),
  G = n(90372),
  z = n(985518),
  V = n(228392),
  W = n(355589),
  q = n(542581),
  K = n(639184),
  Y = n(404616),
  X = n(470623),
  J = n(749913),
  Q = n(219664),
  $ = n(895932),
  ee = n(479099),
  et = n(510060),
  en = n(276357),
  ea = n(81490),
  es = n(482062),
  er = n(260503),
  el = n(981631),
  ei = n(124368),
  eo = n(689938),
  ec = n(457917);

function ed(e) {
  let {
channel: t,
guild: n,
sidebarState: s
  } = e;
  return (0, a.jsx)(X.oL, {
createStore: () => (0, X.NU)(t),
children: (0, a.jsx)(eC, {
  channel: t,
  guild: n,
  sidebarState: s
})
  }, t.id);
}
let eu = new et.Me({
  minWidth: 320,
  maxWidth: 450,
  gap: 16
});

function em(e) {
  return 'forum-grid-header-section-'.concat(e);
}
let eh = (e, t, n) => 0 === e ? 0 : (0, et.KW)(n);

function e_(e) {
  let {
itemRole: t,
coords: n,
section: s
  } = e;
  return (0, a.jsx)('div', {
className: l()(ec.card, ec.archivedDividerRow, ec.columnsSpan),
style: n,
'data-item-role': t,
children: (0, a.jsx)('div', {
  className: ec.emptyMainCard,
  children: (0, a.jsx)(x.Heading, {
    variant: 'eyebrow',
    className: ec.archivedDivider,
    id: em(s),
    children: eo.Z.Messages.FORUM_SECTION_ARCHIVED
  })
})
  }, 'section-divider');
}

function eg(e) {
  let {
section: t,
coords: n,
key: s,
isShowingSearchResult: r,
hasActiveThreads: l
  } = e;
  return () => 2 === t && !r && l ? (0, a.jsx)(e_, {
section: t,
coords: null == n ? void 0 : {
  ...n,
  position: 'absolute'
},
itemRole: 'section'
  }, s) : null;
}

function ex(e, t) {
  return 'card-'.concat(e, '-').concat(t);
}

function ef(e) {
  if ('string' == typeof e) {
let t = e.match(/card-{\d+}-({\d+})$/);
return null == t ? null : t[1];
  }
  return null;
}

function eC(e) {
  let {
channel: t,
sidebarState: n
  } = e, {
editorHeight: r,
editorAdditionRowHeight: i,
listViewCardHeights: o,
formOpen: u
  } = (0, X.xH)(e => {
let {
  editorHeight: t,
  editorAdditionRowHeight: n,
  listViewCardHeights: a,
  formOpen: s,
  cardHeightVersion: r
} = e;
return {
  editorHeight: t,
  editorAdditionRowHeight: n,
  listViewCardHeights: a,
  formOpen: s,
  cardHeightVersion: r
};
  }, c.Z), {
activeThreadIds: m,
archivedThreadIds: g,
searchResults: C,
canLoadMore: T,
loadMore: I,
activeThreadsLoading: E,
archivedThreadsLoading: N,
loading: j,
isSearchLoading: P,
layoutType: w
  } = function(e) {
let {
  sortOrder: t,
  tagFilter: n,
  layoutType: a
} = (0, H.H)(e.id), s = (0, B.vP)({
  channel: e,
  sortOrder: t,
  tagFilter: n,
  shouldAutomaticallyAck: !0
}), r = (0, _.e7)([M.Z], () => !M.Z.hasLoaded(e.guild_id)), {
  threadIds: l,
  canLoadMore: i,
  loadMore: o,
  loading: c
} = (0, A.qQ)(e, t, n), {
  searchResults: d,
  isSearchLoading: u
} = (0, B.XZ)({
  channelId: e.id
});
return (0, B.ES)(e, t, n), {
  activeThreadIds: s,
  archivedThreadIds: l,
  searchResults: d,
  canLoadMore: i,
  loadMore: o,
  loading: r || c || u,
  archivedThreadsLoading: c,
  activeThreadsLoading: r,
  isSearchLoading: u,
  layoutType: a
};
  }(t), y = m.length > 0, D = y || g.length > 0, k = (0, b.Z)(t), {
tagFilter: q
  } = (0, H.H)(t.id);
  (0, B.ku)(t, q, u);
  let K = (0, B.jR)(t),
J = (0, B.eZ)(t),
$ = s.useRef(null),
{
  observePostVisibilityAnalytics: ee
} = function(e) {
  let {
    guildId: t,
    channelId: n,
    scrollerRef: a
  } = e;
  G.Z.useForumChannelSeenManager({
    guildId: t,
    channelId: n
  });
  let r = s.useRef(null),
    l = s.useCallback((e, t) => {
      for (let n of t) {
        let t = n.target.dataset.itemId;
        if (null == t)
          return;
        let a = Date.now();
        n.intersectionRatio >= 0.5 ? (0, z.rj)(e, t, a) : (0, z.Ct)(e, t, a);
      }
    }, []);
  return s.useEffect(() => {
    var e;
    let t = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerNode();
    if (null != t)
      return r.current = new IntersectionObserver(e => l(n, e), {
        root: t,
        rootMargin: '0px 100000px 0px 100000px',
        threshold: 0.5
      }), () => {
        var e;
        null === (e = r.current) || void 0 === e || e.disconnect(), r.current = null;
      };
  }, [
    n,
    l,
    a
  ]), {
    observePostVisibilityAnalytics: s.useCallback((e, t) => {
      var a;
      if (null == e) {
        (0, z.Ct)(n, t, Date.now());
        return;
      }
      null === (a = r.current) || void 0 === a || a.observe(e);
    }, [n])
  };
}({
  scrollerRef: $,
  channelId: t.id,
  guildId: t.guild_id
}),
en = w === h.X.GRID,
ed = null != C,
e_ = s.useRef(null),
{
  containerRef: eC,
  containerWidth: eE
} = (0, ea.Z)();
  s.useEffect(() => () => {
null != t.id && U.Z.clearForumSearch(t.id);
  }, [t.id]);
  let {
columns: eb
  } = s.useMemo(() => en ? eu.getRenderOptions(eE) : et.eU, [
en,
eE
  ]), ev = s.useMemo(() => j ? Math.round((window.innerHeight - 200) / 118) : 0, [j]), eS = s.useMemo(() => {
let e = Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eE))) * eb;
return E ? e : 0;
  }, [
eE,
eb,
E
  ]), eM = s.useMemo(() => {
let e = Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eE))) * eb;
return N ? e : 0;
  }, [
eE,
eb,
N
  ]), eA = s.useMemo(() => {
let e = Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eE))) * eb;
return P && ed ? e : 0;
  }, [
eE,
eb,
P,
ed
  ]), ej = s.useMemo(() => {
if (en) {
  if (!K && ed)
    return [
      1,
      0
    ];
  if (!J)
    return [
      1,
      m.length + eS,
      0
    ];
  else if (ed)
    return [
      1,
      C.length + eA,
      0
    ];
  else
    return [
      1,
      m.length + eS,
      g.length + eM
    ];
}
if (!K && ed)
  return [
    1,
    1
  ];
if (!J)
  return [
    1,
    m.length,
    1
  ];
else if (ed)
  return [
    1,
    C.length,
    0,
    ev
  ];
else
  return [
    1,
    m.length,
    g.length,
    ev
  ];
  }, [
en,
ed,
m.length,
g.length,
K,
J,
ev,
C,
eS,
eM,
eA
  ]), eR = s.useMemo(() => {
if (!K && ed)
  return [
    [],
    []
  ];
if (!J)
  return [
    [],
    m,
    []
  ];
if (ed)
  return [
    [],
    C,
    [],
    []
  ];
else
  return [
    [],
    m,
    g,
    []
  ];
  }, [
ed,
K,
J,
C,
m,
g
  ]), eO = s.useCallback((e, n) => {
(0, V.B5)({
  guildId: t.guild_id,
  channelId: t.id,
  postId: e.id,
  location: {
    page: el.ZY5.GUILD_CHANNEL,
    section: el.jXE.FORUM_CHANNEL_POST
  }
}), n ? (0, S.ad)(e, {
  source: ei.on.BROWSER
}) : (e_.current = e.id, (0, R.ok)(e));
  }, [
t.guild_id,
t.id,
e_
  ]), [eZ, eL] = s.useState(r + i - 24), eP = s.useCallback((e, n, s) => 0 === e ? (0, a.jsx)(eN, {
channel: t,
isEmpty: !y,
isSearchLoading: P,
numResults: null == C ? void 0 : C.length,
coords: n,
onHeightChange: eL,
children: !j && (0, a.jsx)(W.Z, {
  channel: t,
  hasAnyThread: D
}, t.id)
  }, 'forum-channel-header') : 2 !== e || J ? 1 === e && ed && !K ? (0, a.jsx)(eT, {
channel: t,
coords: n
  }, 'archive-or-search-result') : s() : (0, a.jsx)(ep, {
channel: t,
coords: n
  }, 'archived-missing-reading-history-perm'), [
ed,
J,
C,
K,
t,
y,
P,
j,
D
  ]), ew = (0, _.e7)([F.Z], () => F.Z.hasHidden(t.id));
  s.useEffect(() => {
var e, t;
let n = en ? eH : $,
  a = null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState();
null != a && !ew && a.scrollTop > r && (null === (t = n.current) || void 0 === t || t.scrollTo({
  to: 0
}));
  }, [ew]);
  let {
updateListScrollerRef: ey,
renderListSection: eD,
renderListItem: eF,
getListSectionHeight: eU,
getListItemHeight: ek
  } = function(e) {
let {
  listRef: t,
  hasActiveThreads: n,
  threadIdsBySection: r,
  listViewCardHeights: i,
  editorHeight: o,
  editorAdditionRowHeight: c,
  renderSectionOrItem: d,
  goToThread: u,
  observePostVisibilityAnalytics: m,
  isShowingSearchResult: h
} = e, _ = s.useCallback(e => n => {
  var a;
  t.current = n, e.current = null !== (a = null == n ? void 0 : n.getScrollerNode()) && void 0 !== a ? a : null;
}, [t]), g = s.useCallback(e => eg({
  section: e.section,
  isShowingSearchResult: h,
  hasActiveThreads: n
})(), [
  n,
  h
]), f = s.useCallback(e => d(e.section, void 0, () => {
  if (3 === e.section)
    return __OVERLAY__ ? null : (0, a.jsx)('div', {
      'data-item-role': 'item',
      className: l()(ec.loadingCard, ec['loadingCard-'.concat(e.row % 3)])
    }, 'loading-'.concat(e.row));
  let t = r[e.section][e.row];
  return (0, a.jsx)('li', {
    className: ec.card,
    'data-item-role': 'item',
    children: (0, a.jsx)(x.HeadingLevel, {
      children: (0, a.jsx)(Y.ZP, {
        className: ec.mainCard,
        threadId: t,
        goToThread: u,
        observePostVisibilityAnalytics: m
      })
    })
  }, ''.concat(e.section, '-').concat(t));
}), [
  d,
  r,
  u,
  m
]), C = s.useCallback((e, t) => {
  if (0 === e)
    return o + c;
  let n = i[r[e][t]];
  return null == n ? 104 : n + 8;
}, [
  r,
  i,
  o,
  c
]);
return {
  updateListScrollerRef: _,
  renderListSection: g,
  renderListItem: f,
  getListSectionHeight: s.useCallback(e => 2 === e && n ? 40 : 0, [n]),
  getListItemHeight: C
};
  }({
listRef: $,
hasActiveThreads: y,
threadIdsBySection: eR,
listViewCardHeights: o,
editorHeight: r,
editorAdditionRowHeight: i,
renderSectionOrItem: eP,
goToThread: eO,
observePostVisibilityAnalytics: ee,
isShowingSearchResult: ed
  }), eH = s.useRef(null), {
updateMasonryListScrollerRef: eB,
getItemKey: eG,
renderGridSection: ez,
renderGridItem: eV,
getGridSectionHeight: eW,
getSectionProps: eq,
handleGridFocus: eK
  } = function(e) {
let {
  masonryListScrollerRef: t,
  threadIdsBySection: n,
  goToThread: r,
  renderSectionOrItem: i,
  hasActiveThreads: o,
  isShowingSearchResult: c,
  canSearchForumPosts: d,
  canViewArchivedPosts: u,
  observePostVisibilityAnalytics: m,
  focusedThreadId: h,
  headerHeight: _
} = e, g = s.useRef(null), x = s.useCallback(e => {
  t.current = e, g.current = null == e ? void 0 : e.getScrollerNode();
}, [t]), f = s.useCallback((e, n) => {
  let {
    current: a
  } = t;
  if (null == a)
    return;
  let s = document.querySelector(e);
  if (null == s)
    return;
  let r = a.getCoordsMap()[n],
    l = null != r ? r.height + 20 : 200;
  a.scrollIntoViewNode({
    node: s,
    padding: l,
    callback() {
      requestAnimationFrame(() => {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus({
          preventScroll: !0
        });
      });
    }
  }), h.current = ef(n);
}, [
  t,
  h
]), C = s.useCallback(e => {
  let t = ef(e);
  if (null == t)
    return;
  let n = Z.Z.getChannel(t);
  null != n && r(n, !0);
}, [r]), p = s.useCallback(function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  if (0 === n[e].length)
    return 'section-'.concat(e, '-').concat(t);
  {
    let a = n[e][t];
    return null == a ? ex(e, t) : ex(e, a);
  }
}, [n]), T = s.useCallback((e, t, n) => i(e, t, eg({
  section: e,
  coords: t,
  key: n,
  isShowingSearchResult: c,
  hasActiveThreads: o
})), [
  i,
  o,
  c
]), I = s.useCallback(e => 0 === e ? {} : {
  role: 'grid',
  'aria-labelledby': '#'.concat(em(e))
}, []), E = s.useCallback((e, t, s, i, o) => {
  if (0 === e)
    return null;
  let c = n[e][t];
  return null != c ? (0, a.jsx)(Q.Z, {
    id: ''.concat(i),
    threadId: c,
    className: l()(ec.card, ec.mainCard),
    goToThread: r,
    observePostVisibilityAnalytics: m,
    coords: s,
    gridCoords: o.coordinates[i],
    gridSectionBoundaries: o.boundaries
  }, i) : __OVERLAY__ ? null : (0, a.jsx)('div', {
    style: {
      ...s
    },
    'data-item-role': 'item',
    className: l()(ec.loadingCard, ec['loadingCard-'.concat(t % 3)])
  }, i);
}, [
  n,
  r,
  m
]);
return {
  updateMasonryListScrollerRef: x,
  masonryListContainerRef: g,
  focusedThreadId: h,
  handleGridFocus: f,
  handleGridSelect: C,
  getItemKey: p,
  renderGridSection: T,
  renderGridItem: E,
  getSectionProps: I,
  getGridSectionHeight: s.useCallback(e => 0 === e ? _ - 8 - 24 : 2 === e ? o || !u ? 40 : 0 : 1 === e && c && !d ? 40 : 0, [
    _,
    c,
    d,
    o,
    u
  ])
};
  }({
masonryListScrollerRef: eH,
threadIdsBySection: eR,
goToThread: eO,
renderSectionOrItem: eP,
hasActiveThreads: y,
isShowingSearchResult: ed,
canSearchForumPosts: K,
canViewArchivedPosts: J,
observePostVisibilityAnalytics: ee,
focusedThreadId: e_,
headerHeight: eZ
  });
  ! function(e) {
let {
  masonryListScrollerRef: t,
  containerWidth: n,
  isGridLayout: a,
  threadIdsBySection: r,
  focusedThreadId: l,
  parentId: i
} = e;
s.useEffect(() => {
  if (a) {
    let e = setTimeout(() => {
      if (null == t.current || null == l.current)
        return;
      let e = l.current;
      if ('string' != typeof e)
        return;
      if (null == O.ZP.getSidebarState(i)) {
        l.current = null;
        return;
      }
      let n = r.findIndex(t => t.find(t => t === e)),
        a = t.current.getCoordsMap(),
        s = a['__section__'.concat(n)],
        o = a[ex(n, e)];
      null != s && null != o && t.current.scrollIntoViewRect({
        start: s.top + o.top - 100,
        end: s.top + o.top + o.height + 50
      });
    }, 500);
    return () => clearTimeout(e);
  }
}, [
  i,
  n,
  a,
  r,
  l,
  t
]);
  }({
masonryListScrollerRef: eH,
containerWidth: eE,
isGridLayout: en,
threadIdsBySection: eR,
parentId: t.id,
focusedThreadId: e_
  });
  let eY = s.useCallback(() => {
  var e, n;
  if (ed)
    return;
  let a = en ? null === (e = eH.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (n = $.current) || void 0 === n ? void 0 : n.getScrollerState();
  if (null == a)
    return;
  (0, V.ab)({
    guildId: t.guild_id,
    channelId: t.id
  });
  let s = a.scrollTop + a.offsetHeight,
    r = a.scrollHeight - s;
  r < (en ? Math.max(200, (0, et.KW)(eE)) : 200) && I();
}, [
  ed,
  en,
  t.guild_id,
  t.id,
  eE,
  I
]),
eX = (0, _.e7)([p.Z], () => p.Z.keyboardModeEnabled),
eJ = (0, es.ZP)({
  id: 'forum-grid-view',
  isEnabled: en && eX,
  setFocus: eK
}),
eQ = (0, er.Z)({
  listRef: $,
  padding: 96,
  isEnabled: !en && eX,
  channel: t
}),
{
  ref: e$,
  ...e0
} = eJ.containerProps,
e1 = O.ZP.getSidebarState(t.id),
e6 = null != e1 && (0, O.D5)(e1);
  return (0, a.jsx)('div', {
className: ec.container,
ref: eC,
children: (0, a.jsx)(x.FocusJumpSection, {
  children: e => (0, a.jsxs)(a.Fragment, {
    children: [
      u && (0, a.jsx)(f.Z, {
        channel: t,
        draftType: L.d.FirstThreadMessage,
        className: ec.uploadArea,
        style: {
          right: e6 && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0
        }
      }),
      (0, a.jsx)(eI, {
        channel: t
      }),
      (0, a.jsx)(x.HiddenVisually, {
        children: (0, a.jsx)(x.H, {
          children: eo.Z.Messages.THREADS
        })
      }),
      k ? (0, a.jsx)('div', {
        className: ec.optInNotice,
        children: (0, a.jsx)(v.Z, {
          channel: t
        })
      }) : null,
      en ? (0, a.jsx)(es.KT, {
        navigator: eJ,
        children: (0, a.jsx)(x.MasonryList, {
          ref: e => {
            var t;
            e$.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, eB(e);
          },
          itemGutter: 16,
          padding: 24,
          className: ec.grid,
          columns: eb,
          sections: ej,
          getItemKey: eG,
          getSectionHeight: eW,
          getItemHeight: eh,
          renderSection: ez,
          renderItem: eV,
          getSectionProps: eq,
          onScroll: T ? eY : void 0,
          chunkSize: 350,
          ...e0,
          ...e
        }, w)
      }) : (0, a.jsx)(d.bG, {
        navigator: eQ,
        children: (0, a.jsx)(d.SJ, {
          children: t => {
            let {
              ref: n,
              ...s
            } = t;
            return (0, a.jsx)(x.ListAuto, {
              ref: ey(n),
              className: ec.list,
              sections: ej,
              sectionHeight: eU,
              rowHeight: ek,
              renderRow: eF,
              renderSection: eD,
              chunkSize: 150,
              onScroll: T ? eY : void 0,
              paddingBottom: 24,
              ...s,
              ...e,
              innerRole: 'list'
            }, w);
          }
        })
      })
    ]
  })
})
  });
}

function ep(e) {
  let {
channel: t,
coords: n
  } = e, s = (0, T.ZP)(t);
  return (0, a.jsx)('div', {
className: l()(ec.missingReadHistoryPermission, ec.columnsSpan),
style: n,
children: (0, a.jsx)(x.Text, {
  color: 'text-muted',
  variant: 'text-md/normal',
  children: eo.Z.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
    channelName: s
  })
})
  });
}

function eT(e) {
  let {
channel: t,
coords: n
  } = e, s = (0, T.ZP)(t);
  return (0, a.jsx)('div', {
className: l()(ec.missingReadHistoryPermission, ec.columnsSpan),
style: n,
children: (0, a.jsx)(x.Text, {
  color: 'text-muted',
  variant: 'text-md/normal',
  children: eo.Z.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
    channelName: s
  })
})
  });
}

function eI(e) {
  let {
channel: t
  } = e, n = s.useCallback(() => {
U.Z.resort(t.id);
  }, [t]), r = (0, _.e7)([k.Z], () => k.Z.getNewThreadCount());
  return 0 === r ? null : (0, a.jsx)(x.Clickable, {
className: ec.newPostsButton,
onClick: n,
children: (0, a.jsx)(x.Text, {
  color: 'text-brand',
  variant: 'text-md/medium',
  children: eo.Z.Messages.NEW_FORUM_POST_COUNT.format({
    count: r
  })
})
  });
}

function eE() {
  return Promise.resolve();
}

function eN(e) {
  var t, n, r;
  let {
channel: i,
isEmpty: f,
isSearchLoading: T,
numResults: b,
children: v,
coords: S,
onHeightChange: M
  } = e, {
name: A,
formOpen: R,
titleFocused: O,
hasClickedForm: Z,
textAreaState: F,
onboardingExpanded: k,
setEditorAdditionRowHeight: G
  } = (0, X.xH)(e => {
let {
  name: t,
  formOpen: n,
  titleFocused: a,
  hasClickedForm: s,
  textAreaState: r,
  onboardingExpanded: l,
  setEditorAdditionRowHeight: i
} = e;
return {
  name: t,
  formOpen: n,
  titleFocused: a,
  hasClickedForm: s,
  textAreaState: r,
  onboardingExpanded: l,
  setEditorAdditionRowHeight: i
};
  }, c.Z), {
tagFilter: z,
layoutType: W
  } = (0, H.H)(i.id), Y = (0, X.AF)(), Q = (0, H.v)(), $ = (0, _.e7)([P.Z], () => P.Z.canChatInGuild(i.guild_id)), et = (0, B.r_)(i), ea = (0, j.cD)(i), [es, er] = s.useState(ea), [, ei] = (0, E.AB)(null !== (r = i.getGuildId()) && void 0 !== r ? r : void 0), ed = $ && (ea || es && ei), eu = i.isMediaChannel();
  s.useEffect(() => {
ea && er(!0);
  }, [ea]);
  let {
ref: em,
height: eh
  } = (0, C.Z)();
  s.useEffect(() => {
null != eh && M(eh);
  }, [
M,
eh
  ]);
  let e_ = s.useCallback(() => {
o()(() => {
  null != em.current && Y.getState().setEditorHeight(em.current.offsetHeight);
});
  }, [
em,
Y
  ]);
  s.useLayoutEffect(e_, [
e_,
f,
ed,
k
  ]), (0, D.yp)({
event: el.CkL.REMEASURE_TARGET,
handler: e_
  });
  let eg = (0, _.e7)([w.Z], () => w.Z.getUploads(i.id, L.d.FirstThreadMessage)),
ex = (0, B.ql)(i),
ef = s.useRef(null),
eC = s.useRef(null),
[ep, eT] = s.useState(0),
{
  width: eI
} = (0, _.e7)([y.Z], () => y.Z.windowSize()),
eN = null === (n = ef.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
ev = s.useRef(null);
  s.useLayoutEffect(() => {
var e;
let t = eC.current,
  n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
if (null != ef.current && null != n && null != n.children) {
  let {
    left: e,
    top: t
  } = ef.current.getBoundingClientRect(), a = 0;
  for (let s of n.children) {
    let {
      right: n,
      top: r,
      height: l
    } = s.getBoundingClientRect();
    if (r - t > l)
      break;
    n - e > a && (a = n - e);
  }
  eT(a);
}
  }, [
i.availableTags,
eI,
eN,
z
  ]);
  let eS = A.length > 0 && !R && (T || null != b),
eM = !__OVERLAY__ && !Z && !R && O && (0 === F.textValue.trim().length || F.textValue.trim() === ex) && 0 === eg.length;
  s.useLayoutEffect(() => {
let e = eS || eM;
if (!e)
  return G(0);
null != ev.current && G(e ? ev.current.clientHeight : 0);
  }, [
G,
eS,
eM,
ev
  ]);
  let eA = e => {
  (0, V.e7)({
    guildId: i.guild_id,
    channelId: i.id,
    tagId: e,
    filterTagIds: Array.from(z),
    added: !z.has(e),
    location: {
      page: el.ZY5.GUILD_CHANNEL,
      section: el.jXE.FORUM_CHANNEL_HEADER,
      object: el.qAy.CHANNEL_TAG
    }
  }), Q.getState().toggleTagFilter(i.id, e);
},
ej = (0, u.ZP)({
  id: ''.concat(i.id, '-tags-navigator'),
  isEnabled: !0,
  wrap: !0,
  scrollToStart: eE,
  scrollToEnd: eE,
  orientation: m.hy.HORIZONTAL
}),
{
  role: eR,
  onFocus: eO,
  ...eZ
} = (0, d.JA)('forum-channel-header'),
eL = s.useRef(null),
eP = function() {
  let e = s.useRef(!1),
    t = (0, _.e7)([p.Z], () => p.Z.keyboardModeEnabled),
    n = s.useCallback(t => {
      e.current = t.shiftKey;
    }, [e]);
  return s.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [
    t,
    n
  ]), e;
}(),
ew = s.useCallback(e => {
  if (eO(e), e.target === em.current && !eP.current) {
    var t;
    null === (t = eL.current) || void 0 === t || t.focus();
  }
}, [
  eO,
  em,
  eP
]);
  return (0, a.jsx)('div', {
className: l()(ec.card, ec.headerRow, ec.columnsSpan),
ref: em,
onFocus: ew,
...eZ,
style: {
  ...S,
  position: W === h.X.GRID ? 'absolute' : 'static',
  height: 'auto'
},
children: (0, a.jsxs)(D.I3, {
  children: [
    null != i.guild_id ? (0, a.jsx)(N.Z, {
      className: l()(ec.newMemberBanner, {
        [ec.gridViewBanner]: W === h.X.GRID
      }),
      guildId: i.guild_id,
      channel: i
    }) : null,
    (0, a.jsx)('div', {
      className: l()(ec.mainCard, ec.header, {
        [ec.headerWithMatchingPosts]: eS || eM
      }),
      children: (0, a.jsx)(J.Z, {
        parentChannel: i,
        onChange: e_,
        isSearchLoading: T,
        canCreatePost: ed,
        inputRef: eL
      })
    }),
    (eS || eM) && (0, a.jsxs)('div', {
      className: ec.matchingPostsRow,
      ref: ev,
      children: [
        eS && (0, a.jsxs)('div', {
          className: ec.matchingPosts,
          children: [
            (0, a.jsx)(x.Heading, {
              variant: 'text-xs/normal',
              color: 'text-normal',
              children: T ? eo.Z.Messages.FORUM_SEARCHING : 0 === b ? eo.Z.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : eo.Z.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
                numPosts: b,
                query: A
              })
            }),
            !T && (0, a.jsx)(x.Clickable, {
              onClick: () => {
                (0, V.zI)({
                  guildId: i.guild_id,
                  channelId: i.id
                }), U.Z.clearForumSearch(i.id), Y.getState().setName('');
              },
              children: (0, a.jsx)(x.Text, {
                variant: 'text-xs/semibold',
                color: 'text-brand',
                className: ec.clear,
                children: eo.Z.Messages.CLEAR
              })
            })
          ]
        }),
        (0, a.jsx)('div', {
          className: ec.tagsSpacer
        }),
        eM ? ed ? (0, a.jsxs)('div', {
          className: ec.startPostHelp,
          children: [
            (0, a.jsx)(x.KeyCombo, {
              shortcut: 'SHIFT',
              className: ec.keyboardShortcut
            }),
            (0, a.jsx)(x.Text, {
              variant: 'text-xs/normal',
              color: 'text-normal',
              children: '+'
            }),
            (0, a.jsx)(x.KeyCombo, {
              shortcut: 'ENTER',
              className: ec.keyboardShortcut
            }),
            (0, a.jsx)(x.Text, {
              variant: 'text-xs/normal',
              color: 'text-normal',
              children: eo.Z.Messages.FORUM_ENTER_TO_START_POST
            })
          ]
        }) : (0, a.jsxs)('div', {
          className: ec.startPostHelp,
          children: [
            (0, a.jsx)(x.CircleWarningIcon, {
              size: 'custom',
              color: 'currentColor',
              height: 14,
              width: 14,
              className: ec.warnIcon
            }),
            (0, a.jsx)(x.Text, {
              variant: 'text-xs/normal',
              color: 'text-normal',
              children: eo.Z.Messages.FORUM_NO_POST_PERMISSION_HELP
            })
          ]
        }) : null
      ]
    }),
    (0, a.jsx)(q.Z, {
      channel: i,
      onChange: e_
    }),
    (0, a.jsxs)('div', {
      className: ec.tagsContainer,
      ref: ef,
      children: [
        (0, a.jsx)(eb, {
          channel: i
        }),
        i.availableTags.length > 0 ? (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)('div', {
              className: ec.divider
            }),
            (0, a.jsx)('div', {
              className: ec.tagList,
              ref: eC,
              children: (0, a.jsx)(d.bG, {
                navigator: ej,
                children: (0, a.jsx)(d.SJ, {
                  children: e => {
                    let {
                      ref: t,
                      ...n
                    } = e;
                    return (0, a.jsx)('div', {
                      className: ec.tagListInner,
                      ref: t,
                      ...n,
                      children: i.availableTags.map(e => (0, a.jsx)(ee.Z, {
                        className: ec.tag,
                        tag: e,
                        onClick: () => eA(e.id),
                        selected: z.has(e.id)
                      }, e.id))
                    });
                  }
                })
              })
            }),
            (0, a.jsx)(x.Popout, {
              renderPopout: e => {
                let {
                  closePopout: t,
                  setPopoutRef: n
                } = e;
                return (0, a.jsx)(en.Z, {
                  channel: i,
                  closePopout: t,
                  setPopoutRef: n
                });
              },
              position: 'bottom',
              align: 'right',
              children: (e, t) => {
                let {
                  isShown: n
                } = t;
                return (0, a.jsxs)(x.Button, {
                  ...e,
                  size: x.Button.Sizes.MIN,
                  color: x.Button.Colors.CUSTOM,
                  className: l()(ec.tagsButton, {
                    [ec.tagsButtonWithCount]: z.size > 0
                  }),
                  style: {
                    left: ep
                  },
                  innerClassName: ec.tagsButtonInner,
                  'aria-label': z.size > 0 ? eo.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : eo.Z.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                  children: [
                    z.size > 0 ? (0, a.jsx)('div', {
                      className: ec.countContainer,
                      children: (0, a.jsx)(x.Text, {
                        className: ec.countText,
                        color: 'none',
                        variant: 'text-xs/medium',
                        children: z.size
                      })
                    }) : eo.Z.Messages.FORUM_TAG_ALL,
                    n ? (0, a.jsx)(x.ChevronSmallUpIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20
                    }) : (0, a.jsx)(x.ChevronSmallDownIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20
                    })
                  ]
                });
              }
            }),
            (0, a.jsxs)(x.Button, {
              size: x.Button.Sizes.MIN,
              color: x.Button.Colors.CUSTOM,
              className: l()(ec.tagsButton, ec.tagsButtonPlaceholder),
              innerClassName: ec.tagsButtonInner,
              'aria-label': eo.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
              children: [
                z.size > 0 ? (0, a.jsx)('div', {
                  className: ec.countContainer,
                  children: (0, a.jsx)(x.Text, {
                    className: ec.countText,
                    color: 'none',
                    variant: 'text-xs/medium',
                    children: z.size
                  })
                }) : null,
                (0, a.jsx)(x.ChevronSmallUpIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 24
                })
              ]
            })
          ]
        }) : null
      ]
    }),
    v,
    et && !eu && (0, a.jsx)(I.Z, {
      contentTypes: [g.z.FORUM_CHANNEL_HELPER_CARD],
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        return t === g.z.FORUM_CHANNEL_HELPER_CARD ? (0, a.jsx)(K.Z, {
          onDismiss: n
        }) : null;
      }
    })
  ]
})
  }, 'create-form');
}

function eb(e) {
  let {
channel: t
  } = e, n = t.isMediaChannel();
  return (0, a.jsx)(x.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, a.jsx)($.Z, {
    channel: t,
    closePopout: n
  });
},
position: 'bottom',
align: 'left',
children: (e, t) => {
  let {
    isShown: s
  } = t;
  return (0, a.jsxs)(x.Button, {
    ...e,
    size: x.Button.Sizes.MIN,
    color: x.Button.Colors.CUSTOM,
    className: ec.sortDropdown,
    innerClassName: ec.sortDropdownInner,
    'aria-label': n ? eo.Z.Messages.MEDIA_CHANNEL_SORT : eo.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
    children: [
      (0, a.jsx)(x.ArrowsUpDownIcon, {
        size: 'xs',
        color: 'currentColor'
      }),
      (0, a.jsx)(x.Text, {
        className: ec.sortDropdownText,
        variant: 'text-sm/medium',
        color: 'interactive-normal',
        children: n ? eo.Z.Messages.MEDIA_CHANNEL_SORT : eo.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW
      }),
      s ? (0, a.jsx)(x.ChevronSmallUpIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20
      }) : (0, a.jsx)(x.ChevronSmallDownIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20
      })
    ]
  });
}
  });
}