"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(314734),
  l = n(689938),
  u = n(319306);

function _(e) {
  let {
    sortOrder: t,
    onSortOptionClick: n,
    closePopout: r
  } = e, _ = e => {
    n(e), r()
  };
  return (0, i.jsx)("div", {
    className: s()(a.Jh, u.container),
    children: (0, i.jsx)(o.Menu, {
      navId: "command-list-sort",
      "aria-label": l.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_A11Y_LABEL,
      hideScroller: !0,
      onClose: r,
      onSelect: r,
      children: (0, i.jsxs)(o.MenuGroup, {
        label: l.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
        children: [(0, i.jsx)(o.MenuRadioItem, {
          id: "sort-by-popular",
          group: "sort-by",
          label: l.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR,
          action: () => _(a.bS.POPULAR),
          checked: t === a.bS.POPULAR
        }), (0, i.jsx)(o.MenuRadioItem, {
          id: "sort-by-alphabetical",
          group: "sort-by",
          label: l.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL,
          action: () => _(a.bS.ALPHABETICAL),
          checked: t === a.bS.ALPHABETICAL
        })]
      })
    })
  })
}