"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("481060"),
  r = s("2150"),
  o = s("731526");

function d(e) {
  let {
    title: t,
    description: s,
    action: l,
    highlightColor: d = r.HighlightColors.NONE,
    selected: u = !1,
    subsection: c = null,
    onClick: E,
    className: _,
    disabled: I
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(o.container, _),
    children: [(0, a.jsx)(i.Clickable, {
      className: n()(o.clickableContainer, {
        [o.noAction]: null == E,
        [o.disabled]: I
      }, _),
      onClick: I ? void 0 : E,
      children: (0, a.jsxs)("div", {
        className: n()(o.backgroundModifierContainer, o[d], {
          [o.selected]: u,
          [o.disabled]: I,
          [o.noAction]: null == E
        }),
        children: [(0, a.jsxs)("div", {
          className: o.settingsDescriptionContainer,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: t
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            className: o.description,
            children: s
          })]
        }), (0, a.jsx)("div", {
          className: o.__invalid_action,
          children: l
        })]
      })
    }), null != c && (0, a.jsx)("div", {
      className: o.subsectionContainer,
      children: c
    })]
  })
}