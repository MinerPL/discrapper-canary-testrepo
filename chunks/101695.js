"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("411932");

function i(e) {
  let {
    changePage: t,
    offset: n,
    totalResults: i,
    pageLength: r
  } = e;
  return (0, a.jsx)("div", {
    className: s.container,
    children: (0, a.jsx)(l.Paginator, {
      currentPage: Math.floor(n / r) + 1,
      totalCount: i,
      pageSize: r,
      onPageChange: t,
      maxVisiblePages: 5
    })
  })
}