"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  r = s("77078"),
  u = s("980428"),
  o = s("772280"),
  d = s("782340"),
  c = s("45604"),
  E = n.forwardRef(function(e, t) {
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
      className: l(c.paginator, f),
      ref: t,
      ...p,
      children: [E, (0, a.jsxs)("div", {
        className: c.pageActions,
        children: [(0, a.jsx)(r.Clickable, {
          className: l(c.pageButtonPrev, {
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
          className: l(c.pageButtonNext, {
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