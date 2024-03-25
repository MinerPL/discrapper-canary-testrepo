"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var n = s("37983"),
  l = s("884691"),
  o = s("414456"),
  a = s.n(o),
  r = s("862337"),
  i = s("77078"),
  u = s("920700"),
  c = s("306160"),
  d = s("782340"),
  E = s("206887");
class f extends l.PureComponent {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    let {
      isVertical: e,
      value: t,
      text: s,
      className: l,
      inputClassName: o
    } = this.props, {
      mode: r
    } = this.state, c = r === u.default.Modes.SUCCESS ? d.default.Messages.COPIED : s;
    return e ? (0, n.jsxs)("div", {
      className: a(l, r),
      children: [(0, n.jsx)(i.TextInput, {
        value: t,
        inputClassName: o
      }), (0, n.jsx)(i.Button, {
        className: E.button,
        onClick: this.handleCopy,
        size: i.Button.Sizes.MIN,
        color: this.getVerticalButtonColor(r),
        look: i.Button.Looks.FILLED,
        children: c
      })]
    }) : (0, n.jsx)(u.default, {
      ...this.props,
      onCopy: this.handleCopy,
      mode: r,
      text: c
    })
  }
  handleCopy() {
    let {
      onCopy: e,
      value: t,
      delay: s
    } = this.props, n = (0, c.copy)(t);
    this.setState({
      mode: n ? u.default.Modes.SUCCESS : u.default.Modes.ERROR
    }), this._timeout.start(s, () => this.setState({
      mode: u.default.Modes.DEFAULT
    })), null == e || e()
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case u.default.Modes.SUCCESS:
        return i.Button.Colors.GREEN;
      case u.default.Modes.ERROR:
        return i.Button.Colors.RED;
      default:
        return i.Button.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), this.state = {
      mode: u.default.Modes.DEFAULT
    }, this._timeout = new r.Timeout, this.handleCopy = this.handleCopy.bind(this)
  }
}
f.defaultProps = {
  isVertical: !1,
  delay: 300
};
var _ = f