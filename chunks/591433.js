n.d(t, {
  Z: function() {
return Z;
  }
}), n(47120), n(411104);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(260034),
  o = n(481060),
  c = n(393903),
  d = n(410030),
  u = n(117496),
  _ = n(225784),
  h = n(626135),
  E = n(900849),
  m = n(143021),
  I = n(393596),
  g = n(35448),
  p = n(692420),
  T = n(689938),
  S = n(856059);
let f = 52,
  C = 84,
  N = Object.freeze({
top: 0,
bottom: 0,
left: 32,
right: 202
  }),
  A = Object.freeze({
top: 0,
bottom: 0,
left: 32,
right: 32
  }),
  v = r().throttle(E.c6, 1000, {
leading: !1,
trailing: !0
  });

function Z(e) {
  let {
loadId: t,
onGuildCardSeen: n,
onGuildCardClick: r
  } = e, E = (0, d.ZP)(), {
guilds: Z,
loading: L,
searchResultsQuery: O,
loadMore: R,
searchCategoryId: x
  } = (0, m.f)({
loadId: t
  }), b = a.useContext(h.AnalyticsContext), [P, M] = a.useState((0, u.P)()), [D, y] = a.useState(!0), j = a.useRef(D), [U, G] = a.useState(3), k = a.useRef(U), w = (0, c.y)(e => {
let t = null == e ? void 0 : e.getBoundingClientRect();
if (null == t)
  return;
let n = t.width;
n < 1024 && j.current ? (j.current = !1, y(!1)) : n > 1024 && !j.current && (j.current = !0, y(!0));
let i = 1;
for (n -= D ? 420 : 0, n -= 250; n > 0;)
  n -= 234, i += 1;
i !== k.current && (k.current = i, G(i));
  });
  a.useEffect(() => {
M((0, u.P)());
  }, [O]);
  let B = a.useCallback(e => {
  v({
    loadId: t,
    searchId: P,
    query: O,
    guildResults: Z,
    analyticsContext: b,
    categoryId: x,
    isTagSearch: !1
  }), n(e, x);
}, [
  b,
  Z,
  t,
  n,
  x,
  P,
  O
]),
H = a.useMemo(() => L ? [
  Z.length,
  0
] : [Z.length], [
  Z.length,
  L
]),
V = a.useCallback(e => {
  switch (e) {
    case 0:
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(l.X, {
            variant: 'heading-lg/semibold',
            className: S.heading,
            children: T.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
              query: O
            })
          }),
          !D && (0, i.jsxs)('div', {
            className: S.headingFilters,
            children: [
              (0, i.jsx)(g.Z, {
                loadId: t
              }),
              (0, i.jsx)(p.Z, {
                loadId: t
              })
            ]
          })
        ]
      });
    case 1:
      return (0, i.jsx)(o.Spinner, {
        className: S.spinner
      });
  }
}, [
  D,
  t,
  O
]),
F = a.useCallback(e => {
  switch (e) {
    case 0:
      return D ? f : C;
    case 1:
      return 120;
    default:
      throw Error('[getSectionHeight] Failed for section: '.concat(e));
  }
}, [D]),
Y = a.useCallback((e, t) => {
  switch (e) {
    case 0:
      return Z[t].id;
    case 1:
      return 'loading';
    default:
      throw Error('[getItemKey] Failed for section: '.concat(e));
  }
}, [Z]),
W = a.useCallback(e => {
  switch (e) {
    case 0:
      return 320;
    case 1:
      return 0;
    default:
      throw Error('[getItemHeight] Failed for section: '.concat(e));
  }
}, []),
z = a.useCallback((e, t, n, a) => {
  if (0 === e) {
    let e = Z[t];
    return (0, i.jsx)('div', {
      style: n,
      children: (0, i.jsx)(_.Z, {
        guild: e,
        onView: e => r(e, t, x),
        onGuildCardSeen: B,
        theme: E
      }, e.id)
    }, a);
  }
  return null;
}, [
  Z,
  B,
  r,
  x,
  E
]),
K = a.useRef(null),
q = a.useMemo(() => (0, s.debounce)(() => {
  var e;
  let t = null === (e = K.current) || void 0 === e ? void 0 : e.getScrollerState();
  if (null == t)
    return;
  let n = t.scrollTop + t.offsetHeight;
  t.scrollHeight - n < 200 && R();
}, 250), [R]),
Q = D ? N : A;
  return (0, i.jsx)('div', {
className: S.container,
ref: w,
children: (0, i.jsx)(o.MasonryList, {
  ref: K,
  className: S.masonryList,
  sections: H,
  columns: U,
  itemGutter: 16,
  padding: Q,
  renderItem: z,
  renderSection: V,
  getSectionHeight: F,
  getItemKey: Y,
  getItemHeight: W,
  chunkSize: 24,
  onScroll: q,
  renderAccessory: e => D ? (0, i.jsx)('div', {
    className: S.sidebar,
    style: {
      height: e
    },
    children: (0, i.jsxs)('div', {
      className: S.sidebarContent,
      children: [
        (0, i.jsx)('div', {
          className: S.sidebarLanguageSelect,
          children: (0, i.jsx)(p.Z, {
            loadId: t
          })
        }),
        (0, i.jsx)(I.Z, {
          loadId: t
        })
      ]
    })
  }) : null
})
  });
}