"use strict";
n.r(t), n.d(t, {
  Flex: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("421898"),
  i = n.n(l),
  r = n("782600"),
  o = n("983663");
let u = {
    VERTICAL: r.flexVertical,
    HORIZONTAL: r.flexHorizontal,
    HORIZONTAL_REVERSE: r.flexHorizontalReverse
  },
  d = {
    START: r.flexJustifyStart,
    END: r.flexJustifyEnd,
    CENTER: r.flexJustifyCenter,
    BETWEEN: r.flexJustifyBetween,
    AROUND: r.flexJustifyAround
  },
  c = {
    NO_WRAP: r.flexNowrap,
    WRAP: r.flexWrap,
    WRAP_REVERSE: r.flexWrapReverse
  },
  f = {
    START: r.flexAlignStart,
    END: r.flexAlignEnd,
    CENTER: r.flexAlignCenter,
    STRETCH: r.flexAlignStretch
  },
  E = {
    SMALL: o.flexGutterSmall,
    LARGE: o.flexGutterLarge
  };
class h extends s.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      shrink: n,
      grow: l,
      basis: r,
      style: u,
      wrap: d,
      ...c
    } = this.props, f = {
      style: {
        flexGrow: l,
        flexShrink: n,
        flexBasis: r,
        ...u
      },
      className: t === o.flexChild ? t : i(o.flexChild, t),
      ...c
    };
    if (!d && "string" != typeof e && 1 === s.Children.count(e)) {
      let n = s.Children.only(e);
      return f.style = {
        ...f.style,
        ...n.props.style
      }, f.className = i(n.props.className, t), s.cloneElement(n, f)
    }
    return (0, a.jsx)("div", {
      ...f,
      children: e
    })
  }
}
h.defaultProps = {
  className: o.flexChild,
  style: {},
  wrap: !1
};
class _ extends s.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: s,
      align: l,
      wrap: r,
      shrink: u,
      grow: d,
      basis: c,
      style: f,
      gutter: E,
      ...h
    } = this.props, _ = {
      flexShrink: u,
      flexGrow: d,
      flexBasis: c,
      ...f
    };
    return (0, a.jsx)("div", {
      style: _,
      className: i(o.flex, n, s, l, r, E, t),
      ...h,
      children: e
    })
  }
}
_.Child = h, _.Direction = u, _.Align = f, _.Justify = d, _.Wrap = c, _.Gutter = E, _.defaultProps = {
  direction: u.HORIZONTAL,
  justify: d.START,
  align: f.STRETCH,
  wrap: c.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
}