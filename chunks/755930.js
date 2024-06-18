"use strict";
t.d(s, {
  GW: function() {
    return g
  },
  Qg: function() {
    return T
  },
  Yn: function() {
    return x
  },
  ZP: function() {
    return A
  },
  bL: function() {
    return R
  },
  i$: function() {
    return h
  },
  nn: function() {
    return S
  },
  qN: function() {
    return C
  },
  wy: function() {
    return N
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l);
t(913527);
var r = t(481060),
  o = t(151011),
  c = t(964309),
  d = t(937615),
  u = t(809086),
  E = t(981631),
  _ = t(689938),
  I = t(488287);

function T(e) {
  return (s, t, n) => {
    let i = e(s),
      l = e(t);
    return null != i && null != l ? i === l ? 0 : i < l ? -1 : 1 : 0
  }
}

function N(e) {
  let {
    key: s,
    cellClassName: t,
    renderHeader: n,
    renderContent: i,
    ...l
  } = e;
  return {
    key: s,
    bodyCellClassName: I.cell,
    cellClassName: t,
    renderHeader: n,
    render: i,
    ...l
  }
}

function m() {
  return (0, n.jsx)(r.Text, {
    variant: "text-xs/medium",
    className: I.unpublishedBadge,
    children: _.Z.Messages.GUILD_PRODUCT_UNPUBLISHED_TITLE
  })
}

function S(e) {
  let {
    cellClassName: s,
    key: t,
    renderHeader: i,
    ...l
  } = e;
  return N({
    cellClassName: s,
    key: t,
    renderHeader: i,
    renderContent(e) {
      let {
        listing: s
      } = e, t = null;
      return null != s && (t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.Z, {
          listing: s,
          imageSize: 128,
          alt: "",
          className: I.listingImage
        }), (0, n.jsxs)(r.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          className: I.listingNameLabel,
          children: [s.name, !s.published && (0, n.jsx)(m, {})]
        })]
      })), (0, n.jsx)(R, {
        className: I.listingNameCell,
        children: t
      })
    },
    ...l
  })
}

function h(e) {
  let {
    cellClassName: s,
    getAmount: t,
    key: i,
    renderHeader: l,
    ...a
  } = e;
  return N({
    key: i,
    cellClassName: s,
    renderHeader: l,
    renderContent(e) {
      let s = t(e);
      return (0, n.jsx)(L, {
        children: s
      })
    },
    ...a
  })
}

function g(e) {
  let {
    cellClassName: s,
    getCount: t,
    key: i,
    renderHeader: l,
    ...a
  } = e;
  return N({
    key: i,
    cellClassName: s,
    renderHeader: l,
    renderContent(e) {
      let s = t(e);
      return (0, n.jsx)(O, {
        children: s
      })
    },
    ...a
  })
}

function x(e) {
  let s = [...e];
  for (let t = 1; t < e.length; ++t) {
    let n = e[t];
    s[t] = {
      ...n,
      cellClassName: a()(n.cellClassName, I.cellAlignRight)
    }
  }
  return s
}
let C = e => {
    let {
      children: s
    } = e;
    return (0, n.jsx)(r.Text, {
      className: I.headerCell,
      variant: "text-xs/medium",
      color: "interactive-normal",
      "aria-hidden": !0,
      children: s
    })
  },
  R = e => {
    let {
      children: s,
      className: t
    } = e;
    return (0, n.jsx)(r.Text, {
      className: t,
      variant: "text-md/normal",
      color: "interactive-normal",
      children: s
    })
  },
  L = e => {
    let {
      children: s
    } = e;
    return (0, n.jsx)(R, {
      children: (0, d.T4)(null != s ? s : 0, E.pKx.USD)
    })
  },
  O = e => {
    let {
      children: s
    } = e;
    return (0, n.jsxs)(R, {
      className: I.personCountCell,
      children: [null != s ? s : "-", " ", (0, n.jsx)(c.Z, {
        className: I.personCountIcon,
        "aria-hidden": !0
      })]
    })
  };

function A(e) {
  let {
    className: s,
    headerClassName: t,
    rowClassName: l,
    enableRowSeparators: r = !1,
    initialSortKey: c,
    initialSortDirection: d = E.sHY.ASCENDING,
    ...u
  } = e, [_, T] = i.useState(c), [N, m] = i.useState(d);
  return (0, n.jsx)("div", {
    className: a()(I.tableContainer, s),
    children: (0, n.jsx)(o.Z, {
      className: a()({
        [I.tableWithoutSeparators]: !r
      }, I.table),
      rowClassName: a()({
        [I.rowWithSeparators]: r
      }, l),
      headerClassName: a()(I.header, {
        [I.headerWithoutSeparators]: !r
      }, t),
      sortKey: _,
      sortDirection: N,
      onSort: (e, s) => {
        T(e), m(s)
      },
      ...u
    })
  })
}