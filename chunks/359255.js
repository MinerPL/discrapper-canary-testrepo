"use strict";
n.d(t, {
  F: function() {
    return c
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(729285),
  u = n(150954),
  _ = n(761221);

function d(e) {
  return "" === e || "-" === e
}
let c = e => {
  let {
    value: t,
    onChange: n,
    className: s,
    minValue: c,
    maxValue: E
  } = e, [I, T] = r.useState(t), h = d(I) || null != c && I <= c, S = d(I) || null != E && I >= E, f = e => {
    n(d(e) ? null != c ? c : 0 : e), T(e)
  };
  return (0, i.jsx)(a.FocusRing, {
    within: !0,
    children: (0, i.jsxs)("div", {
      className: o()(_.actions, s),
      children: [(0, i.jsx)(a.Clickable, {
        onClick: e => {
          if (e.stopPropagation(), !h) f(I - 1)
        },
        tabIndex: -1,
        className: o()(_.iconWrapper, _.__invalid_subtract, {
          [_.disabled]: h
        }),
        children: (0, i.jsx)(u.Z, {
          className: o()(_.icon, {
            [_.disabled]: h
          })
        })
      }), (0, i.jsx)(a.TextInput, {
        value: "".concat(I),
        onChange: e => {
          if (d(e)) return f(e);
          let t = parseInt(e);
          return isNaN(t) ? void 0 : null != E && t >= E ? f(E) : null != c && t <= c ? f(c) : f(t)
        },
        inputClassName: _.value
      }), (0, i.jsx)(a.Clickable, {
        onClick: e => {
          if (e.stopPropagation(), !S) f(I + 1)
        },
        tabIndex: -1,
        className: o()(_.iconWrapper, _.__invalid_add, {
          [_.disabled]: S
        }),
        children: (0, i.jsx)(l.Z, {
          className: o()(_.icon, {
            [_.disabled]: S
          })
        })
      })]
    })
  })
}