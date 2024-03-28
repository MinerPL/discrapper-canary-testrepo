"use strict";
a.r(t);
var l = a("735250"),
  s = a("470079"),
  n = a("461745"),
  r = a("907191");
let i = s.forwardRef(function(e, t) {
  let {
    query: a,
    onQueryChange: s,
    onRemoveTag: i,
    onSelect: o,
    onSelectionChange: d,
    selectedSection: u,
    selectedRow: c,
    tags: S,
    sections: f,
    placeholder: T = "",
    focusAfterReady: A,
    isReady: m,
    "aria-labelledby": _,
    "aria-controls": g
  } = e;
  return (0, l.jsx)(n.default, {
    autoFocus: !0,
    className: r.searchBar,
    maxHeight: 100,
    onQueryChange: s,
    onRemoveTag: i,
    selectedSection: u,
    selectedRow: c,
    onSelect: o,
    onSelectionChange: d,
    placeholder: 0 === S.length ? T : "",
    query: a,
    ref: t,
    size: n.default.Sizes.MEDIUM,
    tags: S,
    sections: f,
    focusAfterReady: A,
    isReady: m,
    inputProps: {
      "aria-labelledby": _,
      "aria-controls": g,
      "aria-expanded": !0,
      "aria-activedescendant": "user-row-".concat(c)
    }
  })
});
t.default = i