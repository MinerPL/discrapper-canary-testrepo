"use strict";
n.r(t), n.d(t, {
  Paginator: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("271841"),
  l = n("227645"),
  u = n("605451"),
  d = n("240353"),
  c = n("980428"),
  f = n("772280"),
  _ = n("21872"),
  h = n("782340"),
  g = n("959279");

function m(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: r,
    onPageChange: o
  } = e, [c, f] = s.useState(!1), [_, h] = s.useState(null), m = null != _ && _ >= 1 && _ <= n;
  return r ? (0, i.jsx)(u.Heading, {
    className: g.gap,
    "aria-hidden": !0,
    variant: "heading-sm/semibold",
    children: "…"
  }, t.key) : c ? (0, i.jsx)(d.TextInput, {
    autoFocus: !0,
    className: g.jumpToPageInlineInput,
    size: d.TextInput.Sizes.MINI,
    value: null == _ ? "" : "".concat(_),
    onChange: e => {
      let t = parseInt(e);
      if ("" === e || isNaN(t)) {
        h(null);
        return
      }
      h(t)
    },
    onBlur: () => {
      f(!1), h(null)
    },
    onKeyPress: e => {
      "Enter" === e.key && null != _ && m && (o(_), f(!1), h(null))
    },
    disabled: r
  }, t.key) : (0, i.jsx)(l.Clickable, {
    onClick: () => f(!0),
    children: (0, i.jsx)(u.Heading, {
      className: a(g.roundButton, g.gap),
      "aria-hidden": !0,
      variant: "heading-sm/semibold",
      children: "…"
    })
  }, t.key)
}

function E(e) {
  let {
    currentPage: t,
    totalCount: n,
    pageSize: s,
    maxVisiblePages: r,
    disablePaginationGap: u,
    onPageChange: d,
    hideMaxPage: E = !1,
    className: p
  } = e, v = Math.ceil(n / s);
  return (0, i.jsx)(_.PaginationController, {
    totalPageCount: v,
    selectedPage: t,
    maxVisiblePages: r,
    hideMaxPage: E,
    onPageChange: function(e) {
      null != d && d(e)
    },
    children: function(e) {
      let {
        pages: t,
        hasMultiplePages: n
      } = e;
      return n ? (0, i.jsx)("div", {
        className: a(g.pageControlContainer, p),
        children: (0, i.jsx)("nav", {
          className: g.pageControl,
          children: t.map(e => {
            var t, n;
            switch (e.type) {
              case _.PaginationTypes.BACK:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: s
                  } = e;
                  return (0, i.jsxs)(o.Button, {
                    className: g.endButton,
                    innerClassName: g.endButtonInner,
                    look: o.Button.Looks.BLANK,
                    color: o.Button.Colors.TRANSPARENT,
                    onClick: s,
                    disabled: n,
                    rel: "prev",
                    children: [(0, i.jsx)(c.default, {
                      className: g.iconCaret,
                      "aria-hidden": !0
                    }), (0, i.jsx)("span", {
                      children: h.default.Messages.BACK
                    })]
                  }, t)
                }(e);
              case _.PaginationTypes.PAGE:
                ;
                return t = e, (0, i.jsx)(l.Clickable, {
                  className: a(g.roundButton, {
                    [g.activeButton]: t.selected
                  }),
                  onClick: t.selected ? void 0 : t.navigateToPage,
                  "aria-label": h.default.Messages.PAGINATION_PAGE_LABEL.format({
                    pageNumber: t.targetPage
                  }),
                  "aria-current": t.selected ? "page" : void 0,
                  children: (0, i.jsx)("span", {
                    children: t.targetPage
                  })
                }, t.key);
              case _.PaginationTypes.GAP:
                ;
                return n = e, (0, i.jsx)(m, {
                  page: n,
                  totalPageCount: v,
                  disabled: !!u,
                  onPageChange: d
                }, n.key);
              case _.PaginationTypes.NEXT:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: s
                  } = e;
                  return (0, i.jsxs)(o.Button, {
                    className: g.endButton,
                    innerClassName: g.endButtonInner,
                    look: o.Button.Looks.BLANK,
                    color: o.Button.Colors.TRANSPARENT,
                    onClick: s,
                    disabled: n,
                    rel: "next",
                    children: [(0, i.jsx)("span", {
                      children: h.default.Messages.NEXT
                    }), (0, i.jsx)(f.default, {
                      className: g.iconCaret,
                      "aria-hidden": !0
                    })]
                  }, t)
                }(e);
              default:
                return null
            }
          })
        })
      }) : null
    }
  })
}