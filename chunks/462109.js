n.d(t, {
  t: function() {
return l;
  }
});
var r = n(470079),
  i = n(611144),
  a = n(2052),
  o = n(691251),
  s = n(98528);
let l = e => {
  let {
columnCounts: t,
stickersGrid: n,
stickersListRef: l,
store: u,
gridNavigatorId: c,
setInspectedStickerPosition: d,
onGridItemSelect: _
  } = e, E = (0, a.O)(), f = r.useCallback(e => {
_(e, E);
  }, [
_,
E
  ]), h = r.useCallback((e, t) => {
d(e, t, o.u.GRID_NAVIGATOR_EVENT);
  }, [d]), {
gridDispatch: p,
getItemProps: m,
getRowProps: I,
gridContainerProps: T,
handleGridContainerKeyDown: g,
isUsingKeyboardNavigation: S
  } = (0, s.VO)({
columnCounts: t,
gridNavigatorId: c,
itemGrid: n,
itemList: l,
onGridNavigatorItemSelect: f,
onGridNavigatorPositionChange: h
  });
  return r.useEffect(() => u.useStore.subscribe(e => {
if (null == e)
  return;
let {
  columnIndex: t,
  rowIndex: n,
  source: r
} = e;
r !== o.u.GRID_NAVIGATOR_EVENT && p({
  type: i.s.SET_FOCUSED_POSITION,
  x: t,
  y: n
});
  }, e => e.inspectedExpressionPosition), [
p,
u
  ]), {
getItemProps: m,
getRowProps: I,
gridContainerProps: T,
handleGridContainerKeyDown: g,
isUsingKeyboardNavigation: S
  };
};