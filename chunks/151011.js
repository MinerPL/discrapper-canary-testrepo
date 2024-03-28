"use strict";
n.r(t), n("47120");
var i, r = n("735250"),
  s = n("470079"),
  a = n("803997"),
  l = n.n(a),
  o = n("481060"),
  u = n("86813"),
  c = n("826026"),
  d = n("981631"),
  f = n("400910");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = e => (0, r.jsx)("div", {
  className: e.className,
  children: e.children
});
class E extends(i = s.PureComponent) {
  isSortable(e) {
    return null != e.sort && !1 !== e.sort
  }
  getDefaultSort(e) {
    return (t, n) => {
      let i = t[e],
        r = n[e];
      return null != i && null != r ? i === r ? 0 : i < r ? -1 : 1 : 0
    }
  }
  renderHeader() {
    let {
      columns: e,
      data: t,
      sortDirection: n,
      sortKey: i,
      headerCellClassName: s,
      headerClassName: a,
      sortedHeaderCellClassName: p,
      stickyHeader: E
    } = this.props, I = e.map(e => {
      let a = null != e.renderHeader ? e.renderHeader(e, t) : e.key,
        _ = n === d.TableSortDirections.ASCENDING ? c.default : u.default;
      return (0, r.jsx)(o.Clickable, {
        className: l()(f.headerCell, s, e.headerCellClassName, e.cellClassName, i === e.key && p, {
          [f.clickable]: this.isSortable(e)
        }),
        onClick: this.isSortable(e) ? () => this.handleSort(e.key) : void 0,
        children: (0, r.jsxs)("div", {
          className: f.headerCellContent,
          children: [a, this.isSortable(e) && i === e.key ? (0, r.jsx)(_, {
            className: f.sortIcon
          }) : null]
        })
      }, e.key)
    });
    return (0, r.jsx)(_, {
      className: l()(a, f.row, {
        [f.stickyHeader]: E
      }),
      children: I
    })
  }
  renderBody() {
    let {
      columns: e,
      data: t,
      sortData: n,
      sortKey: i,
      sortDirection: r,
      bodyCellClassName: a,
      rowClassName: o,
      cellProps: u,
      rowProps: c,
      rowComponent: p,
      cellComponent: _
    } = this.props, E = t;
    if (n) {
      let n = null != i ? e.find(e => {
          let {
            key: t
          } = e;
          return t === i
        }) : null,
        s = [...t],
        a = null != n && n.sort,
        l = null != n && null != i && this.isSortable(n) ? s.sort("function" == typeof a ? (e, t) => a(e, t, r) : this.getDefaultSort(i)) : s;
      E = null != n && r === d.TableSortDirections.DESCENDING ? l.reverse() : l
    }
    return E.map((t, n) => {
      let i = e.map(e => (0, s.createElement)(_, {
        ...u,
        key: e.key,
        item: t,
        className: l()(a, e.bodyCellClassName, e.cellClassName)
      }, null != e.render ? e.render(t, u, n) : t[e.key]));
      return (0, s.createElement)(p, {
        ...c,
        key: t.key,
        item: t,
        className: l()(f.row, o)
      }, i)
    })
  }
  render() {
    let {
      className: e,
      hasHeader: t
    } = this.props;
    return (0, r.jsxs)("div", {
      className: e,
      children: [t ? this.renderHeader() : null, this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleSort", e => {
      let {
        sortKey: t,
        sortDirection: n,
        onSort: i
      } = this.props;
      null != i && i(e, t === e ? n === d.TableSortDirections.ASCENDING ? d.TableSortDirections.DESCENDING : d.TableSortDirections.ASCENDING : d.TableSortDirections.ASCENDING)
    })
  }
}
p(E, "SortDirection", d.TableSortDirections), p(E, "defaultProps", {
  initialSortDirection: d.TableSortDirections.ASCENDING,
  rowHeaderComponent: _,
  rowComponent: e => (0, r.jsx)("div", {
    className: e.className,
    children: e.children
  }),
  cellComponent: e => (0, r.jsx)("div", {
    className: e.className,
    children: e.children
  }),
  hasHeader: !0,
  sortData: !0,
  stickyHeader: !1
}), t.default = E