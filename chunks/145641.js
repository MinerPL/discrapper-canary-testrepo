var i = n(735250),
  s = n(470079),
  a = n(924826),
  r = n(91192),
  l = n(442837),
  o = n(481060),
  c = n(607070),
  d = n(617015),
  u = n(493367);
t.Z = function(e) {
  let {
statusSections: t,
renderRow: n,
searchQuery: _
  } = e, h = e => 0 === t[e].length ? 0 : d.De + 16, E = e => {
let {
  section: i,
  row: s
} = e, a = t[i];
if (null == a || null == s)
  return null;
let r = a[s];
return null == r ? null : n(r);
  }, I = (0, l.e7)([c.Z], () => c.Z.keyboardModeEnabled), m = s.useRef(null), g = s.useCallback(() => new Promise(e => {
let t = m.current;
if (null == t)
  return e();
t.scrollToTop({
  callback: () => requestAnimationFrame(() => e())
});
  }), []), p = s.useCallback(() => new Promise(e => {
let t = m.current;
if (null == t)
  return e();
t.scrollToBottom({
  callback: () => requestAnimationFrame(() => e())
});
  }), []), T = s.useCallback(e => {
let t = document.querySelector(e),
  n = m.current;
null != t && null != n && n.scrollIntoViewNode({
  node: t,
  padding: 8,
  callback: () => null == t ? void 0 : t.focus()
});
  }, []), S = (0, a.ZP)({
id: 'people-list',
isEnabled: I,
scrollToStart: g,
scrollToEnd: p,
setFocus: T
  });
  return (0, i.jsx)(r.bG, {
navigator: S,
children: (0, i.jsx)(r.SJ, {
  children: e => {
    let {
      ref: n,
      ...s
    } = e;
    return (0, i.jsx)(o.ListAuto, {
      ref: e => {
        var t;
        m.current = e, n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
      },
      sectionHeight: h,
      renderRow: E,
      rowHeight: d.NV,
      sections: t.map(e => '' !== _ && 0 === e.length ? e.length + 1 : e.length),
      className: u.peopleList,
      ...s
    });
  }
})
  });
};