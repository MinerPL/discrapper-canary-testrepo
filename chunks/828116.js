"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("77078"),
  o = s("945330"),
  d = s("49111"),
  u = s("737614"),
  c = e => {
    let {
      className: t,
      tags: s,
      value: n,
      onRemoveTag: c,
      onAddTag: E,
      maxTaxLength: _,
      maxTags: I,
      disabled: T,
      placeholder: S,
      ...f
    } = e, [m, N] = l.useState(null != n ? n : ""), g = s.map((e, t) => (0, a.jsxs)("span", {
      className: i(u.tag, {
        [u.disabledTag]: T
      }),
      children: [e, !T && (0, a.jsx)(r.Clickable, {
        className: u.closeWrapper,
        onClick: () => c(t),
        children: (0, a.jsx)(o.default, {
          width: 16,
          height: 16,
          className: u.close
        })
      })]
    }, t)), h = l.useCallback(() => {
      let e = m.trim();
      if (0 !== e.length)(null == I || !(s.length >= I)) && (E(e), N(""))
    }, [m, I, E, s.length]), C = l.useCallback(e => {
      switch (e.keyCode) {
        case d.KeyboardKeys.BACKSPACE:
          0 === m.length && s.length > 0 && (e.preventDefault(), e.stopPropagation(), c(s.length - 1));
          break;
        case d.KeyboardKeys.ENTER:
        case d.KeyboardKeys.TAB:
        case d.KeyboardKeys.COMMA:
          e.preventDefault(), e.stopPropagation(), h()
      }
    }, [h, m.length, c, s.length]);
    return (0, a.jsxs)("div", {
      className: i(t, u.inputWrapper, {
        [u.disabled]: T
      }),
      children: [g, (0, a.jsx)(r.TextInput, {
        className: u.inputOuter,
        inputClassName: u.inputInner,
        ...f,
        value: m,
        onKeyDown: C,
        onChange: N,
        maxLength: _,
        disabled: T,
        onBlur: h,
        placeholder: S
      })]
    })
  }