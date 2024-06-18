"use strict";
n.d(t, {
  K: function() {
    return O
  }
}), n(653041);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(772848),
  u = n(84735),
  _ = n(15127),
  d = n(766646),
  c = n(993365),
  E = n(179240),
  I = n(689938),
  T = n(709944),
  h = n(12349),
  S = n(842648);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = (0, l.Z)(),
  A = (0, l.Z)(),
  m = (0, l.Z)();
class O extends(i = s.Component) {
  getPaddingRight() {
    let {
      maxLength: e,
      showCharacterCountFullPadding: t
    } = this.props;
    if (null == e) return 10;
    let n = "".concat(e).length;
    return t && (n += "".concat(e, " / ").length), 7.23 * n + 10
  }
  getCharsLeftLength() {
    let {
      maxLength: e,
      value: t
    } = this.props;
    return null == e ? null : e - (null != t ? t.length : 0)
  }
  getIsOverflowing() {
    let e = this.getCharsLeftLength();
    return null != e && e < 0
  }
  getIsUnderflowing() {
    let {
      minLength: e,
      value: t
    } = this.props;
    return null != e && (null != t ? t.length : 0) < e
  }
  renderCharacterCount() {
    if (this.props.showCharacterCount) {
      var e;
      let {
        value: t,
        maxLength: n
      } = this.props;
      return (0, r.jsxs)("div", {
        className: a()(T.maxLength, {
          [T.errorOverflow]: this.hasError()
        }),
        "aria-hidden": "true",
        children: [null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0, " ", null != n && "/ ".concat(n)]
      })
    }
    return null
  }
  renderMaxLength() {
    if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
    let e = this.getCharsLeftLength();
    return null == e ? null : (0, r.jsx)("div", {
      className: a()(T.maxLength, {
        [T.errorOverflow]: e < 0
      }),
      "aria-hidden": "true",
      children: e
    })
  }
  hasError() {
    return null != this.props.error || null != this.context.error || !1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1)
  }
  getErrorMessage() {
    let {
      error: e,
      maxLength: t,
      minLength: n
    } = this.props, i = this.getIsOverflowing() ? I.Z.Messages.MAXIMUM_LENGTH_ERROR.format({
      maxLength: t
    }) : null, r = this.getIsUnderflowing() ? I.Z.Messages.MINIMUM_LENGTH_ERROR.format({
      minLength: n
    }) : null;
    return null != e && e.length < 1 || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : r
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == e ? null : (0, r.jsx)(c.x, {
      id: N,
      variant: "text-xs/normal",
      color: "text-danger",
      className: T.errorMessage,
      children: e
    })
  }
  render() {
    var e, t;
    let {
      disabled: n,
      value: i,
      placeholder: s,
      autoFocus: o,
      minLength: l,
      maxLength: _,
      allowOverflow: c,
      spellCheck: f,
      resizeable: N,
      className: O,
      id: R,
      rows: C,
      flex: p,
      autosize: g,
      required: L,
      onInvalid: v,
      inputRef: D
    } = this.props, M = g ? E.l : "textarea", P = this.hasError(), y = null !== (t = this.props["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId, U = this.getAriaDescribedBy();
    return (0, r.jsxs)("div", {
      className: a()(h.inputWrapper, {
        [T.flex]: p
      }),
      children: [(0, r.jsxs)("div", {
        className: a()(T.inputMaxLength, {
          [T.flex]: p
        }),
        children: [(0, r.jsx)(u.t, {
          children: (0, r.jsx)(M, {
            type: "text",
            className: a()(h.inputDefault, T.textArea, S.scrollbarDefault, O, {
              [h.error]: P,
              [h.disabled]: n,
              [T.resizeable]: N
            }),
            "aria-labelledby": y,
            "aria-describedby": U,
            "aria-invalid": P,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: R,
            disabled: n,
            placeholder: s,
            value: i,
            autoFocus: o,
            minLength: l,
            maxLength: c ? void 0 : _,
            spellCheck: f,
            required: L,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: v,
            rows: C,
            ref: D
          })
        }), null != l && (0, r.jsx)(d.n, {
          id: A,
          children: I.Z.Messages.MINIMUM_LENGTH.format({
            minLength: l
          })
        }), null != _ && (0, r.jsx)(d.n, {
          id: m,
          children: I.Z.Messages.MAXIMUM_LENGTH.format({
            maxLength: _
          })
        }), this.renderCharacterCount(), this.renderMaxLength()]
      }), this.renderErrorMessage()]
    })
  }
  constructor(e) {
    var t;
    super(e), f(this, "getAriaDescribedBy", () => {
      var e;
      let {
        maxLength: t,
        minLength: n,
        error: i
      } = this.props, r = [], s = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
      return null != s && r.push(s), null != i ? r.push(N) : (null != t && r.push(m), null != n && r.push(A)), r.length > 0 ? r.join(" ") : void 0
    }), f(this, "onChange", e => {
      let {
        onChange: t,
        name: n
      } = this.props;
      null == t || t(e.currentTarget.value, n), this.setState({
        dirty: !0
      })
    }), f(this, "onFocus", e => {
      let {
        onFocus: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }), f(this, "onBlur", e => {
      let {
        onBlur: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }), f(this, "onKeyDown", e => {
      let {
        onKeyDown: t
      } = this.props;
      null == t || t(e)
    }), this.state = {
      dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
    }
  }
}
f(O, "contextType", _.q3), f(O, "defaultProps", {
  name: "",
  disabled: !1,
  placeholder: "",
  autoFocus: !1,
  resizeable: !1,
  flex: !1,
  autosize: !1,
  rows: 3,
  allowOverflow: !1
})