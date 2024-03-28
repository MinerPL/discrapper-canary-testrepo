"use strict";
s.r(t);
var a, l = s("735250"),
  n = s("470079"),
  r = s("803997"),
  o = s.n(r),
  i = s("846519"),
  d = s("481060"),
  c = s("581874"),
  u = s("572004"),
  f = s("689938"),
  C = s("932207");

function h(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class m extends(a = n.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    let {
      isVertical: e,
      value: t,
      text: s,
      className: a,
      inputClassName: n
    } = this.props, {
      mode: r
    } = this.state, i = r === c.default.Modes.SUCCESS ? f.default.Messages.COPIED : s;
    return e ? (0, l.jsxs)("div", {
      className: o()(a, r),
      children: [(0, l.jsx)(d.TextInput, {
        value: t,
        inputClassName: n
      }), (0, l.jsx)(d.Button, {
        className: C.button,
        onClick: this.handleCopy,
        size: d.Button.Sizes.MIN,
        color: this.getVerticalButtonColor(r),
        look: d.Button.Looks.FILLED,
        children: i
      })]
    }) : (0, l.jsx)(c.default, {
      ...this.props,
      onCopy: this.handleCopy,
      mode: r,
      text: i
    })
  }
  handleCopy() {
    let {
      onCopy: e,
      value: t,
      delay: s
    } = this.props, a = (0, u.copy)(t);
    this.setState({
      mode: a ? c.default.Modes.SUCCESS : c.default.Modes.ERROR
    }), this._timeout.start(s, () => this.setState({
      mode: c.default.Modes.DEFAULT
    })), null == e || e()
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case c.default.Modes.SUCCESS:
        return d.Button.Colors.GREEN;
      case c.default.Modes.ERROR:
        return d.Button.Colors.RED;
      default:
        return d.Button.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), h(this, "_timeout", void 0), this.state = {
      mode: c.default.Modes.DEFAULT
    }, this._timeout = new i.Timeout, this.handleCopy = this.handleCopy.bind(this)
  }
}
h(m, "defaultProps", {
  isVertical: !1,
  delay: 300
}), t.default = m