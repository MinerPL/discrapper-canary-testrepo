"use strict";
n.d(t, {
  E: function() {
    return f
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(1561),
  u = n(84735),
  _ = n(922770),
  d = n(465670),
  c = n(664800),
  E = n(689938),
  I = n(464526);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = Object.freeze({
    SMALL: I.small,
    MEDIUM: I.medium,
    LARGE: I.large
  }),
  S = e => {
    let {
      hasContent: t,
      onClear: n,
      className: i,
      isLoading: o,
      size: u = h.SMALL
    } = e;
    return (0, r.jsx)(l.P, {
      className: a()(i, I.iconLayout, u, {
        [I.pointer]: t
      }),
      onClick: e => {
        e.stopPropagation(), null != n && n(e)
      },
      tabIndex: t ? 0 : -1,
      "aria-hidden": !t,
      onMouseDown: e => {
        e.preventDefault(), e.stopPropagation()
      },
      children: (0, r.jsx)("div", {
        className: I.iconContainer,
        children: o ? (0, r.jsx)(_.$, {
          type: _.$.Type.SPINNING_CIRCLE,
          className: a()(I.icon, I.visible)
        }) : (0, r.jsxs)(s.Fragment, {
          children: [(0, r.jsx)(c.Z, {
            className: a()(I.icon, {
              [I.visible]: !t
            }),
            "aria-label": E.Z.Messages.SEARCH
          }), (0, r.jsx)(d.Z, {
            className: a()(I.clear, {
              [I.visible]: t
            }),
            "aria-label": E.Z.Messages.CLEAR
          })]
        })
      })
    })
  };
S.Sizes = h;
class f extends(i = s.PureComponent) {
  focus() {
    let {
      current: e
    } = this.inputRef;
    null == e || e.focus()
  }
  blur() {
    let {
      current: e
    } = this.inputRef;
    null == e || e.blur()
  }
  render() {
    let {
      query: e,
      autoFocus: t,
      onClear: n,
      className: i,
      placeholder: s = E.Z.Messages.SEARCH,
      iconClassName: o,
      onKeyDown: l,
      onKeyUp: _,
      onKeyPress: d,
      isLoading: c,
      size: T,
      disabled: h,
      onChange: f,
      onBlur: N,
      onFocus: A,
      autoComplete: m,
      inputProps: O,
      hideSearchIcon: R,
      "aria-label": C = E.Z.Messages.SEARCH,
      ...p
    } = this.props;
    return (0, r.jsx)(u.t, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, r.jsx)("div", {
        className: a()(i, I.container, T, {
          [I.disabled]: h
        }),
        ref: this.containerRef,
        ...p,
        children: (0, r.jsxs)("div", {
          className: I.inner,
          children: [(0, r.jsx)("input", {
            ...O,
            onFocus: A,
            onBlur: N,
            className: I.input,
            value: e,
            onChange: this.handleOnChange,
            onKeyDown: l,
            onKeyUp: _,
            onKeyPress: d,
            placeholder: s,
            disabled: h,
            autoFocus: t,
            autoComplete: m,
            "aria-label": C,
            ref: this.inputRef
          }), !R && (0, r.jsx)(S, {
            size: T,
            hasContent: e.length > 0,
            onClear: n,
            className: o,
            isLoading: c
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), T(this, "inputRef", s.createRef()), T(this, "containerRef", s.createRef()), T(this, "handleOnChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    })
  }
}
T(f, "Sizes", h), T(f, "defaultProps", {
  size: h.SMALL,
  isLoading: !1,
  disabled: !1
})