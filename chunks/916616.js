"use strict";
n.d(t, {
  E: function() {
    return O
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(780384),
  u = n(481060),
  _ = n(410030),
  d = n(446108),
  c = n(956664),
  E = n(921948),
  I = n(823023),
  T = n(981631),
  h = n(768760),
  S = n(689938),
  f = n(599908),
  N = n(167969),
  A = n(557256);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class O extends(i = s.PureComponent) {
  render() {
    let e;
    let {
      className: t,
      imageClassName: n,
      readyState: i,
      src: s,
      placeholder: o,
      placeholderVersion: l,
      alt: _,
      width: E,
      height: N,
      maxWidth: A = E,
      maxHeight: m = N,
      minWidth: O,
      minHeight: p,
      mediaLayoutType: g,
      limitResponsiveWidth: L = !0,
      accessory: v,
      zoomable: D,
      original: M,
      children: P,
      renderAccessory: y,
      onClick: U,
      tabIndex: b,
      useFullWidth: G = !1,
      ...w
    } = this.props;
    if (1 === E && 1 === N) return null;
    let k = (0, c.Tj)({
        width: E,
        height: N,
        maxWidth: A,
        maxHeight: m,
        minWidth: O,
        minHeight: p
      }),
      B = 0 !== k.width ? k.width / k.height : 1;
    "" !== s && i !== T.zo9.ERROR ? e = P({
      src: s,
      size: k,
      alt: _,
      className: n,
      mediaLayoutType: g
    }) : i !== T.zo9.LOADING && (e = (0, r.jsx)(R, {
      size: k,
      mediaLayoutType: g,
      alt: _
    })), e = (0, r.jsx)(I.N, {
      readyState: i,
      aspectRatio: B,
      placeholder: o,
      placeholderVersion: l,
      placeholderStyle: C(k, g),
      children: e
    });
    let x = null != y ? y() : null;
    return x = null != x ? x : v, (0, r.jsx)(u.FocusRing, {
      ringTarget: this._containerRef,
      focusTarget: this._clickableRef,
      children: (0, r.jsxs)("div", {
        className: a()(f.imageWrapper, {
          [f.imageZoom]: D,
          [f.imageWrapperBackground]: i !== T.zo9.READY,
          [f.clickable]: null != U
        }, t),
        style: function(e, t, n, i) {
          return i === h.hV.MOSAIC ? {
            display: "block",
            maxHeight: "inherit",
            margin: "auto",
            width: !n && e.width <= h.mT ? e.width : "100%",
            height: "100%"
          } : i === h.hV.RESPONSIVE ? {
            maxWidth: t ? e.width : void 0,
            width: "100%",
            aspectRatio: "".concat(e.width, " / ").concat(e.height)
          } : e
        }(k, L, G, g),
        ...w,
        children: [null != M && (0, r.jsx)("a", {
          tabIndex: -1,
          onClick: U,
          "aria-hidden": !0,
          className: f.originalLink,
          href: M,
          ref: this._containerRef,
          "data-role": "img",
          "data-safe-src": s
        }), null != U ? (0, r.jsx)(u.Clickable, {
          className: f.clickableWrapper,
          tabIndex: null != b ? b : 0,
          onClick: U,
          "aria-label": null != _ ? _ : S.Z.Messages.IMAGE,
          "aria-describedby": d.r5,
          innerRef: this._clickableRef,
          focusProps: {
            enabled: !1
          },
          children: e
        }) : e, null != x ? (0, r.jsx)("div", {
          className: f.imageAccessory,
          children: x
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), m(this, "_containerRef", s.createRef()), m(this, "_clickableRef", s.createRef())
  }
}

function R(e) {
  let {
    size: t,
    mediaLayoutType: n,
    alt: i
  } = e, s = (0, _.ZP)();
  return (0, r.jsx)("div", {
    className: f.imageErrorWrapper,
    style: function(e, t) {
      switch (t) {
        case h.hV.MOSAIC:
          return {
            width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
          };
        case h.hV.RESPONSIVE:
          return {
            ...p(e), display: "flex"
          };
        default:
          return e
      }
    }(t, n),
    children: (0, r.jsx)("img", {
      src: (0, l.ap)(s) ? A : N,
      className: f.imageError,
      alt: null != i ? i : S.Z.Messages.IMAGE
    })
  })
}
m(O, "defaultProps", {
  readyState: T.zo9.READY,
  zoomable: !0,
  children: e => {
    let {
      src: t,
      size: n,
      alt: i,
      className: s,
      mediaLayoutType: o
    } = e;
    return (0, r.jsx)("img", {
      className: null != s ? s : void 0,
      alt: null != i ? i : S.Z.Messages.IMAGE,
      src: t,
      style: C(n, o)
    })
  },
  minWidth: 0,
  minHeight: 0
});

function C(e, t) {
  switch (t) {
    case h.hV.MOSAIC:
      return {
        display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, E.Z)() ? "calc(100% + 1px)" : "100%"
      };
    case h.hV.RESPONSIVE:
      return p(e);
    default:
      return e
  }
}

function p(e) {
  let {
    width: t,
    height: n
  } = e;
  return {
    maxWidth: t,
    maxHeight: n,
    width: "100%",
    display: "block",
    aspectRatio: "".concat(t, " / ").concat(n)
  }
}