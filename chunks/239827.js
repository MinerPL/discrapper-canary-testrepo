var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(481060),
  l = s(689938),
  c = s(59150);
t.Z = a.forwardRef(function(e, t) {
  let {
currentPageIndex: s,
numPages: a,
onChangePage: i,
children: d,
className: _,
showPageCount: E = !0,
...u
  } = e, T = s <= 0, I = s >= a - 1;
  return (0, n.jsxs)('div', {
className: r()(c.__invalid_paginator, _),
ref: t,
...u,
children: [
  d,
  (0, n.jsxs)('div', {
    className: c.pageActions,
    children: [
      (0, n.jsx)(o.Clickable, {
        className: r()(c.pageButtonPrev, {
          [c.disabled]: T
        }),
        tabIndex: T ? -1 : 0,
        onClick: T ? void 0 : () => i(s - 1),
        children: (0, n.jsx)(o.ChevronSmallLeftIcon, {
          size: 'md',
          color: 'currentColor',
          className: c.pageButtonIcon,
          'aria-label': l.Z.Messages.PAGINATION_PREVIOUS
        })
      }),
      E ? (0, n.jsx)('div', {
        className: c.pageIndicator,
        children: l.Z.Messages.PAGINATOR_OF_PAGES.format({
          currentPage: s + 1,
          numPages: a
        })
      }) : (0, n.jsx)('div', {
        className: c.pageIndicator,
        children: l.Z.Messages.PAGINATOR_CURRENT_PAGE.format({
          currentPage: s + 1
        })
      }),
      (0, n.jsx)(o.Clickable, {
        className: r()(c.pageButtonNext, {
          [c.disabled]: I
        }),
        tabIndex: I ? -1 : 0,
        onClick: I ? void 0 : () => i(s + 1),
        children: (0, n.jsx)(o.ChevronSmallRightIcon, {
          size: 'md',
          color: 'currentColor',
          className: c.pageButtonIcon,
          'aria-label': l.Z.Messages.PAGINATION_NEXT
        })
      })
    ]
  })
]
  });
});