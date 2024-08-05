n.d(t, {
  U: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  a = n(49898),
  s = n(453378);

function r() {
  let [e, t] = i.useState(a.WB.DEFAULT), n = i.useRef(e), r = i.useCallback(e => {
t(e), n.current = e;
  }, []), l = i.useCallback(e => {
let t = Math.round(e);
switch (n.current) {
  case a.WB.DEFAULT:
    t < 260 - a.U1 && r(a.WB.COLLAPSED);
    break;
  case a.WB.COLLAPSED:
    t > 260 - a.Kl && r(a.WB.DEFAULT);
    break;
  case a.WB.FLOATING:
    t > 260 && r(a.WB.DEFAULT);
}
  }, [r]), o = i.useCallback(() => {
r(a.WB.DEFAULT);
  }, [r]), c = i.useCallback(() => {
r(a.WB.FLOATING);
  }, [r]), d = e === a.WB.FLOATING ? s.floatingSearchTabsMask : void 0;
  return i.useMemo(() => ({
searchBarState: e,
tabsClassName: d,
resetSearchBarState: o,
onTabsAvailableWidthChange: l,
onCollapsedSearchBarClick: c
  }), [
c,
o,
l,
e,
d
  ]);
}