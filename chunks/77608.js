"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("481060"),
  r = n("113434"),
  o = n("689938"),
  u = n("774473");

function d(e) {
  let {
    setSelectedFilter: t,
    selectedFilter: n
  } = e, s = [{
    id: r.QuestFilters.INCOMPLETE,
    label: o.default.Messages.QUESTS_ALL
  }, {
    id: r.QuestFilters.COMPLETE,
    label: o.default.Messages.QUESTS_COMPLETED
  }], d = e => {
    t(e)
  };
  return (0, a.jsx)(i.TabBar, {
    className: l()(u.container),
    selectedItem: n,
    onItemSelect: e => d(e),
    type: "top",
    "aria-label": o.default.Messages.QUESTS,
    orientation: "horizontal",
    children: s.map(e => {
      let t = e.id === n;
      return (0, a.jsx)(i.TabBar.Item, {
        id: e.id,
        className: l()(u.tab, {
          [u.selected]: t
        }),
        "aria-label": e.label,
        disableItemStyles: !0,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: t ? "text-brand" : "text-primary",
          children: e.label
        })
      }, e.id)
    })
  })
}