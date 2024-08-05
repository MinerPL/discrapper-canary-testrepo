n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(392711),
  o = n(399606),
  c = n(481060),
  u = n(963374),
  d = n(735020),
  h = n(786761),
  p = n(937889),
  m = n(619753),
  _ = n(433355),
  f = n(271383),
  E = n(594174),
  g = n(189432),
  C = n(356778),
  I = n(370595),
  x = n(50493),
  T = n(749348),
  N = n(458563);

function v(e) {
  var t, n;
  let {
userId: s,
guildId: v,
location: S,
className: Z,
onNavigate: A
  } = e, M = a.useRef(null), b = (0, o.e7)([_.ZP], () => _.ZP.getGuildSidebarState(v), [v]), R = a.useRef(0), [j, L] = a.useState(null !== (t = null == b ? void 0 : b.details.additionalSearchQuery) && void 0 !== t ? t : {}), P = (0, C.z0)(s, v, {
addtionalQuery: j,
shouldDispatch: !0
  }), O = (0, o.e7)([E.default], () => E.default.getUser(s), [s]), y = (0, o.e7)([f.ZP], () => f.ZP.getMember(v, s), [
v,
s
  ]);
  a.useLayoutEffect(() => {
let e = null == b ? void 0 : b.details.scrollOffset;
if (null != e) {
  var t;
  null === (t = M.current) || void 0 === t || t.scrollTo({
    to: e,
    animate: !1
  });
}
  }, []);
  let D = a.useCallback(e => {
  if (null == b)
    return;
  let t = e.target.scrollTop;
  R.current = t, (0, g.r)(v, s, b.baseChannelId, {
    modViewPanel: x.k.MESSAGE_HISTORY,
    additionalSearchQuery: j,
    scrollOffset: R.current
  });
}, [
  v,
  s,
  b,
  j
]),
k = (0, r.throttle)(D, 300),
U = a.useCallback(e => {
  if (null == b)
    return;
  let t = {
    ...j,
    offset: 25 * e
  };
  L(t), (0, g.r)(v, s, b.baseChannelId, {
    modViewPanel: x.k.MESSAGE_HISTORY,
    additionalSearchQuery: t,
    scrollOffset: R.current
  });
}, [
  v,
  s,
  b,
  j
]),
w = null !== (n = null == j ? void 0 : j.offset) && void 0 !== n ? n : 0,
B = (0, o.e7)([d.Z], () => {
  if (null == P.result)
    return [];
  let e = P.result.messages,
    t = (0, u.nC)('');
  return e.map(e => e.map(e => {
    let n = d.Z.getMessage(e.id, e.channel_id),
      i = (0, h.e5)(e);
    return null != n && (i = i.merge({
      attachments: n.attachments,
      embeds: n.embeds
    })), i.isSearchHit ? i.set('customRenderedContent', (0, p.ZP)(i, {
      postProcessor: t,
      allowHeading: !0,
      allowList: !0
    })) : i;
  }));
}, [P.result]),
H = a.useMemo(() => {
  var e, t, n, i;
  return null == P.result ? {
    documentsIndexed: 0,
    isSearching: !0,
    isIndexing: !1,
    isHistoricalIndexing: !1,
    offset: w,
    totalResults: 0,
    hasError: !1,
    showBlockedResults: !1,
    showNoResultsAlt: !1
  } : {
    documentsIndexed: null !== (e = P.result.documents_indexed) && void 0 !== e ? e : 0,
    isSearching: !1,
    isIndexing: null !== (t = P.result.doing_deep_historical_index) && void 0 !== t && t,
    isHistoricalIndexing: null !== (n = P.result.doing_deep_historical_index) && void 0 !== n && n,
    offset: w,
    totalResults: null !== (i = P.result.total_results) && void 0 !== i ? i : 0,
    hasError: !1,
    showBlockedResults: !1,
    showNoResultsAlt: !1
  };
}, [
  P.result,
  w
]);
  return null == O || null == y || null == H ? null : (0, i.jsxs)('div', {
className: l()(T.container, Z),
children: [
  (0, i.jsx)(I.Z, {
    guildId: v,
    userId: s,
    onNavigate: A
  }),
  (0, i.jsx)(c.AdvancedScroller, {
    className: N.innerContainer,
    ref: M,
    onScroll: k,
    children: (0, i.jsx)(m.Z, {
      searchResults: B,
      search: H,
      searchId: s,
      renderEmbeds: !0,
      blockCount: 0,
      scrollTo: () => {},
      onChangePage: U
    })
  })
]
  });
}