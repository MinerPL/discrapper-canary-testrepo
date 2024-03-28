"use strict";
a.r(t);
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  r = a.n(s),
  o = a("263568"),
  i = a("481060"),
  u = a("84017"),
  d = a("282597"),
  c = a("689938"),
  E = a("163804");

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
    className: r()(E.option, a && E.optionSelected),
    children: s
  })
}
t.default = function(e) {
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