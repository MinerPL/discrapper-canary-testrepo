"use strict";
s.r(t), s("47120");
var l, a = s("735250"),
  n = s("470079"),
  i = s("803997"),
  r = s.n(i),
  o = s("153066"),
  d = s("160086");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let c = {
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
  },
  h = {
    DEFAULT: "default",
    STATIC: "static"
  };
class m extends(l = n.PureComponent) {
  render() {
    let {
      size: e,
      src: t,
      srcHover: s,
      className: l,
      ...n
    } = this.props, {
      hovered: i
    } = this.state, u = this.getMode();
    return (0, a.jsx)("button", {
      className: r()((0, o.getClass)(d, "iconButton", u), l, e),
      style: {
        backgroundImage: "url('".concat(i && null != s ? s : t, "')")
      },
      onMouseEnter: this.handleHover,
      onFocus: this.handleHover,
      onMouseLeave: this.handleBlur,
      onBlur: this.handleBlur,
      ...n
    })
  }
  constructor(...e) {
    super(...e), u(this, "state", {
      hovered: !1
    }), u(this, "getMode", () => null != this.props.srcHover ? h.STATIC : h.DEFAULT), u(this, "handleHover", e => {
      let {
        onMouseEnter: t
      } = this.props;
      null == t || t(e), !this.state.hovered && this.setState({
        hovered: !0
      })
    }), u(this, "handleBlur", e => {
      let {
        onMouseLeave: t
      } = this.props;
      null == t || t(e), this.state.hovered && this.setState({
        hovered: !1
      })
    })
  }
}
u(m, "Sizes", c), u(m, "defaultProps", {
  size: c.MEDIUM,
  disabled: !1
}), t.default = m