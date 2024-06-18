"use strict";
n.d(t, {
  n: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(84735),
  u = n(922770),
  _ = n(465670),
  d = n(664800),
  c = n(689938),
  E = n(703273);
let I = r.forwardRef(function(e, t) {
  var n, s, I;
  let {
    query: T,
    onChange: h,
    loading: S = !1,
    disabled: f = !1,
    placeholder: N = c.Z.Messages.SEARCH,
    "aria-label": A
  } = e, m = r.useRef(null), O = r.useRef(null);
  r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = O.current) || void 0 === e ? void 0 : e.focus()
    },
    blur: () => {
      var e;
      return null === (e = O.current) || void 0 === e ? void 0 : e.blur()
    },
    activate: () => !1
  }), []);
  let R = (n = T, s = S, I = h, s ? (0, i.jsx)("div", {
    className: E.iconContainer,
    children: (0, i.jsx)(u.$, {
      type: u.$.Type.SPINNING_CIRCLE,
      className: o()(E.icon)
    })
  }) : n.length > 0 ? (0, i.jsx)(a.P, {
    "aria-label": c.Z.Messages.SEARCH_CLEAR,
    className: o()(E.iconContainer, E.iconClickable),
    onClick: e => {
      e.stopPropagation(), I("")
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    focusProps: {
      offset: {
        top: -3,
        right: -3,
        bottom: -3,
        left: -3
      }
    },
    children: (0, i.jsx)(_.Z, {
      width: 18,
      height: 18,
      className: E.icon,
      "aria-label": c.Z.Messages.CLOSE
    })
  }) : (0, i.jsx)("div", {
    className: E.iconContainer,
    children: (0, i.jsx)(d.Z, {
      width: 18,
      height: 18,
      className: E.icon,
      "aria-label": c.Z.Messages.SEARCH
    })
  }));
  return (0, i.jsx)(l.t, {
    focusTarget: O,
    ringTarget: m,
    offset: {
      top: 2,
      bottom: 2,
      left: 4,
      right: 4
    },
    children: (0, i.jsxs)("div", {
      className: E.container,
      ref: m,
      children: [(0, i.jsx)("input", {
        role: "searchbox",
        "aria-busy": S,
        ref: O,
        className: E.input,
        value: T,
        onChange: e => h(e.currentTarget.value),
        "aria-label": A,
        placeholder: N,
        disabled: f
      }), R]
    })
  })
})