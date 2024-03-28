"use strict";
n.r(t), n.d(t, {
  EmptyStateImage: function() {
    return A
  },
  EmptyStateText: function() {
    return I
  },
  default: function() {
    return f
  }
});
var l, a = n("735250"),
  i = n("470079"),
  u = n("803997"),
  r = n.n(u),
  d = n("780384"),
  E = n("481060"),
  o = n("285952"),
  s = n("981631"),
  _ = n("272893"),
  c = n("794711");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let {
  Provider: S,
  Consumer: T
} = i.createContext(s.ThemeTypes.DARK);
class A extends i.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: l,
      offsetX: i,
      offsetY: u,
      style: E
    } = this.props;
    return (0, a.jsx)(T, {
      children: s => (0, a.jsx)(o.default.Child, {
        grow: 0,
        className: r()(_.image, c.marginBottom40),
        style: {
          ...E,
          width: n,
          height: l,
          marginLeft: i,
          marginTop: u,
          backgroundImage: "url(".concat((0, d.isThemeDark)(s) ? t : e, ")")
        }
      })
    })
  }
}
let I = e => {
  let {
    children: t,
    className: n,
    noteClassName: l,
    note: i,
    style: u
  } = e;
  return (0, a.jsxs)(o.default.Child, {
    grow: 0,
    direction: o.default.Direction.VERTICAL,
    style: u,
    children: [null != t && (0, a.jsx)(E.H, {
      className: r()(n, _.title),
      children: t
    }), null != i ? (0, a.jsx)("div", {
      className: r()(l, _.text, c.marginTop8),
      children: i
    }) : null]
  })
};
class f extends(l = i.PureComponent) {
  render() {
    let {
      children: e,
      theme: t,
      className: n,
      style: l
    } = this.props;
    return (0, a.jsx)(S, {
      value: t,
      children: (0, a.jsx)(o.default, {
        direction: o.default.Direction.VERTICAL,
        align: o.default.Align.CENTER,
        justify: o.default.Justify.CENTER,
        className: r()(_.wrapper, n),
        style: l,
        children: e
      })
    })
  }
}
C(f, "Text", I), C(f, "Image", A)