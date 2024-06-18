"use strict";
n.d(t, {
  c2: function() {
    return m
  },
  cK: function() {
    return r
  }
});
var s, r, i, a, l = n(735250),
  o = n(470079),
  u = n(253483),
  c = n(81834);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = r || (r = {})).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60";
let h = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  E = n(515695);
class _ extends(i = o.PureComponent) {
  render() {
    let {
      className: e,
      text: t,
      ...n
    } = this.props;
    return (0, l.jsx)("div", {
      style: {
        padding: 8,
        borderRadius: 4,
        width: n.size,
        height: n.size,
        backgroundColor: n.bgColor
      },
      className: e,
      children: (0, l.jsx)(u.default, {
        value: t,
        level: "M",
        ...n
      })
    })
  }
}
d(_, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class m extends(a = o.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, t = h[null != e ? e : "SIZE_40"];
    return (0, l.jsxs)("div", {
      className: c.qrCodeContainer,
      children: [(0, l.jsx)(_, {
        ...this.props
      }), (0, l.jsx)("div", {
        className: c.qrCodeOverlay,
        children: (0, l.jsx)("img", {
          className: c[t],
          src: E,
          alt: ""
        })
      })]
    })
  }
}
d(m, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
}), t.ZP = _