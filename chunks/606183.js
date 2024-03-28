"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var i = l("735250");
l("470079");
var a = l("481060"),
  n = l("766910");

function s(e) {
  let {
    activeSection: t,
    setSection: l,
    shownSections: s
  } = e;
  return (0, i.jsx)(a.TabBar, {
    selectedItem: t,
    type: "top",
    onItemSelect: l,
    className: n.tabBar,
    children: s.map(e => (0, i.jsx)(a.TabBar.Item, {
      id: e.sectionName,
      className: n.tabBarItem,
      children: e.sectionText
    }, e.sectionName))
  })
}