n.d(t, {
    D: function () {
        return p;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(693789),
    l = n(1561),
    u = n(260034),
    c = n(463208),
    d = n(481060),
    _ = n(889963),
    E = n(689938),
    f = n(567816);
function h(e) {
    let { page: t, totalPageCount: n, disabled: a, onPageChange: o } = e,
        [d, _] = i.useState(!1),
        [E, h] = i.useState(null),
        p = null != E && E >= 1 && E <= n;
    return a
        ? (0, r.jsx)(
              u.X,
              {
                  className: f.gap,
                  'aria-hidden': !0,
                  variant: 'heading-sm/semibold',
                  children: '\u2026'
              },
              t.key
          )
        : d
          ? (0, r.jsx)(
                c.o,
                {
                    autoFocus: !0,
                    className: f.jumpToPageInlineInput,
                    size: c.o.Sizes.MINI,
                    value: null == E ? '' : ''.concat(E),
                    onChange: (e) => {
                        let t = parseInt(e);
                        if ('' === e || isNaN(t)) {
                            h(null);
                            return;
                        }
                        h(t);
                    },
                    onBlur: () => {
                        _(!1), h(null);
                    },
                    onKeyPress: (e) => {
                        'Enter' === e.key && null != E && p && (o(E), _(!1), h(null));
                    },
                    disabled: a
                },
                t.key
            )
          : (0, r.jsx)(
                l.P,
                {
                    onClick: () => _(!0),
                    children: (0, r.jsx)(u.X, {
                        className: s()(f.roundButton, f.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                t.key
            );
}
function p(e) {
    let { currentPage: t, totalCount: n, pageSize: i, maxVisiblePages: a, disablePaginationGap: u, onPageChange: c, hideMaxPage: p = !1, className: m } = e,
        I = Math.ceil(n / i);
    return (0, r.jsx)(_.W, {
        totalPageCount: I,
        selectedPage: t,
        maxVisiblePages: a,
        hideMaxPage: p,
        onPageChange: function (e) {
            null != c && c(e);
        },
        children: function (e) {
            let { pages: t, hasMultiplePages: n } = e;
            return n
                ? (0, r.jsx)('div', {
                      className: s()(f.pageControlContainer, m),
                      children: (0, r.jsx)('nav', {
                          className: f.pageControl,
                          children: t.map((e) => {
                              var t, n;
                              switch (e.type) {
                                  case _.s.BACK:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, r.jsxs)(
                                              o.zx,
                                              {
                                                  className: f.endButton,
                                                  innerClassName: f.endButtonInner,
                                                  look: o.zx.Looks.BLANK,
                                                  color: o.zx.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: 'prev',
                                                  children: [
                                                      (0, r.jsx)(d.ChevronSmallLeftIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: f.iconCaret,
                                                          'aria-hidden': !0
                                                      }),
                                                      (0, r.jsx)('span', { children: E.Z.Messages.BACK })
                                                  ]
                                              },
                                              t
                                          );
                                      })(e);
                                  case _.s.PAGE:
                                      return (
                                          (t = e),
                                          (0, r.jsx)(
                                              l.P,
                                              {
                                                  className: s()(f.roundButton, { [f.activeButton]: t.selected }),
                                                  onClick: t.selected ? void 0 : t.navigateToPage,
                                                  'aria-label': E.Z.Messages.PAGINATION_PAGE_LABEL.format({ pageNumber: t.targetPage }),
                                                  'aria-current': t.selected ? 'page' : void 0,
                                                  children: (0, r.jsx)('span', { children: t.targetPage })
                                              },
                                              t.key
                                          )
                                      );
                                  case _.s.GAP:
                                      return (
                                          (n = e),
                                          (0, r.jsx)(
                                              h,
                                              {
                                                  page: n,
                                                  totalPageCount: I,
                                                  disabled: !!u,
                                                  onPageChange: c
                                              },
                                              n.key
                                          )
                                      );
                                  case _.s.NEXT:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, r.jsxs)(
                                              o.zx,
                                              {
                                                  className: f.endButton,
                                                  innerClassName: f.endButtonInner,
                                                  look: o.zx.Looks.BLANK,
                                                  color: o.zx.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: 'next',
                                                  children: [
                                                      (0, r.jsx)('span', { children: E.Z.Messages.NEXT }),
                                                      (0, r.jsx)(d.ChevronSmallRightIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: f.iconCaret,
                                                          'aria-hidden': !0
                                                      })
                                                  ]
                                              },
                                              t
                                          );
                                      })(e);
                                  default:
                                      return null;
                              }
                          })
                      })
                  })
                : null;
        }
    });
}
