"use strict";
n.d(t, {
  Dw: function() {
    return _
  },
  RM: function() {
    return c
  },
  SC: function() {
    return d
  },
  iA: function() {
    return I
  },
  pj: function() {
    return u
  },
  xD: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(227879),
  o = n(260034),
  a = n(993365),
  l = n(909478);

function u(e) {
  return (0, i.jsx)(s.bL, {
    ...e,
    className: l.cell
  })
}

function _(e) {
  let {
    children: t,
    ...n
  } = e;
  return (0, i.jsx)(s.sg, {
    ...n,
    className: l.column,
    children: (0, i.jsx)(a.x, {
      variant: "eyebrow",
      className: l.columnText,
      children: t
    })
  })
}

function d(e) {
  return (0, i.jsx)(s.X2, {
    ...e,
    className: l.row
  })
}

function c(e) {
  return (0, i.jsx)(s.RM, {
    ...e,
    className: l.body
  })
}

function E(e) {
  return (0, i.jsx)(s.xD, {
    ...e,
    className: l.header
  })
}

function I(e) {
  let {
    title: t,
    header: n,
    footer: a,
    ...u
  } = e, _ = r.useId();
  return (0, i.jsxs)("div", {
    className: l.container,
    children: [(0, i.jsxs)("div", {
      className: l.toolbar,
      children: [(0, i.jsx)(o.X, {
        className: l.__invalid_title,
        variant: "heading-md/semibold",
        id: _,
        children: t
      }), (0, i.jsx)("div", {
        children: n
      })]
    }), (0, i.jsx)(s.iA, {
      ...u,
      "aria-labelledby": _,
      className: l.table
    }), null != a && (0, i.jsx)("div", {
      className: l.footer,
      children: a
    })]
  })
}