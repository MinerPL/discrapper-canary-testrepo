n.d(t, {
  Z: function() {
return D;
  }
}), n(724458), n(653041), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(837969),
  o = n(481060),
  c = n(668781),
  u = n(904245),
  d = n(603263),
  h = n(963374),
  p = n(607070),
  m = n(933557),
  _ = n(471445),
  f = n(905405),
  E = n(255269),
  g = n(937889),
  C = n(703656),
  I = n(359110),
  x = n(695346),
  T = n(131704),
  N = n(592125),
  v = n(430824),
  S = n(496675),
  Z = n(699516),
  A = n(768119),
  M = n(944486),
  b = n(594174),
  R = n(68588),
  j = n(101695),
  L = n(683101),
  P = n(981631),
  O = n(689938),
  y = n(179562);

function D(e) {
  var t;
  let {
search: n,
searchId: s,
renderEmbeds: l,
scrollTo: m,
searchResults: _,
blockCount: f,
onChangePage: E
  } = e, {
offset: g,
totalResults: I,
isSearching: x,
showBlockedResults: T
  } = n, v = a.useCallback(e => {
if (x)
  return;
let t = e - 1;
null == E || E(t), d.oO(s, t);
  }, [
s,
x,
E
  ]), S = a.useCallback(e => {
if (e.blocked)
  c.Z.show({
    title: O.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
    body: O.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
      name: e.author.username
    }),
    confirmText: O.Z.Messages.OKAY
  });
else {
  let t = N.Z.getChannel(e.channel_id),
    n = null != t ? t.getGuildId() : null;
  u.Z.trackJump(e.channel_id, e.id, 'Search Results', {
    search_id: A.Z.getAnalyticsId(s)
  }), (0, C.uL)(P.Z5c.CHANNEL(n, e.channel_id, e.id));
}
  }, [s]), M = a.useMemo(() => {
let e;
if (null == _)
  return [];
let t = 0;
return _.reduce((n, i) => {
  let a = i.find(e => e.isSearchHit);
  if (!T && null != a && Z.Z.isBlockedForMessage(a))
    return n;
  let s = N.Z.getChannel(i[0].channel_id);
  return null == s ? n : ((null == e || e !== s.id) && n.push({
    channel: s,
    results: [],
    startIndex: t
  }), t += 1, n[n.length - 1].results.push(i), e = null == s ? void 0 : s.id, n);
}, []);
  }, [
_,
T
  ]), b = a.useRef([]), R = M.reduce((e, t) => e + 1 + t.results.length, 0), L = a.useCallback((e, t) => {
if (!p.Z.keyboardModeEnabled)
  return;
let n = b.current,
  i = null != t ? n[t] : void 0;
if (null == i || null == i.hitRef.current)
  return;
let a = i.hitRef.current.getClientRects()[0];
m(a.top - 0.5 * a.height, !1, () => {
  var t;
  null === (t = document.getElementById(e)) || void 0 === t || t.focus();
});
  }, [m]), D = a.useCallback(e => {
let t = b.current[e];
null == t || t.jumpTo();
  }, []), k = (0, r.ZP)({
navId: 'search-results',
itemCount: R,
focusedIndex: 0,
setFocus: L,
onSelect: D
  }), w = A.Z.getQuery(s), B = A.Z.getSearchType(s) === P.aib.FAVORITES, H = (0, h.nC)(null !== (t = null == w ? void 0 : w.content) && void 0 !== t ? t : ''), G = M.map(e => {
let {
  channel: t,
  results: n,
  startIndex: a
} = e;
return (0, i.jsx)(U, {
  channel: t,
  results: n,
  highlighter: H,
  startIndex: a,
  resultRefs: b,
  totalResults: I,
  scrollTo: m,
  searchId: s,
  renderEmbeds: l,
  offset: g,
  jumpToMessage: S,
  listNavigator: k,
  favoriteSearch: B
}, ''.concat(t.id, '-').concat(a));
  });
  G.push();
  let V = a.useRef(null);
  a.useLayoutEffect(() => {
var e;
null === (e = V.current) || void 0 === e || e.focus();
  }, [_]);
  let F = (0, o.useFocusJumpSection)();
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)('div', {
    ref: V,
    ...k.getContainerProps(),
    ...F,
    'aria-busy': x,
    children: G
  }),
  f > 0 ? (0, i.jsxs)(o.Clickable, {
    tag: 'div',
    className: y.resultsBlocked,
    onClick: () => d.QY(s, !T),
    children: [
      (0, i.jsx)('div', {
        className: y.resultsBlockedImage
      }),
      (0, i.jsx)('div', {
        className: y.__invalid_resultsBlockedText,
        children: T ? O.Z.Messages.SEARCH_HIDE_BLOCKED_MESSAGES.format({
          count: f
        }) : O.Z.Messages.SEARCH_NUM_RESULTS_BLOCKED_NOT_SHOWN.format({
          count: f
        })
      })
    ]
  }) : null,
  !x && !B && (0, i.jsx)(j.Z, {
    changePage: v,
    offset: g,
    totalResults: I,
    pageLength: P.vpv
  })
]
  });
}

