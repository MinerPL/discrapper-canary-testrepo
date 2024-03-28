"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("285952"),
  o = s("546630"),
  d = s("794711");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class c extends l.PureComponent {
  render() {
    let {
      focused: e
    } = this.state, {
      value: t,
      placeholder: s,
      error: l,
      className: n,
      maxLength: u,
      autoFocus: c,
      prefix: E,
      disabled: _
    } = this.props;
    return (0, a.jsxs)(r.default, {
      align: r.default.Align.CENTER,
      justify: r.default.Justify.START,
      className: i()(o.prefixInput, n, {
        [o.focused]: e,
        [o.error]: l
      }),
      onClick: this.handleFocusInput,
      children: [(0, a.jsx)(r.default.Child, {
        grow: 0,
        className: o.prefixInputPrefix,
        children: E
      }), (0, a.jsx)(r.default.Child, {
        className: d.marginReset,
        children: (0, a.jsx)("input", {
          ref: this.setInputRef,
          className: o.prefixInputInput,
          value: t,
          placeholder: s,
          maxLength: u,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          autoFocus: c,
          disabled: _
        })
      })]
    })
  }
  constructor(e) {
    super(e), u(this, "_inputRef", void 0), u(this, "setInputRef", e => {
      this._inputRef = e
    }), u(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      t(e.currentTarget.value)
    }), u(this, "handleFocus", () => {
      this.setState({
        focused: !0
      })
    }), u(this, "handleBlur", () => {
      this.setState({
        focused: !1
      })
    }), u(this, "handleFocusInput", () => {
      null != this._inputRef && this._inputRef.focus()
    });
    let {
      autoFocus: t
    } = this.props;
    this.state = {
      focused: null != t && t
    }
  }
}
t.default = c