"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(2150),
  o = t(655394);

function c(e) {
  let {
    title: s,
    description: t,
    action: i,
    highlightColor: c = r.q.NONE,
    selected: d = !1,
    subsection: u = null,
    onClick: E,
    className: _,
    disabled: I
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(o.container, _),
    children: [(0, n.jsx)(a.Clickable, {
      className: l()(o.clickableContainer, {
        [o.noAction]: null == E,
        [o.disabled]: I
      }, _),
      onClick: I ? void 0 : E,
      children: (0, n.jsxs)("div", {
        className: l()(o.backgroundModifierContainer, o[c], {
          [o.selected]: d,
          [o.disabled]: I,
          [o.noAction]: null == E
        }),
        children: [(0, n.jsxs)("div", {
          className: o.settingsDescriptionContainer,
          children: [(0, n.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: s
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            className: o.description,
            children: t
          })]
        }), (0, n.jsx)("div", {
          className: o.__invalid_action,
          children: i
        })]
      })
    }), null != u && (0, n.jsx)("div", {
      className: o.subsectionContainer,
      children: u
    })]
  })
}