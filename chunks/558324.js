"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("465670"),
  d = s("981631"),
  u = s("901075");
t.default = e => {
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
    className: i()(u.tag, {
      [u.__invalid_disabledTag]: T
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
    className: i()(t, u.inputWrapper, {
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