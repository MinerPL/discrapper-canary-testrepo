"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("924826"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("617015"),
  d = n("488324");
t.default = function(e) {
  let {
    statusSections: t,
    renderRow: n,
    searchQuery: c
  } = e, f = e => 0 === t[e].length ? 0 : u.STATUS_HEADER_HEIGHT + 16, E = e => {
    let {
      section: a,
      row: s
    } = e, l = t[a];
    if (null == l || null == s) return null;
    let i = l[s];
    return null == i ? null : n(i)
  }, h = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), _ = s.useRef(null), C = s.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), m = s.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), S = s.useCallback(e => {
    let t = document.querySelector(e),
      n = _.current;
    null != t && null != n && n.scrollIntoViewNode({
      node: t,
      padding: 8,
      callback: () => null == t ? void 0 : t.focus()
    })
  }, []), I = (0, l.default)({
    id: "people-list",
    isEnabled: h,
    scrollToStart: C,
    scrollToEnd: m,
    setFocus: S
  });
  return (0, a.jsx)(l.ListNavigatorProvider, {
    navigator: I,
    children: (0, a.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          ...s
        } = e;
        return (0, a.jsx)(r.ListAuto, {
          ref: e => {
            var t;
            _.current = e, n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
          },
          sectionHeight: f,
          renderRow: E,
          rowHeight: u.PEOPLE_LIST_ITEM_HEIGHT,
          sections: t.map(e => "" !== c && 0 === e.length ? e.length + 1 : e.length),
          className: d.peopleList,
          ...s
        })
      }
    })
  })
}