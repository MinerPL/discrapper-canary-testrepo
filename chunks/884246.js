"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("803997"),
  l = s.n(i),
  r = s("481060"),
  u = s("292937"),
  o = s("692437"),
  d = s("689938"),
  c = s("560951");
t.default = n.forwardRef(function(e, t) {
  let {
    currentPageIndex: s,
    numPages: n,
    onChangePage: i,
    children: E,
    className: f,
    showPageCount: _ = !0,
    ...p
  } = e, m = s <= 0, I = s >= n - 1;
  return (0, a.jsxs)("div", {
    className: l()(c.__invalid_paginator, f),
    ref: t,
    ...p,
    children: [E, (0, a.jsxs)("div", {
      className: c.pageActions,
      children: [(0, a.jsx)(r.Clickable, {
        className: l()(c.pageButtonPrev, {
          [c.disabled]: m
        }),
        tabIndex: m ? -1 : 0,
        onClick: m ? void 0 : () => i(s - 1),
        children: (0, a.jsx)(u.default, {
          className: c.pageButtonIcon,
          "aria-label": d.default.Messages.PAGINATION_PREVIOUS
        })
      }), _ ? (0, a.jsx)("div", {
        className: c.pageIndicator,
        children: d.default.Messages.PAGINATOR_OF_PAGES.format({
          currentPage: s + 1,
          numPages: n
        })
      }) : (0, a.jsx)("div", {
        className: c.pageIndicator,
        children: d.default.Messages.PAGINATOR_CURRENT_PAGE.format({
          currentPage: s + 1
        })
      }), (0, a.jsx)(r.Clickable, {
        className: l()(c.pageButtonNext, {
          [c.disabled]: I
        }),
        tabIndex: I ? -1 : 0,
        onClick: I ? void 0 : () => i(s + 1),
        children: (0, a.jsx)(o.default, {
          className: c.pageButtonIcon,
          "aria-label": d.default.Messages.PAGINATION_NEXT
        })
      })]
    })]
  })
})