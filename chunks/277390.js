"use strict";
t.r(s), t.d(s, {
  QRCodeOverlaySizes: function() {
    return a
  },
  QRCodeWithOverlay: function() {
    return E
  }
});
var r, a, o, l, n = t("735250"),
  i = t("470079"),
  d = t("108773"),
  c = t("880244");

function u(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}(r = a || (a = {})).SIZE_40 = "SIZE_40", r.SIZE_60 = "SIZE_60";
let C = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  _ = t("515695");
class f extends(o = i.PureComponent) {
  render() {
    let {
      className: e,
      text: s,
      ...t
    } = this.props;
    return (0, n.jsx)("div", {
      style: {
        padding: 8,
        borderRadius: 4,
        width: t.size,
        height: t.size,
        backgroundColor: t.bgColor
      },
      className: e,
      children: (0, n.jsx)(d.default, {
        value: s,
        level: "M",
        ...t
      })
    })
  }
}
u(f, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class E extends(l = i.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, s = C[null != e ? e : "SIZE_40"];
    return (0, n.jsxs)("div", {
      className: c.qrCodeContainer,
      children: [(0, n.jsx)(f, {
        ...this.props
      }), (0, n.jsx)("div", {
        className: c.qrCodeOverlay,
        children: (0, n.jsx)("img", {
          className: c[s],
          src: _,
          alt: ""
        })
      })]
    })
  }
}
u(E, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
}), s.default = f