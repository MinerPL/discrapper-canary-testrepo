"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("981631"),
  o = n("766406");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends l.Component {
  componentDidUpdate(e, t) {
    if (t.focused !== this.state.focused && this.state.focused) {
      var n;
      null === (n = this.inputRef.current) || void 0 === n || n.focus()
    }
    null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && c(this.props.value, this.props, this.state) && this.setState({
      value: this.props.value
    })
  }
  render() {
    let e;
    let {
      className: t,
      name: n,
      autoComplete: l,
      maxLen: s
    } = this.props, r = {
      position: "absolute",
      left: 0,
      width: "100%",
      opacity: 1
    };
    return this.state.focused ? e = {
      visibility: "hidden",
      pointerEvents: "none"
    } : r.opacity = 0, (0, a.jsx)("div", {
      className: i()(o.outer, t),
      children: (0, a.jsxs)("div", {
        className: o.container,
        children: [(0, a.jsx)("input", {
          type: "text",
          className: o.input,
          ref: this.inputRef,
          style: r,
          value: this.state.value,
          name: n,
          maxLength: s,
          autoComplete: l,
          onKeyPress: this.handleKeyPress,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }), (0, a.jsx)("div", {
          className: o.input,
          style: e,
          children: this.state.value
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "inputRef", l.createRef()), u(this, "state", {
      focused: !1,
      lastGoodValue: this.props.value,
      value: this.props.value
    }), u(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      this.setState({
        value: e.currentTarget.value
      }), null == t || t(e)
    }), u(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      this.setState({
        focused: !0,
        lastGoodValue: e.currentTarget.value
      }), null == t || t(e)
    }), u(this, "handleBlur", e => {
      if (c("", this.props, this.state)) {
        this.setState({
          focused: !1
        });
        let {
          onBlur: t
        } = this.props;
        null == t || t(e)
      } else this.setState({
        focused: !1,
        value: this.state.lastGoodValue
      })
    }), u(this, "handleKeyPress", e => {
      if (e.which === r.KeyboardKeys.ENTER) {
        var t;
        null === (t = this.inputRef.current) || void 0 === t || t.blur()
      }
    })
  }
}

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 ? arguments[2] : void 0,
    a = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
  return (null == t.minLen || !(a.length < t.minLen)) && (null == t.maxLen || !(a.length > t.maxLen)) && !0
}