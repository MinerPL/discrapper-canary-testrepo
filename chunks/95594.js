"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(47120);
var i = n(470079),
  r = n(663507),
  s = n(924428),
  o = n(151973);
let a = Object.freeze({
  coordsMap: {},
  visibleSections: {},
  totalHeight: 0,
  gridData: {
    boundaries: [],
    coordinates: {}
  }
});

function l(e) {
  let {
    sections: t,
    columns: n,
    getItemKey: l,
    getItemHeight: u,
    getSectionHeight: _,
    chunkSize: d = 250,
    getScrollerState: c,
    maxBufferWidth: E,
    itemGutter: I,
    removeEdgeItemGutters: T,
    sectionGutter: h,
    padding: S,
    paddingVertical: f,
    paddingHorizontal: N,
    dir: A
  } = e, m = (0, s.Z)(), O = (0, i.useRef)(a), [R] = (0, i.useState)(() => new r.ZP), C = c(), p = Math.min(null != E ? E : 1 / 0, C.offsetWidth), g = null != E ? Math.max(0, C.offsetWidth - E) : 0, {
    dirty: L,
    chunkStart: v,
    chunkEnd: D,
    forceUpdateOnChunkChange: M
  } = (0, o.Z)({
    chunkSize: d,
    getScrollerState: c,
    forceUpdate: m
  });
  return O.current = (0, i.useMemo)(() => L > 0 ? O.current : (R.mergeProps({
    sections: t,
    columns: n,
    getItemKey: l,
    getItemHeight: u,
    getSectionHeight: _,
    bufferWidth: p,
    itemGutter: I,
    removeEdgeItemGutters: T,
    sectionGutter: h,
    padding: S,
    paddingVertical: f,
    paddingHorizontal: N,
    marginLeft: g / 2,
    dir: A
  }), R.computeVisibleSections(Math.max(0, v * d), D * d), R.getState()), [L, R, t, n, l, u, _, v, D, d, I, T, h, S, f, N, p, A]), {
    ...O.current,
    masonryComputer: R,
    forceUpdateOnChunkChange: M,
    forceUpdate: m
  }
}