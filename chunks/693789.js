"use strict";
n.d(t, {
  Ph: function() {
    return T
  },
  Tt: function() {
    return I
  },
  ZP: function() {
    return f
  },
  iL: function() {
    return E
  },
  nY: function() {
    return h
  },
  zx: function() {
    return S
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(613828),
  l = n(680732),
  u = n(84735),
  _ = n(922770),
  d = n(689938),
  c = n(690514);
let E = {
    FILLED: c.lookFilled,
    OUTLINED: c.lookOutlined,
    LINK: c.lookLink,
    BLANK: c.lookBlank
  },
  I = {
    BRAND: c.colorBrand,
    BRAND_INVERTED: c.colorBrandInverted,
    RED: c.colorRed,
    GREEN: c.colorGreen,
    PRIMARY: c.colorPrimary,
    LINK: c.colorLink,
    WHITE: c.colorWhite,
    TRANSPARENT: c.colorTransparent,
    CUSTOM: ""
  },
  T = {
    NONE: "",
    TINY: c.sizeTiny,
    SMALL: c.sizeSmall,
    MEDIUM: c.sizeMedium,
    LARGE: c.sizeLarge,
    MIN: c.sizeMin,
    MAX: c.sizeMax,
    ICON: c.sizeIcon
  };

function h() {
  let {
    look: e = E.FILLED,
    color: t = I.BRAND,
    size: n = T.MEDIUM,
    fullWidth: i = !1,
    grow: r = !0,
    submitting: s = !1,
    disabled: a = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return o()(c.button, e, t, n, {
    [c.fullWidth]: i,
    [c.grow]: r,
    [c.submitting]: s && !a
  })
}

function S(e) {
  let {
    look: t = E.FILLED,
    color: n = I.BRAND,
    size: s = T.MEDIUM,
    fullWidth: a = !1,
    grow: S = !0,
    disabled: f = !1,
    submitting: N = !1,
    type: A = "button",
    style: m,
    wrapperClassName: O,
    className: R,
    innerClassName: C,
    onClick: p,
    onDoubleClick: g,
    onMouseDown: L,
    onMouseUp: v,
    onMouseEnter: D,
    onMouseLeave: M,
    onKeyDown: P,
    children: y,
    rel: U,
    buttonRef: b,
    focusProps: G,
    "aria-label": w,
    submittingStartedLabel: k,
    submittingFinishedLabel: B,
    ...x
  } = e, V = f || N, Z = V && (null != D || null != M), H = function(e, t) {
    var n, i, r, s;
    let o = null == e ? void 0 : e.offset;
    if (t === E.LINK || t === E.BLANK) return o;
    if (null == o) return -2;
    if ("number" == typeof o) return o + 2;
    return {
      top: (null !== (n = o.top) && void 0 !== n ? n : 0) - 2,
      right: (null !== (i = o.right) && void 0 !== i ? i : 0) - 2,
      bottom: (null !== (r = o.bottom) && void 0 !== r ? r : 0) - 2,
      left: (null !== (s = o.left) && void 0 !== s ? s : 0) - 2
    }
  }(G, t), F = r.useRef(!1);
  r.useEffect(() => {
    !0 === N && (F.current = !0, l.u.announce(null != k ? k : d.Z.Messages.A11Y_LOADING_STARTED)), !1 === N && !0 === F.current && l.u.announce(null != B ? B : d.Z.Messages.A11Y_LOADING_FINISHED)
  }, [N, k, B]);
  let Y = (0, i.jsx)(u.t, {
    ...G,
    offset: H,
    children: (0, i.jsxs)("button", {
      ...V ? null : x,
      "aria-label": w,
      "aria-busy": !!N || void 0,
      ref: b,
      onClick: V ? e => e.preventDefault() : p,
      onDoubleClick: V ? e => e.preventDefault() : g,
      onMouseUp: f ? void 0 : v,
      onMouseDown: f ? void 0 : L,
      onMouseEnter: D,
      onMouseLeave: M,
      onKeyDown: f ? void 0 : P,
      type: A,
      disabled: f,
      style: m,
      rel: U,
      className: o()(R, h({
        look: t,
        color: n,
        size: s,
        fullWidth: a,
        grow: S,
        submitting: N,
        disabled: f
      }), Z ? null : O),
      children: [N && !f ? (0, i.jsx)(_.$, {
        type: _.$.Type.PULSING_ELLIPSIS,
        className: c.spinner,
        itemClassName: c.spinnerItem
      }) : null, (0, i.jsx)("div", {
        className: o()(c.contents, C),
        children: y
      })]
    })
  });
  return Z ? (0, i.jsxs)("span", {
    className: o()(c.disabledButtonWrapper, O, s, {
      [c.grow]: S,
      [c.fullWidth]: a
    }),
    children: [Y, (0, i.jsx)("span", {
      onMouseEnter: D,
      onMouseLeave: M,
      className: c.disabledButtonOverlay
    })]
  }) : Y
}

function f(e) {
  let {
    look: t = E.FILLED,
    color: n = I.BRAND,
    size: r = T.MEDIUM,
    fullWidth: s = !1,
    grow: l = !0,
    style: u,
    className: _,
    innerClassName: d,
    to: h,
    onClick: S,
    onMouseDown: f,
    onMouseUp: N,
    children: A,
    rel: m,
    ...O
  } = e;
  return (0, i.jsx)(a.rU, {
    ...O,
    to: h,
    onClick: S,
    onMouseUp: N,
    onMouseDown: f,
    style: u,
    rel: m,
    className: o()(_, c.button, t, n, r, {
      [c.fullWidth]: s,
      [c.grow]: l
    }),
    children: (0, i.jsx)("span", {
      className: o()(c.contents, d),
      children: A
    })
  })
}
S.Looks = E, S.Colors = I, S.Sizes = T, S.Link = f