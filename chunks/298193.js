"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("729285"),
  d = s("150954"),
  u = s("666191");

function c(e) {
  return "" === e || "-" === e
}
t.default = e => {
  let {
    value: t,
    onChange: s,
    className: n,
    minValue: E,
    maxValue: _
  } = e, [I, T] = l.useState(t), S = c(I) || null != E && I <= E, f = c(I) || null != _ && I >= _, m = e => {
    s(c(e) ? null != E ? E : 0 : e), T(e)
  };
  return (0, a.jsx)(r.FocusRing, {
    within: !0,
    children: (0, a.jsxs)("div", {
      className: i()(u.actions, n),
      children: [(0, a.jsx)(r.Clickable, {
        onClick: e => {
          e.stopPropagation(), !S && m(I - 1)
        },
        tabIndex: -1,
        className: i()(u.iconWrapper, u.__invalid_subtract, {
          [u.disabled]: S
        }),
        children: (0, a.jsx)(d.default, {
          className: i()(u.icon, {
            [u.disabled]: S
          })
        })
      }), (0, a.jsx)(r.TextInput, {
        value: "".concat(I),
        onChange: e => {
          if (c(e)) return m(e);
          let t = parseInt(e);
          if (!isNaN(t)) return null != _ && t >= _ ? m(_) : null != E && t <= E ? m(E) : m(t)
        },
        inputClassName: u.value
      }), (0, a.jsx)(r.Clickable, {
        onClick: e => {
          e.stopPropagation(), !f && m(I + 1)
        },
        tabIndex: -1,
        className: i()(u.iconWrapper, u.__invalid_add, {
          [u.disabled]: f
        }),
        children: (0, a.jsx)(o.default, {
          className: i()(u.icon, {
            [u.disabled]: f
          })
        })
      })]
    })
  })
}