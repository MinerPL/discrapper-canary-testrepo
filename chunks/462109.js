"use strict";
n.d(t, {
  t: function() {
    return l
  }
});
var i = n(470079),
  r = n(611144),
  s = n(2052),
  o = n(691251),
  a = n(98528);
let l = e => {
  let {
    columnCounts: t,
    stickersGrid: n,
    stickersListRef: l,
    store: u,
    gridNavigatorId: _,
    setInspectedStickerPosition: d,
    onGridItemSelect: c
  } = e, E = (0, s.O)(), I = i.useCallback(e => {
    c(e, E)
  }, [c, E]), T = i.useCallback((e, t) => {
    d(e, t, o.u.GRID_NAVIGATOR_EVENT)
  }, [d]), {
    gridDispatch: h,
    getItemProps: S,
    getRowProps: f,
    gridContainerProps: N,
    handleGridContainerKeyDown: A,
    isUsingKeyboardNavigation: m
  } = (0, a.VO)({
    columnCounts: t,
    gridNavigatorId: _,
    itemGrid: n,
    itemList: l,
    onGridNavigatorItemSelect: I,
    onGridNavigatorPositionChange: T
  });
  return i.useEffect(() => u.useStore.subscribe(e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: n,
      source: i
    } = e;
    i !== o.u.GRID_NAVIGATOR_EVENT && h({
      type: r.s.SET_FOCUSED_POSITION,
      x: t,
      y: n
    })
  }, e => e.inspectedExpressionPosition), [h, u]), {
    getItemProps: S,
    getRowProps: f,
    gridContainerProps: N,
    handleGridContainerKeyDown: A,
    isUsingKeyboardNavigation: m
  }
}