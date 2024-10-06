n.d(t, {
    D: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(693789),
    l = n(1561),
    u = n(463208),
    c = n(481060),
    d = n(889963),
    _ = n(689938),
    E = n(887603);
function f(e) {
    let { page: t, totalPageCount: n, disabled: a, onPageChange: o } = e,
        [d, _] = i.useState(!1),
        [f, h] = i.useState(null),
        p = null != f && f >= 1 && f <= n;
    return a
        ? (0, r.jsx)(
              c.Heading,
              {
                  className: E.gap,
                  'aria-hidden': !0,
                  variant: 'heading-sm/semibold',
                  children: '\u2026'
              },
              t.key
          )
        : d
          ? (0, r.jsx)(
                u.o,
                {
                    autoFocus: !0,
                    className: E.jumpToPageInlineInput,
                    size: u.o.Sizes.MINI,
                    value: null == f ? '' : ''.concat(f),
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
                        'Enter' === e.key && null != f && p && (o(f), _(!1), h(null));
                    },
                    disabled: a
                },
                t.key
            )
          : (0, r.jsx)(
                l.P,
                {
                    onClick: () => _(!0),
                    children: (0, r.jsx)(c.Heading, {
                        className: s()(E.roundButton, E.gap),
                        'aria-hidden': !0,
                        variant: 'heading-sm/semibold',
                        children: '\u2026'
                    })
                },
                t.key
            );
}
function h(e) {
    let { currentPage: t, totalCount: n, pageSize: i, maxVisiblePages: a, disablePaginationGap: u, onPageChange: h, hideMaxPage: p = !1, className: I } = e,
        m = Math.ceil(n / i);
    return (0, r.jsx)(d.W, {
        totalPageCount: m,
        selectedPage: t,
        maxVisiblePages: a,
        hideMaxPage: p,
        onPageChange: function (e) {
            null != h && h(e);
        },
        children: function (e) {
            let { pages: t, hasMultiplePages: n } = e;
            return n
                ? (0, r.jsx)('div', {
                      className: s()(E.pageControlContainer, I),
                      children: (0, r.jsx)('nav', {
                          className: E.pageControl,
                          children: t.map((e) => {
                              var t, n;
                              switch (e.type) {
                                  case d.s.BACK:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, r.jsxs)(
                                              o.zx,
                                              {
                                                  className: E.endButton,
                                                  innerClassName: E.endButtonInner,
                                                  look: o.zx.Looks.BLANK,
                                                  color: o.zx.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: 'prev',
                                                  children: [
                                                      (0, r.jsx)(c.ChevronSmallLeftIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: E.iconCaret,
                                                          'aria-hidden': !0
                                                      }),
                                                      (0, r.jsx)('span', { children: _.Z.Messages.BACK })
                                                  ]
                                              },
                                              t
                                          );
                                      })(e);
                                  case d.s.PAGE:
                                      return (
                                          (t = e),
                                          (0, r.jsx)(
                                              l.P,
                                              {
                                                  className: s()(E.roundButton, { [E.activeButton]: t.selected }),
                                                  onClick: t.selected ? void 0 : t.navigateToPage,
                                                  'aria-label': _.Z.Messages.PAGINATION_PAGE_LABEL.format({ pageNumber: t.targetPage }),
                                                  'aria-current': t.selected ? 'page' : void 0,
                                                  children: (0, r.jsx)('span', { children: t.targetPage })
                                              },
                                              t.key
                                          )
                                      );
                                  case d.s.GAP:
                                      return (
                                          (n = e),
                                          (0, r.jsx)(
                                              f,
                                              {
                                                  page: n,
                                                  totalPageCount: m,
                                                  disabled: !!u,
                                                  onPageChange: h
                                              },
                                              n.key
                                          )
                                      );
                                  case d.s.NEXT:
                                      return (function (e) {
                                          let { key: t, disabled: n, navigateToPage: i } = e;
                                          return (0, r.jsxs)(
                                              o.zx,
                                              {
                                                  className: E.endButton,
                                                  innerClassName: E.endButtonInner,
                                                  look: o.zx.Looks.BLANK,
                                                  color: o.zx.Colors.TRANSPARENT,
                                                  onClick: i,
                                                  disabled: n,
                                                  rel: 'next',
                                                  children: [
                                                      (0, r.jsx)('span', { children: _.Z.Messages.NEXT }),
                                                      (0, r.jsx)(c.ChevronSmallRightIcon, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: E.iconCaret,
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