function k(e) {
  let {
parentChannel: t,
onSelectChannel: n
  } = e;
  if ((null == t ? void 0 : t.name) == null)
return null;
  let a = null != t ? (0, _.KS)(t) : null;
  if (null == a)
return null;
  let s = (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(a, {
    className: y.parentChannelNameIcon,
    size: 'xxs',
    color: 'currentColor'
  }),
  (0, i.jsx)(o.Text, {
    className: y.parentChannelNameText,
    variant: 'text-xs/medium',
    color: 'header-secondary',
    children: t.name
  })
]
  });
  return (0, T.Em)(t.type) ? (0, i.jsx)(o.Clickable, {
className: l()(y.parentChannelName, y.parentChannelNameClickable),
onClick: e => {
  e.stopPropagation(), n(t.id);
},
children: s
  }) : (0, i.jsx)('div', {
className: y.parentChannelName,
children: s
  });
}

function U(e) {
  var t, n, s;
  let {
channel: l,
results: r,
highlighter: c,
startIndex: u,
resultRefs: d,
totalResults: h,
scrollTo: p,
searchId: C,
renderEmbeds: T,
offset: A,
jumpToMessage: j,
listNavigator: O,
favoriteSearch: D
  } = e, U = x.cC.useSetting(), w = (0, f.p)(), B = a.useCallback(e => {
if (e === M.Z.getChannelId())
  return;
let t = N.Z.getChannel(e);
if (null != t && !!S.Z.can(P.Plq.VIEW_CHANNEL, t))
  (0, I.Kh)(t.id);
  }, []), H = null != l ? (0, m.F6)(l, b.default, Z.Z, !1) : '???', G = D && null != l.guild_id ? null === (t = v.Z.getGuild(l.guild_id)) || void 0 === t ? void 0 : t.name : null, V = (null == l ? void 0 : l.parent_id) != null ? N.Z.getChannel(l.parent_id) : null, F = null !== (n = null == V ? void 0 : V.name) && void 0 !== n ? n : null, W = null !== (s = (0, _.KS)(l)) && void 0 !== s ? s : o.TextIcon, z = S.Z.can(P.Plq.MANAGE_MESSAGES, l), {
content: Y
  } = (0, g.ZP)({
content: H,
embeds: []
  }, {
postProcessor: c,
shouldFilterKeywords: w
  }), K = a.useRef(null), [q, X] = a.useState(!1);
  a.useEffect(() => {
let e = K.current;
null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
  }, []);
  let Q = [
H,
F,
G
  ].filter(e => null != e).join(', ');
  return (0, i.jsx)(R.a.Provider, {
value: (0, E.Z)(U, z),
children: (0, i.jsxs)('ul', {
  role: 'group',
  className: y.searchResultGroup,
  'aria-label': Q,
  children: [
    (0, i.jsx)(o.Clickable, {
      onClick: () => B(l.id),
      children: (0, i.jsxs)('div', {
        className: y.channelNameContainer,
        children: [
          (0, i.jsx)(W, {
            className: y.channelNameIcon,
            size: 'xs',
            color: 'currentColor'
          }),
          (0, i.jsx)(o.Tooltip, {
            text: H,
            shouldShow: q,
            children: e => (0, i.jsxs)('span', {
              ...e,
              ref: K,
              className: y.channelNameText,
              children: [
                D && null !== G && ''.concat(G, ' : '),
                Y
              ]
            })
          }),
          (0, i.jsx)(k, {
            parentChannel: V,
            onSelectChannel: B
          })
        ]
      })
    }),
    r.map((e, t) => {
      let n = u + t;
      return (0, i.jsx)(L.Z, {
        ref: e => d.current[n] = e,
        totalResults: h,
        scrollTo: p,
        searchId: C,
        renderEmbeds: T,
        searchOffset: A,
        pageResultsLength: r.length,
        result: e,
        index: n,
        onJump: j,
        listItemProps: O.getItemProps({
          index: n
        })
      }, 'search-result-'.concat(n));
    })
  ]
})
  });
}