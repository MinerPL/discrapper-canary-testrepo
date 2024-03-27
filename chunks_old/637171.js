"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
});
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("77078"),
  s = t("158352"),
  c = t("699412");

function d(e) {
  let {
    columns: r,
    rowComponent: t,
    headerClassName: i,
    stickyHeader: d,
    onClickRow: u,
    selectedRowKey: h,
    ...p
  } = e, m = n.useMemo(() => r.map(e => ({
    renderHeader: () => (0, a.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: e.key
    }),
    ...e
  })), [r]);
  return (0, a.jsx)(s.default, {
    ...p,
    columns: m,
    rowComponent: null != t ? t : e => {
      let {
        item: r,
        children: t
      } = e, n = o(c.tableRow, {
        [c.selectedTableRow]: r.key === h
      });
      return null != u ? (0, a.jsx)(l.Clickable, {
        className: n,
        onClick: () => u(r.key),
        children: t
      }) : (0, a.jsx)("div", {
        className: n,
        children: t
      })
    },
    headerClassName: o(c.tableHeader, i),
    stickyHeader: null == d || d
  })
}