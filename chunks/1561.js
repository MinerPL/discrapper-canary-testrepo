"use strict";
n.d(t, {
  P: function() {
    return c
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(532712),
  u = n(84735),
  _ = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends(i = s.Component) {
  renderNonInteractive() {
    let {
      tag: e,
      focusProps: t,
      innerRef: n,
      onClick: i,
      role: r,
      tabIndex: o,
      ...a
    } = this.props;
    return s.createElement(e, {
      ref: this.setRef,
      ...a
    })
  }
  renderInner() {
    let {
      tag: e,
      onClick: t,
      className: n,
      children: i,
      focusProps: r,
      innerRef: o,
      ...l
    } = this.props;
    return null == t ? s.createElement(e, {
      ref: this.setRef,
      className: a()(n),
      ...l
    }, i) : s.createElement(e, {
      onClick: t,
      ref: this.setRef,
      onKeyPress: this.handleKeyPress,
      className: a()(n),
      ...l
    }, i)
  }
  render() {
    return this.context ? this.renderNonInteractive() : (0, r.jsx)(u.t, {
      ...this.props.focusProps,
      children: this.renderInner()
    })
  }
  constructor(...e) {
    super(...e), d(this, "ref", void 0), d(this, "handleKeyPress", e => {
      let {
        onClick: t,
        href: n,
        onKeyPress: i,
        ignoreKeyPress: r
      } = this.props;
      !e.repeat && (!r && null != t && null != this.ref && (e.charCode === _.yXg.SPACE || e.charCode === _.yXg.ENTER) && (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != i && i(e))
    }), d(this, "setRef", e => {
      this.ref = e;
      let {
        innerRef: t
      } = this.props;
      null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e))
    })
  }
}
d(c, "contextType", l.g), d(c, "defaultProps", {
  tag: "div",
  role: "button",
  tabIndex: 0
})