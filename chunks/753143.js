"use strict";
n.d(t, {
  Z: function() {
    return l
  },
  r: function() {
    return u
  }
}), n(411104), n(47120);
var i = n(470079),
  r = n(134158),
  s = n(924428),
  o = n(151973);
let a = Object.freeze({
  spacerTop: 0,
  totalHeight: 0,
  items: [],
  isSidebarVisible: !1
});

function l(e) {
  let {
    sections: t,
    sectionHeight: n,
    rowHeight: l,
    footerHeight: u,
    sidebarHeight: _,
    listHeaderHeight: d,
    chunkSize: c = 256,
    paddingTop: E = 0,
    paddingBottom: I = 0,
    getScrollerState: T,
    getAnchorId: h
  } = e, S = (0, s.Z)(), f = (0, i.useRef)(a), [N] = (0, i.useState)(() => new r.Z), {
    dirty: A,
    chunkStart: m,
    chunkEnd: O,
    forceUpdateOnChunkChange: R
  } = (0, o.Z)({
    chunkSize: c,
    getScrollerState: T,
    forceUpdate: S
  }), {
    items: C
  } = f.current, p = null, {
    scrollTop: g
  } = T();
  for (let e of C) {
    if (0 === g) break;
    if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
    let t = "row" === e.type ? e.row : void 0;
    if (e.offsetTop >= g) {
      p = {
        id: e.anchorId,
        section: e.section,
        row: t,
        scrollOffset: e.offsetTop - g
      };
      break
    }
  }
  let L = (0, i.useMemo)(() => {
      let e = Math.max(0, m * c);
      return null != _ && e < _
    }, [c, m, _]),
    v = (0, i.useMemo)(() => A > 0 ? f.current : (N.mergeProps({
      sectionHeight: n,
      rowHeight: l,
      footerHeight: u,
      listHeaderHeight: d,
      paddingBottom: I,
      paddingTop: E,
      sections: t,
      getAnchorId: h
    }), N.compute(Math.max(0, m * c), O * c)), [A, m, O, n, l, u, d, I, E, t, N, c, h]);
  return (0, i.useLayoutEffect)(() => void(f.current = v)), {
    ...v,
    listComputer: N,
    forceUpdateOnChunkChange: R,
    anchor: p,
    isSidebarVisible: L
  }
}

function u(e) {
  let {
    scrollerRef: t,
    anchor: n,
    getScrollerState: r,
    listComputer: s,
    getAnchorId: o,
    totalHeight: a
  } = e;
  (0, i.useLayoutEffect)(() => {
    let {
      current: e
    } = t, {
      scrollTop: i
    } = r();
    if (null == n || null == n.row || null == e || null == o || 0 === i) return;
    let a = t => {
      if (t < 0 || t >= s.sections[n.section] || o(n.section, n.row) !== n.id) return !1;
      let [r] = s.computeScrollPosition(n.section, t), a = r - n.scrollOffset;
      return i !== a && (e.scrollTop = a), !0
    };
    if (!a(n.row)) !a(n.row - 1) && a(n.row + 1)
  }, [a])
}