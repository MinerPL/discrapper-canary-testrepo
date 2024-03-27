"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("37983"),
  n = a("884691"),
  r = a("137223"),
  s = a("278243");
let i = n.forwardRef(function(e, t) {
  let {
    query: a,
    onQueryChange: n,
    onRemoveTag: i,
    onSelect: d,
    onSelectionChange: o,
    selectedSection: u,
    selectedRow: c,
    tags: S,
    sections: f,
    placeholder: A = "",
    focusAfterReady: T,
    isReady: _,
    "aria-labelledby": E,
    "aria-controls": I
  } = e;
  return (0, l.jsx)(r.default, {
    autoFocus: !0,
    className: s.searchBar,
    maxHeight: 100,
    onQueryChange: n,
    onRemoveTag: i,
    selectedSection: u,
    selectedRow: c,
    onSelect: d,
    onSelectionChange: o,
    placeholder: 0 === S.length ? A : "",
    query: a,
    ref: t,
    size: r.default.Sizes.MEDIUM,
    tags: S,
    sections: f,
    focusAfterReady: T,
    isReady: _,
    inputProps: {
      "aria-labelledby": E,
      "aria-controls": I,
      "aria-expanded": !0,
      "aria-activedescendant": "user-row-".concat(c)
    }
  })
});
var d = i