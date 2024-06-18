"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(465670),
  c = t(981631),
  d = t(59596);
s.Z = e => {
  let {
    className: s,
    tags: t,
    value: l,
    onRemoveTag: u,
    onAddTag: E,
    maxTaxLength: _,
    maxTags: I,
    disabled: T,
    placeholder: N,
    ...m
  } = e, [S, h] = i.useState(null != l ? l : ""), g = t.map((e, s) => (0, n.jsxs)("span", {
    className: a()(d.tag, {
      [d.__invalid_disabledTag]: T
    }),
    children: [e, !T && (0, n.jsx)(r.Clickable, {
      className: d.closeWrapper,
      onClick: () => u(s),
      children: (0, n.jsx)(o.Z, {
        width: 16,
        height: 16,
        className: d.close
      })
    })]
  }, s)), x = i.useCallback(() => {
    let e = S.trim();
    if (0 !== e.length)(null == I || !(t.length >= I)) && (E(e), h(""))
  }, [S, I, E, t.length]), C = i.useCallback(e => {
    switch (e.keyCode) {
      case c.yXg.BACKSPACE:
        0 === S.length && t.length > 0 && (e.preventDefault(), e.stopPropagation(), u(t.length - 1));
        break;
      case c.yXg.ENTER:
      case c.yXg.TAB:
      case c.yXg.COMMA:
        e.preventDefault(), e.stopPropagation(), x()
    }
  }, [x, S.length, u, t.length]);
  return (0, n.jsxs)("div", {
    className: a()(s, d.inputWrapper, {
      [d.disabled]: T
    }),
    children: [g, (0, n.jsx)(r.TextInput, {
      className: d.inputOuter,
      inputClassName: d.inputInner,
      ...m,
      value: S,
      onKeyDown: C,
      onChange: h,
      maxLength: _,
      disabled: T,
      onBlur: x,
      placeholder: N
    })]
  })
}