"use strict";
n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(696202),
  _ = n(664800),
  d = n(689938),
  c = n(318096);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends(i = s.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: i,
      inputClassName: s,
      className: o,
      onChange: E,
      onFocus: I,
      onBlur: T,
      onKeyPress: h,
      autoComplete: S,
      forwardedRef: f,
      closeIconClassName: N,
      searchIconClassName: A,
      cta: m
    } = this.props, O = null != i && i.length > 0, R = null != f ? f : this._textInputRef;
    return (0, r.jsx)(l.FocusRing, {
      focusTarget: R,
      ringTarget: this._containerRef,
      children: (0, r.jsxs)("div", {
        className: a()(c.searchBox, o),
        ref: this._containerRef,
        children: [(0, r.jsx)(l.TextInput, {
          inputRef: R,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: c.searchBoxInputWrapper,
          inputClassName: a()(c.searchBoxInput, s),
          onChange: E,
          onFocus: I,
          onBlur: T,
          onKeyPress: h,
          value: O ? i : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: S ? "on" : "off"
        }), null != m ? (0, r.jsx)(l.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: c.cta,
          children: m
        }) : null, O ? (0, r.jsx)(l.Clickable, {
          onClick: this.handleClear,
          className: c.clear,
          "aria-label": d.Z.Messages.SEARCH_CLEAR,
          children: (0, r.jsx)(u.Z, {
            className: a()(c.clearIcon, N)
          })
        }) : (0, r.jsx)(_.Z, {
          className: a()(c.searchIcon, A),
          "aria-label": d.Z.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "_textInputRef", s.createRef()), E(this, "_containerRef", s.createRef()), E(this, "handleClear", () => {
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
E(I, "defaultProps", {
  autoComplete: !1
}), t.Z = s.forwardRef((e, t) => (0, r.jsx)(I, {
  forwardedRef: t,
  ...e
}))