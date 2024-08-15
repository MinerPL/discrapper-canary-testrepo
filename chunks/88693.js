n.d(t, {
  U: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  a = n(49898),
  s = n(9886);

function r(e) {
  let {
isSearchBarVisible: t
  } = e, [n, r] = i.useState(a.WB.DEFAULT), l = i.useCallback(e => {
if (!t)
  return;
let i = Math.round(e);
switch (n) {
  case a.WB.DEFAULT:
    i < 260 - a.U1 && r(a.WB.COLLAPSED);
    break;
  case a.WB.COLLAPSED:
    i > 260 - a.Kl && r(a.WB.DEFAULT);
    break;
  case a.WB.FLOATING:
    i > 260 && r(a.WB.DEFAULT);
}
  }, [
t,
n
  ]), o = i.useCallback(() => {
r(a.WB.FLOATING);
  }, []), c = i.useCallback(() => {
n === a.WB.FLOATING && r(a.WB.COLLAPSED);
  }, [n]), d = n === a.WB.FLOATING ? s.floatingSearchTabsMask : void 0;
  return {
searchBarState: n,
onTabsAvailableWidthChange: l,
tabsClassName: d,
onCollapsedSearchBarClick: o,
onSearchBarBlur: c
  };
}