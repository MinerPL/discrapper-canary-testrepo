n.d(t, {
  Z: function() {
return T;
  }
}), n(47120), n(411104);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(260034),
  o = n(481060),
  c = n(410030),
  d = n(117496),
  u = n(225784),
  _ = n(626135),
  h = n(900849),
  E = n(143021),
  I = n(689938),
  m = n(856059);
let g = 52,
  p = r().throttle(h.c6, 1000, {
leading: !1,
trailing: !0
  });

function T(e) {
  let {
loadId: t,
onGuildCardSeen: n,
onGuildCardClick: r
  } = e, h = (0, c.ZP)(), {
guilds: T,
loading: S,
searchResultsQuery: f,
loadMore: C,
searchCategoryId: N
  } = (0, E.f)({
loadId: t
  }), A = a.useContext(_.AnalyticsContext), [v, Z] = a.useState((0, d.P)());
  a.useEffect(() => {
Z((0, d.P)());
  }, [f]);
  let L = a.useCallback(e => {
  p({
    loadId: t,
    searchId: v,
    query: f,
    guildResults: T,
    analyticsContext: A,
    categoryId: N,
    isTagSearch: !1
  }), n(e, N);
}, [
  A,
  T,
  t,
  n,
  N,
  v,
  f
]),
O = a.useMemo(() => S ? [
  T.length,
  0
] : [T.length], [
  T.length,
  S
]),
R = a.useCallback(e => {
  switch (e) {
    case 0:
      return (0, i.jsx)(l.X, {
        variant: 'heading-xl/semibold',
        className: m.heading,
        children: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
          query: f
        })
      });
    case 1:
      return (0, i.jsx)(o.Spinner, {
        className: m.spinner
      });
  }
}, [f]),
x = a.useCallback(e => {
  switch (e) {
    case 0:
      return g;
    case 1:
      return 120;
    default:
      throw Error('[getSectionHeight] Failed for section: '.concat(e));
  }
}, []),
b = a.useCallback((e, t) => {
  switch (e) {
    case 0:
      return T[t].id;
    case 1:
      return 'loading';
    default:
      throw Error('[getItemKey] Failed for section: '.concat(e));
  }
}, [T]),
P = a.useCallback(e => {
  switch (e) {
    case 0:
      return 320;
    case 1:
      return 0;
    default:
      throw Error('[getItemHeight] Failed for section: '.concat(e));
  }
}, []),
M = a.useCallback((e, t, n, a) => {
  if (0 === e) {
    let e = T[t];
    return (0, i.jsx)('div', {
      style: n,
      children: (0, i.jsx)(u.Z, {
        guild: e,
        onView: e => r(e, t, N),
        onGuildCardSeen: L,
        theme: h
      }, e.id)
    }, a);
  }
  return null;
}, [
  T,
  L,
  r,
  N,
  h
]),
D = a.useRef(null),
y = a.useMemo(() => (0, s.debounce)(() => {
  var e;
  let t = null === (e = D.current) || void 0 === e ? void 0 : e.getScrollerState();
  if (null == t)
    return;
  let n = t.scrollTop + t.offsetHeight;
  t.scrollHeight - n < 200 && C();
}, 250), [C]);
  return (0, i.jsx)('div', {
className: m.container,
children: (0, i.jsx)(o.MasonryList, {
  ref: D,
  className: m.masonryList,
  sections: O,
  columns: 3,
  itemGutter: 16,
  paddingHorizontal: 32,
  paddingVertical: 0,
  renderItem: M,
  renderSection: R,
  getSectionHeight: x,
  getItemKey: b,
  getItemHeight: P,
  chunkSize: 24,
  onScroll: y
})
  });
}