"use strict";
n.d(t, {
  D: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(693789),
  l = n(1561),
  u = n(260034),
  _ = n(463208),
  d = n(292937),
  c = n(692437),
  E = n(889963),
  I = n(689938),
  T = n(819234);

function h(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: s,
    onPageChange: a
  } = e, [d, c] = r.useState(!1), [E, I] = r.useState(null), h = null != E && E >= 1 && E <= n;
  return s ? (0, i.jsx)(u.X, {
    className: T.gap,
    "aria-hidden": !0,
    variant: "heading-sm/semibold",
    children: "…"
  }, t.key) : d ? (0, i.jsx)(_.o, {
    autoFocus: !0,
    className: T.jumpToPageInlineInput,
    size: _.o.Sizes.MINI,
    value: null == E ? "" : "".concat(E),
    onChange: e => {
      let t = parseInt(e);
      if ("" === e || isNaN(t)) {
        I(null);
        return
      }
      I(t)
    },
    onBlur: () => {
      c(!1), I(null)
    },
    onKeyPress: e => {
      "Enter" === e.key && null != E && h && (a(E), c(!1), I(null))
    },
    disabled: s
  }, t.key) : (0, i.jsx)(l.P, {
    onClick: () => c(!0),
    children: (0, i.jsx)(u.X, {
      className: o()(T.roundButton, T.gap),
      "aria-hidden": !0,
      variant: "heading-sm/semibold",
      children: "…"
    })
  }, t.key)
}

function S(e) {
  let {
    currentPage: t,
    totalCount: n,
    pageSize: r,
    maxVisiblePages: s,
    disablePaginationGap: u,
    onPageChange: _,
    hideMaxPage: S = !1,
    className: f
  } = e, N = Math.ceil(n / r);
  return (0, i.jsx)(E.W, {
    totalPageCount: N,
    selectedPage: t,
    maxVisiblePages: s,
    hideMaxPage: S,
    onPageChange: function(e) {
      null != _ && _(e)
    },
    children: function(e) {
      let {
        pages: t,
        hasMultiplePages: n
      } = e;
      return n ? (0, i.jsx)("div", {
        className: o()(T.pageControlContainer, f),
        children: (0, i.jsx)("nav", {
          className: T.pageControl,
          children: t.map(e => {
            var t, n;
            switch (e.type) {
              case E.s.BACK:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: r
                  } = e;
                  return (0, i.jsxs)(a.zx, {
                    className: T.endButton,
                    innerClassName: T.endButtonInner,
                    look: a.zx.Looks.BLANK,
                    color: a.zx.Colors.TRANSPARENT,
                    onClick: r,
                    disabled: n,
                    rel: "prev",
                    children: [(0, i.jsx)(d.Z, {
                      className: T.iconCaret,
                      "aria-hidden": !0
                    }), (0, i.jsx)("span", {
                      children: I.Z.Messages.BACK
                    })]
                  }, t)
                }(e);
              case E.s.PAGE:
                ;
                return t = e, (0, i.jsx)(l.P, {
                  className: o()(T.roundButton, {
                    [T.activeButton]: t.selected
                  }),
                  onClick: t.selected ? void 0 : t.navigateToPage,
                  "aria-label": I.Z.Messages.PAGINATION_PAGE_LABEL.format({
                    pageNumber: t.targetPage
                  }),
                  "aria-current": t.selected ? "page" : void 0,
                  children: (0, i.jsx)("span", {
                    children: t.targetPage
                  })
                }, t.key);
              case E.s.GAP:
                ;
                return n = e, (0, i.jsx)(h, {
                  page: n,
                  totalPageCount: N,
                  disabled: !!u,
                  onPageChange: _
                }, n.key);
              case E.s.NEXT:
                return function(e) {
                  let {
                    key: t,
                    disabled: n,
                    navigateToPage: r
                  } = e;
                  return (0, i.jsxs)(a.zx, {
                    className: T.endButton,
                    innerClassName: T.endButtonInner,
                    look: a.zx.Looks.BLANK,
                    color: a.zx.Colors.TRANSPARENT,
                    onClick: r,
                    disabled: n,
                    rel: "next",
                    children: [(0, i.jsx)("span", {
                      children: I.Z.Messages.NEXT
                    }), (0, i.jsx)(c.Z, {
                      className: T.iconCaret,
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