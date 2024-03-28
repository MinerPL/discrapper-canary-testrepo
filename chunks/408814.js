"use strict";
n.r(t), n("47120");
var l, r = n("735250"),
  a = n("470079"),
  o = n("803997"),
  u = n.n(o),
  i = n("481060"),
  s = n("696202"),
  c = n("664800"),
  d = n("689938"),
  _ = n("782613");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends(l = a.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: l,
      inputClassName: a,
      className: o,
      onChange: p,
      onFocus: f,
      onBlur: E,
      onKeyPress: I,
      autoComplete: S,
      forwardedRef: A,
      closeIconClassName: T,
      searchIconClassName: N,
      cta: g
    } = this.props, m = null != l && l.length > 0, C = null != A ? A : this._textInputRef;
    return (0, r.jsx)(i.FocusRing, {
      focusTarget: C,
      ringTarget: this._containerRef,
      children: (0, r.jsxs)("div", {
        className: u()(_.searchBox, o),
        ref: this._containerRef,
        children: [(0, r.jsx)(i.TextInput, {
          inputRef: C,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: _.searchBoxInputWrapper,
          inputClassName: u()(_.searchBoxInput, a),
          onChange: p,
          onFocus: f,
          onBlur: E,
          onKeyPress: I,
          value: m ? l : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: S ? "on" : "off"
        }), null != g ? (0, r.jsx)(i.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: _.cta,
          children: g
        }) : null, m ? (0, r.jsx)(i.Clickable, {
          onClick: this.handleClear,
          className: _.clear,
          "aria-label": d.default.Messages.SEARCH_CLEAR,
          children: (0, r.jsx)(s.default, {
            className: u()(_.clearIcon, T)
          })
        }) : (0, r.jsx)(c.default, {
          className: u()(_.searchIcon, N),
          "aria-label": d.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "_textInputRef", a.createRef()), p(this, "_containerRef", a.createRef()), p(this, "handleClear", () => {
      let {
        onClear: e,
        forwardedRef: t
      } = this.props, {
        current: n
      } = null != t ? t : this._textInputRef;
      null != n && n.focus(), null != e && e()
    })
  }
}
p(f, "defaultProps", {
  autoComplete: !1
}), t.default = a.forwardRef((e, t) => (0, r.jsx)(f, {
  forwardedRef: t,
  ...e
}))