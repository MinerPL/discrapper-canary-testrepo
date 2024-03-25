"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  o = a("418009"),
  i = a("77078"),
  u = a("95689"),
  d = a("100300"),
  c = a("782340"),
  E = a("563778");

function _(e) {
  let {
    label: t,
    isSelected: a,
    onClick: n,
    children: s
  } = e, o = (0, i.useRadioItem)({
    isSelected: a,
    label: t
  });
  return (0, l.jsx)(i.Clickable, {
    ...o,
    onClick: n,
    className: r(E.option, a && E.optionSelected),
    children: s
  })
}
var A = function(e) {
  let {
    selectedLayoutType: t,
    onSelectedLayoutType: a
  } = e, s = (0, i.useRadioGroup)({
    orientation: "horizontal"
  }), r = n.useMemo(() => [{
    name: o.PollLayoutTypes.DEFAULT,
    label: c.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
    icon: d.default
  }, {
    name: o.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
    label: c.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
    icon: u.default
  }], []), A = e => {
    a(e)
  };
  return (0, l.jsx)("div", {
    className: E.container,
    "aria-label": c.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
    ...s,
    children: r.map(e => {
      let a = e.icon;
      return (0, l.jsx)(_, {
        label: e.label,
        isSelected: e.name === t,
        onClick: () => A(e.name),
        children: (0, l.jsx)(a, {
          className: E.icon
        })
      }, e.name)
    })
  })
}