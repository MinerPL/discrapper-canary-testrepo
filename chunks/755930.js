"use strict";
s.r(t), s.d(t, {
  Cell: function() {
    return R
  },
  HeaderCell: function() {
    return C
  },
  createColumn: function() {
    return S
  },
  createCurrencyAmountColumn: function() {
    return N
  },
  createListingNameColumn: function() {
    return m
  },
  createPersonCountColumn: function() {
    return g
  },
  createTableColumns: function() {
    return h
  },
  default: function() {
    return O
  },
  getDefaultSorter: function() {
    return T
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n);
s("913527");
var r = s("481060"),
  o = s("151011"),
  d = s("964309"),
  u = s("937615"),
  c = s("809086"),
  E = s("981631"),
  _ = s("689938"),
  I = s("569749");

function T(e) {
  return (t, s, a) => {
    let l = e(t),
      n = e(s);
    return null != l && null != n ? l === n ? 0 : l < n ? -1 : 1 : 0
  }
}

function S(e) {
  let {
    key: t,
    cellClassName: s,
    renderHeader: a,
    renderContent: l,
    ...n
  } = e;
  return {
    key: t,
    bodyCellClassName: I.cell,
    cellClassName: s,
    renderHeader: a,
    render: l,
    ...n
  }
}

function f() {
  return (0, a.jsx)(r.Text, {
    variant: "text-xs/medium",
    className: I.unpublishedBadge,
    children: _.default.Messages.GUILD_PRODUCT_UNPUBLISHED_TITLE
  })
}

function m(e) {
  let {
    cellClassName: t,
    key: s,
    renderHeader: l,
    ...n
  } = e;
  return S({
    cellClassName: t,
    key: s,
    renderHeader: l,
    renderContent(e) {
      let {
        listing: t
      } = e, s = null;
      return null != t && (s = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.default, {
          listing: t,
          imageSize: 128,
          alt: "",
          className: I.listingImage
        }), (0, a.jsxs)(r.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          className: I.listingNameLabel,
          children: [t.name, !t.published && (0, a.jsx)(f, {})]
        })]
      })), (0, a.jsx)(R, {
        className: I.listingNameCell,
        children: s
      })
    },
    ...n
  })
}

function N(e) {
  let {
    cellClassName: t,
    getAmount: s,
    key: l,
    renderHeader: n,
    ...i
  } = e;
  return S({
    key: l,
    cellClassName: t,
    renderHeader: n,
    renderContent(e) {
      let t = s(e);
      return (0, a.jsx)(x, {
        children: t
      })
    },
    ...i
  })
}

function g(e) {
  let {
    cellClassName: t,
    getCount: s,
    key: l,
    renderHeader: n,
    ...i
  } = e;
  return S({
    key: l,
    cellClassName: t,
    renderHeader: n,
    renderContent(e) {
      let t = s(e);
      return (0, a.jsx)(L, {
        children: t
      })
    },
    ...i
  })
}

function h(e) {
  let t = [...e];
  for (let s = 1; s < e.length; ++s) {
    let a = e[s];
    t[s] = {
      ...a,
      cellClassName: i()(a.cellClassName, I.cellAlignRight)
    }
  }
  return t
}
let C = e => {
    let {
      children: t
    } = e;
    return (0, a.jsx)(r.Text, {
      className: I.headerCell,
      variant: "text-xs/medium",
      color: "interactive-normal",
      "aria-hidden": !0,
      children: t
    })
  },
  R = e => {
    let {
      children: t,
      className: s
    } = e;
    return (0, a.jsx)(r.Text, {
      className: s,
      variant: "text-md/normal",
      color: "interactive-normal",
      children: t
    })
  },
  x = e => {
    let {
      children: t
    } = e;
    return (0, a.jsx)(R, {
      children: (0, u.formatPrice)(null != t ? t : 0, E.CurrencyCodes.USD)
    })
  },
  L = e => {
    let {
      children: t
    } = e;
    return (0, a.jsxs)(R, {
      className: I.personCountCell,
      children: [null != t ? t : "-", " ", (0, a.jsx)(d.default, {
        className: I.personCountIcon,
        "aria-hidden": !0
      })]
    })
  };

function O(e) {
  let {
    className: t,
    headerClassName: s,
    rowClassName: n,
    enableRowSeparators: r = !1,
    initialSortKey: d,
    initialSortDirection: u = E.TableSortDirections.ASCENDING,
    ...c
  } = e, [_, T] = l.useState(d), [S, f] = l.useState(u);
  return (0, a.jsx)("div", {
    className: i()(I.tableContainer, t),
    children: (0, a.jsx)(o.default, {
      className: i()({
        [I.tableWithoutSeparators]: !r
      }, I.table),
      rowClassName: i()({
        [I.rowWithSeparators]: r
      }, n),
      headerClassName: i()(I.header, {
        [I.headerWithoutSeparators]: !r
      }, s),
      sortKey: _,
      sortDirection: S,
      onSort: (e, t) => {
        T(e), f(t)
      },
      ...c
    })
  })
}