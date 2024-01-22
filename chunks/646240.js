"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  u = n("381546"),
  o = n("229915"),
  c = n("782340"),
  d = n("913893");
class f extends s.Component {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: s,
      inputClassName: r,
      className: f,
      onChange: h,
      onFocus: p,
      onBlur: I,
      onKeyPress: v,
      autoComplete: E,
      forwardedRef: C,
      closeIconClassName: _,
      searchIconClassName: T,
      cta: m
    } = this.props, S = null != s && s.length > 0, A = null != C ? C : this._textInputRef;
    return (0, i.jsx)(a.FocusRing, {
      focusTarget: A,
      ringTarget: this._containerRef,
      children: (0, i.jsxs)("div", {
        className: l(d.searchBox, f),
        ref: this._containerRef,
        children: [(0, i.jsx)(a.TextInput, {
          inputRef: A,
          focusProps: {
            enabled: !1
          },
          name: "search",
          maxLength: 100,
          className: d.searchBoxInputWrapper,
          inputClassName: l(d.searchBoxInput, r),
          onChange: h,
          onFocus: p,
          onBlur: I,
          onKeyPress: v,
          value: S ? s : "",
          placeholder: n,
          autoFocus: e,
          "aria-label": t,
          autoComplete: E ? "on" : "off"
        }), null != m ? (0, i.jsx)(a.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: d.cta,
          children: m
        }) : null, S ? (0, i.jsx)(a.Clickable, {
          onClick: this.handleClear,
          className: d.clear,
          "aria-label": c.default.Messages.SEARCH_CLEAR,
          children: (0, i.jsx)(u.default, {
            className: l(d.clearIcon, _)
          })
        }) : (0, i.jsx)(o.default, {
          className: l(d.searchIcon, T),
          "aria-label": c.default.Messages.SEARCH
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this._textInputRef = s.createRef(), this._containerRef = s.createRef(), this.handleClear = () => {
      let {
        onClear: e,
        forwardedRef: t
      } = this.props, {
        current: n
      } = null != t ? t : this._textInputRef;
      null != n && n.focus(), null != e && e()
    }
  }
}
f.defaultProps = {
  autoComplete: !1
};
var h = s.forwardRef((e, t) => (0, i.jsx)(f, {
  forwardedRef: t,
  ...e
}))