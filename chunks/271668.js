n(47120), n(724458);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(392711),
  l = n.n(o),
  u = n(788911),
  c = n(911969),
  d = n(367907),
  _ = n(588468),
  E = n(30465),
  f = n(218867),
  h = n(313201),
  p = n(806966),
  m = n(98528),
  I = n(551058),
  T = n(555573),
  g = n(10718),
  S = n(367790),
  A = n(895924),
  N = n(581364),
  v = n(56801),
  O = n(342687),
  R = n(826298),
  C = n(689079),
  y = n(981631),
  D = n(689938),
  L = n(11872),
  b = n(239840);
let M = [
8,
8,
0,
8
  ],
  P = l().debounce(() => {
(0, d.yw)(y.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED);
  }, 300);

function U(e) {
  e.preventDefault();
}
t.Z = i.forwardRef(function(e, t) {
  let {
channel: n,
canOnlyUseTextCommands: a
  } = e, o = i.useRef(!1), l = i.useRef(0), [w, x] = i.useState(0), G = i.useRef(null), [k, B] = i.useState(!1), F = p.Xn.useStore(e => e.activeCategoryIndex);
  i.useEffect(() => {
(0, d.yw)(y.rMx.APPLICATION_COMMAND_BROWSER_OPENED);
  }, []);
  let {
sectionDescriptors: V,
activeSections: H,
commandsByActiveSection: Z,
hasMoreAfter: Y,
commands: j,
filteredSectionId: W,
scrollDown: K,
filterSection: z
  } = g.wi(n, {
commandTypes: [c.yU.CHAT],
builtIns: a ? S.D.ONLY_TEXT : S.D.ALLOW,
applicationCommands: !a
  }, {
placeholderCount: 7,
limit: C.tn,
includeFrecency: !0
  }), q = (0, m.Qs)({
activeCategoryIndex: F,
isScrolling: o,
listRef: G,
onActiveCategoryIndexChange: e => {
  let t = H[e];
  if (null != t) {
    let e = V.findIndex(e => e.id === t.id);
    p.Xn.setActiveCategoryIndex(e);
  }
},
scrollOffset: 20,
searchQuery: ''
  }), Q = e => {
let t = H.length,
  n = Z.reduce((e, t) => e + t.data.length, 0) - (Y ? 7 : 0);
Y && e + 420 > 48 * t + 56 * n - 512 && K(), q(e), P(), l.current = e;
  };
  i.useEffect(() => {
Q(l.current);
  }, [j]);
  let X = i.useCallback(e => e !== H.length - 1 || Y ? 16 : 0, [
  H.length,
  Y
]),
$ = Z.map(e => e.data.length);
  i.useEffect(() => {
null != G.current && k && null != w && G.current.scrollRowIntoView(w);
  }, [
k,
w
  ]), i.useLayoutEffect(() => {
if (null != W) {
  var e;
  null === (e = G.current) || void 0 === e || e.scrollToSectionTop(0);
}
  }, [
j,
W
  ]);
  let J = i.useCallback(e => {
  if (e.id === W || e.id === C.bi.FRECENCY) {
    var t;
    z(null), null === (t = G.current) || void 0 === t || t.scrollToSectionTop(0);
  } else
    z(e.id);
}, [
  z,
  W
]),
ee = i.useCallback((e, t, r) => {
  T.Po({
    channelId: n.id,
    command: e,
    section: t,
    location: A.Vh.DISCOVERY,
    triggerSection: r
  });
}, [n.id]);
  i.useImperativeHandle(t, () => ({
onTabOrEnter: e => {
  if (null == w)
    return !e && (x(0), !0);
  if (null == w)
    return !1;
  let t = 0,
    n = 0;
  for (let e of Z)
    if (t = n, w < (n += e.data.length)) {
      let n = e.data[w - t],
        r = V.find(e => e.id === n.applicationId);
      ee(n, r, (0, N.tI)(e.section));
      break;
    }
  return !0;
},
onMoveSelection: e => {
  if (0 === j.length)
    return !0;
  let t = Y ? 7 : 0,
    n = j.length + t,
    r = null == w ? 0 : w + e;
  return r >= n ? r = n - 1 : r < 0 && (r = 0), x(r), B(!0), !0;
}
  }), [
j.length,
Z,
Y,
V,
ee,
w
  ]);
  let et = i.useCallback(e => {
  let t = H[e];
  if (null == t)
    return null;
  let i = (0, R.ky)(t),
    a = (0, r.jsx)(i, {
      channel: n,
      section: t,
      width: 16,
      height: 16,
      padding: 0
    });
  return (0, r.jsx)(I.Z, {
    className: L.categoryHeader,
    icon: a,
    children: t.name
  }, e);
}, [
  n,
  H
]),
en = i.useCallback((e, t) => {
  let n = e === H.length - 1,
    i = H[e],
    {
      data: a
    } = Z[e];
  return (0, r.jsxs)('ul', {
    role: 'group',
    'aria-label': i.name,
    className: s()(L.categorySection, {
      [L.categorySectionLast]: n
    }),
    children: [
      t,
      0 === a.length && (0, r.jsx)(u.Z, {
        message: D.Z.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
          applicationName: i.name
        }),
        noResultsImageURL: b,
        className: L.noSearchResults
      })
    ]
  }, e);
}, [
  H,
  Z
]),
er = i.useCallback((e, t) => {
  var i;
  let a = Z[t.sectionIndex],
    s = a.data[t.sectionRowIndex],
    o = ''.concat(a.section.id, ':').concat(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : e);
  if (null == s || a.section.id !== s.applicationId && a.section.id !== C.bi.FRECENCY || s.inputType === A.iw.PLACEHOLDER)
    return (0, r.jsx)(O.Z, {}, o);
  let l = V.find(e => e.id === s.applicationId);
  return (0, r.jsx)(_.ZP.NewCommand, {
    index: e,
    command: s,
    channel: n,
    className: L.itemWrapper,
    selected: w === e,
    showImage: a.section.id !== s.applicationId,
    section: l,
    onClick: () => ee(s, l, (0, N.tI)(a.section)),
    onHover: () => {
      x(null), B(!1);
    }
  }, o);
}, [
  n,
  Z,
  ee,
  V,
  w
]),
ei = (0, h.Dt)();
  return (0, E.KR)(ei, !0, (0, _.DJ)(w)), i.useEffect(() => () => {
(0, E.sJ)();
  }, []), (0, r.jsxs)(_.ZP, {
id: ei,
className: L.outerWrapper,
innerClassName: L.wrapper,
onMouseDown: U,
children: [
  (0, r.jsx)(v.Z, {
    className: L.rail,
    channel: n,
    sections: V,
    filteredSectionId: W,
    activeCategoryIndex: F,
    onSectionClick: J,
    applicationCommandListRef: G
  }),
  (0, r.jsx)(f.Z, {
    role: 'listbox',
    className: L.list,
    listPadding: M,
    onScroll: Q,
    renderRow: er,
    renderSection: en,
    renderSectionHeader: et,
    rowCount: H.length,
    rowCountBySection: $,
    rowHeight: 56,
    sectionHeaderHeight: 32,
    sectionMarginBottom: X,
    ref: G,
    stickyHeaders: !0
  })
]
  });
});