"use strict";
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(285952),
  o = t(809594),
  c = t(611273);

function d(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class u extends i.PureComponent {
  render() {
    let {
      focused: e
    } = this.state, {
      value: s,
      placeholder: t,
      error: i,
      className: l,
      maxLength: d,
      autoFocus: u,
      prefix: E,
      disabled: _
    } = this.props;
    return (0, n.jsxs)(r.Z, {
      align: r.Z.Align.CENTER,
      justify: r.Z.Justify.START,
      className: a()(o.prefixInput, l, {
        [o.focused]: e,
        [o.error]: i
      }),
      onClick: this.handleFocusInput,
      children: [(0, n.jsx)(r.Z.Child, {
        grow: 0,
        className: o.prefixInputPrefix,
        children: E
      }), (0, n.jsx)(r.Z.Child, {
        className: c.marginReset,
        children: (0, n.jsx)("input", {
          ref: this.setInputRef,
          className: o.prefixInputInput,
          value: s,
          placeholder: t,
          maxLength: d,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          autoFocus: u,
          disabled: _
        })
      })]
    })
  }
  constructor(e) {
    super(e), d(this, "_inputRef", void 0), d(this, "setInputRef", e => {
      this._inputRef = e
    }), d(this, "handleChange", e => {
      let {
        onChange: s
      } = this.props;
      s(e.currentTarget.value)
    }), d(this, "handleFocus", () => {
      this.setState({
        focused: !0
      })
    }), d(this, "handleBlur", () => {
      this.setState({
        focused: !1
      })
    }), d(this, "handleFocusInput", () => {
      null != this._inputRef && this._inputRef.focus()
    });
    let {
      autoFocus: s
    } = this.props;
    this.state = {
      focused: null != s && s
    }
  }
}
s.Z = u