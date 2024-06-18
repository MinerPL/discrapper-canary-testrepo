"use strict";
n.d(t, {
  s: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(761224),
  u = n(898560),
  _ = n(743236),
  d = n(481060),
  c = n(692437),
  E = n(939350),
  I = n(768160);

function T(e) {
  let {
    color: t = "default",
    label: n,
    icon: s,
    showIconFirst: T = !1,
    imageUrl: h,
    hint: S,
    subtext: f,
    hasSubmenu: N,
    disabled: A,
    isFocused: m,
    menuItemProps: O,
    action: R,
    onClose: C,
    onFocus: p,
    className: g,
    focusedClassName: L,
    subMenuIconClassName: v,
    dontCloseOnActionIfHoldingShiftKey: D,
    dontCloseOnAction: M,
    iconProps: P,
    sparkle: y
  } = e, U = r.useContext(u.r), b = r.useRef(null), G = r.useCallback(e => {
    if (null == R) return !1;
    !(e.shiftKey && D) && !M && C(), e.persist(), null == U || U(), requestAnimationFrame(() => R(e))
  }, [R, C, U, D, M]);
  return r.useEffect(() => {
    m && ((0, _.F)(b), null == p || p())
  }, [m, p]), (0, i.jsxs)(a.P, {
    innerRef: b,
    className: o()(I.item, I.labelContainer, E._[t], g, {
      [I.disabled]: A,
      [I.focused]: m,
      [null != L ? L : ""]: m
    }),
    onClick: A ? void 0 : G,
    "aria-disabled": A,
    ...O,
    "data-menu-item": "true",
    children: [T && null != s && (0, i.jsx)("div", {
      className: I.iconContainerLeft,
      children: (0, i.jsx)(s, {
        ...P,
        className: o()(I.icon, null == P ? void 0 : P.className),
        isFocused: m
      })
    }), (0, i.jsxs)("div", {
      className: I.label,
      children: [(0, l.I)(n, e), null != f && (0, i.jsx)("div", {
        className: I.subtext,
        children: f
      })]
    }), null != S && (0, i.jsx)("div", {
      className: I.hintContainer,
      children: (0, l.I)(S, e)
    }), !T && null != s && (0, i.jsx)("div", {
      className: I.iconContainer,
      children: (0, i.jsx)(s, {
        ...P,
        className: o()(I.icon, null == P ? void 0 : P.className),
        isFocused: m
      })
    }), null != h && (0, i.jsx)("div", {
      className: I.imageContainer,
      children: (0, i.jsx)("img", {
        className: I.image,
        src: (0, l.I)(h, e),
        alt: ""
      })
    }), N && (0, i.jsxs)("div", {
      className: I.iconContainer,
      children: [(0, i.jsx)(c.Z, {
        className: o()(I.caret, v)
      }), y && (0, i.jsx)(d.LottieSparkle, {
        className: I.sparkles
      })]
    })]
  })
}