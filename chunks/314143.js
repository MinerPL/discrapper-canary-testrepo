"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("65597"),
  d = l("77078"),
  r = l("691386"),
  u = l("804160"),
  C = l("178406"),
  c = l("645266"),
  f = l("782340"),
  m = l("32334");

function E(e) {
  let {
    guildId: t,
    onPageChange: l
  } = e, [s, E] = n.useTransition(), M = (0, o.default)([C.default], () => C.default.getEstimatedMemberSearchCountByGuildId(t), [t]), h = (0, o.useStateFromStoresObject)([C.default], () => C.default.getPaginationStateByGuildId(t), [t]), T = (0, u.useIsMakingRequest)(t), x = n.useMemo(() => r.PAGINATION_PAGE_SIZE_OPTIONS.map(e => ({
    value: e,
    label: Number(e).toLocaleString()
  })), []), _ = new Intl.NumberFormat(f.default.getLocale()).format(M), H = f.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_LABEL.format({
    count: T ? "..." : _
  }), g = M > h.pageSize || T, A = M > r.PAGINATION_PAGE_SIZE_OPTIONS[0];
  return (0, a.jsxs)("div", {
    className: i(m.paginationContainer),
    children: [(0, a.jsx)("div", {
      className: i(m.pageSizeSelection),
      children: A ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: f.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_PRE_LABEL
        }), (0, a.jsx)(d.Select, {
          "aria-label": H,
          className: m.pageSizeInput,
          options: x,
          isSelected: e => e === h.pageSize,
          select: e => {
            E(() => {
              (0, c.updateMemberSafetyTablePagination)(t, {
                ...h,
                pageSize: e
              })
            })
          },
          serialize: e => "".concat(e),
          popoutPosition: "top"
        }), (0, a.jsx)(d.Tooltip, {
          text: f.default.Messages.LOADING,
          shouldShow: T,
          children: e => (0, a.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: i(m.pageLabel),
            ...e,
            children: H
          })
        })]
      }) : (0, a.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: f.default.Messages.MEMBER_SAFETY_TABLE_PAGINATION_NO_PAGE_NUMBERS_LABEL.format({
          count: M
        })
      })
    }), (0, a.jsx)("div", {
      className: i(m.pagination),
      children: g && (0, a.jsx)(d.Paginator, {
        className: i(m.paginationInput),
        totalCount: M,
        pageSize: h.pageSize,
        disablePaginationGap: !0,
        hideMaxPage: !0,
        currentPage: h.currentPage,
        onPageChange: e => {
          null == l || l(e), requestIdleCallback(() => {
            E(() => {
              (0, c.updateMemberSafetyTablePagination)(t, {
                ...h,
                currentPage: e
              })
            })
          })
        },
        maxVisiblePages: r.MAX_VISIBLE_PAGES
      })
    })]
  })
}