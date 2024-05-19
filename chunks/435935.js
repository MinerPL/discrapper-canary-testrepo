"use strict";
n.r(t), n.d(t, {
  Flex: function() {
    return S
  }
});
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("557533"),
  o = n.n(r),
  u = n("424591"),
  d = n("40036");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = {
    VERTICAL: u.flexVertical,
    HORIZONTAL: u.flexHorizontal,
    HORIZONTAL_REVERSE: u.flexHorizontalReverse
  },
  E = {
    START: u.flexJustifyStart,
    END: u.flexJustifyEnd,
    CENTER: u.flexJustifyCenter,
    BETWEEN: u.flexJustifyBetween,
    AROUND: u.flexJustifyAround
  },
  h = {
    NO_WRAP: u.flexNowrap,
    WRAP: u.flexWrap,
    WRAP_REVERSE: u.flexWrapReverse
  },
  _ = {
    START: u.flexAlignStart,
    END: u.flexAlignEnd,
    CENTER: u.flexAlignCenter,
    STRETCH: u.flexAlignStretch
  },
  C = {
    SMALL: d.flexGutterSmall,
    LARGE: d.flexGutterLarge
  };
class m extends(a = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      shrink: n,
      grow: a,
      basis: s,
      style: r,
      wrap: u,
      ...c
    } = this.props, f = {
      style: {
        flexGrow: a,
        flexShrink: n,
        flexBasis: s,
        ...r
      },
      className: t === d.flexChild ? t : o()(d.flexChild, t),
      ...c
    };
    if (!u && "string" != typeof e && 1 === i.Children.count(e)) {
      let n = i.Children.only(e);
      return f.style = {
        ...f.style,
        ...n.props.style
      }, f.className = o()(n.props.className, t), i.cloneElement(n, f)
    }
    return (0, l.jsx)("div", {
      ...f,
      children: e
    })
  }
}
c(m, "defaultProps", {
  className: d.flexChild,
  style: {},
  wrap: !1
});
class S extends(s = i.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: a,
      align: s,
      wrap: i,
      shrink: r,
      grow: u,
      basis: c,
      style: f,
      gutter: E,
      ...h
    } = this.props, _ = {
      flexShrink: r,
      flexGrow: u,
      flexBasis: c,
      ...f
    };
    return (0, l.jsx)("div", {
      style: _,
      className: o()(d.flex, n, a, s, i, E, t),
      ...h,
      children: e
    })
  }
}
c(S, "Child", m), c(S, "Direction", f), c(S, "Align", _), c(S, "Justify", E), c(S, "Wrap", h), c(S, "Gutter", C), c(S, "defaultProps", {
  direction: f.HORIZONTAL,
  justify: E.START,
  align: _.STRETCH,
  wrap: h.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})